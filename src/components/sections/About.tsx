import { AssetImage as Image } from "@/components/ui/AssetImage";
import { ABOUT } from "@/content/about";
import { InfrastructureGallery } from "@/components/sections/InfrastructureGallery";
import { FightersScroll } from "@/components/sections/FightersScroll";
import { DesktopFighterCard } from "@/components/sections/DesktopFighterCard";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import {
  CalendarDays,
  Crosshair,
  Dumbbell,
  Package,
  Star,
  Trophy,
  Users,
} from "lucide-react";
import { cn } from "@/lib/cn";

export function About() {
  const featureIconMap = {
    trophy: Trophy,
    target: Crosshair,
    dumbbell: Dumbbell,
  } as const;

  const statIconMap = {
    cube: Package,
    users: Users,
    star: Star,
    calendar: CalendarDays,
  } as const;

  const fightersHeading = (
    <h2 className="text-center text-4xl font-semibold leading-tight tracking-[0.02em] lg:text-left lg:text-5xl">
      <span className="text-white">{ABOUT.fightersHeading.leading}</span>
      <span className="text-jfc-accent">{ABOUT.fightersHeading.accent}</span>
    </h2>
  );

  const renderMobileFeatureCard = (f: (typeof ABOUT.features)[number]) => {
    const Icon = featureIconMap[f.icon];
    return (
      <div
        key={f.title}
        className={cn(
          "box-border w-full min-w-0 max-w-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] px-5 py-4",
          "shadow-[0_18px_50px_rgba(0,0,0,0.35)]",
        )}
      >
        <div className="flex min-w-0 gap-4">
          <Icon className="mt-1 h-5 w-5 flex-none text-jfc-accent" />
          <div className="min-w-0 flex-1">
            <p className="break-words text-xs font-semibold tracking-[0.06em] text-jfc-accent">
              {f.title}
            </p>
            <p className="mt-2 break-words text-sm leading-6 text-jfc-muted">
              {f.description}
            </p>
          </div>
        </div>
      </div>
    );
  };

  const desktopFeatureCards = ABOUT.features.map((f) => {
    const Icon = featureIconMap[f.icon];
    return (
      <div
        key={f.title}
        className={cn(
          "rounded-2xl border border-white/10 bg-white/[0.02] px-5 py-4",
          "shadow-[0_18px_50px_rgba(0,0,0,0.35)]",
          "lg:px-4 lg:py-3",
        )}
      >
        <div className="flex gap-4">
          <Icon className="mt-1 h-5 w-5 flex-none text-jfc-accent" />
          <div>
            <p className="text-xs font-semibold tracking-[0.06em] text-white/90">
              {f.title}
            </p>
            <p className="mt-2 text-sm leading-6 text-jfc-muted lg:text-[13px] lg:leading-5">
              {f.description}
            </p>
          </div>
        </div>
      </div>
    );
  });

  return (
    <Section
      id="about"
      variant="base"
      ariaLabelledby="about-title"
      withTopDivider
      withBottomDivider
      className="overflow-x-clip bg-black pt-8 pb-16 sm:pt-10 sm:pb-20 lg:py-24 [font-size:100%]"
      containerClassName="min-w-0"
    >
      <div className="grid min-w-0 gap-8 lg:gap-10">
        {/* Mobile: image → centered title → feature cards */}
        <div className="flex min-w-0 flex-col gap-6 lg:hidden">
          <Reveal className="min-w-0">
            <div className="relative min-w-0 overflow-hidden rounded-2xl">
              <div className="relative aspect-[4/3] w-full min-w-0 max-w-full" data-about-media>
                <Image
                  src={ABOUT.collage.main.src}
                  alt={ABOUT.collage.main.alt}
                  fill
                  priority={false}
                  sizes="(max-width: 640px) 100%, 640px"
                  className="object-cover object-[50%_38%]"
                />
              </div>

              <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 bg-[linear-gradient(to_top,#000_0%,#000_32%,rgba(0,0,0,0.88)_55%,transparent_100%)] px-3 pb-3 pt-20 text-center sm:px-5 sm:pb-4 sm:pt-24">
                <h2
                  id="about-title"
                  className="max-w-full text-balance text-4xl font-semibold leading-[1.05] tracking-[0.02em] text-white"
                >
                  <span className="block">{ABOUT.title.leading}</span>
                  <span className="block text-jfc-accent">{ABOUT.title.accent}</span>
                </h2>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.05} className="min-w-0 w-full max-w-full overflow-hidden">
            <p className="mx-auto max-w-md whitespace-pre-line text-pretty text-center text-[15px] leading-7 text-white/65">
              {ABOUT.description}
            </p>
            <div className="mt-6 grid w-full min-w-0 max-w-full gap-4">
              {ABOUT.features.slice(0, 2).map((f) => renderMobileFeatureCard(f))}
              {renderMobileFeatureCard(ABOUT.features[2])}
            </div>
          </Reveal>

          <InfrastructureGallery items={ABOUT.infrastructureGallery} />
        </div>

        {/* Desktop: text left + collage right */}
        <div className="hidden min-w-0 gap-10 lg:grid lg:grid-cols-12 lg:items-start lg:gap-12">
          <Reveal className="min-w-0 lg:col-span-4 lg:flex lg:flex-col">
            <header className="max-w-md">
              <h2 className="text-balance text-4xl font-semibold leading-[1.05] tracking-[0.02em] text-white sm:text-5xl">
                <span className="block">{ABOUT.title.leading}</span>
                <span className="block text-jfc-accent">{ABOUT.title.accent}</span>
              </h2>
              <p className="mt-5 whitespace-pre-line text-pretty text-[15px] leading-7 text-white/65 sm:text-base sm:leading-7 lg:text-[14px] lg:leading-6">
                {ABOUT.description}
              </p>
            </header>

            <div className="mt-8 grid gap-4 lg:gap-3">{desktopFeatureCards}</div>
          </Reveal>

          <Reveal delay={0.05} className="relative min-w-0 lg:col-span-8">
            <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-jfc-accent/10 blur-3xl lg:h-56 lg:w-56" />
            <div className="pointer-events-none absolute -bottom-12 left-8 h-48 w-48 rounded-full bg-jfc-accent-2/10 blur-3xl lg:h-56 lg:w-56" />

            <div className="grid min-w-0 gap-4 lg:grid-cols-12 xl:gap-5">
              <div className="min-w-0 self-start lg:col-span-8">
                <div className="relative min-w-0 overflow-hidden rounded-2xl shadow-soft">
                  <div className="relative aspect-[4/3] w-full min-w-0 max-w-full" data-about-media>
                    <Image
                      src={ABOUT.collage.main.src}
                      alt={ABOUT.collage.main.alt}
                      fill
                      priority={false}
                      sizes="(max-width: 1024px) 100%, 640px"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_30%,rgba(0,0,0,0.65))]" />
                  </div>
                </div>
              </div>

              <div className="grid min-w-0 gap-4 self-start lg:col-span-4">
                {ABOUT.collage.tiles.map((t) => (
                  <div
                    key={t.src}
                    className="relative min-w-0 overflow-hidden rounded-2xl border border-jfc-border bg-jfc-card/70 shadow-soft"
                  >
                    <div className="relative aspect-[16/10] w-full min-w-0 max-w-full" data-about-media>
                      <Image
                        src={t.src}
                        alt={t.alt}
                        fill
                        sizes="280px"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_25%,rgba(0,0,0,0.65))]" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Bottom blocks: span full width */}
        <div className="grid min-w-0 gap-6 lg:gap-8">
          <Reveal className="min-w-0 w-full overflow-hidden lg:hidden">
            <div className="mb-5">{fightersHeading}</div>
            <FightersScroll fighters={ABOUT.fighters} />
          </Reveal>

          <Reveal className="hidden min-w-0 w-full lg:block">
            <div className="mb-6">{fightersHeading}</div>
            <div className="grid min-w-0 max-w-full gap-4 lg:grid-cols-4 xl:gap-5">
              {ABOUT.fighters.map((p) => (
                <DesktopFighterCard key={p.name} fighter={p} />
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.05} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {ABOUT.stats.map((s) => {
              const Icon = statIconMap[s.icon];
              return (
                <div
                  key={s.value}
                  className={cn(
                    "rounded-2xl border border-white/10 bg-white/[0.02] p-6",
                    "shadow-[0_18px_50px_rgba(0,0,0,0.35)]",
                  )}
                >
                  <div className="flex items-start gap-4">
                    <Icon className="mt-1 h-5 w-5 flex-none text-jfc-accent" />

                    <div>
                      <p className="text-2xl font-semibold tracking-[-0.02em] text-white sm:text-[1.625rem]">
                        {s.value}
                      </p>
                      <p className="mt-1 text-sm font-semibold tracking-[0.02em] text-white/85">
                        {s.title}
                      </p>
                      <p className="mt-3 whitespace-pre-line text-sm leading-6 text-white/60">
                        {s.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </Reveal>

          <Reveal delay={0.08}>
            <Card className="min-w-0 overflow-hidden p-0">
              <div className="relative min-h-[10.5rem] sm:min-h-[11rem]" data-about-media>
                <Image
                  src={ABOUT.cta.imageSrc}
                  alt=""
                  fill
                  priority={false}
                  sizes="(max-width: 1024px) 100%, 1200px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.90)_0%,rgba(0,0,0,0.78)_42%,rgba(0,0,0,0.55)_70%,rgba(0,0,0,0.35)_100%)]" />

                <div className="relative z-10 flex h-full flex-col gap-5 p-6 sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:p-7">
                  <div className="max-w-xl">
                    <p className="text-sm font-semibold tracking-[0.04em] text-white">
                      {ABOUT.cta.titleLeading}
                    </p>
                    <p className="mt-1 text-balance text-lg font-semibold tracking-[0.02em] text-jfc-accent sm:text-xl">
                      {ABOUT.cta.titleAccent}
                    </p>
                    <p className="mt-3 text-sm leading-6 text-white/65">
                      {ABOUT.cta.description}
                    </p>
                  </div>

                  <div className="flex flex-col items-stretch sm:items-end">
                    <Button href={ABOUT.cta.href} className="justify-center sm:min-w-[16rem]">
                      {ABOUT.cta.buttonLabel}
                    </Button>
                    <p className="mt-2 text-xs text-white/55 sm:text-right">
                      {ABOUT.cta.buttonHint}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

