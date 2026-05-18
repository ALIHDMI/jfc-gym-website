import { REVIEWS } from "@/content/reviews";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { Star } from "lucide-react";
import { cn } from "@/lib/cn";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={cn(
            "h-4 w-4",
            i < rating ? "fill-jfc-accent text-jfc-accent" : "text-white/20",
          )}
        />
      ))}
    </div>
  );
}

export function Reviews() {
  return (
    <Section id="reviews" ariaLabelledby="reviews-title" withTopDivider withBottomDivider>
      <div className="flex flex-col gap-10">
        <Reveal>
          <SectionHeading
            id="reviews-title"
            eyebrow="Доверие"
            title={REVIEWS.title}
            description={REVIEWS.description}
          />
        </Reveal>

        <Reveal delay={0.04} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {REVIEWS.items.map((r) => (
            <Card key={`${r.name}-${r.text.slice(0, 12)}`} className="p-6">
              <div className="flex items-start justify-between gap-3">
                <p className="text-sm font-medium text-white/90">{r.name}</p>
                <Stars rating={r.rating} />
              </div>
              <p className="mt-4 text-[15px] leading-7 text-jfc-muted">{r.text}</p>
              <div className="mt-6 h-px w-full bg-white/5" />
              {/* <p className="mt-3 text-xs tracking-wide text-white/45">
                Проверенный формат • placeholder
              </p> */}
            </Card>
          ))}
        </Reveal>
      </div>
    </Section>
  );
}

