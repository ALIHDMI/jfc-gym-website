import { PRICING } from "@/content/pricing";
import { GymPlansScroll } from "@/components/sections/pricing/GymPlansScroll";
import { PricingPlanCard } from "@/components/sections/pricing/PricingPlanCard";
import { PricingSportCard } from "@/components/sections/pricing/PricingSportCard";
import { SportsMobileSection } from "@/components/sections/pricing/SportsMobileSection";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Reveal, RevealStagger } from "@/components/ui/Reveal";
import Image from "next/image";
import { Dumbbell, Trophy } from "lucide-react";
import { cn } from "@/lib/cn";

const pricingHeroBanner = (
  <div className="relative w-full overflow-hidden border-b border-jfc-border bg-jfc-card/60 shadow-soft">
    <div className="relative h-[220px] w-full sm:h-[260px] lg:h-[320px] 2xl:h-[360px]">
      <Image
        src={PRICING.heroBanner.imageSrc}
        alt={PRICING.heroBanner.alt}
        fill
        priority={false}
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.82)_0%,rgba(0,0,0,0.32)_52%,rgba(0,0,0,0.70)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(700px_420px_at_15%_0%,rgba(208,0,0,0.16),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(520px_320px_at_18%_22%,rgba(0,0,0,0.72),transparent_65%)]" />
    </div>

    <div className="absolute inset-0">
      <div className="mx-auto flex h-full w-full max-w-[88rem] items-start px-2 pt-5 sm:px-4 sm:pt-7 lg:px-5 lg:pt-10">
        <Reveal y={10} className="max-w-[26rem]">
          <h2
            id="pricing-title"
            className="text-balance text-4xl font-semibold uppercase leading-[1.05] tracking-[0.02em] text-white sm:text-5xl"
          >
            {PRICING.title}
          </h2>
          <p className="mt-3 max-w-[26rem] whitespace-pre-line text-pretty text-[14px] leading-6 text-white/70 sm:mt-4 sm:text-base sm:leading-7">
            {PRICING.description}
          </p>
        </Reveal>
      </div>
    </div>
  </div>
);

export function Pricing() {
  return (
    <Section
      id="pricing"
      variant="surface"
      ariaLabelledby="pricing-title"
      withTopDivider
      withBottomDivider
      className="scroll-mt-0 !py-0 sm:!py-0 lg:!py-0"
      leadingFullWidth={pricingHeroBanner}
    >
      <div className="flex flex-col">
        {/* Rest of section content with normal paddings */}
        <div className="flex flex-col gap-10 py-16 sm:py-20 lg:py-24">

        <div className="flex flex-col gap-4 sm:gap-5">
          <Reveal>
          <div className="flex items-start gap-3">
            <span className="mt-1 inline-flex h-11 w-11 flex-none items-center justify-center rounded-xl border border-jfc-border bg-white/[0.02] shadow-[0_0_0_1px_rgba(208,0,0,0.12)]">
              <Dumbbell className="h-5 w-5 text-jfc-accent" />
            </span>
            <div>
              <p className="text-sm font-semibold tracking-[0.06em] text-white">
                {PRICING.gym.title}
              </p>
              <p className="mt-1 text-sm text-white/55">{PRICING.gym.subtitle}</p>
            </div>
          </div>
        </Reveal>

          <Reveal className="min-w-0 max-w-full overflow-x-clip lg:hidden">
          <GymPlansScroll plans={PRICING.plans} ctaHref={PRICING.ctaHref} />
        </Reveal>

          <RevealStagger className="hidden gap-4 lg:grid lg:grid-cols-3 xl:grid-cols-4">
            {PRICING.plans.map((p) => (
              <PricingPlanCard key={p.id} plan={p} ctaHref={PRICING.ctaHref} />
            ))}
          </RevealStagger>
        </div>

        {/* Sports & fitness */}
        <Reveal delay={0.05}>
          <div className="mt-2">
            <div className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-11 w-11 flex-none items-center justify-center rounded-xl border border-jfc-border bg-white/[0.02] shadow-[0_0_0_1px_rgba(208,0,0,0.12)]">
                <Trophy className="h-5 w-5 text-jfc-accent" />
              </span>
              <div>
                <p className="text-sm font-semibold tracking-[0.06em] text-white">
                  {PRICING.sports.title}
                </p>
                <p className="mt-1 text-sm text-white/55">{PRICING.sports.subtitle}</p>
              </div>
            </div>

            <SportsMobileSection
              categories={PRICING.sports.categories}
              className="mt-6"
            />

            <div className="mt-6 hidden gap-8 lg:grid">

              {PRICING.sports.categories.map((cat) => (
                <div key={cat.id}>
                  <p className="text-xs font-semibold tracking-[0.14em] text-jfc-accent">
                    {cat.title}
                  </p>

                  <div
                    className={cn(
                      "mt-4 grid gap-4",
                      cat.items.length >= 5
                        ? "sm:grid-cols-2 lg:grid-cols-5"
                        : "sm:grid-cols-2 lg:grid-cols-4",
                    )}
                  >
                    {cat.items.map((it) => (
                      <PricingSportCard key={it.id} item={it} />
                    ))}
                  </div>
                </div>
              ))}
            </div>

          {/* Bottom CTA */}
          {/* <Card className="mt-8 p-6 sm:p-7">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-jfc-border bg-white/[0.02] shadow-[0_0_0_1px_rgba(208,0,0,0.12)]">
                  <Trophy className="h-5 w-5 text-jfc-accent" />
                </span>
                <div>
                  <p className="text-sm font-semibold tracking-[0.06em] text-white">
                    {PRICING.bottomCta.title}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/60">
                    {PRICING.bottomCta.description}
                  </p>
                </div>
              </div>

              <Button href={PRICING.bottomCta.href} className="justify-center sm:min-w-64">
                {PRICING.bottomCta.buttonLabel}
              </Button>
            </div>
          </Card> */}
          </div>
        </Reveal>
        </div>
      </div>
    </Section>
  );
}

