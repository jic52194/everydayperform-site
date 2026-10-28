import { Link } from "react-router-dom";
import { MarketingLayout } from "@/components/MarketingLayout";
import { FAQ_ITEMS } from "@/content/faq";
import { siblingLinks } from "@/content/internalLinks";
import { faqJsonLd, PAGES } from "@/content/seo";

export default function Faq() {
  return (
    <MarketingLayout
      title={PAGES.faq.title}
      description={PAGES.faq.description}
      path={PAGES.faq.path}
      jsonLd={faqJsonLd}
      crumbs={[
        { label: "Home", to: "/" },
        { label: "FAQ", to: PAGES.faq.path },
      ]}
      related={siblingLinks(PAGES.faq.path, [
        { to: "/features/#habits", label: "Habit presets" },
        { to: "/features/#analytics", label: "Free and Pro analytics" },
        { to: "/features/#community", label: "Community seed floor" },
        { to: "/features/#coaches", label: "Coaches, separate from Pro" },
        { to: "/terms#health-disclaimer", label: "Health disclaimer in the Terms" },
      ])}
    >
      <header className="mb-10">
        <h1 className="text-4xl md:text-6xl font-oswald font-bold uppercase tracking-tight leading-[1.05] mb-6">
          Frequently asked questions
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Straight answers about habits, progress analytics, the community seed floor, coaches, the free account, and Pro. The homepage pricing section uses the same offer: free with no card, Pro at $14.99/mo or $149.99/yr, and a 7-day Pro trial that requires a card.{" "}
          <Link to={PAGES.features.path} className="text-primary underline underline-offset-4">Read the features</Link>
          {" · "}
          <Link to={PAGES.howItWorks.path} className="text-primary underline underline-offset-4">How it works</Link>
          {" · "}
          <Link to={PAGES.compare.path} className="text-primary underline underline-offset-4">Compare</Link>
          {" · "}
          <Link to={PAGES.guides.path} className="text-primary underline underline-offset-4">Guides</Link>.
        </p>
      </header>
      <div className="space-y-8">
        {FAQ_ITEMS.map((item) => (
          <section key={item.id} aria-labelledby={`faq-${item.id}`}>
            <h2 id={`faq-${item.id}`} className="font-oswald uppercase tracking-wide text-xl text-white scroll-mt-32">
              {item.q}
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">{item.a}</p>
            {item.links && item.links.length > 0 && (
              <ul className="mt-3 flex flex-col gap-1">
                {item.links.map((link) => (
                  <li key={link.to}>
                    <Link to={link.to} className="text-primary underline underline-offset-4">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>
    </MarketingLayout>
  );
}
