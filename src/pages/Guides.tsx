import { Link } from "react-router-dom";
import { MarketingLayout } from "@/components/MarketingLayout";
import { guidesJsonLd, PAGES } from "@/content/seo";

export default function Guides() {
  return (
    <MarketingLayout
      title={PAGES.guides.title}
      description={PAGES.guides.description}
      path={PAGES.guides.path}
      jsonLd={guidesJsonLd}
      crumbs={[
        { label: "Home", to: "/" },
        { label: "Guides", to: PAGES.guides.path },
      ]}
      related={[
        { to: PAGES.howItWorks.path, label: "How it works" },
        { to: PAGES.features.path, label: "Features" },
        { to: PAGES.faq.path, label: "FAQ" },
      ]}
    >
      <header className="mb-10">
        <h1 className="text-4xl md:text-6xl font-oswald font-bold uppercase tracking-tight leading-[1.05] mb-6">
          Guides
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Short, practical notes for using Everyday Performance on a real schedule. These are product guides, not medical protocols.
        </p>
      </header>
      <div className="grid gap-5">
        <article className="bg-[#0e0e0e] border border-white/10 rounded-[2rem] p-7">
          <h2 className="font-oswald uppercase tracking-wide text-2xl text-white mb-3">
            <Link to={PAGES.fiveMinuteDay.path} className="hover:text-primary">A five-minute day</Link>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            What to do in the app when you only have a few minutes, including how to come back after a missed day.
          </p>
          <Link to={PAGES.fiveMinuteDay.path} className="text-primary underline underline-offset-4">Read the guide</Link>
        </article>
        <article className="bg-[#0e0e0e] border border-white/10 rounded-[2rem] p-7">
          <h2 className="font-oswald uppercase tracking-wide text-2xl text-white mb-3">
            <Link to={PAGES.busyParents.path} className="hover:text-primary">Habit tracker for busy parents</Link>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            A forgiving habit tracker and short-workout plan for parents with no clean hour — tiny habits, streaks that survive a missed day.
          </p>
          <Link to={PAGES.busyParents.path} className="text-primary underline underline-offset-4">Read the guide</Link>
        </article>
        <article className="bg-[#0e0e0e] border border-white/10 rounded-[2rem] p-7">
          <h2 className="font-oswald uppercase tracking-wide text-2xl text-white mb-3">
            <Link to={PAGES.fiveMinuteWorkouts.path} className="hover:text-primary">5-minute workouts</Link>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Short, equipment-optional sessions for a packed day — how a few minutes still counts and keeps the streak alive.
          </p>
          <Link to={PAGES.fiveMinuteWorkouts.path} className="text-primary underline underline-offset-4">Read the guide</Link>
        </article>
        <article className="bg-[#0e0e0e] border border-white/10 rounded-[2rem] p-7">
          <h2 className="font-oswald uppercase tracking-wide text-2xl text-white mb-3">
            <Link to={PAGES.entrepreneurs.path} className="hover:text-primary">Workout app for entrepreneurs</Link>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Short sessions and tiny habits for founders with no fixed schedule — streaks that survive a chaotic week.
          </p>
          <Link to={PAGES.entrepreneurs.path} className="text-primary underline underline-offset-4">Read the guide</Link>
        </article>
        <article className="bg-[#0e0e0e] border border-white/10 rounded-[2rem] p-7">
          <h2 className="font-oswald uppercase tracking-wide text-2xl text-white mb-3">
            <Link to={PAGES.professionals.path} className="hover:text-primary">Workout app for busy professionals</Link>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Trainable sessions between meetings and habits that fit a workday, with progress that compounds.
          </p>
          <Link to={PAGES.professionals.path} className="text-primary underline underline-offset-4">Read the guide</Link>
        </article>
        <article className="bg-[#0e0e0e] border border-white/10 rounded-[2rem] p-7">
          <h2 className="font-oswald uppercase tracking-wide text-2xl text-white mb-3">
            <Link to={PAGES.streakApp.path} className="hover:text-primary">A habit streak app that forgives a missed day</Link>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            A streak built to pull you back, not shame you — one missed day doesn't erase months.
          </p>
          <Link to={PAGES.streakApp.path} className="text-primary underline underline-offset-4">Read the guide</Link>
        </article>
        <article className="bg-[#0e0e0e] border border-white/10 rounded-[2rem] p-7">
          <h2 className="font-oswald uppercase tracking-wide text-2xl text-white mb-3">
            <Link to={PAGES.consistency.path} className="hover:text-primary">How to stay consistent with workouts</Link>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Consistency is a systems problem, not a motivation problem — shrink the habit, reward showing up, plan for the miss.
          </p>
          <Link to={PAGES.consistency.path} className="text-primary underline underline-offset-4">Read the guide</Link>
        </article>
      </div>
    </MarketingLayout>
  );
}
