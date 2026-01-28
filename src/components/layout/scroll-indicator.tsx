"use client";

import { useEffect, useState } from "react";
import { SECTIONS } from "@/lib/constants";

export default function ScrollIndicator() {
  const [activeSection, setActiveSection] = useState(SECTIONS[0]?.id ?? "hero");

  useEffect(() => {
    const sections = SECTIONS.map((section) =>
      document.getElementById(section.id),
    ).filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0.1 },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
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