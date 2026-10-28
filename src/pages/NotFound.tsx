import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { PublicFooter } from "@/components/PublicFooter";
import { PublicNavbar } from "@/components/PublicNavbar";
import { SEO } from "@/components/SEO";
import { SignupLink } from "@/components/SignupLink";
import { Button } from "@/components/ui/button";
import { NOT_FOUND_META } from "@/content/seo";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <SEO
        title={NOT_FOUND_META.title}
        description={NOT_FOUND_META.description}
        path={location.pathname}
        noindex
      />
      <PublicNavbar />
      <main id="main" className="flex-1 flex items-center justify-center px-6 pt-28 pb-16 text-center">
        <div>
          <h1 className="font-oswald uppercase text-4xl md:text-5xl mb-4">Page not found</h1>
          <p className="text-muted-foreground mb-8 max-w-md">That address is not on Everyday Performance.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <SignupLink />
            <Button variant="outline" className="rounded-full border-white/20 bg-white/5 px-8 py-6 h-auto font-oswald uppercase tracking-wider" asChild>
              <Link to="/">Back to the homepage</Link>
            </Button>
          </div>
        </div>
      </main>
      <PublicFooter />
    </div>
  );
};

export default NotFound;
