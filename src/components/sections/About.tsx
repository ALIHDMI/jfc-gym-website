import Image from "next/image";
import { ABOUT } from "@/content/about";
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

  return (
    <Section
      id="about"
      variant="base"
      ariaLabelledby="about-title"
      withTopDivider
      withBottomDivider
      className="bg-black"
    >
      <div className="grid gap-8 lg:gap-10">
        {/* Top row: left text + features aligned to collage height */}
        <div className="grid gap-10 lg:h-[clamp(460px,42vw,640px)] lg:grid-cols-12 lg:items-stretch lg:gap-12">
          <Reveal className="lg:col-span-4 lg:flex lg:h-full lg:min-h-0 lg:flex-col lg:overflow-hidden">
            <header className="max-w-md">
              <h2
                id="about-title"
                className="text-balance text-4xl font-semibold leading-[1.05] tracking-[0.02em] text-white sm:text-5xl"
              >
                <span className="block">{ABOUT.title.leading}</span>
                <span className="block text-jfc-accent">{ABOUT.title.accent}</span>
              </h2>
              <p className="mt-5 whitespace-pre-line text-pretty text-[15px] leading-7 text-white/65 sm:text-base sm:leading-7 lg:text-[14px] lg:leading-6">
                {ABOUT.description}
              </p>
            </header>

            <div className="mt-8 grid gap-4 lg:mt-auto lg:gap-3">
              {ABOUT.features.map((f) => {
                const Icon = featureIconMap[f.icon];
                return (
                  <div
                    key={f.title}
                    className={cn(
                      "rounded-2xl border border-white/10 bg-white/[0.02] px-5 py-4 lg:px-4 lg:py-3",
                      "shadow-[0_18px_50px_rgba(0,0,0,0.35)]",
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
              })}
            </div>
          </Reveal>

          <Reveal delay={0.05} className="relative lg:col-span-8">
            <div className="pointer-events-none absolute -right-10 -top-10 h-64 w-64 rounded-full bg-jfc-accent/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-12 left-8 h-64 w-64 rounded-full bg-jfc-accent-2/10 blur-3xl" />

            <div className="grid gap-4 lg:h-full lg:grid-cols-12">
              <div className="lg:col-span-8 lg:h-full">
                <div className="relative h-full overflow-hidden rounded-2xl shadow-soft">
                  <div className="relative aspect-[4/3] w-full lg:aspect-auto lg:h-full">
                    <Image
                      src={ABOUT.collage.main.src}
                      alt={ABOUT.collage.main.alt}
                      fill
                      priority={false}
                      sizes="(max-width: 1024px) 92vw, 56vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_30%,rgba(0,0,0,0.65))]" />
                  </div>
                </div>
              </div>

              <div className="grid gap-4 lg:col-span-4 lg:h-full lg:grid-rows-3">
                {ABOUT.collage.tiles.map((t) => (
                  <div
                    key={t.src}
                    className="relative overflow-hidden rounded-2xl border border-jfc-border bg-jfc-card/70 shadow-soft"
                  >
                    <div className={cn("relative w-full aspect-[16/10] lg:aspect-auto lg:h-full")}>
                      <Image
                        src={t.src}
                        alt={t.alt}
                        fill
                        sizes="(max-width: 1024px) 92vw, 22vw"
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
        <div className="grid gap-6 lg:gap-8">
          <Reveal className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {ABOUT.fighters.map((p) => (
              <Card
                key={p.name}
                className={cn(
                  "overflow-hidden p-0",
                  "transition-transform duration-200 will-change-transform hover:-translate-y-0.5",
                )}
              >
                <div className="relative flex aspect-[16/10] w-full overflow-hidden bg-black">
                  {/* Левая колонка: только фото (уже и левее, как на compare-target) */}
                  <div className="relative w-[52%] shrink-0 sm:w-[48%]">
                    <Image
                      src={p.imageSrc}
                      alt={p.name}
                      fill
                      sizes="(max-width: 640px) 38vw, (max-width: 1024px) 18vw, 12vw"
                      className="object-cover object-[46%_center]"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-black/10 to-black/95" />
                    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_62%,rgba(0,0,0,0.35))]" />
                  </div>

                  {/* Правая колонка: текст, выравнивание по левому краю */}
                  <div className="relative flex min-h-0 min-w-0 flex-1 flex-col justify-start bg-black px-4 py-4 sm:px-2 sm:py-5">
                    <div>
                    <p
                      className="text-left text-[11px] font-semibold tracking-[0.06em] text-white sm:text-xs lg:text-[10px]"
                      style={{
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: 2,
                        overflow: "hidden",
                      }}
                    >
                      {p.name}
                    </p>
                    <p
                      className="mt-1 text-left text-[10px] font-semibold tracking-[0.06em] text-jfc-accent sm:text-[11px] lg:text-[10px]"
                      style={{
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: 2,
                        overflow: "hidden",
                      }}
                    >
                      {p.subtitle}
                    </p>

                    {"logoSrc" in p && (p.logoSrc as string) ? (
                      <Image
                        src={p.logoSrc as string}
                        alt={("logoAlt" in p ? (p.logoAlt as string) : "") || ""}
                        width={116}
                        height={36}
                        style={{
                          width: `${116 * ("logoScale" in p ? Number(((p as any).logoScale ?? 1)) : 1)}px`,
                          height: `${36 * ("logoScale" in p ? Number(((p as any).logoScale ?? 1)) : 1)}px`,
                          maxWidth: "100%",
                        }}
                        className="mt-3 h-auto w-auto object-contain object-left object-bottom opacity-95 drop-shadow-[0_10px_22px_rgba(0,0,0,0.70)]"
                      />
                    ) : "mark" in p ? (
                      <p className="mt-3 text-[10px] font-semibold tracking-[0.22em] text-white/65 sm:text-[11px]">
                        {(p.mark as string) || ""}
                      </p>
                    ) : null}
                    {"description" in p ? (
                      <p
                        className="mt-2 text-left text-[10.5px] leading-[1.42] text-white/60 sm:text-[11px] sm:leading-5 lg:text-[12px] lg:leading-[17px]"
                        style={{
                          display: "-webkit-box",
                          WebkitBoxOrient: "vertical",
                          WebkitLineClamp: 4,
                          overflow: "hidden",
                        }}
                      >
                        {p.description as string}
                      </p>
                    ) : null}
                    </div>

                    {/* Логотип промоушена теперь расположен под subtitle. */}
                  </div>
                </div>
              </Card>
            ))}
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
                      <p className="text-[26px] font-semibold tracking-[-0.02em] text-white">
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
            <Card className="overflow-hidden p-0">
              <div className="relative min-h-[170px]">
                <Image
                  src={ABOUT.cta.imageSrc}
                  alt=""
                  fill
                  priority={false}
                  sizes="(max-width: 1024px) 92vw, 56vw"
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
                    <Button href={ABOUT.cta.href} className="justify-center sm:min-w-64">
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

