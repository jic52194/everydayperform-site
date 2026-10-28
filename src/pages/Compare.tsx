import { Link } from "react-router-dom";
import { MarketingLayout } from "@/components/MarketingLayout";
import { compareJsonLd, PAGES, PRICING_HASH } from "@/content/seo";

const comparisons = [
  {
    title: "A long workout catalog",
    typical: "A large library often assumes you have an open hour, a quiet room, and the energy to pick a session. If you do not, the catalog sits there unused.",
    here: "Everyday Performance starts with short workouts and habits you can finish, including bodyweight work when you have no equipment. Five minutes is a valid place to begin.",
  },
  {
    title: "A habit checklist with no training",
    typical: "A checklist can track a box and still leave the workout question unanswered. You end up with two apps and no plan for the day.",
    here: "Habits and short workouts live in one daily plan. You can use habits, workouts, or both, based on the time you actually have.",
  },
  {
    title: "An all-or-nothing program",
    typical: "Miss a day and the program treats you as behind. A lot of people quit at the first broken week.",
    here: "A missed day is expected. Streaks, resets, and a flexible plan are there so you can restart with one small win instead of rebuilding a perfect routine.",
  },
  {
    title: "Hiring a coach",
    typical: "A coach is a separate relationship, with a separate price and a separate schedule.",
    here: "Consumer Pro is the self-serve paid plan: $14.99/mo or $119/yr on the website. Coach plans are a separate purchase and are not consumer Pro. Do not read the Pro price as a coaching package.",
  },
];

export default function Compare() {
  return (
    <MarketingLayout
      title={PAGES.compare.title}
      description={PAGES.compare.description}
      path={PAGES.compare.path}
      jsonLd={compareJsonLd}
      crumbs={[
        { label: "Home", to: "/" },
        { label: "Compare", to: PAGES.compare.path },
      ]}
      related={[
        { to: PAGES.features.path, label: "Features" },
        { to: PRICING_HASH, label: "Free and Pro pricing" },
        { to: PAGES.faq.path, label: "FAQ" },
        { to: PAGES.fiveMinuteDay.path, label: "Guide: a five-minute day" },
      ]}
    >
      <header className="mb-10">
        <h1 className="text-4xl md:text-6xl font-oswald font-bold uppercase tracking-tight leading-[1.05] mb-6">
          How Everyday Performance compares
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          This page describes categories of tools, not named products. It is not a review, a ranking, or a claim that another company's trademark belongs to us. The only member note on this site is from Jared C on the homepage. We do not publish a star rating or a user count.
        </p>
      </header>
      <div className="space-y-6">
        {comparisons.map((item) => (
          <section key={item.title} className="bg-[#0e0e0e] border border-white/10 rounded-[2rem] p-7">
            <h2 className="font-oswald uppercase tracking-wide text-2xl text-white mb-4">{item.title}</h2>
            <h3 className="text-sm uppercase tracking-widest text-muted-foreground mb-2">The usual pattern</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">{item.typical}</p>
            <h3 className="text-sm uppercase tracking-widest text-primary mb-2">Everyday Performance</h3>
            <p className="text-sm text-foreground/90 leading-relaxed">{item.here}</p>
          </section>
        ))}
      </div>
      <section className="mt-8">
        <h2 className="font-oswald uppercase tracking-wide text-2xl text-white mb-3">What this page will not claim</h2>
        <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
          <li>No position against a named brand, and no use of another company's name to describe our offer.</li>
          <li>No star rating, review count, or user total.</li>
          <li>No promise of a specific body, medical, or performance outcome.</li>
          <li>
            No suggestion that website Pro and an iPhone subscription are the same price.{" "}
            <Link to={PAGES.faq.path} className="text-primary underline underline-offset-4">The FAQ explains the difference</Link>.
          </li>
        </ul>
      </section>
    </MarketingLayout>
  );
}
