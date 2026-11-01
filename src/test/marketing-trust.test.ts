import { existsSync, readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import {
  CARD_LINE,
  FREE_FAQ_ANSWER,
  HEALTH_DISCLAIMER,
  PRICING_TEASER,
  SIGNUP_URL,
} from "../content/marketing";
import { buildRouteHtml, stripStaticShell } from "../../scripts/spa-fallback.mjs";

const indexHtml = readFileSync("index.html", "utf8");
const home = readFileSync("src/pages/Index.tsx", "utf8");
const footer = readFileSync("src/components/PublicFooter.tsx", "utf8");
const terms = readFileSync("src/pages/Terms.tsx", "utf8");
const privacy = readFileSync("src/pages/Privacy.tsx", "utf8");

describe("marketing trust copy", () => {
  it("keeps the primary CTA on the app signup URL", () => {
    expect(SIGNUP_URL).toBe("https://app.everydayperform.com/signup");
    expect(indexHtml).toContain(`href="${SIGNUP_URL}"`);
    expect(home).toContain("SIGNUP_URL");
    expect(home).not.toContain("https://app.everydayperform.com/waitlist");
  });

  it("states free vs Pro pricing without a blanket no-card claim", () => {
    expect(PRICING_TEASER).toContain("$14.99/mo");
    expect(PRICING_TEASER).toContain("$149.99/yr");
    expect(PRICING_TEASER).toContain("Free to start, no card");
    expect(PRICING_TEASER).toContain("7-day Pro trial requires a card and auto-renews");
    expect(PRICING_TEASER).not.toContain("7-day trial in app");
    expect(CARD_LINE).toContain("auto-renews");
    expect(CARD_LINE).toContain("card");
    expect(FREE_FAQ_ANSWER).toContain("auto-renews");
    expect(indexHtml).toContain(PRICING_TEASER);
    expect(indexHtml).toContain(CARD_LINE);
    expect(home).toContain("PRICING_TEASER");
    expect(home).toContain("CARD_LINE");
    for (const source of [indexHtml, home, FREE_FAQ_ANSWER]) {
      expect(source).not.toContain("No credit card required");
      expect(source).not.toContain("Keep the free tier clear");
    }
  });

  it("puts a health disclaimer on the static hero and the terms page", () => {
    expect(indexHtml).toContain(HEALTH_DISCLAIMER);
    expect(indexHtml).toContain("terms#health-disclaimer");
    expect(home).toContain("HEALTH_DISCLAIMER");
    expect(home).toContain('to="/terms#health-disclaimer"');
    expect(terms).toContain('id="health-disclaimer"');
  });

  it("ships real privacy and terms links plus a support contact", () => {
    expect(footer).toContain("PAGES.privacy.path");
    expect(footer).toContain("PAGES.terms.path");
    expect(footer).toContain("support@everydayperform.com");
    expect(footer).toContain("Terms of Use");
    expect(footer).not.toContain("TODO");
    expect(footer).not.toContain("not on file");
    expect(footer).not.toContain("Everyday Performance LLC");
    expect(indexHtml).toContain("%BASE_URL%privacy");
    expect(indexHtml).toContain("%BASE_URL%terms");
    expect(indexHtml).toContain("Terms of Use");
    expect(indexHtml).not.toContain("TODO");
    expect(indexHtml).not.toContain("not on file");
    expect(privacy).toContain('href="mailto:support@everydayperform.com"');
    expect(terms).toContain('href="mailto:support@everydayperform.com"');
    expect(privacy).toContain("Last updated October 25, 2026");
    expect(terms).toContain("Last updated October 25, 2026");
    expect(privacy).toContain("Apple Health data");
    expect(privacy).toContain("Private accountability data");
    expect(privacy).toContain("We do not sell your personal information.");
    expect(terms).toContain("Accountability and crisis limitations");
    expect(terms).toContain("The optional Pro trial lasts 7 days, requires a card");
    expect(terms).toContain("Standard End User License Agreement");
    for (const source of [privacy, terms, footer, indexHtml]) {
      expect(source).not.toContain("June 4");
      expect(source).not.toContain("legal entity");
      expect(source).not.toContain("not on file");
      expect(source).not.toContain("TODO");
    }
  });

  it("does not publish Vibe builder meta", () => {
    expect(indexHtml).toContain('content="Everyday Performance"');
    expect(indexHtml).not.toContain("@Vibe");
    expect(indexHtml).not.toContain("vibe.filesafe.space");
    expect(indexHtml).not.toContain("EP OS");
    expect(indexHtml).toContain("https://everydayperform.com/og.png");
  });

  it("keeps Jared's note labeled Member under the user-message heading", () => {
    const note = home.slice(home.indexOf("{/* ── TESTIMONIALS"), home.indexOf("{/* ── FINAL CTA"));
    expect(note).toContain('title="A MESSAGE FROM A USER"');
    expect(note).not.toContain("eyebrow=");
    expect(note).not.toContain("accent=");
    expect(note).not.toContain("sub=");
    expect(note).toContain('name: "Jared C"');
    expect(note).toContain('role: "Member"');
    expect(note).toContain("Everyday Performance helped me keep a 14-day streak while traveling. The habits were simple enough to hold whether I was in Boston or Medellín.");
    expect(note).toContain("jared-c.jpg");
    expect(note).toContain("jared-c.mp4");
    expect(existsSync("public/jared-c.jpg")).toBe(true);
    expect(existsSync("public/jared-c.mp4")).toBe(true);
    expect(note).not.toContain("filesafe.space");
    expect(home).not.toContain("filesafe.space");
    expect(note.toLowerCase()).not.toContain("founder");
    expect(home).not.toContain("the founder's own note");
    expect(home).not.toContain('role: "Founder"');
    expect(home).not.toContain("Sarah Miller");
    expect(home).not.toContain("Marcus Thorne");
    expect(home).not.toContain("Remote Operations Lead");
    expect(home).not.toContain("waitlist");
  });

  it("strips the static hero from non-home route shells", () => {
    const stripped = stripStaticShell(indexHtml);
    expect(indexHtml).toContain("static-shell:start");
    expect(indexHtml).toContain('id="static-shell"');
    expect(stripped).not.toContain("static-shell");
    expect(stripped).not.toContain('id="static-shell"');
    expect(stripped).not.toContain(SIGNUP_URL);
    expect(stripped).toContain('<div id="root"></div>');
  });

  it("keeps October 25 terms text in the route shell when JavaScript has not painted", () => {
    const html = buildRouteHtml(
      indexHtml,
      '<h1>Terms of Use</h1><p>Last updated October 25, 2026</p><h2 id="health-disclaimer">Health information</h2>',
    );
    expect(html).toContain("Terms of Use");
    expect(html).toContain("Last updated October 25, 2026");
    expect(html).toContain('id="health-disclaimer"');
    expect(html).toContain('<div id="root"></div>');
    expect(html).toContain('id="static-shell"');
    expect(html).not.toContain("Busiest People");
    expect(html).not.toContain("A MESSAGE FROM A USER");
    expect(html).not.toContain(SIGNUP_URL);
  });
});
