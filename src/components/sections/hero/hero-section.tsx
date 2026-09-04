"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui";
import { PERSONAL_INFO, PROJECTS } from "@/lib/constants";

const ROTATING_WORDS = ["rápidos", "claros", "útiles", "sencillos"];

export default function HeroSection() {
  const [currentWord, setCurrentWord] = useState(0);
  const featuredProject =
    PROJECTS.find((project) => project.featured) ?? PROJECTS[0];

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) return;

    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % ROTATING_WORDS.length);
    }, 2400);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="flex min-h-screen items-center bg-transparent pt-28"
    >
      <div className="container mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-[1.08fr_0.92fr]">
          <div>
            <div className="eyebrow inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[color:var(--accent)]" />
              {PERSONAL_INFO.tagline}
            </div>

            <h1 className="mt-6 max-w-3xl text-5xl font-semibold leading-[1.02] text-foreground md:text-7xl">
              Construyo productos web
              <span className="block">
                <span className="text-accent animate-fade-in" key={currentWord}>
                  {ROTATING_WORDS[currentWord]}
                </span>{" "}
                y humanos.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted">
              Soy Nelson. Este es mi rincón para compartir productos pequeños,
              juegos y herramientas mientras los convierto en algo real.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-subtle">
              <span>{PERSONAL_INFO.title}</span>
              <a
                href={PERSONAL_INFO.github}
                className="transition-colors hover:text-[color:var(--accent)]"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub ↗
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                className="transition-colors hover:text-[color:var(--accent)]"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn ↗
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="#projects" size="lg">
                Ver el taller
              </Button>
              <Button href="#contact" variant="secondary" size="lg">
                Escribirme
              </Button>
            </div>
          </div>

          {featuredProject ? (
            <div className="hero-note rounded-[2rem] border border-surface bg-surface-elevated p-7 shadow-card md:p-8">
              <div className="flex items-center justify-between gap-4 text-xs font-semibold uppercase tracking-[0.18em] text-subtle">
                <span>Ahora mismo</span>
                <span className="status-badge status-published">
                  {featuredProject.status}
                </span>
              </div>
              <h2 className="mt-7 text-3xl font-semibold text-foreground">
                {featuredProject.title}
              </h2>
              <p className="mt-3 text-muted">{featuredProject.description}</p>
              <div className="mt-7 border-t border-surface-strong pt-5">
                <p className="text-xs uppercase tracking-[0.18em] text-subtle">
                  Por qué está aquí
                </p>
                <p className="mt-2 text-lg leading-relaxed text-foreground">
                  Porque una idea empieza a contar cuando alguien puede abrirla
                  y probarla.
                </p>
              </div>
              <div className="mt-7 flex flex-wrap gap-3">
                {featuredProject.liveUrl ? (
                  <Button
                    href={featuredProject.liveUrl}
                    target="_blank"
                    size="sm"
                  >
                    {featuredProject.liveLabel ?? "Abrir proyecto"}
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
          ) : null}
        </div>

        <div className="mt-16 flex flex-col items-center text-sm text-subtle">
          <span className="text-xs uppercase tracking-[0.3em]">Scroll</span>
          <div className="mt-3 animate-bounce">
            <a
              href="#projects"
              className="text-muted hover:text-[color:var(--accent)]"
            >
              <span className="sr-only">Desplazarse al taller</span>
              <svg
                className="h-6 w-6"
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
