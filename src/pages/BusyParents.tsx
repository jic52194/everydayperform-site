import { Link } from "react-router-dom";
import { MarketingLayout } from "@/components/MarketingLayout";
import { busyParentsJsonLd, PAGES, PRICING_HASH } from "@/content/seo";

export default function BusyParents() {
  return (
    <MarketingLayout
      title={PAGES.busyParents.title}
      description={PAGES.busyParents.description}
      path={PAGES.busyParents.path}
      ogType={PAGES.busyParents.ogType}
      jsonLd={busyParentsJsonLd}
      crumbs={[
        { label: "Home", to: "/" },
        { label: "Guides", to: PAGES.guides.path },
        { label: "Habit tracker for busy parents", to: PAGES.busyParents.path },
      ]}
      related={[
        { to: PAGES.fiveMinuteWorkouts.path, label: "5-minute workouts" },
        { to: PAGES.fiveMinuteDay.path, label: "A five-minute day" },
        { to: PAGES.features.path, label: "Features" },
        { to: PRICING_HASH, label: "Free and Pro pricing" },
      ]}
    >
      <header className="mb-8">
        <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-4">Guide</p>
        <h1 className="text-4xl md:text-6xl font-oswald font-bold uppercase tracking-tight leading-[1.05] mb-6">
          Habit tracker for busy parents
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Parenting does not leave you a clean hour. Everyday Performance is a habit tracker built
          for the days that fall apart — tiny daily habits, a streak that survives a missed day, and
          short workouts you can finish between everything else.
        </p>
      </header>
      <div className="space-y-8 text-muted-foreground leading-relaxed">
        <section>
          <h2 className="font-oswald uppercase tracking-wide text-2xl text-white mb-3">Start free, no card</h2>
          <p>
            A free account does not require a card. You pick two or three small habits and log them
            each day. Pro is optional — $14.99/mo or $149.99/yr ($12.50 per month effective), and the
            7-day Pro trial requires a card and auto-renews unless you cancel in account settings.{" "}
            <Link to={PRICING_HASH} className="text-primary underline underline-offset-4">See Free and Pro</Link>.
          </p>
        </section>
        <section>
          <h2 className="font-oswald uppercase tracking-wide text-2xl text-white mb-3">Pick habits small enough for your worst day</h2>
          <p>
            The point is habits you can finish while a toddler pulls at your leg: a glass of water, a
            short walk, two minutes of mobility, a few breaths. Checking one box is a finished day. The
            tracker rewards showing up, not a perfect routine.
          </p>
        </section>
        <section>
          <h2 className="font-oswald uppercase tracking-wide text-2xl text-white mb-3">Streaks that forgive a missed day</h2>
          <p>
            Miss a day and the plan is meant to restart — you open the app and complete one habit. A
            missed day does not wipe the account or mean you failed. That comeback is part of{" "}
            <Link to={PAGES.howItWorks.path} className="text-primary underline underline-offset-4">how the product works</Link>,
            not a recovery mode you have to earn.
          </p>
        </section>
        <section>
          <h2 className="font-oswald uppercase tracking-wide text-2xl text-white mb-3">Short workouts when the minutes are real</h2>
          <p>
            A short, equipment-optional workout can sit next to the habit when you have the time, and
            step aside when you do not. Bodyweight is enough.{" "}
            <Link to={PAGES.fiveMinuteWorkouts.path} className="text-primary underline underline-offset-4">See 5-minute workouts</Link>.
          </p>
        </section>
        <section>
          <h2 className="font-oswald uppercase tracking-wide text-2xl text-white mb-3">What this guide will not tell you</h2>
          <p>
            It will not clear you for exercise, prescribe a diet, or promise a change in your body.
            Stop if you feel pain, dizziness, or anything that concerns you, and talk with a clinician
            before you start. The full wording is in the{" "}
            <Link to="/terms#health-disclaimer" className="text-primary underline underline-offset-4">health disclaimer</Link>.
          </p>
        </section>
      </div>
    </MarketingLayout>
  );
}
