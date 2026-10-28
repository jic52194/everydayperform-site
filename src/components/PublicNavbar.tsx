import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { SIGNUP_URL } from "@/content/marketing";
import { PAGES, PRICING_HASH } from "@/content/seo";

const LINKS = [
  { to: PAGES.features.path, label: "Features" },
  { to: PAGES.howItWorks.path, label: "How it works" },
  { to: PRICING_HASH, label: "Pricing" },
  { to: PAGES.faq.path, label: "FAQ" },
  { to: PAGES.compare.path, label: "Compare" },
  { to: PAGES.guides.path, label: "Guides" },
];

function normalize(path: string) {
  if (path.length > 1 && path.endsWith("/")) return path.slice(0, -1);
  return path;
}

export function PublicNavbar() {
  const { pathname } = useLocation();
  const current = normalize(pathname);
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-3 md:py-4 px-4 border-b border-white/[0.06] bg-[#050505]/85 backdrop-blur-xl">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-2 focus:rounded-full"
      >
        Skip to content
      </a>
      <div className="container mx-auto flex items-center justify-between gap-3">
        <Link to="/" className="block shrink-0 transition-opacity duration-200 hover:opacity-80" onClick={() => setOpen(false)}>
          <img
            src={`${import.meta.env.BASE_URL}logo.png`}
            alt="Everyday Performance"
            width={200}
            height={100}
            className="h-14 md:h-12 w-auto object-contain"
          />
        </Link>
        <nav aria-label="Primary" className="hidden lg:flex items-center gap-5">
          {LINKS.map((link) => {
            const active = link.to !== PRICING_HASH && normalize(link.to) === current;
            return (
              <Link
                key={link.to}
                to={link.to}
                aria-current={active ? "page" : undefined}
                className={`text-xs font-oswald uppercase tracking-widest transition-colors ${active ? "text-primary" : "text-white/70 hover:text-white"}`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-3 md:gap-4">
          <button
            type="button"
            className="lg:hidden text-xs font-oswald uppercase tracking-widest text-white/80 border border-white/15 rounded-full px-3 py-2"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            Menu
          </button>
          <a href="https://app.everydayperform.com/login" className="text-xs md:text-sm font-oswald uppercase tracking-widest text-white/70 hover:text-white transition-colors">
            Log In
          </a>
          <a href={SIGNUP_URL} className="hidden md:inline-flex text-xs font-oswald uppercase tracking-widest bg-primary text-primary-foreground px-5 py-2.5 rounded-full hover:bg-primary/90 transition-all shadow-[0_0_20px_-5px_rgba(143,143,86,0.5)]">
            Create an Account
          </a>
        </div>
      </div>
      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="lg:hidden container mx-auto mt-3 rounded-2xl border border-white/10 bg-[#0e0e0e] p-3">
          <ul className="flex flex-col">
            {LINKS.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="block px-3 py-3 font-oswald uppercase tracking-widest text-sm text-white/80 hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
