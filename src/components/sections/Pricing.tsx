import { PRICING } from "@/content/pricing";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Reveal, RevealStagger } from "@/components/ui/Reveal";
import Image from "next/image";
import { Check, Dumbbell, ChevronRight, Trophy } from "lucide-react";
import { cn } from "@/lib/cn";

export function Pricing() {
  return (
    <Section
      id="pricing"
      variant="surface"
      ariaLabelledby="pricing-title"
      withTopDivider
      withBottomDivider
      className="scroll-mt-0 !py-0 sm:!py-0 lg:!py-0"
    >
      <div className="flex flex-col">
        {/* Full-bleed banner is the top of section */}
        <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen overflow-hidden border-b border-jfc-border bg-jfc-card/60 shadow-soft">
          <div className="relative w-full h-[220px] sm:h-[260px] lg:h-[320px] 2xl:h-[360px]">
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
            <div className="mx-auto flex h-full w-full max-w-7xl items-start px-3 pt-5 sm:px-5 sm:pt-7 lg:px-6 lg:pt-10">
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

        {/* Rest of section content with normal paddings */}
        <div className="flex flex-col gap-10 py-16 sm:py-20 lg:py-24">

        {/* Gym label */}
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

        {/* Plans */}
        <RevealStagger className="grid gap-4 lg:grid-cols-3">
          {PRICING.plans.map((p) => {
            const isFeatured = p.id === "day";
            return (
              <Card
                key={p.id}
                className={cn(
                  "p-6 sm:p-7",
                  isFeatured
                    ? "border-jfc-accent/35 shadow-[0_0_0_1px_rgba(208,0,0,0.18),0_22px_60px_rgba(0,0,0,0.55)]"
                    : "",
                )}
              >
                <div className="relative flex h-full flex-col">
                  <div>
                    <h3 className="text-lg font-semibold tracking-[-0.01em] text-white">
                      {p.name}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-jfc-muted">
                      {p.description}
                    </p>
                  </div>

                  <div className="mt-6 flex items-end gap-2">
                    <span className="text-3xl font-semibold tracking-[-0.02em] text-white">
                      {p.price}
                    </span>
                    <span className="pb-1 text-sm text-white/55">{p.period}</span>
                  </div>

                  <div className="mt-6 h-px w-full bg-white/5" />

                  <ul className="mt-6 grid gap-3">
                    {p.features.map((f) => (
                      <li key={f} className="flex gap-3 text-white/85">
                        <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full border border-jfc-border bg-white/[0.02]">
                          <Check className="h-4 w-4 text-jfc-accent" />
                        </span>
                        <span className="text-[15px] leading-7">{f}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7">
                    <Button
                      href={PRICING.ctaHref}
                      className="w-full justify-center"
                      variant={isFeatured ? "primary" : "secondary"}
                    >
                      {p.ctaLabel ?? "Записаться"}
                    </Button>
                  </div>

                  {/* <p className="mt-3 text-xs leading-5 text-white/45">
                    Условия и тарифы можно гибко настроить под ваши цели.
                  </p> */}
                </div>
              </Card>
            );
          })}
        </RevealStagger>

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

            <div className="mt-6 grid gap-8">
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
                      <Card
                        key={it.id}
                        className={cn(
                          "overflow-hidden p-0 transition-transform duration-200 will-change-transform",
                          "hover:-translate-y-0.5",
                        )}
                      >
                        <div className="relative aspect-[16/9] w-full bg-white/[0.02]">
                          <Image
                            src={it.imageSrc}
                            alt={it.title}
                            fill
                            sizes="(max-width: 1024px) 46vw, 18vw"
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_20%,rgba(0,0,0,0.82))]" />
                        </div>

                        <div className="p-5">
                          <p className="text-sm font-semibold tracking-[0.04em] text-white">
                            {it.title}
                          </p>
                          <p className="mt-3 text-sm leading-6 text-white/60">
                            {it.description}
                          </p>

                          <div className="mt-4 flex items-center justify-between">
                            <Button href={it.href} variant="ghost" size="sm" className="px-0">
                              Подробнее
                            </Button>
                            <ChevronRight className="h-4 w-4 text-jfc-accent" />
                          </div>
                        </div>
                      </Card>
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

