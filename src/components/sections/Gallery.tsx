"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Image as ImageIcon } from "lucide-react";

import { GALLERY } from "@/content/gallery";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ShowMoreGrid } from "@/components/ui/ShowMoreGrid";
import { Lightbox } from "@/components/ui/Lightbox";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

export function Gallery() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const items = useMemo(() => GALLERY.items, []);

  return (
    <Section id="gallery" ariaLabelledby="gallery-title" withTopDivider withBottomDivider>
      <div className="flex flex-col gap-10">
        <Reveal>
          <SectionHeading
            id="gallery-title"
            eyebrow="Интерьер"
            title={GALLERY.title}
            description={GALLERY.description}
          />
        </Reveal>

        <Reveal delay={0.04}>
          <ShowMoreGrid
            items={items}
            initialRows={2}
            columns={{ base: 2, md: 3, lg: 4 }}
            showMoreLabel={GALLERY.showMoreLabel}
            gridClassName="grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
            renderItem={(item, idx) => (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  setIndex(idx);
                  setOpen(true);
                }}
                className={cn(
                  "group relative overflow-hidden rounded-2xl border border-jfc-border bg-jfc-card/60",
                  "transition-[transform,border-color,background-color] duration-200 hover:-translate-y-0.5 hover:border-white/10 hover:bg-jfc-card/70",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-jfc-accent/45",
                )}
                aria-label={`Открыть: ${item.alt}`}
              >
                <div className="relative aspect-[4/3] w-full">
                  {item.src ? (
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 768px) 48vw, (max-width: 1024px) 30vw, 23vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-[radial-gradient(520px_220px_at_20%_0%,rgba(208,0,0,0.10),transparent_60%)]" />
                  )}

                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.65))] opacity-70" />

                  <div className="absolute inset-x-3 bottom-3 flex items-center justify-between gap-3">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-jfc-border bg-white/[0.02] text-white/75 transition-colors group-hover:bg-white/[0.04]">
                      <ImageIcon className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </button>
            )}
          />
        </Reveal>
      </div>

      <Lightbox
        open={open}
        items={items}
        initialIndex={index}
        onClose={() => setOpen(false)}
      />

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -left-10 -top-10 h-64 w-64 rounded-full bg-jfc-accent/10 blur-3xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 0.6 }}
      />
    </Section>
  );
}

