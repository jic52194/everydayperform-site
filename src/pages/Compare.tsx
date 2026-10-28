import { Link } from "react-router-dom";
import { MarketingLayout } from "@/components/MarketingLayout";
import { siblingLinks } from "@/content/internalLinks";
import { compareJsonLd, PAGES, PRICING_HASH } from "@/content/seo";

const linkClass = "text-primary underline underline-offset-4";

const comparisons = [
  {
    id: "catalog",
    title: "A long workout catalog",
    typical: "A large library often assumes you have an open hour, a quiet room, and the energy to pick a session. If you do not, the catalog sits there unused.",
    here: (
      <>
        Everyday Performance starts with short workouts and habits you can finish, including bodyweight work when you have no equipment. Five minutes is a valid place to begin.{" "}
        <Link to={PAGES.fiveMinuteDay.path} className={linkClass}>Read the five-minute guide</Link>.
      </>
    ),
  },
  {
    id: "checklist",
    title: "A habit checklist with no training",
    typical: "A checklist can track a box and still leave the workout question unanswered. You end up with two apps and no plan for the day.",
    here: (
      <>
        Habits and short workouts live in one daily plan. You can use habits, workouts, or both, based on the time you actually have.{" "}
        <Link to="/features/#habits" className={linkClass}>See habit presets</Link>
        {" and "}
        <Link to="/features/#workouts" className={linkClass}>short workouts</Link>.
      </>
    ),
  },
  {
    id: "all-or-nothing",
    title: "An all-or-nothing program",
    typical: "Miss a day and the program treats you as behind. A lot of people quit at the first broken week.",
    here: (
      <>
        A missed day does not close the account. Streak freezes are built to turn on when a day is missed, so one miss does not have to erase the streak. Come back and complete one habit.{" "}
        <Link to="/how-it-works/#restart" className={linkClass}>How a restart works</Link>.
      </>
    ),
  },
  {
    id: "public-feed",
    title: "A public social feed",
    typical: "A public feed assumes you want strangers to see the workout, and it treats a crowd as the product.",
    here: (
      <>
        The community starts from a seed floor: a welcome, a friend request, and a place to reply. Coaches and guides on that floor are part of the product so the room is not empty. They are not a member count and not reviews. You can join the Morning Floor squad. Your workouts and streaks stay private unless you opt in.{" "}
        <Link to="/features/#community" className={linkClass}>Read how the floor works</Link>.
      </>
    ),
  },
  {
    id: "hiring-a-coach",
    title: "Hiring a coach",
    typical: "A coach is a separate relationship, with a separate price and a separate schedule.",
    here: (
      <>
        Consumer Pro is the self-serve paid plan: $14.99/mo or $149.99/yr on the website. It does not assign you a human coach. Coach plans are a separate purchase. A coach applies, and that application is reviewed. Do not read the Pro price as a coaching package.{" "}
        <Link to="/faq/#faq-coach" className={linkClass}>Coach FAQ</Link>.
      </>
    ),
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
      related={siblingLinks(PAGES.compare.path, [
        { to: "/features/#community", label: "Community seed floor" },
        { to: "/features/#analytics", label: "Free and Pro analytics" },
        { to: "/faq/#faq-coach", label: "Coach FAQ" },
      ])}
    >
      <header className="mb-10">
        <h1 className="text-4xl md:text-6xl font-oswald font-bold uppercase tracking-tight leading-[1.05] mb-6">
          How Everyday Performance compares
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          This page describes categories of tools, not named products. It is not a review, a ranking, or a claim that another company's trademark belongs to us. The only member note on this site is from Jared C on the homepage. We do not publish a star rating or a user count.{" "}
          <Link to={PAGES.features.path} className={linkClass}>Features</Link>
          {", "}
          <Link to={PAGES.howItWorks.path} className={linkClass}>how it works</Link>
          {", "}
          <Link to={PAGES.faq.path} className={linkClass}>the FAQ</Link>
          {", and "}
          <Link to={PAGES.guides.path} className={linkClass}>the guides</Link>
          {" are the pages that describe the product itself."}
        </p>
      </header>
      <div className="space-y-6">
        {comparisons.map((item) => (
          <section id={item.id} key={item.title} className="scroll-mt-32 bg-[#0e0e0e] border border-white/10 rounded-[2rem] p-7">
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
            <Link to="/faq/#faq-app-store" className={linkClass}>The FAQ explains the difference</Link>.{" "}
            <Link to={PRICING_HASH} className={linkClass}>Website prices are on the homepage</Link>.
          </li>
        </ul>
      </section>
    </MarketingLayout>
  );
}
