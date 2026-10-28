import { Link } from "react-router-dom";
import { MarketingLayout } from "@/components/MarketingLayout";
import { professionalsJsonLd, PAGES, PRICING_HASH } from "@/content/seo";

export default function Professionals() {
  return (
    <MarketingLayout
      title={PAGES.professionals.title}
      description={PAGES.professionals.description}
      path={PAGES.professionals.path}
      ogType={PAGES.professionals.ogType}
      jsonLd={professionalsJsonLd}
      crumbs={[
        { label: "Home", to: "/" },
        { label: "Guides", to: PAGES.guides.path },
        { label: "Workout app for busy professionals", to: PAGES.professionals.path },
      ]}
      related={[
        { to: PAGES.entrepreneurs.path, label: "For entrepreneurs" },
        { to: PAGES.fiveMinuteWorkouts.path, label: "5-minute workouts" },
        { to: PAGES.consistency.path, label: "How to stay consistent" },
        { to: PRICING_HASH, label: "Free and Pro pricing" },
      ]}
    >
      <header className="mb-8">
        <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-4">Guide</p>
        <h1 className="text-4xl md:text-6xl font-oswald font-bold uppercase tracking-tight leading-[1.05] mb-6">
          Workout app for busy professionals
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Back-to-back meetings don't leave a clean training window. Everyday Performance is a workout
          app for busy professionals: short, trainable sessions, habits you can finish between calls, and
          progress that quietly compounds.
        </p>
      </header>
      <div className="space-y-8 text-muted-foreground leading-relaxed">
        <section>
          <h2 className="font-oswald uppercase tracking-wide text-2xl text-white mb-3">Train in the time you actually have</h2>
          <p>
            Log sessions with sets, RPE, duration, and notes — or keep it to one tap. Bodyweight works
            when you're between meetings; equipment is optional.{" "}
            <Link to={PAGES.fiveMinuteWorkouts.path} className="text-primary underline underline-offset-4">See 5-minute workouts</Link>.
          </p>
        </section>
        <section>
          <h2 className="font-oswald uppercase tracking-wide text-2xl text-white mb-3">Habits that fit a workday</h2>
          <p>
            Stack small habits onto what you already do — water at your desk, a walk between calls, two
            minutes of mobility. Checking one box keeps the streak and the identity.
          </p>
        </section>
        <section>
          <h2 className="font-oswald uppercase tracking-wide text-2xl text-white mb-3">Progress you can see</h2>
          <p>
            Streaks, XP, badges, a consistency calendar, and weekly recaps turn small days into momentum.
            Workouts and streaks stay private unless you opt in to share them. A free account needs no
            card; Pro is $14.99/mo or $149.99/yr.{" "}
            <Link to={PRICING_HASH} className="text-primary underline underline-offset-4">See Free and Pro</Link>.
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
