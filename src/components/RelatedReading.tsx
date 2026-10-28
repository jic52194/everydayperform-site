import { Link } from "react-router-dom";

export function RelatedReading({ links }: { links: { to: string; label: string }[] }) {
  return (
    <nav aria-label="Related pages" className="mt-16 border-t border-white/10 pt-8">
      <h2 className="font-oswald uppercase tracking-wide text-lg mb-4">Keep reading</h2>
      <ul className="flex flex-col gap-2">
        {links.map((link) => (
          <li key={link.to}>
            <Link to={link.to} className="text-primary underline underline-offset-4 hover:text-primary/80">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
