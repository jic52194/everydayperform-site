import { Link } from "react-router-dom";
import { MarketingLayout } from "@/components/MarketingLayout";
import { howItWorksJsonLd, PAGES, PRICING_HASH } from "@/content/seo";

const steps = [
  {
    title: "Create a free account",
    body: "Signup is open in the app. A free account does not require a card. You can add Pro later if you want the paid plan. The 7-day Pro trial requires a card and auto-renews unless you cancel in account settings.",
  },
  {
    title: "Choose habits, workouts, or both",
    body: "Pick the focus that fits the week you are actually having. Habits cover the small daily actions. Workouts cover the short training. You can use one or both, and equipment is optional.",
  },
  {
    title: "Do the plan you can finish today",
    body: "Five minutes is enough to start. If the full workout would make you skip the day, do the habit. A finished small action is the point of the product.",
  },
  {
    title: "Log the win",
    body: "Streaks, XP, badges, and levels record that you showed up. They are feedback for consistency, not a public score. Workouts and streaks stay private unless you opt in to share them.",
  },
  {
    title: "Restart after a miss",
    body: "Missing a day does not close the account or mean the plan failed. Come back and complete one habit. The system is designed for that comeback, including streaks and flexible plans that help you start again.",
  },
  {
    title: "Start Pro only if you want it",
    body: "Pro is $14.99/mo or $149.99/yr on the website. The yearly price works out to $12.50 per month. Cancel anytime in account settings and keep access through the end of the current billing period. An iPhone subscription, if you buy one, uses the App Store price shown in the app.",
  },
];

export default function HowItWorks() {
  return (
    <MarketingLayout
      title={PAGES.howItWorks.title}
      description={PAGES.howItWorks.description}
      path={PAGES.howItWorks.path}
      jsonLd={howItWorksJsonLd}
      crumbs={[
        { label: "Home", to: "/" },
        { label: "How it works", to: PAGES.howItWorks.path },
      ]}
      related={[
        { to: PAGES.fiveMinuteDay.path, label: "Guide: a five-minute day" },
        { to: PAGES.features.path, label: "Features" },
        { to: PRICING_HASH, label: "Free and Pro pricing" },
        { to: PAGES.faq.path, label: "FAQ" },
      ]}
    >
      <header className="mb-10">
        <h1 className="text-4xl md:text-6xl font-oswald font-bold uppercase tracking-tight leading-[1.05] mb-6">
          How it works
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          The loop is short on purpose. Create an account, do something you can finish, log it, and come back after the days you miss.{" "}
          <Link to={PAGES.fiveMinuteDay.path} className="text-primary underline underline-offset-4">
            The five-minute guide
          </Link>{" "}
          is the same loop written for a packed day.
        </p>
      </header>
      <ol className="space-y-6">
        {steps.map((step, index) => (
          <li key={step.title} className="bg-[#0e0e0e] border border-white/10 rounded-[2rem] p-7">
            <p className="text-primary font-oswald text-sm tracking-[0.2em]">0{index + 1}</p>
            <h2 className="font-oswald uppercase tracking-wide text-2xl text-white mt-2 mb-3">{step.title}</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">{step.body}</p>
          </li>
        ))}
      </ol>
    </MarketingLayout>
  );
}
