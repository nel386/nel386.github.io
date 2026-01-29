"use client";

import Lenis from "lenis";
import { useEffect } from "react";

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - 2 ** (-10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    // ======================================
    // 1. SMOOTH SCROLL EN LINKS
    // ======================================
    const setHash = (value: string) => {
      if (window.location.hash !== value) {
        history.replaceState(null, "", value);
      }
    };

    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');

      if (anchor) {
        e.preventDefault();
        const href = anchor.getAttribute("href");
        if (href && href !== "#") {
          const targetElement = document.querySelector(href);
          if (targetElement instanceof HTMLElement) {
            lenis.scrollTo(targetElement, {
              offset: -80,
              duration: 1.5,
              onComplete: () => {
                setHash(href);
              },
            });
          }
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    // ======================================
    // 2. SNAP DIRECCIONAL CON THRESHOLD BAJO
    // ======================================
    let scrollTimeout: ReturnType<typeof setTimeout> | null = null;
    let scrollStartY = window.scrollY;
    let isScrolling = false;
    let isSnapping = false;

    const SCROLL_THRESHOLD = 50; // 50px = poco scroll ya activa el snap

    const snapToNextOrPrevious = () => {
      if (isSnapping) return;

      const sections = Array.from(
        document.querySelectorAll("section[id]"),
      ) as HTMLElement[];
      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - scrollStartY;

      // Si no scrolleó al menos el threshold, no hacer nada
      if (Math.abs(scrollDelta) < SCROLL_THRESHOLD) {
        return;
      }

      // Encontrar sección actual
      const viewportCenter = currentScrollY + window.innerHeight / 2;
      let currentIndex = 0;

      sections.forEach((section, i) => {
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top + currentScrollY;
        const sectionBottom = sectionTop + rect.height;

        if (viewportCenter >= sectionTop && viewportCenter < sectionBottom) {
          currentIndex = i;
        }
      });

      let targetIndex = currentIndex;

      // Detectar dirección del scroll
      if (scrollDelta > 0) {
        // Scroll hacia abajo → siguiente sección
        targetIndex = Math.min(currentIndex + 1, sections.length - 1);
      } else if (scrollDelta < 0) {
        // Scroll hacia arriba → sección anterior
        targetIndex = Math.max(currentIndex - 1, 0);
      }

      // Ejecutar snap
      const targetSection = sections[targetIndex];
      if (targetSection && targetIndex !== currentIndex) {
        isSnapping = true;
        lenis.scrollTo(targetSection, {
          offset: -80,
          duration: 0.8,
          onComplete: () => {
            isSnapping = false;
            scrollStartY = window.scrollY;
            setHash(`#${targetSection.id}`);
          },
        });
      }
    };

    const handleScroll = () => {
      // Si ya está snapping, ignorar
      if (isSnapping) return;

      if (!isScrolling) {
        isScrolling = true;
        scrollStartY = window.scrollY;
      }

      if (scrollTimeout) clearTimeout(scrollTimeout);

      scrollTimeout = setTimeout(() => {
        snapToNextOrPrevious();
        isScrolling = false;
      }, 100); // Reducido de 150ms a 100ms para más reactividad
    };

    const handleScrollStart = () => {
      if (!isSnapping) {
        scrollStartY = window.scrollY;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("scrollend", handleScrollStart, { passive: true });

    // ======================================
    // CLEANUP
    // ======================================
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      document.removeEventListener("click", handleAnchorClick);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scrollend", handleScrollStart);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, []);

  return null;
}
