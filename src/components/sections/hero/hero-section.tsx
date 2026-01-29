"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui";
import { PERSONAL_INFO, PROJECTS } from "@/lib/constants";

const ROTATING_WORDS = ["rápidos", "escalables", "elegantes", "eficientes"];

export default function HeroSection() {
  const [currentWord, setCurrentWord] = useState(0);
  const featuredProject = PROJECTS.find((project) => project.featured) ?? PROJECTS[0];

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      return;
    }

    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % ROTATING_WORDS.length);
    }, 2200);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center bg-transparent pt-28"
    >
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid gap-12 md:grid-cols-[1.1fr_0.9fr] items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-accent-soft px-4 py-2 text-sm font-medium text-accent">
              <span className="h-2 w-2 rounded-full bg-[color:var(--accent)]" />
              {PERSONAL_INFO.availability}
            </div>

            <h1 className="mt-6 text-4xl md:text-6xl font-semibold text-foreground leading-tight">
              Construyo productos web
              <span className="block">
                <span className="text-accent animate-fade-in" key={currentWord}>
                  {ROTATING_WORDS[currentWord]}
                </span>{" "}
                y humanos.
              </span>
            </h1>

            <p className="mt-6 text-lg text-muted max-w-2xl">
              {PERSONAL_INFO.title} especializado en React y Next.js. Aquí
              recopilo proyectos, ideas y aprendizajes que me gusta construir.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-subtle">
              <span>Ubicación: {PERSONAL_INFO.location}</span>
              <a
                href={PERSONAL_INFO.github}
                className="hover:text-[color:var(--accent)] transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                className="hover:text-[color:var(--accent)] transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="#projects" size="lg">
                Ver proyectos
              </Button>
              <Button href="#contact" variant="secondary" size="lg">
                Contacto
              </Button>
            </div>
          </div>

          {featuredProject ? (
            <div className="rounded-3xl border border-surface bg-surface-elevated shadow-card backdrop-blur">
              <div className="p-6 md:p-8">
                <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.2em] text-subtle">
                  <span>Proyecto destacado</span>
                  {featuredProject.status ? (
                    <span className="rounded-full bg-accent-soft px-3 py-1 text-[11px] font-semibold text-accent">
                      {featuredProject.status}
                    </span>
                  ) : null}
                </div>

                <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-foreground">
                  {featuredProject.title}
                </h2>
                <p className="mt-3 text-sm text-muted">
                  {featuredProject.description}
                </p>

                {featuredProject.highlights?.length ? (
                  <ul className="mt-5 space-y-3 text-sm text-muted">
                    {featuredProject.highlights.slice(0, 3).map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-1 h-2 w-2 rounded-full bg-[color:var(--accent)]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}

                <div className="mt-6 flex flex-wrap gap-2">
                  {featuredProject.stack.slice(0, 6).map((tech) => (
                    <span
                      key={tech}
                      className="chip rounded-full px-3 py-1 text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  {featuredProject.liveUrl ? (
                    <Button href={featuredProject.liveUrl} target="_blank" size="sm">
                      Ver live
                    </Button>
                  ) : null}
                  {featuredProject.repoUrl ? (
                    <Button
                      href={featuredProject.repoUrl}
                      target="_blank"
                      variant="secondary"
                      size="sm"
                    >
                      Ver código
                    </Button>
                  ) : null}
                </div>
              </div>
            </div>
          ) : null}
        </div>

        <div className="mt-16 flex flex-col items-center text-sm text-subtle">
          <span className="uppercase tracking-[0.3em] text-xs">Scroll</span>
          <div className="mt-3 animate-bounce">
            <a href="#projects" className="text-muted hover:text-[color:var(--accent)]">
              <span className="sr-only">Desplazarse a proyectos</span>
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
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
