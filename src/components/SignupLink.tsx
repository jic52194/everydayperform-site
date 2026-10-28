import { Button } from "@/components/ui/button";
import { SIGNUP_URL } from "@/content/marketing";
import { sounds } from "@/lib/sounds";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

const primaryClass =
  "group rounded-full bg-primary text-primary-foreground hover:bg-primary/90 text-sm sm:text-base px-6 sm:px-10 py-4 sm:py-7 h-auto font-oswald uppercase tracking-[0.15em] shadow-[0_0_50px_-15px_rgba(143,143,86,0.6)] transition-all duration-300 motion-safe:hover:scale-105 hover:shadow-[0_0_70px_-15px_rgba(143,143,86,0.8)]";

export function SignupLink({
  label = "Create an Account",
  className,
}: {
  label?: string;
  className?: string;
}) {
  return (
    <Button
      onPointerDown={() => sounds.playClick()}
      size="lg"
      className={cn(primaryClass, className)}
      asChild
    >
      <a href={SIGNUP_URL}>
        <span>{label}</span>
        <ArrowRight className="w-4 h-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
      </a>
    </Button>
  );
}
