import { readFileSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

// Every route is a copy of index.html (see scripts/spa-fallback.mjs), so the
// tag in this one head covers every page, including new ones. Keep it there.
const GA4_ID = "G-QGNWK6DLF3";

describe("Google Analytics tag", () => {
  const html = readFileSync(path.resolve(__dirname, "../../index.html"), "utf8");
  const head = html.slice(0, html.indexOf("</head>"));

  it("loads gtag.js for the EP GA4 property in the shared head", () => {
    expect(head).toContain(`googletagmanager.com/gtag/js?id=${GA4_ID}`);
    expect(head).toContain(`gtag('config', '${GA4_ID}'`);
  });

  it("links the marketing site and the app for cross-domain tracking", () => {
    expect(head).toContain("app.everydayperform.com");
  });
});
