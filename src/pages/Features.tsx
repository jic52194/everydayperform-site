import { Link } from "react-router-dom";
import { MarketingLayout } from "@/components/MarketingLayout";
import { siblingLinks } from "@/content/internalLinks";
import { featuresJsonLd, PAGES, PRICING_HASH } from "@/content/seo";

const linkClass = "text-primary underline underline-offset-4";

export default function Features() {
  return (
    <MarketingLayout
      title={PAGES.features.title}
      description={PAGES.features.description}
      path={PAGES.features.path}
      jsonLd={featuresJsonLd}
      width="wide"
      crumbs={[
        { label: "Home", to: "/" },
        { label: "Features", to: PAGES.features.path },
      ]}
      related={siblingLinks(PAGES.features.path, [
        { to: "/faq/#faq-habits", label: "Habit FAQ" },
        { to: "/faq/#faq-analytics", label: "Analytics FAQ" },
        { to: "/faq/#faq-community", label: "Community floor FAQ" },
        { to: "/faq/#faq-coach", label: "Coach FAQ" },
      ])}
    >
      <header className="mb-12">
        <h1 className="text-4xl md:text-6xl font-oswald font-bold uppercase tracking-tight leading-[1.05] mb-6">
          Features
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
          Everyday Performance OS is a daily system for busy people: habits you choose, short workouts, streaks, and progress you can review. This page describes what the product does. It does not promise a specific fitness result, and it does not publish a user count or a star rating.{" "}
          <Link to={PAGES.howItWorks.path} className={linkClass}>See how a day works</Link>
          {" · "}
          <Link to={PAGES.compare.path} className={linkClass}>Compare the approach</Link>
          {" · "}
          <Link to={PAGES.faq.path} className={linkClass}>Read the FAQ</Link>.
        </p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <section id="habits" className="scroll-mt-32 bg-[#0e0e0e] border border-white/10 rounded-[2rem] p-7">
          <h2 className="font-oswald uppercase tracking-wide text-2xl text-white mb-3">Daily habits</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            A free account can start a daily plan made of habits, short workouts, or both, and it does not require a card. You choose the habits. Presets include drinking enough water, moving for 20 minutes, stretch or mobility, 5 minutes of mindfulness, sleep of 7+ hours, steps, a protein target, reading 10 pages, getting up without snoozing, and no added sugar. The app is built for picking two or three that are small enough for a bad day. Completing a habit earns XP, and clearing the day's habits earns a bonus.{" "}
            <Link to={PAGES.fiveMinuteDay.path} className={linkClass}>Use one habit on a five-minute day</Link>
            {" · "}
            <Link to="/faq/#faq-habits" className={linkClass}>Habit FAQ</Link>.
          </p>
        </section>
        <section id="workouts" className="scroll-mt-32 bg-[#0e0e0e] border border-white/10 rounded-[2rem] p-7">
          <h2 className="font-oswald uppercase tracking-wide text-2xl text-white mb-3">Short workouts</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Workouts are built to be finished, including bodyweight sessions when you have no equipment. You can log sets, RPE, duration, and notes. If you do have equipment, a plan can use it. You do not need a gym membership to begin, and you do not need an open hour.{" "}
            <Link to={PAGES.howItWorks.path} className={linkClass}>How the daily plan works</Link>.
          </p>
        </section>
        <section id="analytics" className="scroll-mt-32 bg-[#0e0e0e] border border-white/10 rounded-[2rem] p-7">
          <h2 className="font-oswald uppercase tracking-wide text-2xl text-white mb-3">Progress analytics</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            The free plan includes streaks and this week's view, including the weekly recap, plus XP, badges, and levels. Pro adds longer-range progress: load volume, workout frequency, habit consistency, a show-up calendar, and personal records. Charts count the workouts, sets, and times you log. Sample numbers on the homepage are illustrations, not a published member result. This is a training record, not a diagnosis.{" "}
            <Link to="/faq/#faq-analytics" className={linkClass}>Free versus Pro analytics</Link>
            {" · "}
            <Link to={PRICING_HASH} className={linkClass}>See pricing</Link>.
          </p>
        </section>
        <section id="community" className="scroll-mt-32 bg-[#0e0e0e] border border-white/10 rounded-[2rem] p-7">
          <h2 className="font-oswald uppercase tracking-wide text-2xl text-white mb-3">Community seed floor</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            The community starts from a seed floor, not from a published member count. A new account gets a welcome, a friend request, and a place to reply. Coaches and guides on that floor are part of the product so the room is not empty. They are not customer reviews and not a user total. You can join the Morning Floor squad, invite a friend you know, and see a weekly league ranked by XP since Monday. Your workouts and streaks stay private unless you opt in to share them in Settings. Friend streaks and challenges open after you accept a friend.{" "}
            <Link to="/faq/#faq-community" className={linkClass}>Community FAQ</Link>
            {" · "}
            <Link to="/compare/#public-feed" className={linkClass}>Versus a public feed</Link>.
          </p>
        </section>
        <section id="coaches" className="scroll-mt-32 bg-[#0e0e0e] border border-white/10 rounded-[2rem] p-7">
          <h2 className="font-oswald uppercase tracking-wide text-2xl text-white mb-3">Coaches</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Coaches and clients use the same app. A coach applies, and that application is reviewed before coaching tools are turned on. A coach can assign day-by-day programs, message clients, run check-ins, and see client workouts, habits, and streaks. Coach plans are a separate purchase and are not consumer Pro. Pro at $14.99/mo or $149.99/yr does not assign you a human coach.{" "}
            <Link to="/faq/#faq-coach" className={linkClass}>Coach FAQ</Link>
            {" · "}
            <Link to="/compare/#hiring-a-coach" className={linkClass}>Pro versus hiring a coach</Link>.
          </p>
        </section>
        <section id="health" className="scroll-mt-32 bg-[#0e0e0e] border border-white/10 rounded-[2rem] p-7">
          <h2 className="font-oswald uppercase tracking-wide text-2xl text-white mb-3">Optional Apple Health on iPhone</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            If you choose to connect Apple Health, Everyday Performance can read the fitness types you approve, such as steps, distance, active energy, exercise minutes, and workout details. That data is used to show activity and training progress. It is not required, it is not used for advertising, and you can disconnect it in the app.{" "}
            <Link to="/privacy/" className={linkClass}>Privacy Policy</Link>.
          </p>
        </section>
      </div>
      <section id="private" className="scroll-mt-32 mt-8 bg-[#0e0e0e] border border-white/10 rounded-[2rem] p-7">
        <h2 className="font-oswald uppercase tracking-wide text-2xl text-white mb-3">Private by default</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Workouts and streaks stay private unless you explicitly opt in to share them. You can change that choice later in Settings. Reports and blocks are available from the relevant message, profile, or community screen. Alcohol and pornography accountability tools in the app are self-management and education. They are not diagnosis, medical treatment, detox, psychotherapy, or emergency monitoring. That information is not displayed in Community, public profiles, fitness leaderboards, or trainer dashboards. Read the{" "}
          <Link to="/terms#accountability" className={linkClass}>accountability section of the Terms of Use</Link>{" "}
          before you use them.
        </p>
      </section>
      <section className="mt-8">
        <h2 className="font-oswald uppercase tracking-wide text-2xl text-white mb-3">Free account and Pro</h2>
        <p className="text-muted-foreground leading-relaxed">
          A free account does not require a card. Pro is $14.99/mo or $149.99/yr. The 7-day Pro trial requires a card and auto-renews unless you cancel in account settings. The yearly price works out to $12.50 per month. Website prices are not the App Store price.{" "}
          <Link to={PRICING_HASH} className={linkClass}>Compare Free and Pro</Link>
          {" · "}
          <Link to={PAGES.guides.path} className={linkClass}>Busy-day guides</Link>.
        </p>
      </section>
    </MarketingLayout>
  );
}
