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

    const { renderLegalPages } = await import(pathToFileURL(outfile).href);
    const { terms, privacy } = renderLegalPages();

    if (!terms.includes("Terms of Use") || !terms.includes("Last updated October 25, 2026") || !terms.includes('id="health-disclaimer"')) {
      throw new Error("Terms prerender is missing the October 25 copy.");
    }
    if (!privacy.includes("Privacy Policy") || !privacy.includes("Last updated October 25, 2026")) {
      throw new Error("Privacy prerender is missing the October 25 copy.");
    }
    if (/legal entity|mailing address|not on file/i.test(terms + privacy)) {
      throw new Error("Legal prerender invented an entity or address.");
    }

    return { terms, privacy };
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

  const emptyRouteHtml = stripStaticShell(homepage);
  if (emptyRouteHtml.includes("static-shell:start") || emptyRouteHtml.includes("id=\"static-shell\"")) {
    console.error("Failed to strip the static hero from route copies.");
    process.exit(1);
  }

  const legal = await prerenderLegalPages();
  const routeHtml = {
    privacy: buildRouteHtml(homepage, legal.privacy),
    terms: buildRouteHtml(homepage, legal.terms),
    "press-kit": emptyRouteHtml,
  };

  for (const [route, html] of Object.entries(routeHtml)) {
    if (route !== "press-kit" && (html.includes("Busiest People") || !html.includes("Last updated October 25, 2026"))) {
      console.error(`Route shell for /${route} is missing its legal page or still contains the homepage hero.`);
      process.exit(1);
    }
    const dir = `dist/${route}`;
    mkdirSync(dir, { recursive: true });
    writeFileSync(`${dir}/index.html`, html);
  }

  writeFileSync("dist/404.html", emptyRouteHtml);

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

  console.log(`SPA fallback written for ${Object.keys(routeHtml).join(", ")} and 404.html`);
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
