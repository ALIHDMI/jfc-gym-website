import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Check } from "lucide-react";
import { cn } from "@/lib/cn";
import type { PricingPlan } from "@/content/pricing";

type PricingPlanCardProps = {
  plan: PricingPlan;
  ctaHref: string;
  className?: string;
};

export function PricingPlanCard({ plan: p, ctaHref, className }: PricingPlanCardProps) {
  const isFeatured = p.id === "day";

  return (
    <Card
      className={cn(
        "p-6 sm:p-7",
        isFeatured
          ? "border-jfc-accent/35 shadow-[0_0_0_1px_rgba(208,0,0,0.18),0_22px_60px_rgba(0,0,0,0.55)]"
          : "",
        className,
      )}
    >
      <div className="relative flex h-full flex-col">
        <div>
          <h3 className="text-lg font-semibold tracking-[-0.01em] text-white">{p.name}</h3>
          <p className="mt-2 text-sm leading-6 text-jfc-muted">{p.description}</p>
        </div>

        <div className="mt-6 flex items-end gap-2">
          <span className="text-3xl font-semibold tracking-[-0.02em] text-white">{p.price}</span>
          <span className="pb-1 text-sm text-white/55">{p.period}</span>
        </div>

        <div className="mt-6 h-px w-full bg-white/5" />

        <ul className="mt-6 grid gap-3">
          {p.features.map((f) => (
            <li key={f} className="flex gap-3 text-white/85">
              <span className="mt-0.5 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full border border-jfc-border bg-white/[0.02]">
                <Check className="h-4 w-4 text-jfc-accent" />
              </span>
              <span className="text-[15px] leading-7">{f}</span>
            </li>
          ))}
        </ul>

        <div className="mt-7">
          <Button
            href={ctaHref}
            className="w-full justify-center"
            variant={isFeatured ? "primary" : "secondary"}
          >
            {p.ctaLabel ?? "Записаться"}
          </Button>
        </div>
      </div>
    </Card>
  );
}
