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
    title: "Habits, Short Workouts, and XP | Everyday Performance",
    description:
      "Daily habits, short workouts, streaks, XP, and optional Apple Health. A free account needs no card. Pro is $14.99/mo or $149.99/yr.",
  },
  howItWorks: {
    path: "/how-it-works/",
    title: "How the Daily Plan Works | Everyday Performance",
    description:
      "Create a free account with no card, finish a short daily plan, and restart after a missed day. Pro is $14.99/mo or $149.99/yr.",
  },
  faq: {
    path: "/faq/",
    title: "Free, Pro, and Trial FAQ | Everyday Performance",
    description:
      "Free accounts need no card. Pro is $14.99/mo or $149.99/yr. The 7-day Pro trial requires a card and auto-renews. Cancel in account settings.",
  },
  compare: {
    path: "/compare/",
    title: "Compare Habits and Busy Days | Everyday Performance",
    description:
      "How Everyday Performance differs from a long workout catalog, a habit checklist, or an all-or-nothing program. No star rating and no user count.",
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
  busyParents: {
    path: "/guides/habit-tracker-for-busy-parents/",
    title: "Habit Tracker for Busy Parents | Everyday Performance",
    description:
      "A forgiving habit tracker and short-workout plan for busy parents: tiny daily habits, streaks that survive a missed day, and sessions you can finish between everything else. Free account, no card.",
    ogType: "article",
  },
  fiveMinuteWorkouts: {
    path: "/guides/5-minute-workouts/",
    title: "5-Minute Workouts for a Packed Day | Everyday Performance",
    description:
      "Short, equipment-optional 5-minute workouts for professionals and parents with no time. Log it, keep the streak, and let a few minutes still count. Free account, no card.",
    ogType: "article",
  },
  entrepreneurs: {
    path: "/guides/workout-app-for-entrepreneurs/",
    title: "Workout App for Entrepreneurs | Everyday Performance",
    description:
      "A workout and habit app for entrepreneurs and founders with no schedule: short sessions, tiny daily habits, and streaks that survive a chaotic week. Free account, no card.",
    ogType: "article",
  },
  professionals: {
    path: "/guides/workout-app-for-professionals/",
    title: "Workout App for Busy Professionals | Everyday Performance",
    description:
      "A workout app built for busy professionals with no time: short trainable sessions, habits you can finish between meetings, and progress that compounds. Free account, no card.",
    ogType: "article",
  },
  streakApp: {
    path: "/guides/habit-streak-app/",
    title: "A Habit Streak App That Forgives a Missed Day | Everyday Performance",
    description:
      "A habit streak app where one missed day doesn't erase months: forgiving streaks, XP, and a plan built to restart. Free account, no card.",
    ogType: "article",
  },
  consistency: {
    path: "/guides/how-to-stay-consistent/",
    title: "How to Stay Consistent With Workouts | Everyday Performance",
    description:
      "How to stay consistent with workouts and habits when motivation runs out: small wins, forgiving streaks, and a system that rewards showing up. Free account, no card.",
    ogType: "article",
  },
  adhd: {
    path: "/guides/habit-tracker-for-adhd/",
    title: "A Habit Tracker That Works With an ADHD Brain | Everyday Performance",
    description:
      "A forgiving habit tracker for people who struggle with consistency: tiny habits, streaks that survive a missed day, and a plan built to restart. Not medical advice. Free account, no card.",
    ogType: "article",
  },
  noEquipment: {
    path: "/guides/home-workout-no-equipment/",
    title: "Home Workouts With No Equipment | Everyday Performance",
    description:
      "Bodyweight home workouts with no equipment, logged in the time you have, with streaks and XP that reward showing up. Free account, no card.",
    ogType: "article",
  },
  accountability: {
    path: "/guides/accountability-fitness-app/",
    title: "An Accountability Fitness App | Everyday Performance",
    description:
      "An accountability fitness app: friends, squads, weekly leagues, and an optional coach who can see your workouts, habits, and streaks. Free account, no card.",
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
  PAGES.busyParents.path,
  PAGES.fiveMinuteWorkouts.path,
  PAGES.entrepreneurs.path,
  PAGES.professionals.path,
  PAGES.streakApp.path,
  PAGES.consistency.path,
  PAGES.adhd.path,
  PAGES.noEquipment.path,
  PAGES.accountability.path,
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
  "guides/habit-tracker-for-busy-parents",
  "guides/5-minute-workouts",
  "guides/workout-app-for-entrepreneurs",
  "guides/workout-app-for-professionals",
  "guides/habit-streak-app",
  "guides/how-to-stay-consistent",
  "guides/habit-tracker-for-adhd",
  "guides/home-workout-no-equipment",
  "guides/accountability-fitness-app",
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
  const urls = INDEXABLE_PATHS.map(
    (path) => `  <url><loc>${absoluteUrl(path)}</loc><lastmod>${CONTENT_UPDATED}</lastmod></url>`,
  ).join("\n");
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
    "- Daily habits you can finish when the day is already full, including hydration, mobility, a walk, stretching, or breathing. A missed day does not mean the plan failed; you can restart.",
    "- Short workouts in the time you have, with sets, RPE, duration, notes, and an exercise library. Bodyweight sessions work when you have no equipment.",
    "- Guided plans that tell you what to do and can restart after a miss.",
    "- Progress: streaks, XP, badges, levels, a consistency calendar, and weekly recaps. Sample numbers on the homepage are illustrations, not a published member result.",
    "- Community: friends, squads, and weekly leagues. Workouts and streaks stay private unless you opt in to share them.",
    "- Coaching: coaches and clients use the same app. Coaches can assign programs, message clients, run weekly check-ins, and see workouts, habits, and streaks. Coach plans are a separate purchase and are not consumer Pro.",
    "- Optional Apple Health on iPhone for activity you choose to share. It is not required and is not used for advertising.",
    "",
    "## Platforms",
    "",
    "- Web app and an iOS app.",
    "",
    "## Pages",
    "",
    page("/", "Home", "Offer, daily loop, and Free versus Pro pricing."),
    page(PAGES.features.path, "Features", "Habits, short workouts, streaks, XP, and optional Apple Health."),
    page(PAGES.howItWorks.path, "How it works", "Free signup with no card, a short daily plan, and a restart after a missed day."),
    page(PAGES.faq.path, "FAQ", "Card requirement, 7-day Pro trial, cancellation, and website versus App Store price."),
    page(PAGES.compare.path, "Compare", "Category comparison. No named competitor trademarks, star rating, or user count."),
    page(PAGES.guides.path, "Guides", "Busy-day product guides. Not medical protocols."),
    page(PAGES.fiveMinuteDay.path, "A five-minute day", "What to do when you only have a few minutes."),
    page(PAGES.busyParents.path, "Habit tracker for busy parents", "A forgiving habit + short-workout plan for parents with no time."),
    page(PAGES.fiveMinuteWorkouts.path, "5-minute workouts", "Short, equipment-optional sessions for a packed day."),
    page(PAGES.entrepreneurs.path, "Workout app for entrepreneurs", "Short sessions and habits for founders with no schedule."),
    page(PAGES.professionals.path, "Workout app for busy professionals", "Trainable sessions between meetings; progress that compounds."),
    page(PAGES.streakApp.path, "Habit streak app", "Forgiving streaks where one missed day doesn't erase months."),
    page(PAGES.consistency.path, "How to stay consistent", "Staying consistent when motivation runs out."),
    page(PAGES.adhd.path, "Habit tracker for an ADHD brain", "Forgiving habits and restartable streaks. Not medical advice."),
    page(PAGES.noEquipment.path, "Home workout, no equipment", "Bodyweight sessions logged in the time you have."),
    page(PAGES.accountability.path, "Accountability fitness app", "Friends, squads, leagues, and an optional coach."),
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
    // Brand-name variants so search engines associate common spellings and
    // spacings ("every day perform", "everydayperform", "everyday performance")
    // with this entity.
    alternateName: [
      "Everyday Performance OS",
      "EverydayPerform",
      "Every Day Perform",
      "Everyday Performance App",
      "everydayperform",
    ],
    url: absoluteUrl("/"),
    sameAs: ["https://app.everydayperform.com/"],
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
      "Daily habits",
      "Short workouts",
      "Streaks, XP, badges, and levels",
      "A daily plan that can restart after a missed day",
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
    alternateName: ["Everyday Performance OS", "EverydayPerform", "Every Day Perform"],
    url: absoluteUrl("/"),
    description: HOME_DESCRIPTION,
    inLanguage: "en",
    publisher: orgRef(),
  };
}

function webPageNode(page: PageMeta) {
  return {
    "@type": "WebPage",
    name: page.title,
    description: page.description,
    url: absoluteUrl(page.path),
    isPartOf: { "@id": WEBSITE_ID },
    publisher: orgRef(),
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
  mobileApplicationNode(),
  faqNode(absoluteUrl("/"), homeFaqIds),
);

export const featuresJsonLd = pageGraph(
  breadcrumbNode([
    { name: "Home", path: "/" },
    { name: "Features", path: PAGES.features.path },
  ]),
  webPageNode(PAGES.features),
  mobileApplicationNode(),
);

export const howItWorksJsonLd = pageGraph(
  breadcrumbNode([
    { name: "Home", path: "/" },
    { name: "How it works", path: PAGES.howItWorks.path },
  ]),
  webPageNode(PAGES.howItWorks),
  mobileApplicationNode(),
);

export const faqJsonLd = pageGraph(
  breadcrumbNode([
    { name: "Home", path: "/" },
    { name: "FAQ", path: PAGES.faq.path },
  ]),
  webPageNode(PAGES.faq),
  faqNode(absoluteUrl(PAGES.faq.path), FAQ_ITEMS.map((item) => item.id)),
  mobileApplicationNode(),
);

export const compareJsonLd = pageGraph(
  breadcrumbNode([
    { name: "Home", path: "/" },
    { name: "Compare", path: PAGES.compare.path },
  ]),
  webPageNode(PAGES.compare),
  mobileApplicationNode(),
);

export const guidesJsonLd = pageGraph(
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
      {
        "@type": "ListItem",
        position: 2,
        name: "Habit tracker for busy parents",
        url: absoluteUrl(PAGES.busyParents.path),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "5-minute workouts for a packed day",
        url: absoluteUrl(PAGES.fiveMinuteWorkouts.path),
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Workout app for entrepreneurs",
        url: absoluteUrl(PAGES.entrepreneurs.path),
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Workout app for busy professionals",
        url: absoluteUrl(PAGES.professionals.path),
      },
      {
        "@type": "ListItem",
        position: 6,
        name: "A habit streak app that forgives a missed day",
        url: absoluteUrl(PAGES.streakApp.path),
      },
      {
        "@type": "ListItem",
        position: 7,
        name: "How to stay consistent with workouts",
        url: absoluteUrl(PAGES.consistency.path),
      },
      {
        "@type": "ListItem",
        position: 8,
        name: "A habit tracker that works with an ADHD brain",
        url: absoluteUrl(PAGES.adhd.path),
      },
      {
        "@type": "ListItem",
        position: 9,
        name: "Home workouts with no equipment",
        url: absoluteUrl(PAGES.noEquipment.path),
      },
      {
        "@type": "ListItem",
        position: 10,
        name: "An accountability fitness app",
        url: absoluteUrl(PAGES.accountability.path),
      },
    ],
  },
);

export const fiveMinuteJsonLd = pageGraph(
  breadcrumbNode([
    { name: "Home", path: "/" },
    { name: "Guides", path: PAGES.guides.path },
    { name: "A five-minute day", path: PAGES.fiveMinuteDay.path },
  ]),
  {
    "@type": "Article",
    headline: "A five-minute day",
    description: PAGES.fiveMinuteDay.description,
    datePublished: CONTENT_UPDATED,
    dateModified: CONTENT_UPDATED,
    image: OG_IMAGE,
    inLanguage: "en",
    mainEntityOfPage: absoluteUrl(PAGES.fiveMinuteDay.path),
    author: orgRef(),
    publisher: orgRef(),
  },
);

export const busyParentsJsonLd = pageGraph(
  breadcrumbNode([
    { name: "Home", path: "/" },
    { name: "Guides", path: PAGES.guides.path },
    { name: "Habit tracker for busy parents", path: PAGES.busyParents.path },
  ]),
  {
    "@type": "Article",
    headline: "Habit tracker for busy parents",
    description: PAGES.busyParents.description,
    datePublished: CONTENT_UPDATED,
    dateModified: CONTENT_UPDATED,
    image: OG_IMAGE,
    inLanguage: "en",
    mainEntityOfPage: absoluteUrl(PAGES.busyParents.path),
    author: orgRef(),
    publisher: orgRef(),
  },
);

export const fiveMinuteWorkoutsJsonLd = pageGraph(
  breadcrumbNode([
    { name: "Home", path: "/" },
    { name: "Guides", path: PAGES.guides.path },
    { name: "5-minute workouts for a packed day", path: PAGES.fiveMinuteWorkouts.path },
  ]),
  {
    "@type": "Article",
    headline: "5-minute workouts for a packed day",
    description: PAGES.fiveMinuteWorkouts.description,
    datePublished: CONTENT_UPDATED,
    dateModified: CONTENT_UPDATED,
    image: OG_IMAGE,
    inLanguage: "en",
    mainEntityOfPage: absoluteUrl(PAGES.fiveMinuteWorkouts.path),
    author: orgRef(),
    publisher: orgRef(),
  },
);

function guideArticleJsonLd(page: PageMeta, headline: string) {
  return pageGraph(
    breadcrumbNode([
      { name: "Home", path: "/" },
      { name: "Guides", path: PAGES.guides.path },
      { name: headline, path: page.path },
    ]),
    {
      "@type": "Article",
      headline,
      description: page.description,
      datePublished: CONTENT_UPDATED,
      dateModified: CONTENT_UPDATED,
      image: OG_IMAGE,
      inLanguage: "en",
      mainEntityOfPage: absoluteUrl(page.path),
      author: orgRef(),
      publisher: orgRef(),
    },
  );
}

export const entrepreneursJsonLd = guideArticleJsonLd(PAGES.entrepreneurs, "Workout app for entrepreneurs");
export const professionalsJsonLd = guideArticleJsonLd(PAGES.professionals, "Workout app for busy professionals");
export const streakAppJsonLd = guideArticleJsonLd(PAGES.streakApp, "A habit streak app that forgives a missed day");
export const consistencyJsonLd = guideArticleJsonLd(PAGES.consistency, "How to stay consistent with workouts");
export const adhdJsonLd = guideArticleJsonLd(PAGES.adhd, "A habit tracker that works with an ADHD brain");
export const noEquipmentJsonLd = guideArticleJsonLd(PAGES.noEquipment, "Home workouts with no equipment");
export const accountabilityJsonLd = guideArticleJsonLd(PAGES.accountability, "An accountability fitness app");

export const pressJsonLd = pageGraph(
  breadcrumbNode([
    { name: "Home", path: "/" },
    { name: "Press kit", path: PAGES.press.path },
  ]),
  webPageNode(PAGES.press),
);

export const privacyJsonLd = pageGraph(
  breadcrumbNode([
    { name: "Home", path: "/" },
    { name: "Privacy Policy", path: PAGES.privacy.path },
  ]),
  webPageNode(PAGES.privacy),
);

export const termsJsonLd = pageGraph(
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
  [PAGES.busyParents.path]: busyParentsJsonLd,
  [PAGES.fiveMinuteWorkouts.path]: fiveMinuteWorkoutsJsonLd,
  [PAGES.entrepreneurs.path]: entrepreneursJsonLd,
  [PAGES.professionals.path]: professionalsJsonLd,
  [PAGES.streakApp.path]: streakAppJsonLd,
  [PAGES.consistency.path]: consistencyJsonLd,
  [PAGES.adhd.path]: adhdJsonLd,
  [PAGES.noEquipment.path]: noEquipmentJsonLd,
  [PAGES.accountability.path]: accountabilityJsonLd,
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
