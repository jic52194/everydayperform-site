import { Link } from "react-router-dom";
import { MarketingLayout } from "@/components/MarketingLayout";
import { dailyTrackerJsonLd, PAGES, PRICING_HASH } from "@/content/seo";

export default function DailyTracker() {
  return (
    <MarketingLayout
      title={PAGES.dailyTracker.title}
      description={PAGES.dailyTracker.description}
      path={PAGES.dailyTracker.path}
      ogType={PAGES.dailyTracker.ogType}
      jsonLd={dailyTrackerJsonLd}
      crumbs={[
        { label: "Home", to: "/" },
        { label: "Guides", to: PAGES.guides.path },
        { label: "A daily habit tracker", to: PAGES.dailyTracker.path },
      ]}
      related={[
        { to: PAGES.simpleHabit.path, label: "A simple habit app" },
        { to: PAGES.busyParents.path, label: "Habit tracker for busy parents" },
        { to: PAGES.consistency.path, label: "How to stay consistent" },
        { to: PRICING_HASH, label: "Free and Pro pricing" },
      ]}
    >
      <header className="mb-8">
        <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-4">Guide</p>
        <h1 className="text-4xl md:text-6xl font-oswald font-bold uppercase tracking-tight leading-[1.05] mb-6">
          A daily habit tracker
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          A daily habit tracker only works if you actually open it every day. Everyday Performance is
          built around one small daily loop — log your habits, see the calendar fill in, and keep a
          streak that forgives the occasional miss.
        </p>
      </header>
      <div className="space-y-8 text-muted-foreground leading-relaxed">
        <section>
          <h2 className="font-oswald uppercase tracking-wide text-2xl text-white mb-3">One small loop, every day</h2>
          <p>
            Open the app, tick your habits, done. The loop is deliberately short so it survives a busy
            day. A free account does not require a card.{" "}
            <Link to={PRICING_HASH} className="text-primary underline underline-offset-4">See Free and Pro</Link>.
          </p>
        </section>
        <section>
          <h2 className="font-oswald uppercase tracking-wide text-2xl text-white mb-3">See the pattern</h2>
          <p>
            A consistency calendar shows which days you showed up, and weekly recaps turn the dots into
            momentum. You can see your pattern instead of guessing at it.
          </p>
        </section>
        <section>
          <h2 className="font-oswald uppercase tracking-wide text-2xl text-white mb-3">A streak that forgives</h2>
          <p>
            Miss a day and the tracker is built to restart, not reset to zero. See{" "}
            <Link to={PAGES.streakApp.path} className="text-primary underline underline-offset-4">how the streak forgives a missed day</Link>.
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
