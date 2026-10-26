import { PublicNavbar } from "@/components/PublicNavbar";
import { PublicFooter } from "@/components/PublicFooter";
import { SEO } from "@/components/SEO";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <SEO
        title="Privacy Policy | Everyday Performance OS"
        description="How Everyday Performance OS collects, uses, and protects account, fitness, Health, and accountability information."
      />
      <PublicNavbar />
      <main className="flex-1 relative z-10 pt-32 pb-16">
        <article className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-oswald uppercase tracking-wider text-primary mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm text-muted-foreground mb-10">Last updated October 25, 2026</p>

          <div className="prose prose-invert max-w-none prose-headings:font-oswald prose-headings:uppercase prose-headings:tracking-wider prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground prose-a:text-primary">
            <h2>Who we are</h2>
            <p>
              Everyday Performance operates Everyday Performance OS. Support:{" "}
              <a href="mailto:support@everydayperform.com">support@everydayperform.com</a>.
            </p>

            <h2>What we collect</h2>
            <p>
              Everyday Performance OS collects account information such as your name and email, onboarding preferences, habits, workouts, program progress, streaks, achievements, messages, and settings you choose to provide. We also collect limited device, diagnostic, and usage information needed to operate, secure, and improve the service.
            </p>

            <h2>Apple Health data</h2>
            <p>
              If you choose to connect the Apple Health app, Everyday Performance reads the fitness data types you approve, such as steps, walking and running distance, active energy, exercise minutes, stand hours, and workout details including activity type, date, duration, distance, active energy, source, and device name. We use this information only to show your activity and training progress, compare activity with goals, personalize fitness insights, and provide features you request. We do not use Health data for advertising, sell it, or share it with data brokers. You can change access in iPhone Settings and disconnect Apple Health inside the app to delete imported summaries, workout details, and goals without deleting your Apple Health records. You may also delete your Everyday Performance account.
            </p>

            <h2>Private accountability data</h2>
            <p>
              If you use an alcohol or pornography accountability product, we store the private settings you provide, commitment and check-in dates, outcomes, mood, triggers, urge-intervention responses, journal entries, milestones, and optional accountability-person contact details. We use this information only to provide your private streaks, calculations, interventions, reminders, rewards, and behavioral insights. It is not displayed in Community, public profiles, fitness leaderboards, or trainer dashboards and is not used for advertising. You can permanently delete one accountability goal and all of its history inside the feature.
            </p>

            <h2>How we use information</h2>
            <p>
              We use your information to authenticate your account, deliver app features, calculate progress and rewards, provide support, prevent abuse, process membership entitlements, and communicate service-related information. We do not sell your personal information.
            </p>

            <h2>Community safety</h2>
            <p>
              If you report an account or message, we store the report reason, optional details, the reported account or content identifier, and the time of the report so our safety team can investigate and enforce our community rules. Blocking another user stores the two account identifiers needed to hide interactions. Reports are not shown to the reported user.
            </p>

            <h2>Service providers</h2>
            <p>
              We use service providers to run the app, including Supabase for authentication and data storage, Apple and Stripe for applicable payment processing, GoHighLevel for customer communications, and infrastructure or analytics providers used to operate and secure the service. These providers process information for the purposes described here and under their own terms.
            </p>

            <h2>Payments</h2>
            <p>
              Apple processes App Store purchases and provides us with transaction and entitlement information; we do not receive your full payment-card number from Apple. A subscription is connected to your app account using an account-specific identifier so we can deliver access and restore eligible purchases.
            </p>

            <h2>Retention and deletion</h2>
            <p>
              We keep personal information while your account is active and as needed to provide the service. You can permanently delete your account inside Settings. Deletion removes your account and associated app and CRM data, subject to limited records we must retain for legal, security, fraud, tax, or payment-dispute purposes. Those retained records are restricted and removed or anonymized when they are no longer required.
            </p>
            <p>
              Account deletion does not cancel a subscription billed by Apple or another payment provider. Manage that subscription with the provider before deleting if you do not want it to renew.
            </p>

            <h2>Activity sharing</h2>
            <p>
              Workouts and streaks stay private unless you explicitly opt in to share them. The default is private. You can change that choice later in the app.
            </p>

            <h2>Your choices</h2>
            <p>
              You can review and update available account settings in the app, manage notification permissions in your device settings, and request help with access, correction, export, or deletion by emailing{" "}
              <a href="mailto:support@everydayperform.com">support@everydayperform.com</a>.
            </p>

            <h2>Security and children</h2>
            <p>
              We use administrative, technical, and organizational safeguards designed to protect information. No system is completely secure. The service is not directed to children under 13, and we do not knowingly collect personal information from children under 13.
            </p>

            <h2>Changes and contact</h2>
            <p>
              We may update this policy as the service changes. We will post the current version here and update the date above. Questions can be sent to{" "}
              <a href="mailto:support@everydayperform.com">support@everydayperform.com</a>.
            </p>
          </div>
        </article>
      </main>
      <PublicFooter />
    </div>
  );
}
