"use client";

import { cn } from "@/lib/cn";

type ScrollPositionDotsProps = {
  count: number;
  activeIndex: number;
  onSelect: (index: number) => void;
  getLabel?: (index: number) => string;
  ariaLabel: string;
  className?: string;
};

export function ScrollPositionDots({
  count,
  activeIndex,
  onSelect,
  getLabel,
  ariaLabel,
  className,
}: ScrollPositionDotsProps) {
  if (count <= 1) return null;

  return (
    <div
      className={cn("mt-5 flex items-center justify-center gap-2", className)}
      role="tablist"
      aria-label={ariaLabel}
    >
      {Array.from({ length: count }, (_, index) => {
        const isActive = index === activeIndex;
        return (
          <button
            key={index}
            type="button"
            role="tab"
            aria-selected={isActive}
            aria-label={getLabel?.(index) ?? `Слайд ${index + 1} из ${count}`}
            onClick={() => onSelect(index)}
            className={cn(
              "h-1.5 rounded-full transition-all duration-300 ease-out",
              isActive
                ? "w-7 bg-jfc-accent shadow-[0_0_12px_rgba(208,0,0,0.45)]"
                : "w-1.5 bg-white/25 hover:bg-white/40",
            )}
          />
        );
      })}
    </div>
  );
}
