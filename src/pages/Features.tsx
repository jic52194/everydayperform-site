import { Link } from "react-router-dom";
import { MarketingLayout } from "@/components/MarketingLayout";
import { featuresJsonLd, PAGES, PRICING_HASH } from "@/content/seo";

const features = [
  {
    title: "Daily habits",
    body: "A free account can start a daily plan made of habits, short workouts, or both. Habits are the small actions you can finish when the day is already full: hydration, mobility, a walk, stretching, or breathing. Checking one off is a completed day if that is all the time you have.",
  },
  {
    title: "Short workouts",
    body: "Workouts are built to be finished, including bodyweight sessions when you have no equipment. If you do have equipment, a plan can use it. You do not need a gym membership to begin, and you do not need an open hour.",
  },
  {
    title: "Streaks, XP, badges, and levels",
    body: "Showing up earns XP, keeps a streak, and moves levels and badges. Those are a record of consistency. They are not a grade of a perfect week, and the sample numbers on the homepage are illustrations, not a published member result.",
  },
  {
    title: "A plan for the day you actually have",
    body: "The plan is built around your goals, schedule, fitness level, habits, and available time. When a day is missed, the system is meant to adjust and help you restart instead of treating the miss as a failed account.",
  },
  {
    title: "Optional Apple Health on iPhone",
    body: "If you choose to connect Apple Health, Everyday Performance can read the fitness types you approve, such as steps, distance, active energy, exercise minutes, and workout details. That data is used to show activity and training progress. It is not required, it is not used for advertising, and you can disconnect it in the app.",
  },
  {
    title: "Private by default",
    body: "Workouts and streaks stay private unless you explicitly opt in to share them. You can change that choice later in the app. Reports and blocks are available from the relevant message, profile, or community screen.",
  },
];

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
      related={[
        { to: PAGES.howItWorks.path, label: "How it works" },
        { to: PRICING_HASH, label: "Free and Pro pricing" },
        { to: PAGES.faq.path, label: "FAQ" },
        { to: PAGES.compare.path, label: "Compare with typical fitness apps" },
      ]}
    >
      <header className="mb-12">
        <h1 className="text-4xl md:text-6xl font-oswald font-bold uppercase tracking-tight leading-[1.05] mb-6">
          Features
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
          Everyday Performance OS is a daily system for busy people: short workouts, habits, streaks, and XP in one plan. This page describes what the product is built to do. It does not promise a specific fitness result, and it does not publish a user count or a star rating.
        </p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature) => (
          <section key={feature.title} className="bg-[#0e0e0e] border border-white/10 rounded-[2rem] p-7">
            <h2 className="font-oswald uppercase tracking-wide text-2xl text-white mb-3">{feature.title}</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">{feature.body}</p>
          </section>
        ))}
      </div>
      <section className="mt-8 bg-[#0e0e0e] border border-white/10 rounded-[2rem] p-7">
        <h2 className="font-oswald uppercase tracking-wide text-2xl text-white mb-3">Optional private accountability</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Alcohol and pornography accountability tools in the app are self-management and education. They are not diagnosis, medical treatment, detox, psychotherapy, or emergency monitoring. That information is not displayed in Community, public profiles, fitness leaderboards, or trainer dashboards. Read the{" "}
          <Link to="/terms#accountability" className="text-primary underline underline-offset-4">accountability section of the Terms of Use</Link>{" "}
          before you use them.
        </p>
      </section>
      <section className="mt-8">
        <h2 className="font-oswald uppercase tracking-wide text-2xl text-white mb-3">Free account and Pro</h2>
        <p className="text-muted-foreground leading-relaxed">
          A free account does not require a card. Pro is $14.99/mo or $149.99/yr. The 7-day Pro trial requires a card and auto-renews unless you cancel in account settings. Coach plans are a separate purchase and are not consumer Pro. Website prices are not the App Store price.{" "}
          <Link to={PRICING_HASH} className="text-primary underline underline-offset-4">Compare Free and Pro</Link>.
        </p>
      </section>
    </MarketingLayout>
  );
}
