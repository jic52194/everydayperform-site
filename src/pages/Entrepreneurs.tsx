import { Link } from "react-router-dom";
import { MarketingLayout } from "@/components/MarketingLayout";
import { entrepreneursJsonLd, PAGES, PRICING_HASH } from "@/content/seo";

export default function Entrepreneurs() {
  return (
    <MarketingLayout
      title={PAGES.entrepreneurs.title}
      description={PAGES.entrepreneurs.description}
      path={PAGES.entrepreneurs.path}
      ogType={PAGES.entrepreneurs.ogType}
      jsonLd={entrepreneursJsonLd}
      crumbs={[
        { label: "Home", to: "/" },
        { label: "Guides", to: PAGES.guides.path },
        { label: "Workout app for entrepreneurs", to: PAGES.entrepreneurs.path },
      ]}
      related={[
        { to: PAGES.professionals.path, label: "For busy professionals" },
        { to: PAGES.fiveMinuteWorkouts.path, label: "5-minute workouts" },
        { to: PAGES.features.path, label: "Features" },
        { to: PRICING_HASH, label: "Free and Pro pricing" },
      ]}
    >
      <header className="mb-8">
        <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-4">Guide</p>
        <h1 className="text-4xl md:text-6xl font-oswald font-bold uppercase tracking-tight leading-[1.05] mb-6">
          Workout app for entrepreneurs
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Founders don't keep a fixed schedule — a launch, a fire, a flight. Everyday Performance is a
          workout and habit app built for weeks that refuse to stay planned: short sessions, tiny daily
          habits, and streaks that survive the chaos.
        </p>
      </header>
      <div className="space-y-8 text-muted-foreground leading-relaxed">
        <section>
          <h2 className="font-oswald uppercase tracking-wide text-2xl text-white mb-3">Built for an unpredictable calendar</h2>
          <p>
            The system rewards consistency, not a perfect block of gym time. Log a short session when a
            gap appears and keep the streak. A free account does not require a card.{" "}
            <Link to={PRICING_HASH} className="text-primary underline underline-offset-4">See Free and Pro</Link>.
          </p>
        </section>
        <section>
          <h2 className="font-oswald uppercase tracking-wide text-2xl text-white mb-3">Tiny habits that compound</h2>
          <p>
            Pick two or three habits small enough for your worst day — water, a walk, mobility, sleep.
            Checking one box is a finished day. Over a quarter, that compounding is the point, the same
            way it is in the business.
          </p>
        </section>
        <section>
          <h2 className="font-oswald uppercase tracking-wide text-2xl text-white mb-3">Restart without losing everything</h2>
          <p>
            A brutal week will cost you a day or two. The plan is meant to restart — open the app and
            complete one habit. Missing a day doesn't wipe your progress. That comeback is part of{" "}
            <Link to={PAGES.howItWorks.path} className="text-primary underline underline-offset-4">how the product works</Link>.
          </p>
        </section>
        <section>
          <h2 className="font-oswald uppercase tracking-wide text-2xl text-white mb-3">Before you start</h2>
          <p>
            This isn't medical advice and won't clear you for exercise. Stop if you feel pain, dizziness,
            or anything that concerns you, and talk with a clinician first. Full wording is in the{" "}
            <Link to="/terms#health-disclaimer" className="text-primary underline underline-offset-4">health disclaimer</Link>.
          </p>
        </section>
      </div>
    </MarketingLayout>
  );
}
