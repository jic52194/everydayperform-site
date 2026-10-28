import { Link } from "react-router-dom";
import { MarketingLayout } from "@/components/MarketingLayout";
import { fiveMinuteJsonLd, PAGES, PRICING_HASH } from "@/content/seo";

export default function FiveMinuteDay() {
  return (
    <MarketingLayout
      title={PAGES.fiveMinuteDay.title}
      description={PAGES.fiveMinuteDay.description}
      path={PAGES.fiveMinuteDay.path}
      ogType={PAGES.fiveMinuteDay.ogType}
      jsonLd={fiveMinuteJsonLd}
      crumbs={[
        { label: "Home", to: "/" },
        { label: "Guides", to: PAGES.guides.path },
        { label: "A five-minute day", to: PAGES.fiveMinuteDay.path },
      ]}
      related={[
        { to: PAGES.howItWorks.path, label: "How it works" },
        { to: PAGES.features.path, label: "Features" },
        { to: PRICING_HASH, label: "Free and Pro pricing" },
        { to: "/terms#health-disclaimer", label: "Health disclaimer" },
      ]}
    >
      <header className="mb-8">
        <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-4">Guide</p>
        <h1 className="text-4xl md:text-6xl font-oswald font-bold uppercase tracking-tight leading-[1.05] mb-6">
          A five-minute day
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Some days have an hour. Most days do not. Everyday Performance is built so a short session still counts. Use this sequence when you are about to skip the day entirely.
        </p>
      </header>
      <div className="space-y-8 text-muted-foreground leading-relaxed">
        <section>
          <h2 className="font-oswald uppercase tracking-wide text-2xl text-white mb-3">Create the account once</h2>
          <p>
            A free account does not require a card. You create it in the app, and the daily plan is there the next time you are in a hurry. Pro is optional. Pro is $14.99/mo or $149.99/yr, and the 7-day Pro trial requires a card and auto-renews unless you cancel in account settings. The yearly price works out to $12.50 per month.{" "}
            <Link to={PRICING_HASH} className="text-primary underline underline-offset-4">See Free and Pro</Link>.
          </p>
        </section>
        <section>
          <h2 className="font-oswald uppercase tracking-wide text-2xl text-white mb-3">Pick one habit you can finish</h2>
          <p>
            Open today's habits and choose one action that fits the room you are actually in. Hydration, a short walk, mobility, stretching, or breathing are the kinds of habits the product is built around. Checking one box is a finished day if that is all you have.{" "}
            <Link to={PAGES.features.path} className="text-primary underline underline-offset-4">See how habits fit with workouts</Link>.
          </p>
        </section>
        <section>
          <h2 className="font-oswald uppercase tracking-wide text-2xl text-white mb-3">Add a workout only if the minutes are real</h2>
          <p>
            A short workout can sit next to the habit. Bodyweight is enough. Equipment is optional. If adding the workout would make you skip both, do the habit and leave the workout. Five minutes of something you finish beats a 45-minute plan you do not start.
          </p>
        </section>
        <section>
          <h2 className="font-oswald uppercase tracking-wide text-2xl text-white mb-3">Log it</h2>
          <p>
            Streaks, XP, badges, and levels record that you showed up. They are a record of consistency, not a grade of the perfect week. Workouts and streaks stay private unless you opt in to share them.
          </p>
        </section>
        <section>
          <h2 className="font-oswald uppercase tracking-wide text-2xl text-white mb-3">If you miss tomorrow</h2>
          <p>
            Open the app and complete one habit. Missing a day does not mean the account failed. The plan is meant to restart. That comeback is part of{" "}
            <Link to={PAGES.howItWorks.path} className="text-primary underline underline-offset-4">how the product works</Link>, not a special recovery mode you have to earn.
          </p>
        </section>
        <section>
          <h2 className="font-oswald uppercase tracking-wide text-2xl text-white mb-3">What this guide will not tell you</h2>
          <p>
            It will not clear you for exercise, prescribe a diet, or promise a change in your body. Stop if you feel pain, dizziness, breathing difficulty, or anything else that concerns you. Talk with a clinician before you start. The full health wording is in the Terms of Use.
          </p>
        </section>
      </div>
    </MarketingLayout>
  );
}
