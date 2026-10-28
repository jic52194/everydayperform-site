// GitHub Pages has no rewrite rules. Copy the built SPA shell to each
// client route so /privacy, /terms, and /press-kit return HTTP 200, and
// copy it to 404.html so any other path still boots the app (which renders
// the in-app not-found page). Asset URLs in the shell are absolute and
// include the Vite base, so they resolve from nested paths.
//
// The homepage static hero stays on dist/index.html only. Route copies drop
// that hero. /privacy and /terms then get a static render of the legal page
// in #static-shell. Those URLs are otherwise an empty <div id="root">, so a
// module or stylesheet 404 (a Pages deploy briefly served HTML that pointed
// at removed asset hashes, and browsers cache that HTML) paints nothing:
// default white body, innerText length 0. The shell stays visible until React
// commits into #root. main.tsx removes it after that.
import { copyFileSync, existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

export function stripStaticShell(html) {
  return html.replace(
    /[ \t]*<!-- static-shell:start -->[\s\S]*?<!-- static-shell:end -->\n?/,
    "",
  );
}

export function buildRouteHtml(homepageHtml, bodyHtml) {
  const stripped = stripStaticShell(homepageHtml);
  if (stripped.includes("static-shell:start") || stripped.includes('id="static-shell"')) {
    throw new Error("Failed to strip the static hero from route copies.");
  }

  const shell = [
    "    <!-- static-shell:start -->",
    "    <style>",
    "      #static-shell { position: fixed; inset: 0; z-index: 30; overflow: auto; background: #050505; color: #f5f5f5; }",
    "      body:has(#root > *) #static-shell { display: none !important; }",
    "    </style>",
    `    <div id="static-shell">${bodyHtml}</div>`,
    "    <script>",
    "      (function () {",
    "        var id = location.hash.slice(1);",
    "        if (!id) return;",
    "        try { id = decodeURIComponent(id); } catch (e) {}",
    "        var el = document.getElementById(id);",
    "        var shell = document.getElementById('static-shell');",
    "        if (el && shell && shell.contains(el)) shell.scrollTop = Math.max(0, el.offsetTop - 128);",
    "      })();",
    "    </script>",
    "    <!-- static-shell:end -->",
  ].join("\n");

  const marker = '<div id="root"></div>';
  if (!stripped.includes(marker)) {
    throw new Error("Route shell is missing #root.");
  }
  return stripped.replace(marker, `${shell}\n    ${marker}`);
}

function escapeAttr(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;");
}

function upsertMeta(html, attr, key, content) {
  const tag = `<meta ${attr}="${key}" content="${escapeAttr(content)}" />`;
  const re = new RegExp(`<meta\\s+${attr}="${key}"\\s+content="[^"]*"\\s*/?>`);
  if (re.test(html)) return html.replace(re, tag);
  return html.replace("</head>", `    ${tag}\n  </head>`);
}

export function applyHead(html, meta) {
  let next = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeAttr(meta.title)}</title>`);
  next = upsertMeta(next, "name", "description", meta.description);
  next = upsertMeta(next, "property", "og:title", meta.title);
  next = upsertMeta(next, "property", "og:description", meta.description);
  next = upsertMeta(next, "property", "og:url", meta.url);
  next = upsertMeta(next, "property", "og:type", meta.ogType ?? "website");
  next = upsertMeta(next, "property", "og:site_name", meta.siteName ?? "Everyday Performance");
  next = upsertMeta(next, "property", "og:locale", "en_US");
  if (meta.image) {
    next = upsertMeta(next, "property", "og:image", meta.image);
    next = upsertMeta(next, "property", "og:image:alt", meta.imageAlt ?? "Everyday Performance OS");
    next = upsertMeta(next, "property", "og:image:width", meta.imageWidth ?? "1200");
    next = upsertMeta(next, "property", "og:image:height", meta.imageHeight ?? "630");
    next = upsertMeta(next, "name", "twitter:image", meta.image);
    next = upsertMeta(next, "name", "twitter:image:alt", meta.imageAlt ?? "Everyday Performance OS");
  }
  next = upsertMeta(next, "name", "twitter:card", "summary_large_image");
  next = upsertMeta(next, "name", "twitter:title", meta.title);
  next = upsertMeta(next, "name", "twitter:description", meta.description);
  next = upsertMeta(next, "name", "twitter:url", meta.url);
  next = upsertMeta(next, "name", "robots", meta.robots ?? "index, follow");
  const canonical = `<link rel="canonical" href="${escapeAttr(meta.url)}" />`;
  if (/<link rel="canonical" href="[^"]*"\s*\/?>/.test(next)) {
    next = next.replace(/<link rel="canonical" href="[^"]*"\s*\/?>/, canonical);
  } else {
    next = next.replace("</head>", `    ${canonical}\n  </head>`);
  }

  const json = meta.jsonLd
    ? `<script type="application/ld+json" id="ld-json">${JSON.stringify(meta.jsonLd).replace(/</g, "\\u003c")}</script>`
    : "";
  if (/<script type="application\/ld\+json" id="ld-json">[\s\S]*?<\/script>/.test(next)) {
    next = next.replace(/<script type="application\/ld\+json" id="ld-json">[\s\S]*?<\/script>/, json);
  } else if (json) {
    next = next.replace("</head>", `    ${json}\n  </head>`);
  }
  return next;
}

async function prerenderLegalPages() {
  process.env.NODE_ENV = "production";
  const esbuild = await import("esbuild");
  // Keep the bundle inside the project so Node can resolve react from here.
  // Deleted before the function returns so it is not part of the Pages artifact.
  const outfile = path.resolve("dist/.legal-prerender.mjs");
  const base = process.env.VITE_PAGES_BASE ?? "/";
  const baseUrl = base.endsWith("/") ? base : `${base}/`;

  try {
    await esbuild.build({
      entryPoints: ["scripts/prerender-legal.tsx"],
      bundle: true,
      platform: "node",
      format: "esm",
      outfile,
      packages: "external",
      jsx: "automatic",
      alias: { "@": path.resolve("src") },
      define: {
        "import.meta.env.BASE_URL": JSON.stringify(baseUrl),
      },
      logLevel: "silent",
    });

    const built = await import(pathToFileURL(outfile).href);
    const bodies = built.renderRouteBodies();
    return { bodies, ...built };
  } finally {
    rmSync(outfile, { force: true });
  }
}

async function writeSpaFallbacks() {
  const indexPath = "dist/index.html";
  if (!existsSync(indexPath)) {
    console.error("dist/index.html is missing. Run vite build first.");
    process.exit(1);
  }

  const homepage = readFileSync(indexPath, "utf8");
  if (!homepage.includes("static-shell:start")) {
    console.error("dist/index.html is missing the static hero shell.");
    process.exit(1);
  }

  const built = await prerenderLegalPages();
  const social = {
    siteName: built.SITE_NAME,
    image: built.OG_IMAGE,
    imageAlt: built.OG_IMAGE_ALT,
    imageWidth: built.OG_IMAGE_WIDTH,
    imageHeight: built.OG_IMAGE_HEIGHT,
  };
  const homeUrl = built.absoluteUrl("/");
  const homeHtml = applyHead(homepage, {
    title: built.PAGES.home.title,
    description: built.PAGES.home.description,
    url: homeUrl,
    ogType: built.PAGES.home.ogType,
    ...social,
    jsonLd: built.homeJsonLd,
  });
  if (!homeHtml.includes("static-shell:start") || !homeHtml.includes("Busiest People")) {
    console.error("Homepage shell lost its static hero.");
    process.exit(1);
  }
  writeFileSync(indexPath, homeHtml);

  const pageByDir = {
    features: built.PAGES.features,
    "how-it-works": built.PAGES.howItWorks,
    faq: built.PAGES.faq,
    compare: built.PAGES.compare,
    guides: built.PAGES.guides,
    "guides/five-minute-day": built.PAGES.fiveMinuteDay,
    "guides/habit-tracker-for-busy-parents": built.PAGES.busyParents,
    "guides/5-minute-workouts": built.PAGES.fiveMinuteWorkouts,
    "guides/workout-app-for-entrepreneurs": built.PAGES.entrepreneurs,
    "guides/workout-app-for-professionals": built.PAGES.professionals,
    "guides/habit-streak-app": built.PAGES.streakApp,
    "guides/how-to-stay-consistent": built.PAGES.consistency,
    "guides/habit-tracker-for-adhd": built.PAGES.adhd,
    "guides/home-workout-no-equipment": built.PAGES.noEquipment,
    "guides/accountability-fitness-app": built.PAGES.accountability,
    "press-kit": built.PAGES.press,
    privacy: built.PAGES.privacy,
    terms: built.PAGES.terms,
  };

  const bodies = {
    ...built.bodies,
    "press-kit": built.PRESS_STATIC_HTML,
  };

  for (const [route, page] of Object.entries(pageByDir)) {
    const html = applyHead(buildRouteHtml(homeHtml, bodies[route]), {
      title: page.title,
      description: page.description,
      url: built.absoluteUrl(page.path),
      ogType: page.ogType,
      ...social,
      jsonLd: built.JSON_LD_BY_PATH[page.path],
    });
    if (html.includes("Busiest People")) {
      console.error(`Route shell for /${route} still contains the homepage hero.`);
      process.exit(1);
    }
    if (!html.includes("<h1")) {
      console.error(`Route shell for /${route} is missing an h1.`);
      process.exit(1);
    }
    if ((route === "privacy" || route === "terms") && !html.includes("Last updated October 25, 2026")) {
      console.error(`Route shell for /${route} is missing the October 25 legal copy.`);
      process.exit(1);
    }
    if (route === "terms" && !html.includes('id="health-disclaimer"')) {
      console.error("Terms shell is missing #health-disclaimer.");
      process.exit(1);
    }
    const dir = `dist/${route}`;
    mkdirSync(dir, { recursive: true });
    writeFileSync(`${dir}/index.html`, html);
  }

  const notFound = applyHead(buildRouteHtml(homeHtml, built.NOT_FOUND_STATIC_HTML), {
    title: built.NOT_FOUND_META.title,
    description: built.NOT_FOUND_META.description,
    url: `${built.absoluteUrl("/").replace(/\/$/, "")}/404`,
    robots: built.NOT_FOUND_META.robots,
    ...social,
    jsonLd: null,
  });
  if (!notFound.includes("noindex") || notFound.includes("Busiest People")) {
    console.error("404 shell is missing noindex or still contains the homepage hero.");
    process.exit(1);
  }
  writeFileSync("dist/404.html", notFound);
  writeFileSync("dist/sitemap.xml", built.sitemapXml());
  writeFileSync("dist/llms.txt", built.llmsTxt());

  // Browsers request these automatically. A missing pair shows up as two
  // "Failed to load resource" 404s on every route, including /terms/.
  if (existsSync("public/logo.png")) {
    copyFileSync("public/logo.png", "dist/favicon.ico");
    copyFileSync("public/logo.png", "dist/apple-touch-icon.png");
    copyFileSync("public/logo.png", "dist/apple-touch-icon-precomposed.png");
  }

  // GitHub Pages custom domain. nextweigh-site writes CNAME into dist the
  // same way (writeFileSync during the build) so the uploaded artifact
  // includes it. The file's only line is the apex domain.
  writeFileSync("dist/CNAME", "everydayperform.com\n");

  console.log(`SPA fallback written for ${Object.keys(pageByDir).join(", ")} and 404.html`);
  console.log("CNAME written: everydayperform.com");
}

const isMain =
  process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href;

if (isMain) {
  writeSpaFallbacks().catch((error) => {
    console.error(error);
    process.exit(1);
  });
}
