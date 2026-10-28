import { Link } from "react-router-dom";
import { MarketingLayout } from "@/components/MarketingLayout";
import { consistencyJsonLd, PAGES, PRICING_HASH } from "@/content/seo";

export default function Consistency() {
  return (
    <MarketingLayout
      title={PAGES.consistency.title}
      description={PAGES.consistency.description}
      path={PAGES.consistency.path}
      ogType={PAGES.consistency.ogType}
      jsonLd={consistencyJsonLd}
      crumbs={[
        { label: "Home", to: "/" },
        { label: "Guides", to: PAGES.guides.path },
        { label: "How to stay consistent", to: PAGES.consistency.path },
      ]}
      related={[
        { to: PAGES.streakApp.path, label: "A habit streak app" },
        { to: PAGES.fiveMinuteDay.path, label: "A five-minute day" },
        { to: PAGES.howItWorks.path, label: "How it works" },
        { to: PRICING_HASH, label: "Free and Pro pricing" },
      ]}
    >
      <header className="mb-8">
        <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-4">Guide</p>
        <h1 className="text-4xl md:text-6xl font-oswald font-bold uppercase tracking-tight leading-[1.05] mb-6">
          How to stay consistent with workouts
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Consistency isn't a motivation problem — motivation always runs out. It's a systems problem.
          Here's the approach Everyday Performance is built around, and how the app makes it easier to
          keep going when you don't feel like it.
        </p>
      </header>
      <div className="space-y-8 text-muted-foreground leading-relaxed">
        <section>
          <h2 className="font-oswald uppercase tracking-wide text-2xl text-white mb-3">Shrink the habit until it's unskippable</h2>
          <p>
            Pick an action small enough to do on your worst day. A two-minute win keeps the chain alive,
            and the chain is what builds the identity. A free account does not require a card.{" "}
            <Link to={PRICING_HASH} className="text-primary underline underline-offset-4">See Free and Pro</Link>.
          </p>
        </section>
        <section>
          <h2 className="font-oswald uppercase tracking-wide text-2xl text-white mb-3">Make showing up the win</h2>
          <p>
            Streaks, XP, and levels reward the act of logging, not a perfect session. When the scoreboard
            pays you for showing up, you show up more — even on the days you'd normally skip.
          </p>
        </section>
        <section>
          <h2 className="font-oswald uppercase tracking-wide text-2xl text-white mb-3">Plan for the miss</h2>
          <p>
            You will miss a day. Consistency is really about how fast you restart. The plan is designed
            to come back — one habit, and you're going again. Read{" "}
            <Link to={PAGES.howItWorks.path} className="text-primary underline underline-offset-4">how the product works</Link>.
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
