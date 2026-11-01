import { Link } from "react-router-dom";
import { HealthNote } from "@/components/HealthNote";
import { SignupLink } from "@/components/SignupLink";
import { PRICING_FAQ_IDS, faqsById } from "@/content/faq";
import { PAGES } from "@/content/seo";

const objections = faqsById(PRICING_FAQ_IDS);

export function PricingSection() {
  return (
    <section id="pricing" className="relative z-10 w-full py-28 scroll-mt-28">
      <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-4">Pricing</p>
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight font-oswald leading-[1.1]">
            Free and Pro
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-5 leading-relaxed">
            Start with a free account. Move to Pro only if you want the paid plan. The prices below are the website offer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          <article className="bg-[#0e0e0e] border border-white/10 rounded-[2rem] p-8 flex flex-col">
            <h3 className="font-oswald uppercase tracking-wide text-xl text-white">Free</h3>
            <p className="mt-4 font-oswald text-5xl text-white">$0</p>
            <p className="mt-2 text-primary font-medium">Free to start, no card</p>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed flex-1">
              A free account lets you start a daily plan with habits, short workouts, or both. It does not require a card.
            </p>
            <div className="mt-8">
              <SignupLink label="Create an Account" className="w-full whitespace-normal text-center" />
            </div>
          </article>

          <article className="bg-[#0e0e0e] border border-primary/40 rounded-[2rem] p-8 flex flex-col shadow-[0_0_60px_-28px_rgba(143,143,86,0.65)]">
            <h3 className="font-oswald uppercase tracking-wide text-xl text-white">Pro</h3>
            <p className="mt-4 font-oswald text-5xl text-white">
              $14.99<span className="text-2xl text-white/80">/mo</span>
            </p>
            <p className="mt-2 text-foreground">or $149.99/yr <span className="text-muted-foreground">($12.50/mo effective)</span></p>
            <p className="mt-4 text-sm text-primary leading-relaxed">
              7-day Pro trial requires a card and auto-renews unless you cancel.
            </p>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">
              Create an account, then start Pro from the app if you want the paid plan. Cancel anytime in account settings. Access continues through the end of the current billing period.
            </p>
            <div className="mt-8">
              <SignupLink label="Choose Pro" className="w-full whitespace-normal text-center" />
            </div>
          </article>
        </div>

        <div className="mt-14">
          <h2 className="font-oswald uppercase tracking-wide text-2xl md:text-3xl text-center mb-8">Before you start Pro</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {objections.map((item) => (
              <div key={item.id} className="bg-[#0e0e0e] border border-white/8 rounded-2xl p-6">
                <h3 className="font-oswald uppercase tracking-wide text-base text-white">{item.q}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
          <p className="text-center mt-8">
            <Link to={PAGES.faq.path} className="text-primary underline underline-offset-4 hover:text-primary/80">
              Read the full FAQ
            </Link>
          </p>
          <HealthNote className="text-center max-w-xl mx-auto mt-6" />
        </div>
      </div>
    </section>
  );
}
