import { Link } from "react-router-dom";
import { MarketingLayout } from "@/components/MarketingLayout";
import { siblingLinks } from "@/content/internalLinks";
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
      related={siblingLinks(PAGES.guides.path, [
        { to: "/features/#habits", label: "Habit presets" },
        { to: "/features/#analytics", label: "Free and Pro analytics" },
        { to: "/features/#community", label: "Community seed floor" },
        { to: "/faq/#faq-miss", label: "What happens if you miss a day" },
      ])}
    >
      <header className="mb-10">
        <h1 className="text-4xl md:text-6xl font-oswald font-bold uppercase tracking-tight leading-[1.05] mb-6">
          Guides
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Short, practical notes for using Everyday Performance on a real schedule. These are product guides, not medical protocols. A free account does not require a card. Pro is $14.99/mo or $149.99/yr, and the 7-day Pro trial requires a card.
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
      <section className="mt-8">
        <h2 className="font-oswald uppercase tracking-wide text-2xl text-white mb-3">Read the product next</h2>
        <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
          <li>
            <Link to={PAGES.howItWorks.path} className="text-primary underline underline-offset-4">How the daily plan works</Link>
            {", including a restart after a missed day."}
          </li>
          <li>
            <Link to="/features/#habits" className="text-primary underline underline-offset-4">Habit presets</Link>
            {" and "}
            <Link to="/features/#workouts" className="text-primary underline underline-offset-4">short workouts</Link>.
          </li>
          <li>
            <Link to="/features/#analytics" className="text-primary underline underline-offset-4">Free streaks versus Pro analytics</Link>.
          </li>
          <li>
            <Link to="/features/#community" className="text-primary underline underline-offset-4">The community seed floor</Link>
            {" and "}
            <Link to="/features/#coaches" className="text-primary underline underline-offset-4">coaches, which are separate from Pro</Link>.
          </li>
          <li>
            <Link to={PAGES.compare.path} className="text-primary underline underline-offset-4">Compare</Link>
            {" this with a catalog, a checklist, or a public feed. "}
            <Link to={PAGES.faq.path} className="text-primary underline underline-offset-4">The FAQ</Link>
            {" answers pricing questions."}
          </li>
        </ul>
      </section>
    </MarketingLayout>
  );
}
