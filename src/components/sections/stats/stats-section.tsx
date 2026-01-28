"use client";

import { useEffect, useRef, useState } from "react";
import { PROJECTS } from "@/lib/constants";

function AnimatedNumber({
  value,
  suffix = "",
  duration = 1200,
}: {
  value: number;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.4 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      setCount(value);
      return;
    }

    const start = performance.now();
    let rafId = 0;

    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setCount(Math.floor(progress * value));

      if (progress < 1) {
        rafId = requestAnimationFrame(animate);
      }
    };

    rafId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(rafId);
  }, [isVisible, value, duration]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-semibold text-foreground">
      {count}
      {suffix}
    </div>
  );
}

export default function StatsSection() {
  const liveProjects = PROJECTS.filter((project) => project.liveUrl).length;
  const featuredProjects = PROJECTS.filter((project) => project.featured).length;

  const stats = [
    {
      value: liveProjects,
      suffix: "+",
      label: "Proyectos en producción",
    },
    {
      value: featuredProjects,
      suffix: "+",
      label: "Productos destacados",
    },
    {
      value: 100,
      suffix: "%",
      label: "Foco en calidad, DX y detalle",
    },
  ];

  return (
    <section id="stats" className="bg-surface-alt">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-surface bg-surface-elevated p-6 shadow-card"
            >
              <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              <div className="text-sm text-muted mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
