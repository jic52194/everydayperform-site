import { Link } from "react-router-dom";

export function PublicNavbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-3 md:py-4 px-4 border-b border-white/[0.06] bg-[#050505]/85 backdrop-blur-xl">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="block transition-opacity duration-200 hover:opacity-80">
          <img
            src={`${import.meta.env.BASE_URL}logo.png`}
            alt="Everyday Performance"
            className="h-16 md:h-12 w-auto object-contain"
          />
        </Link>
        <div className="flex items-center gap-4 md:gap-4">
          <a href="https://app.everydayperform.com/login" className="text-xs md:text-sm font-oswald uppercase tracking-widest text-white/70 hover:text-white transition-colors">
            Log In
          </a>
          <a href="https://app.everydayperform.com/signup" className="hidden md:inline-flex text-xs font-oswald uppercase tracking-widest bg-primary text-primary-foreground px-5 py-2.5 rounded-full hover:bg-primary/90 transition-all shadow-[0_0_20px_-5px_rgba(143,143,86,0.5)]">
            Start Free
          </a>
        </div>
      </div>
    </header>
  );
}
