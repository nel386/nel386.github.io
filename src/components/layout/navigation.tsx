"use client";

import { useEffect, useState } from "react";
import ThemeToggle from "@/components/layout/theme-toggle";
import { PERSONAL_INFO } from "@/lib/constants";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Inicio", href: "#hero" },
  { label: "Proyectos", href: "#projects" },
  { label: "Sobre mí", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Estado", href: "#stats" },
  { label: "Contacto", href: "#contact" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const initialHash = window.location.hash.replace("#", "");
    if (NAV_LINKS.some((link) => link.href === `#${initialHash}`)) {
      setActiveSection(initialHash);
    }

    const sections = NAV_LINKS.map((link) =>
      document.querySelector<HTMLElement>(link.href),
    ).filter((section): section is HTMLElement => Boolean(section));

    const updateActiveSection = () => {
      const marker = window.scrollY + 120;
      let currentSection = sections[0]?.id ?? "hero";

      for (const section of sections) {
        const sectionTop = section.getBoundingClientRect().top + window.scrollY;
        if (sectionTop <= marker) currentSection = section.id;
      }

      setActiveSection(currentSection);
    };

    if (!initialHash) updateActiveSection();
    if (initialHash) setActiveSection(initialHash);
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("smooth-scroll", updateActiveSection);
    let lastScrollY = window.scrollY;
    let monitorFrame = 0;
    const monitorScrollPosition = () => {
      if (window.scrollY !== lastScrollY) {
        lastScrollY = window.scrollY;
        updateActiveSection();
      }
      monitorFrame = window.requestAnimationFrame(monitorScrollPosition);
    };
    monitorFrame = window.requestAnimationFrame(monitorScrollPosition);
    const initialPositionTimeout = window.setTimeout(updateActiveSection, 500);
    const syncHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (NAV_LINKS.some((link) => link.href === `#${hash}`)) {
        setActiveSection(hash);
      }
    };
    const initialHashTimeout = window.setTimeout(syncHash, 1000);
    window.addEventListener("hashchange", syncHash);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("smooth-scroll", updateActiveSection);
      window.cancelAnimationFrame(monitorFrame);
      window.removeEventListener("hashchange", syncHash);
      window.clearTimeout(initialHashTimeout);
      window.clearTimeout(initialPositionTimeout);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleLinkClick = (href?: string) => {
    setIsOpen(false);
    if (href) setActiveSection(href.replace("#", ""));
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-nav backdrop-blur-sm shadow-soft py-3"
          : "bg-transparent py-5",
      )}
    >
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex items-center justify-between">
          <a
            href="#hero"
            className="text-lg font-semibold text-foreground hover:text-[color:var(--accent)] transition-colors"
          >
            {PERSONAL_INFO.name.split(" ")[0]}
          </a>

          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => handleLinkClick(link.href)}
                      className={cn(
                        "text-sm font-medium transition-colors",
                        isActive
                          ? "text-accent"
                          : "text-muted hover:text-[color:var(--accent)]",
                      )}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
            <ThemeToggle />
          </div>

          <div className="flex items-center gap-3 md:hidden">
            <ThemeToggle />
            <button
              type="button"
              className="p-2 text-muted hover:text-[color:var(--accent)]"
              aria-label="Abrir menú de navegación"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={cn(
          "md:hidden fixed inset-0 z-40 transition-all duration-300",
          isOpen ? "pointer-events-auto" : "pointer-events-none",
        )}
        aria-hidden={!isOpen}
      >
        <button
          type="button"
          aria-label="Cerrar menú de navegación"
          className={cn(
            "absolute inset-0 cursor-default border-0 bg-overlay p-0 backdrop-blur-sm transition-opacity",
            isOpen ? "opacity-100" : "opacity-0",
          )}
          onClick={() => setIsOpen(false)}
        />
        <div
          className={cn(
            "absolute top-20 right-6 left-6 rounded-2xl border border-surface-strong bg-surface-elevated shadow-card p-6 transition-all",
            isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4",
          )}
        >
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => handleLinkClick(link.href)}
                className="text-base font-medium text-foreground hover:text-[color:var(--accent)]"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
