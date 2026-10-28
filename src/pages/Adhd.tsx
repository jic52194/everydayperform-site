import { Link } from "react-router-dom";
import { MarketingLayout } from "@/components/MarketingLayout";
import { adhdJsonLd, PAGES, PRICING_HASH } from "@/content/seo";

export default function Adhd() {
  return (
    <MarketingLayout
      title={PAGES.adhd.title}
      description={PAGES.adhd.description}
      path={PAGES.adhd.path}
      ogType={PAGES.adhd.ogType}
      jsonLd={adhdJsonLd}
      crumbs={[
        { label: "Home", to: "/" },
        { label: "Guides", to: PAGES.guides.path },
        { label: "A habit tracker for an ADHD brain", to: PAGES.adhd.path },
      ]}
      related={[
        { to: PAGES.streakApp.path, label: "A habit streak app" },
        { to: PAGES.consistency.path, label: "How to stay consistent" },
        { to: PAGES.fiveMinuteDay.path, label: "A five-minute day" },
        { to: PRICING_HASH, label: "Free and Pro pricing" },
      ]}
    >
      <header className="mb-8">
        <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-4">Guide</p>
        <h1 className="text-4xl md:text-6xl font-oswald font-bold uppercase tracking-tight leading-[1.05] mb-6">
          A habit tracker that works with an ADHD brain
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Rigid, all-or-nothing trackers punish the exact brain that struggles with consistency.
          Everyday Performance is built the opposite way — tiny habits, forgiving streaks, and a plan
          designed to restart. This is general product guidance, not medical advice or treatment.
        </p>
      </header>
      <div className="space-y-8 text-muted-foreground leading-relaxed">
        <section>
          <h2 className="font-oswald uppercase tracking-wide text-2xl text-white mb-3">Make the habit too small to resist</h2>
          <p>
            Pick an action so small it's hard to skip — a glass of water, two minutes of movement, one
            breath cycle. Finishing one tiny thing is a completed day. A free account does not require a
            card.{" "}
            <Link to={PRICING_HASH} className="text-primary underline underline-offset-4">See Free and Pro</Link>.
          </p>
        </section>
        <section>
          <h2 className="font-oswald uppercase tracking-wide text-2xl text-white mb-3">A streak that survives a missed day</h2>
          <p>
            Interest drops, days get missed — that's normal. The streak here is built to pull you back,
            not to shame you into quitting. Open the app, do one habit, and you're going again. See{" "}
            <Link to={PAGES.streakApp.path} className="text-primary underline underline-offset-4">how the streak forgives a missed day</Link>.
          </p>
        </section>
        <section>
          <h2 className="font-oswald uppercase tracking-wide text-2xl text-white mb-3">Immediate, visible feedback</h2>
          <p>
            Logging gives an instant signal — XP, a growing streak, a level. Short feedback loops make
            showing up feel like it counts today, not someday.
          </p>
        </section>
        <section>
          <h2 className="font-oswald uppercase tracking-wide text-2xl text-white mb-3">Important: this is not medical advice</h2>
          <p>
            Everyday Performance is a habit and fitness app, not a treatment for ADHD or any condition,
            and nothing here is medical advice. Talk with a qualified clinician about diagnosis and
            care. Stop any activity if you feel pain, dizziness, or anything that concerns you. Full
            wording is in the{" "}
            <Link to="/terms#health-disclaimer" className="text-primary underline underline-offset-4">health disclaimer</Link>.
          </p>
        </section>
      </div>
    </MarketingLayout>
  );
}
