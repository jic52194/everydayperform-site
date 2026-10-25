import { PublicNavbar } from "@/components/PublicNavbar";
import { PublicFooter } from "@/components/PublicFooter";
import { SEO } from "@/components/SEO";

export default function Terms() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <SEO
        title="Terms of Service | Everyday Performance OS"
        description="Terms of Service for using Everyday Performance OS."
      />
      <PublicNavbar />
      <main className="flex-1 relative z-10 pt-32 pb-16">
        <article className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-oswald uppercase tracking-wider text-primary mb-4">
            Terms of Service
          </h1>
          <p className="text-sm text-muted-foreground mb-10">Last Updated: June 4, 2026</p>

          <div className="prose prose-invert max-w-none prose-headings:font-oswald prose-headings:uppercase prose-headings:tracking-wider prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground prose-a:text-primary">
            <p>
              Welcome to Everyday Performance OS. By accessing or using our application, you agree to be bound by these Terms of Service.
            </p>

            <h2>1. Use of the Service</h2>
            <p>
              You must be at least 18 years old to use this Service. You are responsible for maintaining the confidentiality of your account and password and for restricting access to your device.
            </p>

            <h2>2. Health Disclaimer</h2>
            <p>
              Everyday Performance OS provides fitness, nutrition, and wellness information designed for educational purposes only. You should not rely on this information as a substitute for professional medical advice, diagnosis, or treatment. Always consult with a physician or other healthcare professional before starting any fitness program.
            </p>

            <h2>3. Subscriptions and Billing</h2>
            <p>
              We offer premium subscriptions billed via Stripe. By selecting a premium tier, you agree to pay the subscription fees indicated.
            </p>
            <ul>
              <li><strong>Trials:</strong> We may offer a 7-day free trial. If you do not cancel before the trial ends, you will be automatically billed.</li>
              <li><strong>Web-Only Subscriptions:</strong> All payments and subscriptions are managed securely via the web through our Stripe integration.</li>
              <li><strong>Cancellation:</strong> You can cancel your subscription at any time through the &quot;Manage Billing&quot; section in your account settings. Your access will continue until the end of your current billing period.</li>
            </ul>

            <h2>4. User Content</h2>
            <p>
              You retain all rights in, and are solely responsible for, the content you post to Everyday Performance OS. By posting content, you grant us a non-exclusive, royalty-free license to use, reproduce, and distribute that content in connection with operating and providing the Service.
            </p>

            <h2>5. Termination</h2>
            <p>
              We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
            </p>

            <h2>7. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at{" "}
              <a href="mailto:support@everydayperform.com">support@everydayperform.com</a>.
            </p>
          </div>
        </article>
      </main>
      <PublicFooter />
    </div>
  );
}
