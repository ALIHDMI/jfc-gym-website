import Image from "next/image";
import { BENEFITS } from "@/content/benefits";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Reveal, RevealStagger } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";
import { Trophy } from "lucide-react";

export function Benefits() {
  return (
    <Section
      id="benefits"
      ariaLabelledby="benefits-title"
      withTopDivider
      withBottomDivider
    >
      <div className="grid gap-10 lg:grid-cols-12 lg:items-start lg:gap-12">
        <div className="lg:col-span-3">
          <Reveal>
            <header className="max-w-[22rem]">
              <h2
                id="benefits-title"
                className="text-balance text-4xl font-semibold leading-[1.05] tracking-[0.02em] text-white sm:text-5xl"
              >
                <span className="block whitespace-pre-line">{BENEFITS.title.leading}</span>
                <span className="block text-jfc-accent">{BENEFITS.title.accent}</span>
              </h2>
              <p className="mt-5 max-w-[22rem] text-pretty text-[15px] leading-7 text-white/65 sm:text-base sm:leading-7">
                {BENEFITS.description}
              </p>
            </header>
          </Reveal>
        </div>

        <div className="lg:col-span-9">
          <RevealStagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {BENEFITS.cards.map((b) => {
              const Icon = b.icon;
              return (
                <Card
                  key={b.title}
                  className={cn(
                    "overflow-hidden p-0 transition-transform duration-200 will-change-transform",
                    "hover:-translate-y-0.5",
                  )}
                >
                  <div className="relative aspect-[16/10] w-full bg-white/[0.02]">
                    <Image
                      src={b.imageSrc}
                      alt={b.title}
                      fill
                      sizes="(max-width: 1024px) 46vw, 22vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_30%,rgba(0,0,0,0.78))]" />
                  </div>

                  <div className="p-6">
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex h-9 w-9 flex-none items-center justify-center rounded-xl border border-jfc-border bg-white/[0.02] shadow-[0_0_0_1px_rgba(208,0,0,0.10)]">
                        <Icon className="h-5 w-5 text-jfc-accent" />
                      </span>
                      <h3 className="text-sm font-semibold tracking-[0.04em] text-white">
                        {b.title}
                      </h3>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-jfc-muted">
                      {b.description}
                    </p>
                  </div>
                </Card>
              );
            })}
          </RevealStagger>

          <Reveal delay={0.05}>
            <Card className="mt-6 p-6 sm:p-7">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-jfc-border bg-white/[0.02] shadow-[0_0_0_1px_rgba(208,0,0,0.12)]">
                    <Trophy className="h-5 w-5 text-jfc-accent" />
                  </span>
                  <div>
                    <p className="whitespace-pre-line text-sm font-semibold tracking-[0.04em] text-white">
                      {BENEFITS.cta.title}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-white/60">
                      {BENEFITS.cta.description}
                    </p>
                  </div>
                </div>

                <Button href={BENEFITS.cta.href} className="sm:min-w-56 justify-center">
                  {BENEFITS.cta.buttonLabel}
                </Button>
              </div>
            </Card>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

