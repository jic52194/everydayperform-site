import { Link } from "react-router-dom";
import { MarketingLayout } from "@/components/MarketingLayout";
import { streakTrackerJsonLd, PAGES, PRICING_HASH } from "@/content/seo";

export default function StreakTracker() {
  return (
    <MarketingLayout
      title={PAGES.streakTracker.title}
      description={PAGES.streakTracker.description}
      path={PAGES.streakTracker.path}
      ogType={PAGES.streakTracker.ogType}
      jsonLd={streakTrackerJsonLd}
      crumbs={[
        { label: "Home", to: "/" },
        { label: "Guides", to: PAGES.guides.path },
        { label: "A workout streak tracker", to: PAGES.streakTracker.path },
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
          A workout streak tracker
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          A streak is the simplest proof you're becoming someone who trains. Everyday Performance
          tracks your workout streak so showing up — not a perfect session — is what counts, and one
          missed day doesn't wipe it out.
        </p>
      </header>
      <div className="space-y-8 text-muted-foreground leading-relaxed">
        <section>
          <h2 className="font-oswald uppercase tracking-wide text-2xl text-white mb-3">Log a session, keep the streak</h2>
          <p>
            Record a workout with sets, RPE, duration, and notes, or a single tap. The streak grows,
            XP and levels follow. A free account does not require a card.{" "}
            <Link to={PRICING_HASH} className="text-primary underline underline-offset-4">See Free and Pro</Link>.
          </p>
        </section>
        <section>
          <h2 className="font-oswald uppercase tracking-wide text-2xl text-white mb-3">A streak built to survive a miss</h2>
          <p>
            Life interrupts. The tracker is built to restart, not to punish — complete one thing and
            you're going again. See{" "}
            <Link to={PAGES.streakApp.path} className="text-primary underline underline-offset-4">how the streak forgives a missed day</Link>.
          </p>
        </section>
        <section>
          <h2 className="font-oswald uppercase tracking-wide text-2xl text-white mb-3">Watch it compound</h2>
          <p>
            A consistency calendar, weekly recaps, and personal records turn a run of small days into
            visible momentum. Workouts and streaks stay private unless you opt in to share them.
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
