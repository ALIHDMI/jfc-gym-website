import { AssetImage as Image } from "@/components/ui/AssetImage";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/cn";
import type { PricingSportItem } from "@/content/pricing";

type PricingSportCardProps = {
  item: PricingSportItem;
  className?: string;
};

export function PricingSportCard({ item, className }: PricingSportCardProps) {
  return (
    <Card
      className={cn(
        "h-full overflow-hidden p-0 transition-transform duration-200 will-change-transform",
        "hover:-translate-y-0.5",
        className,
      )}
    >
      <div className="relative aspect-[16/9] w-full bg-white/[0.02]">
        <Image
          src={item.imageSrc}
          alt={item.title}
          fill
          sizes="(max-width: 1024px) 88vw, 18vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_20%,rgba(0,0,0,0.82))]" />
      </div>

      <div className="p-5">
        <p className="text-sm font-semibold tracking-[0.04em] text-white">{item.title}</p>
        <p className="mt-3 text-sm leading-6 text-white/60">{item.description}</p>

        <div className="mt-4 flex items-center justify-between">
          <Button href={item.href} variant="ghost" size="sm" className="px-0">
            Подробнее
          </Button>
          <ChevronRight className="h-4 w-4 text-jfc-accent" />
        </div>
      </div>
    </Card>
  );
}
