"use client";

import { useEffect } from "react";

function prefersReducedMotion() {
  if (typeof window === "undefined") return true;
  return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
}

export function AnchorHashScroll() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented) return;
      if (e.button !== 0) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      const target = e.target as Element | null;
      const a = target?.closest?.("a") as HTMLAnchorElement | null;
      if (!a) return;

      const rawHref = a.getAttribute("href") ?? "";
      if (!rawHref) return;
      if (rawHref.startsWith("mailto:") || rawHref.startsWith("tel:")) return;
      if (a.target === "_blank") return;

      let url: URL;
      try {
        url = new URL(rawHref, window.location.href);
      } catch {
        return;
      }

      const { origin, pathname, hash } = url;
      if (!hash || hash === "#") return;
      if (origin !== window.location.origin) return;
      if (pathname !== window.location.pathname) return;

      const id = decodeURIComponent(hash.slice(1));
      const el = document.getElementById(id);
      if (!el) return;

      e.preventDefault();

      const lenis = (window as any).__lenis as
        | undefined
        | { scrollTo?: (target: HTMLElement, opts?: { offset?: number }) => void };

      if (!prefersReducedMotion() && lenis?.scrollTo) {
        lenis.scrollTo(el, { offset: 0 });
      } else {
        el.scrollIntoView({
          behavior: prefersReducedMotion() ? "auto" : "smooth",
          block: "start",
        });
      }

      if (window.location.hash !== hash) {
        window.history.pushState(null, "", hash);
      } else {
        window.history.replaceState(null, "", hash);
      }
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return null;
}

