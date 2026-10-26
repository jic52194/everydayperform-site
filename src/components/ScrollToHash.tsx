import { useLayoutEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

/**
 * GitHub Pages redirects /terms to /terms/ before React paints, and the health
 * heading does not exist for the browser's first fragment scroll. Client-side
 * visits from a scrolled homepage also keep that scroll offset, so
 * /terms#health-disclaimer misses the section. Scroll after the target commits.
 */
export function ScrollToHash() {
  const { pathname, hash } = useLocation();
  const navigationType = useNavigationType();

  useLayoutEffect(() => {
    // After a /terms -> /terms/ redirect the fragment is on window.location
    // even when the first router snapshot has not picked it up yet.
    const activeHash = hash || window.location.hash;
    if (activeHash) {
      let id = activeHash.slice(1);
      try {
        id = decodeURIComponent(id);
      } catch {
        // Keep the raw fragment when it is not valid percent-encoding.
      }

      let tries = 0;
      let frame = 0;
      const findTarget = () => {
        // The route shell repeats this id until React replaces it. Prefer the
        // copy inside #root so scrollIntoView moves the page, not the shell.
        const root = document.getElementById("root");
        if (root) {
          for (const node of root.querySelectorAll("[id]")) {
            if (node.id === id) return node;
          }
        }
        const shell = document.getElementById("static-shell");
        if (!shell) return document.getElementById(id);
        return null;
      };
      const tick = () => {
        const el = findTarget();
        if (el && typeof el.scrollIntoView === "function") {
          el.scrollIntoView({ block: "start", behavior: "auto" });
          return;
        }
        if (tries++ < 20) frame = window.requestAnimationFrame(tick);
      };
      tick();
      return () => window.cancelAnimationFrame(frame);
    }

    // The first load is a POP. Leave the browser's own restoration alone, and
    // still jump to the top when a link opens a page that has no fragment.
    if (navigationType !== "POP") window.scrollTo(0, 0);
  }, [pathname, hash, navigationType]);

  return null;
}
