"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

import { NAV_ITEMS } from "@/content/navigation";
import { SITE } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

function getFocusable(root: HTMLElement | null) {
  if (!root) return [];
  const nodes = root.querySelectorAll<HTMLElement>(
    'a[href],button:not([disabled]),[tabindex]:not([tabindex="-1"])',
  );
  return Array.from(nodes).filter((el) => !el.hasAttribute("disabled"));
}

export function Header() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  const items = useMemo(() => NAV_ITEMS, []);
  const ctaLabel = "Стать членом клуба";
  const phone1 = "+996559665555";
  const phone2 = "+996509665555";

  useEffect(() => {
    if (!open) return;

    const prevOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";

    const focusTimer = window.setTimeout(() => {
      closeBtnRef.current?.focus();
    }, 0);

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        setOpen(false);
        return;
      }
      if (e.key !== "Tab") return;

      const focusable = getFocusable(panelRef.current);
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement;

      if (e.shiftKey) {
        if (active === first || active === panelRef.current) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (active === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.clearTimeout(focusTimer);
      window.removeEventListener("keydown", onKeyDown);
      document.documentElement.style.overflow = prevOverflow;
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50">
      <div className="relative border-b border-jfc-border bg-jfc-bg/55 backdrop-blur-xl supports-[backdrop-filter]:bg-jfc-bg/35 shadow-glass">
        <Container className="flex h-20 items-center justify-between gap-3 lg:h-27">
          <div className="flex items-center gap-3">
            <Link
              href="#top"
              aria-label={SITE.name}
              className="inline-flex items-center gap-2"
            >
              <Image
                src="/assets/brand/logo3.png"
                alt={`${SITE.name} logo`}
                width={186}
                height={54}
                priority
                className="h-10 w-auto lg:h-[54px]"
              />
            </Link>
          </div>

          <nav className="hidden lg:flex items-center gap-8">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative text-[15px] font-medium tracking-wide text-white transition-opacity hover:opacity-100 opacity-90",
                  "after:absolute after:-bottom-2 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-jfc-accent/70 after:transition-transform after:duration-200 hover:after:scale-x-100",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 lg:gap-4">
            <div className="hidden lg:flex flex-col items-end leading-tight lg:mr-2">
              <Link
                href={`tel:${phone1.replace(/[^\d+]/g, "")}`}
                className="text-[13px] font-medium text-white opacity-90 transition-opacity hover:opacity-100"
              >
                {phone1}
              </Link>
              <Link
                href={`tel:${phone2.replace(/[^\d+]/g, "")}`}
                className="text-[13px] font-medium text-white opacity-90 transition-opacity hover:opacity-100"
              >
                {phone2}
              </Link>
            </div>

            <div className="hidden sm:block lg:hidden">
              <Button href={SITE.cta.href} size="sm">
                {ctaLabel}
              </Button>
            </div>
            <div className="hidden lg:block">
              <Button href={SITE.cta.href} size="md">
                {ctaLabel}
              </Button>
            </div>

            <button
              type="button"
              aria-label="Открыть меню"
              aria-haspopup="dialog"
              aria-expanded={open}
              onClick={() => setOpen(true)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-jfc-border bg-white/[0.02] text-white transition-colors hover:bg-white/[0.04] lg:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-jfc-accent/55 focus-visible:ring-offset-2 focus-visible:ring-offset-jfc-bg"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </Container>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
            onMouseDown={() => setOpen(false)}
            aria-hidden="true"
          >
            <motion.div
              key="panel"
              ref={panelRef}
              role="dialog"
              aria-modal="true"
              aria-label="Меню"
              initial={{ x: 24, opacity: 0, scale: 0.98 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              exit={{ x: 24, opacity: 0, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 420, damping: 34 }}
              className="absolute right-4 top-4 w-[min(420px,calc(100vw-2rem))] overflow-hidden rounded-2xl border border-jfc-border bg-jfc-surface/85 shadow-soft backdrop-blur-xl"
              onMouseDown={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between px-5 py-4">
                <span className="text-sm font-medium tracking-wide text-white">
                  Меню
                </span>
                <button
                  ref={closeBtnRef}
                  type="button"
                  aria-label="Закрыть меню"
                  onClick={() => setOpen(false)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-jfc-border bg-white/[0.02] text-white transition-colors hover:bg-white/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-jfc-accent/55 focus-visible:ring-offset-2 focus-visible:ring-offset-jfc-bg"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="px-3 pb-4">
                <nav className="grid gap-1">
                  {items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="rounded-xl px-3 py-3 text-[15px] font-medium text-white transition-colors hover:bg-white/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-jfc-accent/45"
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>

                <div className="mt-4 px-3">
                  <div className="mb-3 rounded-xl border border-jfc-border bg-white/[0.02] px-4 py-3">
                    <p className="text-xs font-medium tracking-[0.22em] text-white opacity-90">
                      Телефоны
                    </p>
                    <div className="mt-2 grid gap-1">
                      <Link
                        href={`tel:${phone1.replace(/[^\d+]/g, "")}`}
                        className="text-sm font-medium text-white opacity-90 hover:opacity-100"
                      >
                        {phone1}
                      </Link>
                      <Link
                        href={`tel:${phone2.replace(/[^\d+]/g, "")}`}
                        className="text-sm font-medium text-white opacity-90 hover:opacity-100"
                      >
                        {phone2}
                      </Link>
                    </div>
                  </div>

                  <Button
                    href={SITE.cta.href}
                    className="w-full justify-center"
                  >
                    {ctaLabel}
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

