// GitHub Pages has no rewrite rules. Copy the built SPA shell to each
// client route so /privacy, /terms, and /press-kit return HTTP 200, and
// copy it to 404.html so any other path still boots the app (which renders
// the in-app not-found page). Asset URLs in the shell are absolute and
// include the Vite base, so they resolve from nested paths.
import { copyFileSync, existsSync, mkdirSync, writeFileSync } from "node:fs";

const indexPath = "dist/index.html";
if (!existsSync(indexPath)) {
  console.error("dist/index.html is missing. Run vite build first.");
  process.exit(1);
}

const routes = ["privacy", "terms", "press-kit"];
for (const route of routes) {
  const dir = `dist/${route}`;
  mkdirSync(dir, { recursive: true });
  copyFileSync(indexPath, `${dir}/index.html`);
}

copyFileSync(indexPath, "dist/404.html");

// GitHub Pages custom domain. nextweigh-site writes CNAME into dist the
// same way (writeFileSync during the build) so the uploaded artifact
// includes it. The file's only line is the apex domain.
writeFileSync("dist/CNAME", "everydayperform.com\n");

console.log(`SPA fallback written for ${routes.join(", ")} and 404.html`);
console.log("CNAME written: everydayperform.com");
