// GitHub Pages has no rewrite rules. Copy the built SPA shell to each
// client route so /privacy, /terms, and /press-kit return HTTP 200, and
// copy it to 404.html so any other path still boots the app (which renders
// the in-app not-found page). Asset URLs in the shell are absolute and
// include the Vite base, so they resolve from nested paths.
//
// The homepage static hero stays on dist/index.html only. Route copies drop
// it so /privacy and /terms are not a second copy of the marketing hero.
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { pathToFileURL } from "node:url";

export function stripStaticShell(html) {
  return html.replace(
    /[ \t]*<!-- static-shell:start -->[\s\S]*?<!-- static-shell:end -->\n?/,
    "",
  );
}

function writeSpaFallbacks() {
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

  const routeHtml = stripStaticShell(homepage);
  if (routeHtml.includes("static-shell:start") || routeHtml.includes("id=\"static-shell\"")) {
    console.error("Failed to strip the static hero from route copies.");
    process.exit(1);
  }

  const routes = ["privacy", "terms", "press-kit"];
  for (const route of routes) {
    const dir = `dist/${route}`;
    mkdirSync(dir, { recursive: true });
    writeFileSync(`${dir}/index.html`, routeHtml);
  }

  writeFileSync("dist/404.html", routeHtml);

  // GitHub Pages custom domain. nextweigh-site writes CNAME into dist the
  // same way (writeFileSync during the build) so the uploaded artifact
  // includes it. The file's only line is the apex domain.
  writeFileSync("dist/CNAME", "everydayperform.com\n");

  console.log(`SPA fallback written for ${routes.join(", ")} and 404.html`);
  console.log("CNAME written: everydayperform.com");
}

const isMain =
  process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href;

if (isMain) {
  writeSpaFallbacks();
}
