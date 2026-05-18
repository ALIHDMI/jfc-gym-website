"use client";

import { AssetImage as Image } from "@/components/ui/AssetImage";
import Link from "next/link";
import { useMemo } from "react";
import { ArrowUpRight } from "lucide-react";

import { TRAINERS } from "@/content/trainers";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ShowMoreGrid } from "@/components/ui/ShowMoreGrid";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

function TrainerPlaceholder() {
  return (
    <div className="absolute inset-0 bg-[radial-gradient(520px_240px_at_20%_0%,rgba(208,0,0,0.10),transparent_60%)]" />
  );
}

export function Trainers() {
  const items = useMemo(() => TRAINERS.items, []);

  return (
    <Section id="trainers" ariaLabelledby="trainers-title" withTopDivider withBottomDivider>
      <div className="flex flex-col gap-10">
        <Reveal>
          <SectionHeading
            id="trainers-title"
            eyebrow="Команда"
            title={TRAINERS.title}
            description={TRAINERS.description}
          />
        </Reveal>

        <Reveal delay={0.04}>
          <ShowMoreGrid
            items={items}
            initialRows={2}
            columns={{ base: 2, sm: 2, lg: 3 }}
            showMoreLabel={TRAINERS.showMoreLabel}
            gridClassName="grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-3"
            renderItem={(t) => (
              <Link
                key={t.slug}
                href={`/trainers/${t.slug}`}
                className={cn(
                  "group relative overflow-hidden rounded-2xl border border-jfc-border bg-jfc-card/60",
                  "transition-[transform,border-color,background-color] duration-200 hover:-translate-y-0.5 hover:border-white/10 hover:bg-jfc-card/70",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-jfc-accent/45",
                )}
                aria-label={`Открыть профиль: ${t.name}`}
              >
                <div className="relative aspect-[4/5] w-full">
                  {t.photo?.src ? (
                    <Image
                      src={t.photo.src}
                      alt={t.photo.alt}
                      fill
                      sizes="(max-width: 640px) 92vw, (max-width: 1024px) 44vw, 30vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  ) : (
                    <TrainerPlaceholder />
                  )}

                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_20%,rgba(0,0,0,0.80))]" />

                  <div className="absolute inset-x-5 bottom-5">
                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0">
                        <p className="text-lg font-semibold tracking-[-0.01em] text-white">
                          {t.name}
                        </p>
                        <p className="mt-2 text-sm leading-6 text-white/65">
                          {t.specialization}
                        </p>
                      </div>
                      <span className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-full border border-jfc-border bg-white/[0.02] text-white/80 transition-colors group-hover:bg-white/[0.04]">
                        <ArrowUpRight className="h-5 w-5" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            )}
          />
        </Reveal>
      </div>
    </Section>
  );
}

