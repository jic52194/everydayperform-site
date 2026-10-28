import { FAQ_ITEMS, HOME_FAQ_IDS, PRICING_FAQ_IDS, faqPageEntities } from "@/content/faq";

export const SITE_ORIGIN = "https://everydayperform.com";
export const SITE_NAME = "Everyday Performance";
export const OG_IMAGE = `${SITE_ORIGIN}/og.png`;
export const OG_IMAGE_ALT = "Everyday Performance OS";
export const OG_IMAGE_WIDTH = "1200";
export const OG_IMAGE_HEIGHT = "630";
const ORG_ID = `${SITE_ORIGIN}/#organization`;
const WEBSITE_ID = `${SITE_ORIGIN}/#website`;
const APP_ID = `${SITE_ORIGIN}/#app`;
const CONTENT_UPDATED = "2026-10-28";
const LEGAL_UPDATED = "2026-10-25";

export const HOME_TITLE = "Everyday Performance OS | Daily Habits and Short Workouts";
export const HOME_DESCRIPTION =
  "Free account, no card. Short workouts, daily habits, streaks, and XP for busy days. Pro is $14.99/mo or $149.99/yr; the 7-day trial needs a card.";

export type PageMeta = {
  path: string;
  title: string;
  description: string;
  ogType?: "website" | "article";
};

export const PAGES = {
  home: {
    path: "/",
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
  },
  features: {
    path: "/features/",
    title: "Habits, Analytics, and Coaches | Everyday Performance",
    description:
      "Habits, short workouts, free streaks, and Pro charts. Community starts on a seed floor. Coaches are separate. Free, no card. Pro is $14.99/mo or $149.99/yr.",
  },
  howItWorks: {
    path: "/how-it-works/",
    title: "How the Daily Plan Works | Everyday Performance",
    description:
      "Create a free account with no card, finish a short daily plan, and use a streak freeze after a miss. Pro is $14.99/mo or $149.99/yr.",
  },
  faq: {
    path: "/faq/",
    title: "Habits, Analytics, and Pro FAQ | Everyday Performance",
    description:
      "Free needs no card. Pro is $14.99/mo or $149.99/yr; the 7-day trial needs a card. Habits, analytics, the seed community floor, and coach plans.",
  },
  compare: {
    path: "/compare/",
    title: "Compare Habits and Busy Days | Everyday Performance",
    description:
      "Short daily plans versus a long catalog, a habit checklist, a public feed, or an all-or-nothing program. No star rating and no user count.",
  },
  guides: {
    path: "/guides/",
    title: "Busy-Day Guides | Everyday Performance",
    description:
      "Practical guides for a packed schedule, starting with a five-minute Everyday Performance plan you can finish. Free account, no card.",
  },
  fiveMinuteDay: {
    path: "/guides/five-minute-day/",
    title: "A Five-Minute Day | Everyday Performance",
    description:
      "One habit, an optional short workout, and a restart after a missed day. A free Everyday Performance account does not require a card.",
    ogType: "article",
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

const SITEMAP_LASTMOD: Record<string, string> = {
  [PAGES.privacy.path]: LEGAL_UPDATED,
  [PAGES.terms.path]: LEGAL_UPDATED,
};

export function canonicalUrl(path: string, options?: { noindex?: boolean }) {
  if (options?.noindex) {
    const normalized = path.startsWith("/") ? path : `/${path}`;
    return `${SITE_ORIGIN}${normalized.split("#")[0]}`;
  }
  return absoluteUrl(path).split("#")[0];
}

export function sitemapXml() {
  const urls = INDEXABLE_PATHS.map((path) => {
    const lastmod = SITEMAP_LASTMOD[path] ?? CONTENT_UPDATED;
    return `  <url><loc>${absoluteUrl(path)}</loc><lastmod>${lastmod}</lastmod></url>`;
  }).join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

export function llmsTxt() {
  const page = (path: string, label: string, note: string) => `- [${label}](${absoluteUrl(path)}): ${note}`;
  return [
    "# Everyday Performance OS",
    "",
    "> Everyday Performance OS is a daily habit and short-workout app for busy schedules. A free account does not require a card. Website Pro is $14.99 per month or $149.99 per year ($12.50 per month effective). The 7-day Pro trial requires a card and auto-renews unless you cancel. Website prices are not the App Store price.",
    "",
    "Everyday Performance helps busy people practice consistency with short workouts, daily habits, streaks, and XP. It does not promise a specific body, medical, or performance outcome, and it does not publish a star rating or a user count. Fitness and habit ideas on the site are general education, not medical advice.",
    "",
    "## Pricing",
    "",
    "- Free: $0. A free account does not require a card. This is not the 7-day Pro trial.",
    "- Pro monthly: $14.99 per month on the website.",
    "- Pro yearly: $149.99 per year on the website ($12.50 per month effective).",
    "- The 7-day Pro trial requires a card and auto-renews unless you cancel before it ends. Cancel Pro in account settings. Access continues through the end of the current billing period.",
    "- An iPhone subscription, if purchased, uses the live App Store price and currency shown in the app. Those prices are not the website prices above.",
    "- Coach plans are a separate purchase and are not consumer Pro.",
    "",
    "## What it does",
    "",
    "- Daily habits you choose. Presets include water, moving for 20 minutes, stretch or mobility, 5 minutes of mindfulness, sleep, steps, protein, reading, no snooze, and no added sugar. Pick two or three small enough for a bad day. Completing a habit earns XP. A missed day does not close the account. Streak freezes are built to turn on when a day is missed, so one miss does not have to erase the streak.",
    "- Short workouts in the time you have, with sets, RPE, duration, notes, and an exercise library. Bodyweight sessions work when you have no equipment.",
    "- Guided plans shaped by focus, training days, experience, and the habits you pick. They can restart after a miss. This is not a clinical assessment.",
    "- Progress analytics: the free plan includes streaks and this week's view, including the weekly recap. Pro adds load volume, workout frequency, habit consistency, a show-up calendar, and personal records. Charts count what you log. Sample numbers on the homepage are illustrations, not a published member result.",
    "- Community seed floor: a new account gets a welcome, a friend request, and a place to reply. Coaches and guides on that floor are part of the product so the room is not empty. They are not a member count and not reviews. You can join the Morning Floor squad, invite a friend, and see a weekly league ranked by XP since Monday. Workouts and streaks stay private unless you opt in to share them.",
    "- Coaching: coaches and clients use the same app. A coach applies and the application is reviewed. Coaches can assign day-by-day programs, message clients, run check-ins, and see workouts, habits, and streaks. Coach plans are a separate purchase and are not consumer Pro. Pro does not assign a human coach.",
    "- Optional Apple Health on iPhone for activity you choose to share. It is not required and is not used for advertising.",
    "",
    "## Platforms",
    "",
    "- Web app and an iOS app.",
    "",
    "## Pages",
    "",
    page("/", "Home", "Offer, daily loop, and Free versus Pro pricing."),
    page(PAGES.features.path, "Features", "Habits, short workouts, free versus Pro analytics, the community seed floor, coaches, and optional Apple Health."),
    page(PAGES.howItWorks.path, "How it works", "Free signup with no card, a short daily plan, streak freezes, and a restart after a missed day."),
    page(PAGES.faq.path, "FAQ", "Card requirement, 7-day Pro trial, habits, analytics, the community seed floor, coaches, and cancellation."),
    page(PAGES.compare.path, "Compare", "Category comparison, including a public feed versus the seed floor. No named competitor trademarks, star rating, or user count."),
    page(PAGES.guides.path, "Guides", "Busy-day product guides. Not medical protocols."),
    page(PAGES.fiveMinuteDay.path, "A five-minute day", "What to do when you only have a few minutes."),
    page(PAGES.press.path, "Press kit", "Logo, colors, and typography. Press contact: press@everydayperform.com."),
    page(PAGES.privacy.path, "Privacy Policy", "How account, fitness, Health, and accountability information is handled."),
    page(PAGES.terms.path, "Terms of Use", "Health information, subscriptions, and community rules."),
    "",
    "## Optional",
    "",
    `- [Sitemap](${SITE_ORIGIN}/sitemap.xml): indexable URLs.`,
    "- Support: support@everydayperform.com",
    "- App: https://app.everydayperform.com/",
    "",
  ].join("\n");
}

function graph(...nodes: Record<string, unknown>[]) {
  return {
    "@context": "https://schema.org",
    "@graph": nodes,
  };
}

function orgRef() {
  return { "@id": ORG_ID };
}

function organizationNode() {
  return {
    "@type": "Organization",
    "@id": ORG_ID,
    name: SITE_NAME,
    url: absoluteUrl("/"),
    logo: {
      "@type": "ImageObject",
      url: `${SITE_ORIGIN}/logo.png`,
      width: 200,
      height: 100,
    },
    email: "support@everydayperform.com",
    description:
      "Everyday Performance OS is a daily system of short workouts and habits, with streaks and XP, for busy schedules. A free account does not require a card.",
    contactPoint: [
      {
        "@type": "ContactPoint",
        email: "support@everydayperform.com",
        contactType: "customer support",
        availableLanguage: "English",
      },
      {
        "@type": "ContactPoint",
        email: "press@everydayperform.com",
        contactType: "press",
        availableLanguage: "English",
      },
    ],
  };
}

const TRIAL_NOTE = "The 7-day Pro trial requires a card and auto-renews unless you cancel. It is not included with the free account.";
const WEBSITE_PRICE_NOTE = "This is the website price, not the App Store price.";

function unitPrice(price: string, unitText: string, unitCode: string) {
  return {
    "@type": "UnitPriceSpecification",
    price,
    priceCurrency: "USD",
    unitText,
    referenceQuantity: {
      "@type": "QuantitativeValue",
      value: 1,
      unitCode,
    },
  };
}

function trialProperty() {
  return {
    "@type": "PropertyValue",
    name: "Trial",
    value: "7 days. Requires a card and auto-renews unless you cancel.",
  };
}

function mobileApplicationNode() {
  return {
    "@type": ["MobileApplication", "SoftwareApplication"],
    "@id": APP_ID,
    name: "Everyday Performance OS",
    applicationCategory: "HealthApplication",
    operatingSystem: "iOS, Web",
    url: absoluteUrl("/"),
    image: OG_IMAGE,
    description: HOME_DESCRIPTION,
    inLanguage: "en",
    isAccessibleForFree: true,
    publisher: orgRef(),
    offers: [
      {
        "@type": "Offer",
        name: "Free",
        price: "0",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        category: "Website price",
        description: "Free website account. Does not require a card. This is not the 7-day Pro trial.",
        url: absoluteUrl("/#pricing"),
      },
      {
        "@type": "Offer",
        name: "Pro monthly",
        price: "14.99",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        category: "Website price",
        description: `Website Pro, billed monthly at $14.99. ${TRIAL_NOTE} ${WEBSITE_PRICE_NOTE}`,
        url: absoluteUrl("/#pricing"),
        priceSpecification: unitPrice("14.99", "MONTH", "MON"),
        additionalProperty: trialProperty(),
      },
      {
        "@type": "Offer",
        name: "Pro yearly",
        price: "149.99",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        category: "Website price",
        description: `Website Pro, billed yearly at $149.99 ($12.50 per month effective). ${TRIAL_NOTE} ${WEBSITE_PRICE_NOTE}`,
        url: absoluteUrl("/#pricing"),
        priceSpecification: unitPrice("149.99", "YEAR", "ANN"),
        additionalProperty: trialProperty(),
      },
    ],
    featureList: [
      "Daily habits you choose",
      "Short workouts",
      "Streaks, XP, badges, levels, and a weekly recap on the free plan",
      "Pro progress: load volume, workout frequency, habit consistency, a show-up calendar, and personal records",
      "A seed community floor, squads, and weekly leagues",
      "Coach plans separate from consumer Pro",
      "A daily plan that can restart after a missed day, with streak freezes",
      "Optional Apple Health on iPhone",
    ],
  };
}

function pageGraph(...nodes: Record<string, unknown>[]) {
  return graph(organizationNode(), ...nodes);
}

function websiteNode() {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: SITE_NAME,
    url: absoluteUrl("/"),
    description: HOME_DESCRIPTION,
    inLanguage: "en",
    publisher: orgRef(),
  };
}

function breadcrumbId(path: string) {
  return `${absoluteUrl(path)}#breadcrumb`;
}

function webPageNode(
  page: PageMeta,
  options?: { dateModified?: string; breadcrumb?: boolean; mainEntityId?: string },
) {
  const url = absoluteUrl(page.path);
  const withCrumb = options?.breadcrumb !== false;
  return {
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    name: page.title,
    description: page.description,
    url,
    dateModified: options?.dateModified ?? CONTENT_UPDATED,
    isPartOf: { "@id": WEBSITE_ID },
    publisher: orgRef(),
    ...(withCrumb ? { breadcrumb: { "@id": breadcrumbId(page.path) } } : {}),
    ...(options?.mainEntityId ? { mainEntity: { "@id": options.mainEntityId } } : {}),
  };
}

function breadcrumbNode(pagePath: string, items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    "@id": breadcrumbId(pagePath),
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

function faqNode(pageUrl: string, ids: readonly string[]) {
  return {
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    url: pageUrl,
    mainEntity: faqPageEntities(ids),
  };
}

const homeFaqIds = [...PRICING_FAQ_IDS, ...HOME_FAQ_IDS];

export const homeJsonLd = pageGraph(
  websiteNode(),
  webPageNode(PAGES.home, { breadcrumb: false, mainEntityId: APP_ID }),
  mobileApplicationNode(),
  faqNode(absoluteUrl("/"), homeFaqIds),
);

export const featuresJsonLd = pageGraph(
  breadcrumbNode(PAGES.features.path, [
    { name: "Home", path: "/" },
    { name: "Features", path: PAGES.features.path },
  ]),
  webPageNode(PAGES.features, { mainEntityId: APP_ID }),
  mobileApplicationNode(),
);

export const howItWorksJsonLd = pageGraph(
  breadcrumbNode(PAGES.howItWorks.path, [
    { name: "Home", path: "/" },
    { name: "How it works", path: PAGES.howItWorks.path },
  ]),
  webPageNode(PAGES.howItWorks, { mainEntityId: APP_ID }),
  mobileApplicationNode(),
);

export const faqJsonLd = pageGraph(
  breadcrumbNode(PAGES.faq.path, [
    { name: "Home", path: "/" },
    { name: "FAQ", path: PAGES.faq.path },
  ]),
  webPageNode(PAGES.faq, { mainEntityId: `${absoluteUrl(PAGES.faq.path)}#faq` }),
  faqNode(absoluteUrl(PAGES.faq.path), FAQ_ITEMS.map((item) => item.id)),
  mobileApplicationNode(),
);

export const compareJsonLd = pageGraph(
  breadcrumbNode(PAGES.compare.path, [
    { name: "Home", path: "/" },
    { name: "Compare", path: PAGES.compare.path },
  ]),
  webPageNode(PAGES.compare),
  mobileApplicationNode(),
);

export const guidesJsonLd = pageGraph(
  breadcrumbNode(PAGES.guides.path, [
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

export const fiveMinuteJsonLd = pageGraph(
  breadcrumbNode(PAGES.fiveMinuteDay.path, [
    { name: "Home", path: "/" },
    { name: "Guides", path: PAGES.guides.path },
    { name: "A five-minute day", path: PAGES.fiveMinuteDay.path },
  ]),
  {
    "@type": "Article",
    "@id": `${absoluteUrl(PAGES.fiveMinuteDay.path)}#article`,
    headline: "A five-minute day",
    description: PAGES.fiveMinuteDay.description,
    datePublished: CONTENT_UPDATED,
    dateModified: CONTENT_UPDATED,
    image: OG_IMAGE,
    inLanguage: "en",
    mainEntityOfPage: absoluteUrl(PAGES.fiveMinuteDay.path),
    breadcrumb: { "@id": breadcrumbId(PAGES.fiveMinuteDay.path) },
    author: orgRef(),
    publisher: orgRef(),
  },
);

export const pressJsonLd = pageGraph(
  breadcrumbNode(PAGES.press.path, [
    { name: "Home", path: "/" },
    { name: "Press kit", path: PAGES.press.path },
  ]),
  webPageNode(PAGES.press),
);

export const privacyJsonLd = pageGraph(
  breadcrumbNode(PAGES.privacy.path, [
    { name: "Home", path: "/" },
    { name: "Privacy Policy", path: PAGES.privacy.path },
  ]),
  webPageNode(PAGES.privacy, { dateModified: LEGAL_UPDATED }),
);

export const termsJsonLd = pageGraph(
  breadcrumbNode(PAGES.terms.path, [
    { name: "Home", path: "/" },
    { name: "Terms of Use", path: PAGES.terms.path },
  ]),
  webPageNode(PAGES.terms, { dateModified: LEGAL_UPDATED }),
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
  '<p style="line-height:1.6;color:rgba(245,245,245,0.78)">Everyday Performance helps busy people build healthier lives through simple daily habits. A free account does not require a card. Pro is $14.99/mo or $149.99/yr. The 7-day Pro trial requires a card and auto-renews.</p>',
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
