import { Link } from "react-router-dom";
import { MarketingLayout } from "@/components/MarketingLayout";
import { noEquipmentJsonLd, PAGES, PRICING_HASH } from "@/content/seo";

export default function NoEquipment() {
  return (
    <MarketingLayout
      title={PAGES.noEquipment.title}
      description={PAGES.noEquipment.description}
      path={PAGES.noEquipment.path}
      ogType={PAGES.noEquipment.ogType}
      jsonLd={noEquipmentJsonLd}
      crumbs={[
        { label: "Home", to: "/" },
        { label: "Guides", to: PAGES.guides.path },
        { label: "Home workouts with no equipment", to: PAGES.noEquipment.path },
      ]}
      related={[
        { to: PAGES.fiveMinuteWorkouts.path, label: "5-minute workouts" },
        { to: PAGES.professionals.path, label: "For busy professionals" },
        { to: PAGES.features.path, label: "Features" },
        { to: PRICING_HASH, label: "Free and Pro pricing" },
      ]}
    >
      <header className="mb-8">
        <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-4">Guide</p>
        <h1 className="text-4xl md:text-6xl font-oswald font-bold uppercase tracking-tight leading-[1.05] mb-6">
          Home workouts with no equipment
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          No gym, no gear, no problem. Everyday Performance is built so a bodyweight session at home
          still counts — logged, streak intact, and finished in the time you actually have.
        </p>
      </header>
      <div className="space-y-8 text-muted-foreground leading-relaxed">
        <section>
          <h2 className="font-oswald uppercase tracking-wide text-2xl text-white mb-3">Bodyweight is enough</h2>
          <p>
            Squats, push-ups to your level, lunges, a plank, and a brisk walk cover a lot of ground
            with zero equipment. Mobility and stretching count too. A free account does not require a
            card.{" "}
            <Link to={PRICING_HASH} className="text-primary underline underline-offset-4">See Free and Pro</Link>.
          </p>
        </section>
        <section>
          <h2 className="font-oswald uppercase tracking-wide text-2xl text-white mb-3">Scale it to the minutes you have</h2>
          <p>
            Five minutes or forty, the session counts. Log it with sets, RPE, duration, and notes, or a
            single tap.{" "}
            <Link to={PAGES.fiveMinuteWorkouts.path} className="text-primary underline underline-offset-4">See 5-minute workouts</Link>.
          </p>
        </section>
        <section>
          <h2 className="font-oswald uppercase tracking-wide text-2xl text-white mb-3">Keep the streak at home</h2>
          <p>
            Streaks, XP, and levels reward showing up, whether you trained at a gym or on your living
            room floor. Workouts and streaks stay private unless you opt in to share them.
          </p>
        </section>
        <section>
          <h2 className="font-oswald uppercase tracking-wide text-2xl text-white mb-3">Before you start</h2>
          <p>
            This isn't medical advice and won't clear you for exercise. Stop if you feel pain,
            dizziness, or anything that concerns you, and talk with a clinician first. Full wording is
            in the{" "}
            <Link to="/terms#health-disclaimer" className="text-primary underline underline-offset-4">health disclaimer</Link>.
          </p>
        </section>
      </div>
    </MarketingLayout>
  );
}
