import { readFileSync } from "node:fs";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { describe, expect, it, vi } from "vitest";
import Compare from "@/pages/Compare";
import Faq from "@/pages/Faq";
import Features from "@/pages/Features";
import Index from "@/pages/Index";
import { FAQ_ITEMS } from "@/content/faq";
import { HOME_DESCRIPTION, HOME_TITLE, INDEXABLE_PATHS, PAGES, absoluteUrl, homeJsonLd, sitemapXml } from "@/content/seo";
import { applyHead } from "../../scripts/spa-fallback.mjs";

const indexHtml = readFileSync("index.html", "utf8");
const robots = readFileSync("public/robots.txt", "utf8");
const app = readFileSync("src/App.tsx", "utf8");
const fallback = readFileSync("scripts/spa-fallback.mjs", "utf8");

const banned = ["Sarah Miller", "Marcus Thorne", "waitlist", "coming soon", "No credit card required", "MyFitnessPal", "Peloton", "Noom", "Strava"];

describe("public SEO", () => {
  it("points robots at the sitemap and keeps the apex canonical", () => {
    expect(robots).toContain("Sitemap: https://everydayperform.com/sitemap.xml");
    expect(robots).toContain("Allow: /");
    expect(absoluteUrl("/")).toBe("https://everydayperform.com/");
    expect(absoluteUrl("/features/")).toBe("https://everydayperform.com/features/");
    expect(absoluteUrl("/#pricing")).toBe("https://everydayperform.com/#pricing");
    for (const path of INDEXABLE_PATHS) {
      expect(sitemapXml()).toContain(`<loc>${absoluteUrl(path)}</loc>`);
    }
    expect(sitemapXml()).not.toContain("/404");
  });

  it("keeps homepage head copy aligned with the shared SEO source", () => {
    expect(indexHtml).toContain(`<title>${HOME_TITLE}</title>`);
    expect(indexHtml).toContain(`content="${HOME_DESCRIPTION}"`);
    expect(indexHtml).toContain('rel="canonical" href="https://everydayperform.com/"');
    const jsonLd = indexHtml.match(/<script type="application\/ld\+json" id="ld-json">([\s\S]*?)<\/script>/);
    expect(jsonLd).not.toBeNull();
    expect(JSON.parse(jsonLd?.[1] ?? "")).toEqual(homeJsonLd);
    expect(readFileSync("public/sitemap.xml", "utf8")).toBe(sitemapXml());
    expect(indexHtml).toContain("hero-bg.webp");
    expect(PAGES.privacy.path).toBe("/privacy/");
    expect(PAGES.terms.path).toBe("/terms/");
  });

  it("rewrites route heads without leaving the homepage canonical in place", () => {
    const html = applyHead(indexHtml, {
      title: PAGES.faq.title,
      description: PAGES.faq.description,
      url: absoluteUrl(PAGES.faq.path),
      jsonLd: { "@type": "FAQPage" },
    });
    expect(html).toContain(`<title>${PAGES.faq.title}</title>`);
    expect(html).toContain('rel="canonical" href="https://everydayperform.com/faq/"');
    expect(html).toContain('"@type":"FAQPage"');
    expect(html).not.toContain(`<title>${HOME_TITLE}</title>`);
    expect(html.match(/rel="canonical"/g)).toHaveLength(1);
  });

  it("registers every public route in the app and the Pages fallback", () => {
    for (const route of ["features", "how-it-works", "faq", "compare", "guides", "guides/five-minute-day", "press-kit", "privacy", "terms"]) {
      expect(app).toContain(`path="/${route}"`);
      expect(fallback).toContain(route);
    }
    expect(fallback).toContain("dist/sitemap.xml");
    expect(fallback).toContain("dist/CNAME");
    expect(fallback).toContain("everydayperform.com");
  });

  it("renders the homepage offer, member note, and pricing section", () => {
    class FakeObserver {
      observe() {}
      unobserve() {}
      disconnect() {}
      takeRecords() { return []; }
    }
    vi.stubGlobal("IntersectionObserver", FakeObserver);
    render(
      <MemoryRouter>
        <Index />
      </MemoryRouter>,
    );
    expect(screen.getByRole("heading", { level: 1, name: /busiest people alive/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2, name: /free and pro/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2, name: /a message from a user/i })).toBeInTheDocument();
    expect(screen.getAllByText(/Jared C/).length).toBeGreaterThan(0);
    expect(screen.getAllByText("Member").length).toBeGreaterThan(0);
    expect(screen.getAllByRole("link", { name: /create an account/i }).length).toBeGreaterThan(0);
    expect(document.body.textContent).not.toMatch(/sarah miller|marcus thorne|waitlist/i);
  });

  it("matches directory URLs that GitHub Pages redirects to", () => {
    render(
      <MemoryRouter initialEntries={["/features/"]}>
        <Routes>
          <Route path="/features" element={<div>features-ok</div>} />
          <Route path="*" element={<div>miss</div>} />
        </Routes>
      </MemoryRouter>,
    );
    expect(screen.getByText("features-ok")).toBeInTheDocument();
  });

  it("renders feature, FAQ, and compare pages without invented social proof", () => {
    render(
      <MemoryRouter>
        <Features />
        <Faq />
        <Compare />
      </MemoryRouter>,
    );

    expect(screen.getByRole("heading", { level: 1, name: "Features" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 1, name: /frequently asked questions/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 1, name: /how everyday performance compares/i })).toBeInTheDocument();
    expect(screen.getAllByText(/7-day Pro trial requires a card and auto-renews/i).length).toBeGreaterThan(0);
    expect(screen.getAllByRole("link", { name: /create an account/i }).length).toBeGreaterThan(0);

    const text = document.body.textContent ?? "";
    for (const phrase of banned) {
      expect(text.toLowerCase()).not.toContain(phrase.toLowerCase());
    }
    for (const item of FAQ_ITEMS) {
      expect(text).toContain(item.q);
    }
    expect(JSON.stringify(homeJsonLd)).not.toContain("https://app.everydayperform.com/signup");
    expect(JSON.stringify(homeJsonLd)).not.toContain("aggregateRating");
  });
});
