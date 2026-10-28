/* eslint-disable react-refresh/only-export-components -- Node prerender entry, not a Fast Refresh component. */
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { MemoryRouter } from "react-router-dom";
import Compare from "@/pages/Compare";
import Faq from "@/pages/Faq";
import Features from "@/pages/Features";
import FiveMinuteDay from "@/pages/FiveMinuteDay";
import BusyParents from "@/pages/BusyParents";
import FiveMinuteWorkouts from "@/pages/FiveMinuteWorkouts";
import Entrepreneurs from "@/pages/Entrepreneurs";
import Professionals from "@/pages/Professionals";
import StreakApp from "@/pages/StreakApp";
import Consistency from "@/pages/Consistency";
import Guides from "@/pages/Guides";
import HowItWorks from "@/pages/HowItWorks";
import Privacy from "@/pages/Privacy";
import Terms from "@/pages/Terms";

export {
  JSON_LD_BY_PATH,
  NOT_FOUND_META,
  NOT_FOUND_STATIC_HTML,
  OG_IMAGE,
  OG_IMAGE_ALT,
  OG_IMAGE_HEIGHT,
  OG_IMAGE_WIDTH,
  PAGES,
  PRESS_STATIC_HTML,
  SITE_NAME,
  SPA_ROUTE_DIRS,
  absoluteUrl,
  homeJsonLd,
  llmsTxt,
  sitemapXml,
} from "@/content/seo";

function render(Page: () => JSX.Element) {
  return renderToStaticMarkup(createElement(MemoryRouter, null, createElement(Page)));
}

export function renderRouteBodies() {
  const pages = {
    privacy: render(Privacy),
    terms: render(Terms),
    features: render(Features),
    "how-it-works": render(HowItWorks),
    faq: render(Faq),
    compare: render(Compare),
    guides: render(Guides),
    "guides/five-minute-day": render(FiveMinuteDay),
    "guides/habit-tracker-for-busy-parents": render(BusyParents),
    "guides/5-minute-workouts": render(FiveMinuteWorkouts),
    "guides/workout-app-for-entrepreneurs": render(Entrepreneurs),
    "guides/workout-app-for-professionals": render(Professionals),
    "guides/habit-streak-app": render(StreakApp),
    "guides/how-to-stay-consistent": render(Consistency),
  };

  if (!pages.terms.includes("Terms of Use") || !pages.terms.includes("Last updated October 25, 2026") || !pages.terms.includes('id="health-disclaimer"')) {
    throw new Error("Terms prerender is missing the October 25 copy.");
  }
  if (!pages.privacy.includes("Privacy Policy") || !pages.privacy.includes("Last updated October 25, 2026")) {
    throw new Error("Privacy prerender is missing the October 25 copy.");
  }
  const hasH1 = (html: string, text: string) => new RegExp(`<h1[^>]*>\\s*${text}\\s*</h1>`).test(html);
  if (!hasH1(pages.features, "Features")) throw new Error("Features prerender is missing its h1.");
  if (!hasH1(pages["how-it-works"], "How it works")) throw new Error("How it works prerender is missing its h1.");
  if (!hasH1(pages.faq, "Frequently asked questions")) throw new Error("FAQ prerender is missing its h1.");
  if (!hasH1(pages.compare, "How Everyday Performance compares")) throw new Error("Compare prerender is missing its h1.");
  if (!hasH1(pages.guides, "Guides")) throw new Error("Guides prerender is missing its h1.");
  if (!hasH1(pages["guides/five-minute-day"], "A five-minute day")) throw new Error("Guide prerender is missing its h1.");
  if (!hasH1(pages["guides/habit-tracker-for-busy-parents"], "Habit tracker for busy parents")) throw new Error("Busy-parents guide prerender is missing its h1.");
  if (!hasH1(pages["guides/5-minute-workouts"], "5-minute workouts")) throw new Error("5-minute workouts guide prerender is missing its h1.");
  if (!hasH1(pages["guides/workout-app-for-entrepreneurs"], "Workout app for entrepreneurs")) throw new Error("Entrepreneurs guide prerender is missing its h1.");
  if (!hasH1(pages["guides/workout-app-for-professionals"], "Workout app for busy professionals")) throw new Error("Professionals guide prerender is missing its h1.");
  if (!hasH1(pages["guides/habit-streak-app"], "A habit streak app that forgives a missed day")) throw new Error("Streak-app guide prerender is missing its h1.");
  if (!hasH1(pages["guides/how-to-stay-consistent"], "How to stay consistent with workouts")) throw new Error("Consistency guide prerender is missing its h1.");

  const combined = Object.values(pages).join("\n");
  if (/legal entity|mailing address|not on file/i.test(pages.terms + pages.privacy)) {
    throw new Error("Legal prerender invented an entity or address.");
  }
  if (/waitlist|coming soon|sarah miller|marcus thorne/i.test(combined)) {
    throw new Error("Prerender includes a removed testimonial or a waitlist frame.");
  }

  return pages;
}

export function renderLegalPages() {
  const pages = renderRouteBodies();
  return { terms: pages.terms, privacy: pages.privacy };
}
