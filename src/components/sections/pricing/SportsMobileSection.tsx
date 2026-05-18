"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { PricingSportCategory } from "@/content/pricing";
import { PricingSportCard } from "@/components/sections/pricing/PricingSportCard";
import { ScrollPositionDots } from "@/components/sections/pricing/ScrollPositionDots";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/cn";

const SPORT_CARD_WIDTH =
  "w-[calc((100%-0.75rem)*0.88)] max-w-[22rem] shrink-0 snap-center";

type SportsMobileSectionProps = {
  categories: readonly PricingSportCategory[];
  className?: string;
};

export function SportsMobileSection({ categories, className }: SportsMobileSectionProps) {
  const [activeCategoryId, setActiveCategoryId] = useState(categories[0]?.id ?? "men");
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const activeCategory = useMemo(
    () => categories.find((cat) => cat.id === activeCategoryId) ?? categories[0],
    [categories, activeCategoryId],
  );

  const items = activeCategory?.items ?? [];

  const scrollToIndex = useCallback((index: number, behavior: ScrollBehavior = "smooth") => {
    const root = scrollRef.current;
    if (!root) return;
    const card = root.querySelector<HTMLElement>(`[data-sport-index="${index}"]`);
    card?.scrollIntoView({ behavior, inline: "center", block: "nearest" });
  }, []);

  useEffect(() => {
    const root = scrollRef.current;
    if (!root) return;

    const cards = root.querySelectorAll<HTMLElement>("[data-sport-index]");
    if (!cards.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const best = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!best) return;
        const index = Number(best.target.getAttribute("data-sport-index"));
        if (!Number.isNaN(index)) setActiveIndex(index);
      },
      { root, threshold: [0.55, 0.65, 0.75] },
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, [items.length, activeCategoryId]);

  useEffect(() => {
    setActiveIndex(0);
    scrollRef.current?.scrollTo({ left: 0, behavior: "auto" });
  }, [activeCategoryId]);

  return (
    <div
      className={cn(
        "relative -mx-3 w-[calc(100%+1.5rem)] min-w-0 max-w-none overflow-hidden sm:-mx-5 sm:w-[calc(100%+2.5rem)] lg:hidden",
        className,
      )}
    >
      <div
        className={cn(
          "mx-3 flex items-center gap-4 overflow-x-auto sm:mx-5",
          "[-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
        )}
        role="tablist"
        aria-label="Категории единоборств и фитнеса"
      >
        {categories.map((cat) => {
          const isActive = cat.id === activeCategoryId;
          return (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveCategoryId(cat.id)}
              className={cn(
                "shrink-0 whitespace-nowrap text-xs font-semibold tracking-[0.14em] transition-colors duration-200",
                isActive ? "text-jfc-accent" : "text-white/40 hover:text-white/65",
              )}
            >
              {cat.title}
            </button>
          );
        })}
        <ChevronRight
          className="ml-1 h-4 w-4 shrink-0 text-white/25"
          aria-hidden
        />
      </div>

      <div
        key={activeCategoryId}
        ref={scrollRef}
        className={cn(
          "mt-5 flex w-full max-w-full gap-3 overflow-x-auto overscroll-x-contain scroll-smooth",
          "snap-x snap-mandatory scroll-px-4 px-4 pb-1",
          "[-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
        )}
        aria-label={`Занятия: ${activeCategory?.title ?? ""}`}
        role="region"
      >
        {items.map((item, index) => (
          <div key={item.id} data-sport-index={index} className={SPORT_CARD_WIDTH}>
            <PricingSportCard item={item} />
          </div>
        ))}
      </div>

      <ScrollPositionDots
        count={items.length}
        activeIndex={activeIndex}
        onSelect={scrollToIndex}
        ariaLabel="Позиция в карусели направлений"
        getLabel={(index) =>
          `${items[index]?.title ?? "Направление"}, ${index + 1} из ${items.length}`
        }
      />
    </div>
  );
}
