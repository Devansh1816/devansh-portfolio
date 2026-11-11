import { navLinks, site } from "@/data/site";

// Kept static so the page stays fully prerenderable. Bump it each new year.
const copyrightYear = 2026;

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-6 px-5 sm:px-8 md:flex-row md:justify-between">
        <div className="flex flex-col items-center gap-2 md:items-start">
          <span className="text-sm font-semibold tracking-[0.22em] text-white">
            {site.logo}
            <span className="text-brand-violet">.</span>
          </span>
          <p className="text-xs text-slate-500">
            {site.name} — AI Product Builder | Aspiring AI Product Manager
          </p>
        </div>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-xs text-slate-400 transition-colors duration-300 hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <p className="text-xs text-slate-500">© {copyrightYear} {site.name}</p>
      </div>
    </footer>
  );
}
