import { Link } from "react-router-dom";

export function PublicFooter() {
  return (
    <footer className="relative z-10 py-4 md:py-6 border-t border-white/10 bg-background/80 backdrop-blur-md text-center shrink-0">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center space-y-2 md:space-y-4">
        <div className="flex items-center space-x-4 md:space-x-6 text-xs md:text-sm text-muted-foreground font-medium">
          <Link to="/press-kit" className="hover:text-primary transition-colors">Press</Link>
          <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
        </div>
        <p className="text-muted-foreground text-xs md:text-sm">© 2026 Everyday Performance. All rights reserved.</p>
      </div>
    </footer>
  );
}
