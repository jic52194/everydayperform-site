import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { HealthNote } from "@/components/HealthNote";
import { PublicFooter } from "@/components/PublicFooter";
import { PublicNavbar } from "@/components/PublicNavbar";
import { RelatedReading } from "@/components/RelatedReading";
import { SEO, type JsonLd } from "@/components/SEO";
import { SignupLink } from "@/components/SignupLink";
import { StickySignup } from "@/components/StickySignup";

type Crumb = { label: string; to: string };

export function MarketingLayout({
  title,
  description,
  path,
  jsonLd,
  crumbs,
  children,
  width = "narrow",
  related,
}: {
  title: string;
  description: string;
  path: string;
  jsonLd?: JsonLd;
  crumbs: Crumb[];
  children: ReactNode;
  width?: "narrow" | "wide";
  related: { to: string; label: string }[];
}) {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <SEO title={title} description={description} path={path} jsonLd={jsonLd} />
      <PublicNavbar />
      <main id="main" className="flex-1 relative z-10 pt-28 md:pt-32 pb-8">
        <article className={`container mx-auto px-4 ${width === "wide" ? "max-w-5xl" : "max-w-3xl"}`}>
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground">
              {crumbs.map((crumb, index) => {
                const last = index === crumbs.length - 1;
                return (
                  <li key={crumb.to} className="flex items-center gap-2">
                    {index > 0 && <span aria-hidden="true">/</span>}
                    {last ? (
                      <span aria-current="page" className="text-foreground">{crumb.label}</span>
                    ) : (
                      <Link to={crumb.to} className="hover:text-primary">{crumb.label}</Link>
                    )}
                  </li>
                );
              })}
            </ol>
          </nav>
          {children}
          <div className="mt-14 rounded-[2rem] border border-primary/25 bg-[#0e0e0e] px-6 py-10 md:px-10 text-center">
            <h2 className="font-oswald uppercase text-3xl tracking-tight mb-3">Create an account</h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              A free account does not require a card. Pro is $14.99/mo or $149.99/yr. The 7-day Pro trial requires a card and auto-renews.
            </p>
            <div className="flex justify-center">
              <SignupLink />
            </div>
            <HealthNote className="mt-6 max-w-xl mx-auto" />
          </div>
          <RelatedReading links={related} />
        </article>
      </main>
      <div className="md:hidden h-24" aria-hidden="true" />
      <PublicFooter />
      <StickySignup />
    </div>
  );
}
