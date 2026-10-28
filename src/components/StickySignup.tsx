import { SIGNUP_URL } from "@/content/marketing";
import { ArrowRight } from "lucide-react";

export function StickySignup() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-50 md:hidden pb-[env(safe-area-inset-bottom)]">
      <div className="bg-[#050505]/95 backdrop-blur-2xl border-t border-white/10 px-4 pt-2 pb-3">
        <p className="text-center text-[11px] tracking-wide text-white/70 pb-2">Free account · no card</p>
        <a
          href={SIGNUP_URL}
          className="flex items-center justify-center gap-2 w-full bg-primary text-primary-foreground font-oswald uppercase tracking-[0.18em] text-sm py-3.5 rounded-full shadow-[0_0_30px_-8px_rgba(143,143,86,0.7)] hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          Create an Account
          <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}
