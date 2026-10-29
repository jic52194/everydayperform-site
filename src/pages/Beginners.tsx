import { Link } from "react-router-dom";
import { MarketingLayout } from "@/components/MarketingLayout";
import { beginnersJsonLd, PAGES, PRICING_HASH } from "@/content/seo";

export default function Beginners() {
  return (
    <MarketingLayout
      title={PAGES.beginners.title}
      description={PAGES.beginners.description}
      path={PAGES.beginners.path}
      ogType={PAGES.beginners.ogType}
      jsonLd={beginnersJsonLd}
      crumbs={[
        { label: "Home", to: "/" },
        { label: "Guides", to: PAGES.guides.path },
        { label: "A fitness app for beginners", to: PAGES.beginners.path },
      ]}
      related={[
        { to: PAGES.noEquipment.path, label: "Home workout, no equipment" },
        { to: PAGES.fiveMinuteDay.path, label: "A five-minute day" },
        { to: PAGES.simpleHabit.path, label: "A simple habit app" },
        { to: PRICING_HASH, label: "Free and Pro pricing" },
      ]}
    >
      <header className="mb-8">
        <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-4">Guide</p>
        <h1 className="text-4xl md:text-6xl font-oswald font-bold uppercase tracking-tight leading-[1.05] mb-6">
          A fitness app for beginners
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Starting is the hardest part, and most apps assume you already train. Everyday Performance
          is built for day one: one small habit, one short workout, no experience and no equipment
          required — then build from there.
        </p>
      </header>
      <div className="space-y-8 text-muted-foreground leading-relaxed">
        <section>
          <h2 className="font-oswald uppercase tracking-wide text-2xl text-white mb-3">Start with one thing</h2>
          <p>
            Pick a single habit — water, a short walk, a few minutes of movement — and log it. One
            finished action is a real start, and the app treats it that way. A free account does not
            require a card.{" "}
            <Link to={PRICING_HASH} className="text-primary underline underline-offset-4">See Free and Pro</Link>.
          </p>
        </section>
        <section>
          <h2 className="font-oswald uppercase tracking-wide text-2xl text-white mb-3">No equipment, no experience</h2>
          <p>
            Bodyweight is plenty to begin. Scale the session to your level and the minutes you have.{" "}
            <Link to={PAGES.noEquipment.path} className="text-primary underline underline-offset-4">See home workouts with no equipment</Link>.
          </p>
        </section>
        <section>
          <h2 className="font-oswald uppercase tracking-wide text-2xl text-white mb-3">Build at your pace</h2>
          <p>
            Streaks, XP, and levels reward consistency, not intensity. As showing up gets easier, you
            add a little more — guided programs are there when you want structure.
          </p>
        </section>
        <section>
          <h2 className="font-oswald uppercase tracking-wide text-2xl text-white mb-3">Before you start</h2>
          <p>
            This isn't medical advice and won't clear you for exercise. Stop if you feel pain,
            dizziness, or anything that concerns you, and talk with a clinician first — especially if
            you're new to exercise. Full wording is in the{" "}
            <Link to="/terms#health-disclaimer" className="text-primary underline underline-offset-4">health disclaimer</Link>.
          </p>
        </section>
      </div>
    </MarketingLayout>
  );
}
