"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { PricingPlan } from "@/content/pricing";
import { PricingPlanCard } from "@/components/sections/pricing/PricingPlanCard";
import { ScrollPositionDots } from "@/components/sections/pricing/ScrollPositionDots";
import { cn } from "@/lib/cn";

const PLAN_CARD_WIDTH =
  "w-[calc((100%-0.75rem)*0.88)] max-w-[22rem] shrink-0 snap-center";

type GymPlansScrollProps = {
  plans: readonly PricingPlan[];
  ctaHref: string;
  className?: string;
};

export function GymPlansScroll({ plans, ctaHref, className }: GymPlansScrollProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = useCallback((index: number, behavior: ScrollBehavior = "smooth") => {
    const root = scrollRef.current;
    if (!root) return;
    const card = root.querySelector<HTMLElement>(`[data-plan-index="${index}"]`);
    card?.scrollIntoView({ behavior, inline: "center", block: "nearest" });
  }, []);

  useEffect(() => {
    const root = scrollRef.current;
    if (!root) return;

    const cards = root.querySelectorAll<HTMLElement>("[data-plan-index]");
    if (!cards.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const best = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!best) return;
        const index = Number(best.target.getAttribute("data-plan-index"));
        if (!Number.isNaN(index)) setActiveIndex(index);
      },
      { root, threshold: [0.55, 0.65, 0.75] },
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, [plans.length]);

  useEffect(() => {
    const featuredIndex = plans.findIndex((plan) => plan.id === "day");
    if (featuredIndex < 0) return;

    const timer = window.setTimeout(() => scrollToIndex(featuredIndex, "auto"), 0);
    return () => window.clearTimeout(timer);
  }, [plans, scrollToIndex]);

  return (
    <div
      className={cn(
        "relative -mx-3 w-[calc(100%+1.5rem)] min-w-0 max-w-none overflow-hidden sm:-mx-5 sm:w-[calc(100%+2.5rem)] lg:hidden",
        className,
      )}
    >
      <div
        ref={scrollRef}
        className={cn(
          "flex w-full max-w-full gap-3 overflow-x-auto overscroll-x-contain scroll-smooth",
          "snap-x snap-mandatory scroll-px-4 px-4 pb-1",
          "[-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
        )}
        aria-label="Абонементы тренажёрного зала"
        role="region"
      >
        {plans.map((plan, index) => (
          <div key={plan.id} data-plan-index={index} className={PLAN_CARD_WIDTH}>
            <PricingPlanCard plan={plan} ctaHref={ctaHref} className="h-full" />
          </div>
        ))}
      </div>

      <ScrollPositionDots
        count={plans.length}
        activeIndex={activeIndex}
        onSelect={scrollToIndex}
        ariaLabel="Позиция в карусели абонементов"
        getLabel={(index) =>
          `${plans[index]?.name ?? "Абонемент"}, ${index + 1} из ${plans.length}`
        }
      />
    </div>
  );
}
