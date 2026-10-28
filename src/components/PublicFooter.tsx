import { Link } from "react-router-dom";
import { PAGES, PRICING_HASH } from "@/content/seo";

const PRODUCT_LINKS = [
  { to: PAGES.features.path, label: "Features" },
  { to: PAGES.howItWorks.path, label: "How it works" },
  { to: PRICING_HASH, label: "Pricing" },
  { to: PAGES.faq.path, label: "FAQ" },
  { to: PAGES.compare.path, label: "Compare" },
  { to: PAGES.guides.path, label: "Guides" },
];

export function PublicFooter() {
  return (
    <footer className="relative z-10 py-6 md:py-8 border-t border-white/10 bg-background/80 backdrop-blur-md text-center shrink-0">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center space-y-3">
        <nav aria-label="Product" className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs md:text-sm text-muted-foreground font-medium">
          {PRODUCT_LINKS.map((link) => (
            <Link key={link.to} to={link.to} className="hover:text-primary transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>
        <nav aria-label="Company" className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 md:gap-x-6 text-xs md:text-sm text-muted-foreground font-medium">
          <Link to={PAGES.press.path} className="hover:text-primary transition-colors">Press</Link>
          <Link to={PAGES.privacy.path} className="hover:text-primary transition-colors">Privacy Policy</Link>
          <Link to={PAGES.terms.path} className="hover:text-primary transition-colors">Terms of Use</Link>
          <a href="mailto:support@everydayperform.com" className="hover:text-primary transition-colors">
            support@everydayperform.com
          </a>
        </nav>
        <p className="text-muted-foreground text-xs md:text-sm">Everyday Performance</p>
        <p className="text-muted-foreground text-xs md:text-sm">© 2026 Everyday Performance. All rights reserved.</p>
      </div>
    </footer>
  );
}
