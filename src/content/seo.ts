import { FAQ_ITEMS, HOME_FAQ_IDS, PRICING_FAQ_IDS, faqPageEntities } from "@/content/faq";

export const SITE_ORIGIN = "https://everydayperform.com";

export const HOME_TITLE = "Everyday Performance OS | Daily Habits and Short Workouts";
export const HOME_DESCRIPTION =
  "Create a free Everyday Performance account with no card. Short workouts, daily habits, streaks, and XP for busy schedules. Pro is $14.99/mo or $119/yr.";

export type PageMeta = {
  path: string;
  title: string;
  description: string;
};

export const PAGES = {
  home: {
    path: "/",
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
  },
  features: {
    path: "/features/",
    title: "Features | Everyday Performance OS",
    description:
      "Daily habits, short workouts, streaks, XP, and a plan for busy days. See what is in Everyday Performance OS, including optional Apple Health.",
  },
  howItWorks: {
    path: "/how-it-works/",
    title: "How It Works | Everyday Performance OS",
    description:
      "Create a free account with no card, follow a short daily plan, and restart after a missed day. Pro is $14.99/mo or $119/yr.",
  },
  faq: {
    path: "/faq/",
    title: "FAQ | Everyday Performance OS",
    description:
      "Answers on free accounts, Pro at $14.99/mo or $119/yr, the 7-day trial card requirement, cancellation, equipment, and the health disclaimer.",
  },
  compare: {
    path: "/compare/",
    title: "Compare Everyday Performance | Habits, Workouts, and Busy Days",
    description:
      "How Everyday Performance differs from a long workout catalog, a habit checklist, or an all-or-nothing program. No star rating and no user count.",
  },
  guides: {
    path: "/guides/",
    title: "Guides | Everyday Performance OS",
    description: "Practical guides for using Everyday Performance on a busy day, starting with a five-minute plan you can finish.",
  },
  fiveMinuteDay: {
    path: "/guides/five-minute-day/",
    title: "A Five-Minute Day | Everyday Performance",
    description:
      "Use Everyday Performance when you only have a few minutes: one habit, an optional short workout, and a restart after a missed day.",
  },
  press: {
    path: "/press-kit/",
    title: "Press Kit & Media Kit | Everyday Performance OS",
    description: "Download official logos, brand colors, typography, and company information for Everyday Performance OS.",
  },
  privacy: {
    path: "/privacy/",
    title: "Privacy Policy | Everyday Performance OS",
    description: "How Everyday Performance OS collects, uses, and protects account, fitness, Health, and accountability information.",
  },
  terms: {
    path: "/terms/",
    title: "Terms of Use | Everyday Performance OS",
    description: "Terms of Use for Everyday Performance OS, including health information, subscriptions, and community rules.",
  },
} as const satisfies Record<string, PageMeta>;

export const PRICING_HASH = "/#pricing";

export const INDEXABLE_PATHS = [
  PAGES.home.path,
  PAGES.features.path,
  PAGES.howItWorks.path,
  PAGES.faq.path,
  PAGES.compare.path,
  PAGES.guides.path,
  PAGES.fiveMinuteDay.path,
  PAGES.press.path,
  PAGES.privacy.path,
  PAGES.terms.path,
] as const;

/** Directory copies written by scripts/spa-fallback.mjs. Home is dist/index.html. */
export const SPA_ROUTE_DIRS = [
  "features",
  "how-it-works",
  "faq",
  "compare",
  "guides",
  "guides/five-minute-day",
  "press-kit",
  "privacy",
  "terms",
] as const;

export function absoluteUrl(path: string) {
  if (path === "/") return `${SITE_ORIGIN}/`;
  const hashIndex = path.indexOf("#");
  const hash = hashIndex >= 0 ? path.slice(hashIndex) : "";
  const pathname = hashIndex >= 0 ? path.slice(0, hashIndex) : path;
  const normalized = pathname.startsWith("/") ? pathname : `/${pathname}`;
  const withSlash =
    normalized === "/" ? "/" : normalized.endsWith("/") ? normalized : `${normalized}/`;
  return `${SITE_ORIGIN}${withSlash}${hash}`;
}

export function sitemapXml() {
  const urls = INDEXABLE_PATHS.map((path) => `  <url><loc>${absoluteUrl(path)}</loc></url>`).join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

function graph(...nodes: Record<string, unknown>[]) {
  return {
    "@context": "https://schema.org",
    "@graph": nodes,
  };
}

function organizationNode() {
  return {
    "@type": "Organization",
    name: "Everyday Performance",
    url: absoluteUrl("/"),
    logo: `${SITE_ORIGIN}/logo.png`,
    email: "support@everydayperform.com",
  };
}

function softwareNode() {
  return {
    "@type": "SoftwareApplication",
    name: "Everyday Performance OS",
    applicationCategory: "HealthApplication",
    operatingSystem: "Web, iOS",
    url: absoluteUrl("/"),
    description: HOME_DESCRIPTION,
    isAccessibleForFree: true,
    offers: [
      {
        "@type": "Offer",
        name: "Free",
        price: "0",
        priceCurrency: "USD",
        description: "Free account. Does not require a card.",
        url: absoluteUrl("/#pricing"),
      },
      {
        "@type": "Offer",
        name: "Pro monthly",
        price: "14.99",
        priceCurrency: "USD",
        description: "Pro monthly. The 7-day Pro trial requires a card and auto-renews.",
        url: absoluteUrl("/#pricing"),
      },
      {
        "@type": "Offer",
        name: "Pro yearly",
        price: "119",
        priceCurrency: "USD",
        description: "Pro yearly, $9.92 per month effective. The 7-day Pro trial requires a card and auto-renews.",
        url: absoluteUrl("/#pricing"),
      },
    ],
    featureList: [
      "Daily habits",
      "Short workouts",
      "Streaks, XP, badges, and levels",
      "A daily plan that can restart after a missed day",
      "Optional Apple Health on iPhone",
    ],
  };
}

function webPageNode(page: PageMeta) {
  return {
    "@type": "WebPage",
    name: page.title,
    description: page.description,
    url: absoluteUrl(page.path),
    isPartOf: {
      "@type": "WebSite",
      name: "Everyday Performance",
      url: absoluteUrl("/"),
    },
    publisher: organizationNode(),
  };
}

function breadcrumbNode(items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

function faqNode(ids: readonly string[]) {
  return {
    "@type": "FAQPage",
    mainEntity: faqPageEntities(ids),
  };
}

const homeFaqIds = [...PRICING_FAQ_IDS, ...HOME_FAQ_IDS];

export const homeJsonLd = graph(
  organizationNode(),
  {
    "@type": "WebSite",
    name: "Everyday Performance",
    url: absoluteUrl("/"),
    publisher: organizationNode(),
  },
  softwareNode(),
  faqNode(homeFaqIds),
);

export const featuresJsonLd = graph(
  breadcrumbNode([
    { name: "Home", path: "/" },
    { name: "Features", path: PAGES.features.path },
  ]),
  webPageNode(PAGES.features),
  softwareNode(),
);

export const howItWorksJsonLd = graph(
  breadcrumbNode([
    { name: "Home", path: "/" },
    { name: "How it works", path: PAGES.howItWorks.path },
  ]),
  webPageNode(PAGES.howItWorks),
);

export const faqJsonLd = graph(
  breadcrumbNode([
    { name: "Home", path: "/" },
    { name: "FAQ", path: PAGES.faq.path },
  ]),
  webPageNode(PAGES.faq),
  faqNode(FAQ_ITEMS.map((item) => item.id)),
);

export const compareJsonLd = graph(
  breadcrumbNode([
    { name: "Home", path: "/" },
    { name: "Compare", path: PAGES.compare.path },
  ]),
  webPageNode(PAGES.compare),
);

export const guidesJsonLd = graph(
  breadcrumbNode([
    { name: "Home", path: "/" },
    { name: "Guides", path: PAGES.guides.path },
  ]),
  webPageNode(PAGES.guides),
  {
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "A five-minute day",
        url: absoluteUrl(PAGES.fiveMinuteDay.path),
      },
    ],
  },
);

export const fiveMinuteJsonLd = graph(
  breadcrumbNode([
    { name: "Home", path: "/" },
    { name: "Guides", path: PAGES.guides.path },
    { name: "A five-minute day", path: PAGES.fiveMinuteDay.path },
  ]),
  {
    "@type": "Article",
    headline: "A five-minute day",
    description: PAGES.fiveMinuteDay.description,
    datePublished: "2026-10-28",
    dateModified: "2026-10-28",
    mainEntityOfPage: absoluteUrl(PAGES.fiveMinuteDay.path),
    author: organizationNode(),
    publisher: organizationNode(),
  },
);

export const pressJsonLd = graph(
  breadcrumbNode([
    { name: "Home", path: "/" },
    { name: "Press kit", path: PAGES.press.path },
  ]),
  webPageNode(PAGES.press),
);

export const privacyJsonLd = graph(
  breadcrumbNode([
    { name: "Home", path: "/" },
    { name: "Privacy Policy", path: PAGES.privacy.path },
  ]),
  webPageNode(PAGES.privacy),
);

export const termsJsonLd = graph(
  breadcrumbNode([
    { name: "Home", path: "/" },
    { name: "Terms of Use", path: PAGES.terms.path },
  ]),
  webPageNode(PAGES.terms),
);

export const JSON_LD_BY_PATH: Record<string, Record<string, unknown>> = {
  [PAGES.home.path]: homeJsonLd,
  [PAGES.features.path]: featuresJsonLd,
  [PAGES.howItWorks.path]: howItWorksJsonLd,
  [PAGES.faq.path]: faqJsonLd,
  [PAGES.compare.path]: compareJsonLd,
  [PAGES.guides.path]: guidesJsonLd,
  [PAGES.fiveMinuteDay.path]: fiveMinuteJsonLd,
  [PAGES.press.path]: pressJsonLd,
  [PAGES.privacy.path]: privacyJsonLd,
  [PAGES.terms.path]: termsJsonLd,
};

export const NOT_FOUND_META = {
  title: "Page not found | Everyday Performance",
  description: "That page is not on Everyday Performance.",
  robots: "noindex, follow",
};

export const PRESS_STATIC_HTML = [
  '<main style="max-width:42rem;margin:0 auto;padding:6rem 1.25rem 3rem;font-family:Inter,system-ui,sans-serif">',
  '<p style="color:#8F8F56;letter-spacing:0.18em;text-transform:uppercase;font-size:0.75rem">Press</p>',
  '<h1 style="font-family:Oswald,sans-serif;text-transform:uppercase;font-size:2.5rem;line-height:1.1;margin:0.75rem 0 1rem">Press and media kit</h1>',
  '<p style="line-height:1.6;color:rgba(245,245,245,0.78)">For press inquiries, contact <a href="mailto:press@everydayperform.com" style="color:#d5d5a4">press@everydayperform.com</a>.</p>',
  '<p style="line-height:1.6;color:rgba(245,245,245,0.78)">Everyday Performance helps busy people build healthier lives through simple daily habits. A free account does not require a card. Pro is $14.99/mo or $119/yr. The 7-day Pro trial requires a card and auto-renews.</p>',
  '<p style="line-height:1.6"><a href="/features/" style="color:#d5d5a4">Features</a> · <a href="/" style="color:#d5d5a4">Home</a></p>',
  "</main>",
].join("");

export const NOT_FOUND_STATIC_HTML = [
  '<main style="min-height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:6rem 1.5rem;font-family:Inter,system-ui,sans-serif">',
  '<h1 style="font-family:Oswald,sans-serif;text-transform:uppercase;letter-spacing:0.04em;font-size:2.5rem;margin:0 0 0.75rem">Page not found</h1>',
  '<p style="color:rgba(245,245,245,0.75);margin:0 0 1.25rem">That address is not on Everyday Performance.</p>',
  '<p style="margin:0"><a href="/" style="color:#d5d5a4">Back to the homepage</a></p>',
  "</main>",
].join("");
