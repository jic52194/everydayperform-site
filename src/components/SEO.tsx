import { useLayoutEffect } from "react";
import { OG_IMAGE, OG_IMAGE_ALT, OG_IMAGE_HEIGHT, OG_IMAGE_WIDTH, SITE_NAME, SITE_ORIGIN } from "@/content/seo";

export type JsonLd = Record<string, unknown>;

interface SEOProps {
  title: string;
  description: string;
  path?: string;
  noindex?: boolean;
  ogType?: "website" | "article";
  jsonLd?: JsonLd;
}

function upsertMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function canonicalFor(path: string, noindex: boolean) {
  if (noindex) {
    const normalized = path.startsWith("/") ? path : `/${path}`;
    return `${SITE_ORIGIN}${normalized}`;
  }
  if (path === "/") return `${SITE_ORIGIN}/`;
  const hashIndex = path.indexOf("#");
  const hash = hashIndex >= 0 ? path.slice(hashIndex) : "";
  const pathname = hashIndex >= 0 ? path.slice(0, hashIndex) : path;
  const withLead = pathname.startsWith("/") ? pathname : `/${pathname}`;
  const withSlash = withLead === "/" ? "/" : withLead.endsWith("/") ? withLead : `${withLead}/`;
  return `${SITE_ORIGIN}${withSlash}${hash}`;
}

export function SEO({ title, description, path = "/", noindex = false, ogType = "website", jsonLd }: SEOProps) {
  useLayoutEffect(() => {
    const url = canonicalFor(path, noindex);
    document.title = title;
    upsertMeta("name", "description", description);
    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:url", url);
    upsertMeta("property", "og:type", ogType);
    upsertMeta("property", "og:site_name", SITE_NAME);
    upsertMeta("property", "og:locale", "en_US");
    upsertMeta("property", "og:image", OG_IMAGE);
    upsertMeta("property", "og:image:alt", OG_IMAGE_ALT);
    upsertMeta("property", "og:image:width", OG_IMAGE_WIDTH);
    upsertMeta("property", "og:image:height", OG_IMAGE_HEIGHT);
    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:url", url);
    upsertMeta("name", "twitter:image", OG_IMAGE);
    upsertMeta("name", "twitter:image:alt", OG_IMAGE_ALT);
    upsertMeta("name", "robots", noindex ? "noindex, follow" : "index, follow");

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", url);

    const existing = document.getElementById("ld-json");
    if (jsonLd) {
      const script = existing ?? document.createElement("script");
      script.id = "ld-json";
      script.setAttribute("type", "application/ld+json");
      script.textContent = JSON.stringify(jsonLd);
      if (!existing) document.head.appendChild(script);
    } else if (existing) {
      existing.remove();
    }
  }, [title, description, path, noindex, ogType, jsonLd]);

  return null;
}
