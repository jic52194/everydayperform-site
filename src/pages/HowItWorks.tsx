import { Link } from "react-router-dom";
import { MarketingLayout } from "@/components/MarketingLayout";
import { siblingLinks } from "@/content/internalLinks";
import { howItWorksJsonLd, PAGES, PRICING_HASH } from "@/content/seo";

const linkClass = "text-primary underline underline-offset-4";

const steps = [
  {
    id: "signup",
    title: "Create a free account",
    body: (
      <>
        Signup is open in the app. A free account does not require a card. You can add Pro later if you want the paid plan. The 7-day Pro trial requires a card and auto-renews unless you cancel in account settings.{" "}
        <Link to={PRICING_HASH} className={linkClass}>Free and Pro pricing</Link>.
      </>
    ),
  },
  {
    id: "choose",
    title: "Choose habits, workouts, or both",
    body: (
      <>
        You set a focus, how many days you train, your experience, and the habits on the plan. Presets include water, moving for 20 minutes, stretch or mobility, and 5 minutes of mindfulness. Pick two or three that are small enough for a bad day. Equipment is optional.{" "}
        <Link to="/features/#habits" className={linkClass}>See the habit presets</Link>.
      </>
    ),
  },
  {
    id: "today",
    title: "Do the plan you can finish today",
    body: (
      <>
        Five minutes is enough to start. If the full workout would make you skip the day, do the habit. A finished small action is the point of the product.{" "}
        <Link to={PAGES.fiveMinuteDay.path} className={linkClass}>The five-minute guide</Link>.
      </>
    ),
  },
  {
    id: "log",
    title: "Log the win",
    body: (
      <>
        Streaks, XP, badges, and levels record that you showed up. The free plan includes streaks and this week's view, including the weekly recap. Longer-range charts are part of Pro. Workouts and streaks stay private unless you opt in to share them.{" "}
        <Link to="/features/#analytics" className={linkClass}>What Free and Pro show</Link>.
      </>
    ),
  },
  {
    id: "restart",
    title: "Restart after a miss",
    body: (
      <>
        Missing a day does not close the account or mean the plan failed. Streak freezes are built to turn on when a day is missed, so one miss does not have to erase the streak. Come back and complete one habit. A freeze is not a promise of a specific fitness result.{" "}
        <Link to="/faq/#faq-miss" className={linkClass}>Missed-day FAQ</Link>.
      </>
    ),
  },
  {
    id: "pro",
    title: "Start Pro only if you want it",
    body: (
      <>
        Pro is $14.99/mo or $149.99/yr on the website. The yearly price works out to $12.50 per month. Cancel anytime in account settings and keep access through the end of the current billing period. An iPhone subscription, if you buy one, uses the App Store price shown in the app. Pro does not assign a human coach.{" "}
        <Link to="/faq/#faq-coach" className={linkClass}>Coach plans are separate</Link>.
      </>
    ),
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
      related={siblingLinks(PAGES.howItWorks.path, [
        { to: "/features/#community", label: "Community seed floor" },
        { to: "/features/#coaches", label: "Coaches, separate from Pro" },
        { to: "/faq/#faq-analytics", label: "Analytics FAQ" },
      ])}
    >
      <header className="mb-10">
        <h1 className="text-4xl md:text-6xl font-oswald font-bold uppercase tracking-tight leading-[1.05] mb-6">
          How it works
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          The loop is short on purpose. Create an account, do something you can finish, log it, and come back after the days you miss.{" "}
          <Link to={PAGES.fiveMinuteDay.path} className={linkClass}>The five-minute guide</Link>
          {" is the same loop written for a packed day. "}
          <Link to={PAGES.features.path} className={linkClass}>The features page</Link>
          {" covers habits, analytics, the community floor, and coaches. "}
          <Link to={PAGES.compare.path} className={linkClass}>Compare</Link>
          {" describes what this is not."}
        </p>
      </header>
      <ol className="space-y-6">
        {steps.map((step, index) => (
          <li id={step.id} key={step.title} className="scroll-mt-32 bg-[#0e0e0e] border border-white/10 rounded-[2rem] p-7">
            <p className="text-primary font-oswald text-sm tracking-[0.2em]">0{index + 1}</p>
            <h2 className="font-oswald uppercase tracking-wide text-2xl text-white mt-2 mb-3">{step.title}</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">{step.body}</p>
          </li>
        ))}
      </ol>
      <section className="mt-8">
        <h2 className="font-oswald uppercase tracking-wide text-2xl text-white mb-3">Also in the app</h2>
        <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
          <li>
            <Link to="/features/#community" className={linkClass}>Community seed floor</Link>
            {": a welcome, a friend request, and the Morning Floor squad. Not a published member count."}
          </li>
          <li>
            <Link to="/features/#coaches" className={linkClass}>Coaches</Link>
            {" apply separately. Buying Pro does not assign a human coach."}
          </li>
          <li>
            <Link to={PAGES.faq.path} className={linkClass}>FAQ</Link>
            {" for the card, the 7-day trial, cancellation, and website versus App Store price."}
          </li>
        </ul>
      </section>
    </MarketingLayout>
  );
}
