import { PublicNavbar } from "@/components/PublicNavbar";
import { PublicFooter } from "@/components/PublicFooter";
import { SEO } from "@/components/SEO";
import { PAGES, termsJsonLd } from "@/content/seo";

export default function Terms() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <SEO
        title={PAGES.terms.title}
        description={PAGES.terms.description}
        path={PAGES.terms.path}
        jsonLd={termsJsonLd}
      />
      <PublicNavbar />
      <main id="main" className="flex-1 relative z-10 pt-32 pb-16">
        <article className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-oswald uppercase tracking-wider text-primary mb-4">
            Terms of Use
          </h1>
          <p className="text-sm text-muted-foreground mb-10">Last updated October 25, 2026</p>

          <div className="prose prose-invert max-w-none prose-headings:font-oswald prose-headings:uppercase prose-headings:tracking-wider prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground prose-a:text-primary">
            <h2>Using Everyday Performance OS</h2>
            <p>
              Everyday Performance OS provides tools for habits, training, programs, progress, and community. You must provide accurate account information, protect your login, and use the service lawfully. You may not abuse, disrupt, reverse engineer, scrape, or use the service to harm another person.
            </p>

            <h2 id="health-disclaimer" className="scroll-mt-32">Health information</h2>
            <p>
              The app provides general educational and wellness information, not medical diagnosis or treatment. It is not a substitute for advice from a qualified healthcare professional. Stop exercising and seek appropriate care if you experience pain, dizziness, breathing difficulty, or another concerning symptom. You are responsible for choosing activities appropriate for your condition and ability.
            </p>

            <h2 id="accountability" className="scroll-mt-32">Accountability and crisis limitations</h2>
            <p>
              Alcohol and pornography accountability features are self-management and educational tools, not diagnosis, medical treatment, detoxification, psychotherapy, or emergency monitoring. Alcohol withdrawal after prolonged heavy drinking can be dangerous. Seek guidance from a qualified healthcare professional before stopping suddenly if that may apply to you, and call local emergency services for severe symptoms or immediate danger. An urge intervention cannot guarantee safety or replace professional, family, mutual-support, or crisis assistance.
            </p>

            <h2>Subscriptions</h2>
            <p>
              The iPhone Premium monthly subscription is displayed in the app using the live price and currency provided by the App Store. The price and subscription period shown on the purchase screen and Apple&apos;s confirmation sheet control your purchase. Payment is charged to your Apple Account at confirmation. The subscription renews automatically unless canceled at least 24 hours before the current period ends, and Apple may charge the renewal within 24 hours before the end of that period. You can manage or cancel it in your Apple Account subscription settings.
            </p>
            <p>
              The free plan does not require a card. On the website, Pro is $14.99 per month or $149.99 per year ($12.50 per month effective on the annual plan). The optional Pro trial lasts 7 days, requires a card, and then auto-bills through Stripe unless you cancel before it ends. Cancel anytime in the billing portal. Those website prices are not the App Store price. Coach plans are a separate purchase and are not consumer Pro.
            </p>
            <p>
              Deleting your Everyday Performance account does not cancel an App Store or web subscription. Refund eligibility and billing disputes are handled under the terms of the payment provider that processed the purchase.
            </p>

            <h2>Content and community</h2>
            <p>
              You retain ownership of content you submit. You give us a limited license to host, process, and display it only as needed to operate the service. Do not submit unlawful, infringing, abusive, or dangerous content. You can report messages or accounts and block other users from the relevant message, profile, or community screen. We may remove content or restrict accounts to protect users and the service.
            </p>

            <h2>Availability and termination</h2>
            <p>
              Features may change as the product improves, and uninterrupted availability is not guaranteed. You may stop using the service or delete your account at any time. We may suspend or terminate access for material violations, fraud, security threats, or legal requirements.
            </p>

            <h2>License and Apple terms</h2>
            <p>
              The app is licensed, not sold. For an App Store download, Apple&apos;s{" "}
              <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" target="_blank" rel="noreferrer">
                Standard End User License Agreement
              </a>{" "}
              applies in addition to these service terms. If these service terms conflict with mandatory rights you have under applicable law, those mandatory rights control.
            </p>

            <h2>Disclaimers and responsibility</h2>
            <p>
              To the extent permitted by law, the service is provided as available without promises that every feature will always be error-free or meet every individual goal. Nothing in these terms excludes liability that cannot legally be excluded. You remain responsible for your choices, device access, and use of fitness or wellness information.
            </p>

            <h2>Changes and contact</h2>
            <p>
              We may update these terms and will post the current version here with a new effective date. For questions, contact{" "}
              <a href="mailto:support@everydayperform.com">support@everydayperform.com</a>.
            </p>
          </div>
        </article>
      </main>
      <PublicFooter />
    </div>
  );
}
