import { Link } from "react-router-dom";
import { MarketingLayout } from "@/components/MarketingLayout";
import { guidesJsonLd, PAGES } from "@/content/seo";

export default function Guides() {
  return (
    <MarketingLayout
      title={PAGES.guides.title}
      description={PAGES.guides.description}
      path={PAGES.guides.path}
      jsonLd={guidesJsonLd}
      crumbs={[
        { label: "Home", to: "/" },
        { label: "Guides", to: PAGES.guides.path },
      ]}
      related={[
        { to: PAGES.howItWorks.path, label: "How it works" },
        { to: PAGES.features.path, label: "Features" },
        { to: PAGES.faq.path, label: "FAQ" },
      ]}
    >
      <header className="mb-10">
        <h1 className="text-4xl md:text-6xl font-oswald font-bold uppercase tracking-tight leading-[1.05] mb-6">
          Guides
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Short, practical notes for using Everyday Performance on a real schedule. These are product guides, not medical protocols.
        </p>
      </header>
      <article className="bg-[#0e0e0e] border border-white/10 rounded-[2rem] p-7">
        <h2 className="font-oswald uppercase tracking-wide text-2xl text-white mb-3">
          <Link to={PAGES.fiveMinuteDay.path} className="hover:text-primary">
            A five-minute day
          </Link>
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          What to do in the app when you only have a few minutes, including how to come back after a missed day.
        </p>
        <Link to={PAGES.fiveMinuteDay.path} className="text-primary underline underline-offset-4">
          Read the guide
        </Link>
      </article>
    </MarketingLayout>
  );
}
