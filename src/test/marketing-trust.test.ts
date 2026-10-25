import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import {
  CARD_LINE,
  FREE_FAQ_ANSWER,
  HEALTH_DISCLAIMER,
  PRICING_TEASER,
  SIGNUP_URL,
} from "../content/marketing";
import { stripStaticShell } from "../../scripts/spa-fallback.mjs";

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
    expect(PRICING_TEASER).toContain("$119/yr");
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
    expect(footer).toContain('to="/privacy"');
    expect(footer).toContain('to="/terms"');
    expect(footer).toContain("support@everydayperform.com");
    expect(footer).toContain("TODO(Jared)");
    expect(footer).not.toContain("Everyday Performance LLC");
    expect(indexHtml).toContain("%BASE_URL%privacy");
    expect(indexHtml).toContain("%BASE_URL%terms");
    expect(privacy).toContain('href="mailto:support@everydayperform.com"');
    expect(terms).toContain('href="mailto:support@everydayperform.com"');
  });

  it("does not publish Vibe builder meta", () => {
    expect(indexHtml).toContain('content="Everyday Performance"');
    expect(indexHtml).not.toContain("@Vibe");
    expect(indexHtml).not.toContain("vibe.filesafe.space");
    expect(indexHtml).not.toContain("EP OS");
    expect(indexHtml).toContain("https://everydayperform.com/og.png");
  });

  it("keeps only the labeled founder note", () => {
    expect(home).toContain('role: "Founder"');
    expect(home).toContain("Jared C");
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
});
