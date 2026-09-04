"use client";

import { useEffect, useState } from "react";
import { SECTIONS } from "@/lib/constants";

export default function ScrollIndicator() {
  const [activeSection, setActiveSection] = useState(SECTIONS[0]?.id ?? "hero");

  useEffect(() => {
    const initialHash = window.location.hash.replace("#", "");
    if (SECTIONS.some((section) => section.id === initialHash)) {
      setActiveSection(initialHash);
    }

    const sections = SECTIONS.map((section) =>
      document.getElementById(section.id),
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
      if (SECTIONS.some((section) => section.id === hash)) {
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

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-3">
      {SECTIONS.map((section) => {
        const isActive = activeSection === section.id;
        return (
          <a
            key={section.id}
            href={`#${section.id}`}
            className="group relative"
            aria-label={`Ir a ${section.label}`}
          >
            <div
              className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                isActive
                  ? "bg-[color:var(--accent)] border-[color:var(--accent)] scale-125"
                  : "bg-transparent border-surface-strong hover:border-[color:var(--accent)]"
              }`}
            />

            <span className="absolute right-6 top-1/2 -translate-y-1/2 px-2 py-1 bg-[color:var(--surface)] text-foreground text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-soft">
              {section.label}
            </span>
          </a>
        );
      })}
    </div>
  );
}
