import { Link } from "react-router-dom";
import { MarketingLayout } from "@/components/MarketingLayout";
import { fiveMinuteWorkoutsJsonLd, PAGES, PRICING_HASH } from "@/content/seo";

export default function FiveMinuteWorkouts() {
  return (
    <MarketingLayout
      title={PAGES.fiveMinuteWorkouts.title}
      description={PAGES.fiveMinuteWorkouts.description}
      path={PAGES.fiveMinuteWorkouts.path}
      ogType={PAGES.fiveMinuteWorkouts.ogType}
      jsonLd={fiveMinuteWorkoutsJsonLd}
      crumbs={[
        { label: "Home", to: "/" },
        { label: "Guides", to: PAGES.guides.path },
        { label: "5-minute workouts", to: PAGES.fiveMinuteWorkouts.path },
      ]}
      related={[
        { to: PAGES.busyParents.path, label: "Habit tracker for busy parents" },
        { to: PAGES.fiveMinuteDay.path, label: "A five-minute day" },
        { to: PAGES.features.path, label: "Features" },
        { to: PRICING_HASH, label: "Free and Pro pricing" },
      ]}
    >
      <header className="mb-8">
        <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-4">Guide</p>
        <h1 className="text-4xl md:text-6xl font-oswald font-bold uppercase tracking-tight leading-[1.05] mb-6">
          5-minute workouts
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          No time is the most common reason a plan dies. Everyday Performance is built so a 5-minute
          workout still counts — equipment optional, logged, and protecting your streak. Here's how to
          make a few minutes actually land.
        </p>
      </header>
      <div className="space-y-8 text-muted-foreground leading-relaxed">
        <section>
          <h2 className="font-oswald uppercase tracking-wide text-2xl text-white mb-3">Why 5 minutes counts here</h2>
          <p>
            The system records consistency, not the length of the session. A short workout you finish
            beats a 45-minute plan you skip. Log it and the streak, XP, and levels move — the same as a
            long session, just shorter.{" "}
            <Link to={PAGES.howItWorks.path} className="text-primary underline underline-offset-4">See how the daily plan works</Link>.
          </p>
        </section>
        <section>
          <h2 className="font-oswald uppercase tracking-wide text-2xl text-white mb-3">No equipment needed</h2>
          <p>
            Bodyweight is enough: a short circuit of squats, push-ups to your level, a plank, and a
            brisk walk. Mobility and stretching count too. If you have equipment, your plan can use it,
            but it is never required.
          </p>
        </section>
        <section>
          <h2 className="font-oswald uppercase tracking-wide text-2xl text-white mb-3">Fit it into a packed day</h2>
          <p>
            Stack it on something you already do — before the shower, during a call you can pace
            through, while dinner cooks. Professionals and parents don't need a gym window; they need a
            session that fits the five minutes they actually have.{" "}
            <Link to={PAGES.busyParents.path} className="text-primary underline underline-offset-4">See the busy-parent plan</Link>.
          </p>
        </section>
        <section>
          <h2 className="font-oswald uppercase tracking-wide text-2xl text-white mb-3">Log it, then keep the streak</h2>
          <p>
            Record the workout with sets, RPE, duration, and notes, or keep it to a single tap.
            Workouts and streaks stay private unless you opt in to share them. A free account does not
            require a card; Pro is optional at $14.99/mo or $149.99/yr with a 7-day trial that requires
            a card.{" "}
            <Link to={PRICING_HASH} className="text-primary underline underline-offset-4">See Free and Pro</Link>.
          </p>
        </section>
        <section>
          <h2 className="font-oswald uppercase tracking-wide text-2xl text-white mb-3">Before you start</h2>
          <p>
            This guide will not clear you for exercise or promise a result. Stop if you feel pain,
            dizziness, or anything that concerns you, and talk with a clinician before you start. The
            full wording is in the{" "}
            <Link to="/terms#health-disclaimer" className="text-primary underline underline-offset-4">health disclaimer</Link>.
          </p>
        </section>
      </div>
    </MarketingLayout>
  );
}
