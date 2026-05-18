"use client";

import { AssetImage as Image } from "@/components/ui/AssetImage";
import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

import { cn } from "@/lib/cn";

export type LightboxItem = {
  alt: string;
  src?: string;
};

export type LightboxProps = {
  open: boolean;
  items: readonly LightboxItem[];
  initialIndex: number;
  onClose: () => void;
};

export function Lightbox({ open, items, initialIndex, onClose }: LightboxProps) {
  const safeInitial = Math.min(
    Math.max(0, initialIndex),
    Math.max(0, items.length - 1),
  );
  const [index, setIndex] = useState(safeInitial);

  useEffect(() => {
    if (!open) return;
    setIndex(safeInitial);
  }, [open, safeInitial]);

  const current = items[index];
  const canPrev = index > 0;
  const canNext = index < items.length - 1;

  const counter = useMemo(
    () => `${index + 1} / ${items.length}`,
    [index, items.length],
  );

  useEffect(() => {
    if (!open) return;

    const prevOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key === "ArrowLeft" && canPrev) {
        e.preventDefault();
        setIndex((v) => Math.max(0, v - 1));
      }
      if (e.key === "ArrowRight" && canNext) {
        e.preventDefault();
        setIndex((v) => Math.min(items.length - 1, v + 1));
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.documentElement.style.overflow = prevOverflow;
    };
  }, [canNext, canPrev, items.length, onClose, open]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-md"
          onMouseDown={onClose}
          aria-hidden="true"
        >
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 420, damping: 34 }}
            className="absolute inset-x-4 top-6 mx-auto max-w-5xl"
            onMouseDown={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Просмотр изображения"
          >
            <div className="flex items-center justify-between gap-3">
              <div className="min-w-0">
                <p className="truncate text-sm font-medium text-white/85">
                  {current?.alt ?? "Изображение"}
                </p>
                <p className="mt-1 text-xs text-white/45">{counter}</p>
              </div>

              <button
                type="button"
                aria-label="Закрыть"
                onClick={onClose}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-jfc-border bg-white/[0.02] text-white/90 transition-colors hover:bg-white/[0.04] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-jfc-accent/45"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-4 overflow-hidden rounded-2xl border border-jfc-border bg-jfc-card/70 shadow-soft">
              <motion.div
                key={index}
                className="relative aspect-[16/9] w-full"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.15}
                onDragEnd={(_, info) => {
                  const threshold = 80;
                  if (info.offset.x > threshold && canPrev) setIndex((v) => v - 1);
                  if (info.offset.x < -threshold && canNext) setIndex((v) => v + 1);
                }}
              >
                {current?.src ? (
                  <Image
                    src={current.src}
                    alt={current.alt}
                    fill
                    sizes="(max-width: 1024px) 92vw, 960px"
                    className="object-cover"
                    priority
                  />
                ) : (
                  <div className="absolute inset-0 grid place-items-center bg-[radial-gradient(520px_260px_at_20%_0%,rgba(208,0,0,0.10),transparent_60%)]">
                    <div className="text-center">
                      <p className="text-sm font-medium text-white/85">
                        Контент скоро появится
                      </p>
                      <p className="mt-2 text-sm text-white/55">
                        Замените слот реальным файлом в конфиге галереи.
                      </p>
                    </div>
                  </div>
                )}
              </motion.div>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <button
                type="button"
                onClick={() => (canPrev ? setIndex((v) => v - 1) : null)}
                disabled={!canPrev}
                className={cn(
                  "inline-flex h-11 items-center gap-2 rounded-full border border-jfc-border bg-white/[0.02] px-4 text-sm font-medium text-white/85 transition-colors",
                  "hover:bg-white/[0.04] disabled:opacity-40 disabled:pointer-events-none",
                )}
              >
                <ChevronLeft className="h-4 w-4" />
                Назад
              </button>

              <button
                type="button"
                onClick={() => (canNext ? setIndex((v) => v + 1) : null)}
                disabled={!canNext}
                className={cn(
                  "inline-flex h-11 items-center gap-2 rounded-full border border-jfc-border bg-white/[0.02] px-4 text-sm font-medium text-white/85 transition-colors",
                  "hover:bg-white/[0.04] disabled:opacity-40 disabled:pointer-events-none",
                )}
              >
                Вперёд
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

