import { Link } from "react-router-dom";
import { MarketingLayout } from "@/components/MarketingLayout";
import { accountabilityJsonLd, PAGES, PRICING_HASH } from "@/content/seo";

export default function Accountability() {
  return (
    <MarketingLayout
      title={PAGES.accountability.title}
      description={PAGES.accountability.description}
      path={PAGES.accountability.path}
      ogType={PAGES.accountability.ogType}
      jsonLd={accountabilityJsonLd}
      crumbs={[
        { label: "Home", to: "/" },
        { label: "Guides", to: PAGES.guides.path },
        { label: "An accountability fitness app", to: PAGES.accountability.path },
      ]}
      related={[
        { to: PAGES.streakApp.path, label: "A habit streak app" },
        { to: PAGES.consistency.path, label: "How to stay consistent" },
        { to: PAGES.features.path, label: "Features" },
        { to: PRICING_HASH, label: "Free and Pro pricing" },
      ]}
    >
      <header className="mb-8">
        <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-4">Guide</p>
        <h1 className="text-4xl md:text-6xl font-oswald font-bold uppercase tracking-tight leading-[1.05] mb-6">
          An accountability fitness app
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Willpower is unreliable; being seen is not. Everyday Performance builds accountability in —
          friends, squads, weekly leagues, and an optional coach who can actually see your workouts,
          habits, and streaks.
        </p>
      </header>
      <div className="space-y-8 text-muted-foreground leading-relaxed">
        <section>
          <h2 className="font-oswald uppercase tracking-wide text-2xl text-white mb-3">Friends, squads, and weekly leagues</h2>
          <p>
            Add friends, join a squad, and climb a weekly league. A little friendly competition turns a
            solo grind into something you show up for. A free account does not require a card.{" "}
            <Link to={PRICING_HASH} className="text-primary underline underline-offset-4">See Free and Pro</Link>.
          </p>
        </section>
        <section>
          <h2 className="font-oswald uppercase tracking-wide text-2xl text-white mb-3">A coach who can see the work</h2>
          <p>
            Connect with a coach and they can assign programs, message you, run weekly check-ins, and
            see your workouts, habits, and streaks — real accountability, not a pep talk. Coach plans
            are a separate purchase and are not consumer Pro.
          </p>
        </section>
        <section>
          <h2 className="font-oswald uppercase tracking-wide text-2xl text-white mb-3">You control what's shared</h2>
          <p>
            Workouts and streaks stay private unless you opt in to share them. Accountability is a
            choice you make, not a default that exposes you.
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
