import { Link } from "react-router-dom";
import { HEALTH_DISCLAIMER } from "@/content/marketing";

export function HealthNote({ className = "" }: { className?: string }) {
  return (
    <p className={`text-sm text-muted-foreground leading-relaxed ${className}`}>
      {HEALTH_DISCLAIMER}{" "}
      <Link to="/terms#health-disclaimer" className="underline underline-offset-2 hover:text-primary">
        Health disclaimer
      </Link>
    </p>
  );
}
