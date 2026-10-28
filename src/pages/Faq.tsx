import { MarketingLayout } from "@/components/MarketingLayout";
import { FAQ_ITEMS } from "@/content/faq";
import { faqJsonLd, PAGES, PRICING_HASH } from "@/content/seo";

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
      related={[
        { to: PRICING_HASH, label: "Free and Pro pricing" },
        { to: PAGES.features.path, label: "Features" },
        { to: PAGES.howItWorks.path, label: "How it works" },
        { to: "/terms#health-disclaimer", label: "Health disclaimer in the Terms" },
      ]}
    >
      <header className="mb-10">
        <h1 className="text-4xl md:text-6xl font-oswald font-bold uppercase tracking-tight leading-[1.05] mb-6">
          Frequently asked questions
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Straight answers about time, equipment, the free account, Pro, and what this product will not claim. The homepage pricing section uses the same offer.
        </p>
      </header>
      <div className="space-y-8">
        {FAQ_ITEMS.map((item) => (
          <section key={item.id} aria-labelledby={`faq-${item.id}`}>
            <h2 id={`faq-${item.id}`} className="font-oswald uppercase tracking-wide text-xl text-white scroll-mt-32">
              {item.q}
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">{item.a}</p>
          </section>
        ))}
      </div>
    </MarketingLayout>
  );
}
