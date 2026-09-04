"use client";

import Lenis from "lenis";
import { useEffect } from "react";

export default function SmoothScroll() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const previousScrollRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";

    const initialHash = window.location.hash;
    const initialTarget = initialHash
      ? document.querySelector<HTMLElement>(initialHash)
      : null;
    if (initialTarget) {
      const targetY =
        initialTarget.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo(0, Math.max(0, targetY));
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - 2 ** (-10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: !prefersReducedMotion,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    const notifySmoothScroll = () => {
      window.dispatchEvent(new Event("smooth-scroll"));
    };
    lenis.on("scroll", notifySmoothScroll);

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    const setHash = (value: string) => {
      if (window.location.hash !== value) {
        window.history.replaceState(null, "", value);
        window.dispatchEvent(new Event("hashchange"));
      }
    };

    let scrollTimeout: ReturnType<typeof setTimeout> | null = null;
    let scrollStartY = window.scrollY;
    let isScrolling = false;
    let isSnapping = false;
    let isAnimating = false;
    let isBooting = Boolean(initialTarget);
    const bootTimeout = window.setTimeout(() => {
      isBooting = false;
      scrollStartY = window.scrollY;
    }, 1500);

    const snapToNextOrPrevious = () => {
      if (prefersReducedMotion || isBooting || isSnapping || isAnimating)
        return;

      const sections = Array.from(
        document.querySelectorAll<HTMLElement>("section[id]"),
      );
      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - scrollStartY;
      if (Math.abs(scrollDelta) < 50 || sections.length < 2) return;

      const viewportCenter = currentScrollY + window.innerHeight / 2;
      let currentIndex = 0;

      sections.forEach((section, index) => {
        const sectionTop = section.getBoundingClientRect().top + currentScrollY;
        const sectionBottom =
          sectionTop + section.getBoundingClientRect().height;
        if (viewportCenter >= sectionTop && viewportCenter < sectionBottom) {
          currentIndex = index;
        }
      });

      const targetIndex =
        scrollDelta > 0
          ? Math.min(currentIndex + 1, sections.length - 1)
          : Math.max(currentIndex - 1, 0);
      const targetSection = sections[targetIndex];
      if (!targetSection || targetIndex === currentIndex) return;

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
    };

    const handleAnchorClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const anchor = target.closest<HTMLAnchorElement>('a[href^="#"]');
      const href = anchor?.getAttribute("href");
      if (!href || href === "#") return;

      const targetElement = document.querySelector<HTMLElement>(href);
      if (!targetElement) return;

      event.preventDefault();
      if (prefersReducedMotion) {
        targetElement.scrollIntoView();
        setHash(href);
        return;
      }

      isAnimating = true;
      lenis.scrollTo(targetElement, {
        offset: -80,
        duration: 1.5,
        onComplete: () => {
          isAnimating = false;
          scrollStartY = window.scrollY;
          setHash(href);
        },
      });
    };

    const handleScroll = () => {
      if (prefersReducedMotion || isBooting || isSnapping || isAnimating)
        return;

      if (!isScrolling) {
        isScrolling = true;
        scrollStartY = window.scrollY;
      }

      if (scrollTimeout) clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        snapToNextOrPrevious();
        isScrolling = false;
      }, 100);
    };

    const handleScrollStart = () => {
      if (!isSnapping && !isAnimating) scrollStartY = window.scrollY;
    };

    document.addEventListener("click", handleAnchorClick);
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("scrollend", handleScrollStart, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      lenis.off("scroll", notifySmoothScroll);
      lenis.destroy();
      document.removeEventListener("click", handleAnchorClick);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scrollend", handleScrollStart);
      window.history.scrollRestoration = previousScrollRestoration;
      window.clearTimeout(bootTimeout);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, []);

  return null;
}
