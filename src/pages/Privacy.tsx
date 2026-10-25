import { PublicNavbar } from "@/components/PublicNavbar";
import { PublicFooter } from "@/components/PublicFooter";
import { SEO } from "@/components/SEO";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <SEO
        title="Privacy Policy | Everyday Performance OS"
        description="How Everyday Performance OS collects, uses, discloses, and safeguards your information."
      />
      <PublicNavbar />
      <main className="flex-1 relative z-10 pt-32 pb-16">
        <article className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-oswald uppercase tracking-wider text-primary mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm text-muted-foreground mb-10">Last Updated: June 4, 2026</p>

          <div className="prose prose-invert max-w-none prose-headings:font-oswald prose-headings:uppercase prose-headings:tracking-wider prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground prose-a:text-primary">
            <p>
              At Everyday Performance OS, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our application.
            </p>

            <h2>1. Information We Collect</h2>
            <p>
              We collect information that you voluntarily provide to us when you register on the app, express an interest in obtaining information about us or our products and services, or otherwise contact us.
            </p>
            <ul>
              <li><strong>Personal Information:</strong> Name, email address, password, and profile picture.</li>
              <li><strong>Health &amp; Fitness Data:</strong> Workout logs, habit tracking data, fitness goals, experience level, and body measurements.</li>
              <li><strong>Payment Information:</strong> If you purchase a premium subscription or coaching services, payment data is processed directly by our payment processor (Stripe). We do not store your full credit card number.</li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <p>We use the information we collect or receive:</p>
            <ul>
              <li>To facilitate account creation and logon process.</li>
              <li>To provide and manage your account and deliver the services you request.</li>
              <li>To track your progress and provide personalized coaching insights.</li>
              <li>To send you administrative information and marketing communications (which you can opt out of).</li>
            </ul>

            <h2>3. Data Storage and Security</h2>
            <p>
              Your data is securely stored using Supabase, which employs industry-standard encryption and security practices. We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process.
            </p>

            <h2>4. Sharing Your Information</h2>
            <p>
              We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations. If you connect with a Coach on our platform, that coach will have access to your fitness data and progress to provide their services.
            </p>

            <h2>5. Contact Us</h2>
            <p>
              If you have questions or comments about this notice, you may email us at{" "}
              <a href="mailto:support@everydayperform.com">support@everydayperform.com</a>.
            </p>
          </div>
        </article>
      </main>
      <PublicFooter />
    </div>
  );
}
