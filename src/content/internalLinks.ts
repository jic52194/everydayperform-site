import { PAGES, PRICING_HASH } from "@/content/seo";

export type InternalLink = { to: string; label: string };

/** Landing pages that should link to one another with descriptive anchors. */
export const LANDING_LINKS: readonly InternalLink[] = [
  { to: PAGES.features.path, label: "Features: habits, analytics, community, and coaches" },
  { to: PAGES.howItWorks.path, label: "How the daily plan works" },
  { to: PAGES.faq.path, label: "FAQ: pricing, habits, analytics, community, and coaches" },
  { to: PAGES.compare.path, label: "Compare with typical fitness apps" },
  { to: PAGES.guides.path, label: "Guides for a packed day" },
  { to: PAGES.fiveMinuteDay.path, label: "Guide: a five-minute day" },
  { to: PRICING_HASH, label: "Free and Pro pricing" },
];

/** Deep links that describe a real product surface. Extras are listed first. */
export function siblingLinks(currentPath: string, extras: readonly InternalLink[] = []): InternalLink[] {
  const seen = new Set<string>([currentPath]);
  const links: InternalLink[] = [];
  for (const link of [...extras, ...LANDING_LINKS]) {
    if (seen.has(link.to)) continue;
    seen.add(link.to);
    links.push(link);
  }
  return links;
}
