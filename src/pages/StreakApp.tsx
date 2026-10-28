import { Link } from "react-router-dom";
import { MarketingLayout } from "@/components/MarketingLayout";
import { streakAppJsonLd, PAGES, PRICING_HASH } from "@/content/seo";

export default function StreakApp() {
  return (
    <MarketingLayout
      title={PAGES.streakApp.title}
      description={PAGES.streakApp.description}
      path={PAGES.streakApp.path}
      ogType={PAGES.streakApp.ogType}
      jsonLd={streakAppJsonLd}
      crumbs={[
        { label: "Home", to: "/" },
        { label: "Guides", to: PAGES.guides.path },
        { label: "A habit streak app", to: PAGES.streakApp.path },
      ]}
      related={[
        { to: PAGES.consistency.path, label: "How to stay consistent" },
        { to: PAGES.busyParents.path, label: "Habit tracker for busy parents" },
        { to: PAGES.features.path, label: "Features" },
        { to: PRICING_HASH, label: "Free and Pro pricing" },
      ]}
    >
      <header className="mb-8">
        <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-4">Guide</p>
        <h1 className="text-4xl md:text-6xl font-oswald font-bold uppercase tracking-tight leading-[1.05] mb-6">
          A habit streak app that forgives a missed day
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Most streak apps punish one slip — miss a day and months vanish, so you quit. Everyday
          Performance is a habit streak app built the opposite way: the streak is there to pull you
          back, not to shame you.
        </p>
      </header>
      <div className="space-y-8 text-muted-foreground leading-relaxed">
        <section>
          <h2 className="font-oswald uppercase tracking-wide text-2xl text-white mb-3">A streak you can keep</h2>
          <p>
            Log a habit or a short workout and the streak grows, with XP, badges, and levels recording
            that you showed up. It's a record of consistency, not a grade of the perfect week. A free
            account does not require a card.{" "}
            <Link to={PRICING_HASH} className="text-primary underline underline-offset-4">See Free and Pro</Link>.
          </p>
        </section>
        <section>
          <h2 className="font-oswald uppercase tracking-wide text-2xl text-white mb-3">One missed day shouldn't end it</h2>
          <p>
            The plan is built to restart — you open the app and complete one small habit. Missing a day
            doesn't erase your progress or mean you failed. The comeback is part of{" "}
            <Link to={PAGES.howItWorks.path} className="text-primary underline underline-offset-4">how the product works</Link>.
          </p>
        </section>
        <section>
          <h2 className="font-oswald uppercase tracking-wide text-2xl text-white mb-3">Pick habits small enough to never break</h2>
          <p>
            Choose two or three you could do on your worst day — water, a walk, mobility, breathing.
            The smaller the habit, the longer the streak, and the streak is what builds the identity.
          </p>
        </section>
        <section>
          <h2 className="font-oswald uppercase tracking-wide text-2xl text-white mb-3">Before you start</h2>
          <p>
            This isn't medical advice. Stop if you feel pain, dizziness, or anything that concerns you,
            and talk with a clinician first. Full wording is in the{" "}
            <Link to="/terms#health-disclaimer" className="text-primary underline underline-offset-4">health disclaimer</Link>.
          </p>
        </section>
      </div>
    </MarketingLayout>
  );
}
