import { Link } from "react-router-dom";
import { MarketingLayout } from "@/components/MarketingLayout";
import { simpleHabitJsonLd, PAGES, PRICING_HASH } from "@/content/seo";

export default function SimpleHabit() {
  return (
    <MarketingLayout
      title={PAGES.simpleHabit.title}
      description={PAGES.simpleHabit.description}
      path={PAGES.simpleHabit.path}
      ogType={PAGES.simpleHabit.ogType}
      jsonLd={simpleHabitJsonLd}
      crumbs={[
        { label: "Home", to: "/" },
        { label: "Guides", to: PAGES.guides.path },
        { label: "A simple habit app", to: PAGES.simpleHabit.path },
      ]}
      related={[
        { to: PAGES.dailyTracker.path, label: "A daily habit tracker" },
        { to: PAGES.streakApp.path, label: "A habit streak app" },
        { to: PAGES.fiveMinuteDay.path, label: "A five-minute day" },
        { to: PRICING_HASH, label: "Free and Pro pricing" },
      ]}
    >
      <header className="mb-8">
        <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-4">Guide</p>
        <h1 className="text-4xl md:text-6xl font-oswald font-bold uppercase tracking-tight leading-[1.05] mb-6">
          A simple habit app
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Most habit apps bury you in setup, categories, and settings — and you quit before the habit
          sticks. Everyday Performance keeps it simple: pick a couple of habits, tap to log, and let a
          forgiving streak do the rest.
        </p>
      </header>
      <div className="space-y-8 text-muted-foreground leading-relaxed">
        <section>
          <h2 className="font-oswald uppercase tracking-wide text-2xl text-white mb-3">Two or three habits, that's it</h2>
          <p>
            Choose a small number you could do on your worst day. Fewer habits, done daily, beat a long
            list you abandon. A free account does not require a card.{" "}
            <Link to={PRICING_HASH} className="text-primary underline underline-offset-4">See Free and Pro</Link>.
          </p>
        </section>
        <section>
          <h2 className="font-oswald uppercase tracking-wide text-2xl text-white mb-3">Tap to log</h2>
          <p>
            Logging is one tap. No long forms, no friction between you and a finished day. The simpler
            it is, the more likely you keep it.
          </p>
        </section>
        <section>
          <h2 className="font-oswald uppercase tracking-wide text-2xl text-white mb-3">Forgiving by design</h2>
          <p>
            Miss a day and the plan restarts instead of resetting to zero. That's the whole point — a
            simple app you can actually keep. See{" "}
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
