"use client";

import { useEffect, useState } from "react";
import { navLinks, site } from "@/data/site";
import { IconClose, IconMenu } from "@/components/icons";

const sectionIds = navLinks.map((link) => link.href.replace("#", ""));

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState(sectionIds[0]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );

    for (const id of sectionIds) {
      const element = document.getElementById(id);

      if (element) {
        observer.observe(element);
      }
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-all duration-300 ${
          scrolled || menuOpen
            ? "border-b border-white/10 bg-void/85 backdrop-blur-xl"
            : "border-b border-transparent"
        }`}
      >
        <nav
          aria-label="Primary"
          className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8 md:h-20"
        >
          <a
            href="#home"
            onClick={() => setMenuOpen(false)}
            className="group flex items-center gap-2.5"
          >
            <span
              aria-hidden="true"
              className="h-2.5 w-2.5 rounded-full bg-gradient-to-br from-brand-violet to-brand-cyan shadow-[0_0_16px_rgba(139,92,246,0.95)] transition-transform duration-300 group-hover:scale-125"
            />
            <span className="text-base font-semibold tracking-[0.22em] text-white sm:text-lg">
              {site.logo}
              <span className="text-brand-violet">.</span>
            </span>
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => {
              const isActive = active === link.href.replace("#", "");

              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    aria-current={isActive ? "true" : undefined}
                    className={`relative rounded-full px-4 py-2 text-sm transition-colors duration-300 ${
                      isActive
                        ? "text-white"
                        : "text-slate-400 hover:text-slate-100"
                    }`}
                  >
                    {link.label}
                    {isActive ? (
                      <span
                        aria-hidden="true"
                        className="absolute inset-x-4 -bottom-0.5 h-px bg-gradient-to-r from-transparent via-brand-violet to-transparent"
                      />
                    ) : null}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="hidden rounded-full border border-white/15 bg-white/[0.03] px-5 py-2 text-sm font-medium text-slate-200 transition-all duration-300 hover:border-brand-purple/60 hover:text-white md:inline-flex"
            >
              Let&apos;s talk
            </a>

            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] text-slate-200 transition-colors duration-300 hover:border-brand-purple/60 hover:text-white md:hidden"
            >
              {menuOpen ? <IconClose /> : <IconMenu />}
            </button>
          </div>
        </nav>
      </div>

      <div
        id="mobile-menu"
        hidden={!menuOpen}
        className="md:hidden border-b border-white/10 bg-void/95 backdrop-blur-xl"
      >
        <ul className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-5 py-5 sm:px-8">
          {navLinks.map((link) => {
            const isActive = active === link.href.replace("#", "");

            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  aria-current={isActive ? "true" : undefined}
                  className={`block rounded-xl border px-4 py-3 text-base transition-colors duration-300 ${
                    isActive
                      ? "border-brand-purple/40 bg-brand-purple/10 text-white"
                      : "border-white/5 text-slate-300 hover:border-white/15 hover:text-white"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
          <li className="pt-2">
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="block rounded-xl bg-gradient-to-r from-brand-purple via-brand-blue to-brand-cyan px-4 py-3 text-center text-base font-semibold text-white"
            >
              Let&apos;s talk
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
