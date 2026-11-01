import { MarketingLayout } from "@/components/MarketingLayout";
import { PAGES } from "@/content/seo";

const APP_AFFILIATE = "https://app.everydayperform.com/affiliate";
const APP_SIGNUP = "https://app.everydayperform.com/signup";

const steps = [
  {
    n: "01",
    title: "Apply & get approved",
    body: "Create a free account, open the Affiliate page in the app, and submit a short application. We review within one business day.",
  },
  {
    n: "02",
    title: "Share your link",
    body: "Get a unique tracking link. Anyone who starts an account within 60 days of clicking it is credited to you.",
  },
  {
    n: "03",
    title: "Earn recurring revenue",
    body: "Earn commission every month your referrals stay subscribed — tracked in your in-app dashboard and paid out monthly.",
  },
];

const whyPartner = [
  { stat: "25%", label: "Recurring commission on every direct referral, single-level program." },
  { stat: "3 tiers", label: "Optional team program: 10% direct, 10% your recruits, 5% theirs." },
  { stat: "60 days", label: "Cookie window. A click today can still credit you two months later." },
  { stat: "Monthly", label: "Paid on the 15th of the following month once you pass a $50 balance." },
];

const faqs = [
  {
    q: "Does it cost anything to join?",
    a: "No. The affiliate program is free to join, with no minimum sales requirement and no hidden fees.",
  },
  {
    q: "How and when do I get paid?",
    a: "Commission accrues monthly for every active subscriber you referred. Balances over $50 are paid on the 15th of the following month by PayPal or bank transfer, using the payout details you set in the app.",
  },
  {
    q: "How long is the referral window?",
    a: "60 days. If someone clicks your link and creates an account within 60 days, that signup is credited to you, and you earn recurring commission for as long as they stay subscribed.",
  },
  {
    q: "Single-level or 3-tier — which should I pick?",
    a: "Pick single-level (25% on your own referrals) if you refer members directly. Pick the 3-tier program if you want to recruit other affiliates and earn a share of their referrals too.",
  },
  {
    q: "What does a referral need to do for me to earn?",
    a: "They start a paid subscription. Everyday Performance Pro is $14.99/mo or $149.99/yr, so a single active monthly member earns about $3.75 every month they stay — recurring, not once.",
  },
];

const affiliateJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Everyday Performance Affiliate Program",
  description: PAGES.affiliate.description,
  url: "https://everydayperform.com/affiliate/",
};

export default function Affiliate() {
  return (
    <MarketingLayout
      title={PAGES.affiliate.title}
      description={PAGES.affiliate.description}
      path={PAGES.affiliate.path}
      jsonLd={affiliateJsonLd}
      crumbs={[
        { label: "Home", to: "/" },
        { label: "Affiliate", to: PAGES.affiliate.path },
      ]}
      related={[
        { to: PAGES.features.path, label: "Features" },
        { to: PAGES.howItWorks.path, label: "How it works" },
        { to: PAGES.faq.path, label: "FAQ" },
      ]}
    >
      <header className="mb-10">
        <h1 className="text-4xl md:text-6xl font-oswald font-bold uppercase tracking-tight leading-[1.05] mb-6">
          Affiliate program
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Earn <span className="text-primary font-semibold">25% recurring commission</span> for every member you
          send to Everyday Performance — paid every month they stay subscribed, not just once. Free to join, with a
          60-day referral window and monthly payouts.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <a href={APP_AFFILIATE} className="inline-flex min-h-12 items-center justify-center rounded-full bg-primary px-6 font-oswald font-bold uppercase tracking-wide text-black">
            Apply in the app
          </a>
          <a href={APP_SIGNUP} className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/20 px-6 font-oswald font-bold uppercase tracking-wide text-white">
            Create a free account
          </a>
        </div>
      </header>

      <section className="mb-12">
        <h2 className="font-oswald uppercase tracking-wide text-2xl text-white mb-5">How it works</h2>
        <ol className="grid gap-4 sm:grid-cols-3">
          {steps.map((s) => (
            <li key={s.n} className="bg-[#0e0e0e] border border-white/10 rounded-[2rem] p-7">
              <p className="text-primary font-oswald text-sm tracking-[0.2em]">{s.n}</p>
              <h3 className="font-oswald uppercase tracking-wide text-xl text-white mt-2 mb-3">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mb-12">
        <h2 className="font-oswald uppercase tracking-wide text-2xl text-white mb-5">Why partner with Everyday Performance</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {whyPartner.map((w) => (
            <div key={w.stat} className="bg-[#0e0e0e] border border-white/10 rounded-[2rem] p-7">
              <p className="font-oswald font-bold text-3xl text-primary">{w.stat}</p>
              <p className="text-sm text-muted-foreground leading-relaxed mt-2">{w.label}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-muted-foreground mt-4">
          Earnings examples are illustrative and assume referred members stay actively subscribed. Actual results vary.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="font-oswald uppercase tracking-wide text-2xl text-white mb-5">Frequently asked questions</h2>
        <div className="space-y-4">
          {faqs.map((f) => (
            <div key={f.q} className="bg-[#0e0e0e] border border-white/10 rounded-[2rem] p-7">
              <h3 className="font-oswald uppercase tracking-wide text-lg text-white mb-2">{f.q}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#0e0e0e] border border-white/10 rounded-[2rem] p-8 text-center">
        <h2 className="font-oswald uppercase tracking-wide text-2xl text-white mb-3">Ready to start earning?</h2>
        <p className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-xl mx-auto">
          Join free, get your tracking link, and earn recurring commission every month your referrals keep showing up.
        </p>
        <a href={APP_AFFILIATE} className="inline-flex min-h-12 items-center justify-center rounded-full bg-primary px-8 font-oswald font-bold uppercase tracking-wide text-black">
          Apply for the affiliate program
        </a>
      </section>
    </MarketingLayout>
  );
}
