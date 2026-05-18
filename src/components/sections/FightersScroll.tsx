import { AssetImage as Image } from "@/components/ui/AssetImage";
import { ABOUT } from "@/content/about";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/cn";

type Fighter = (typeof ABOUT.fighters)[number];

/** ~2 карточки в видимой области + край следующих (без vw — не раздувает страницу) */
const MOBILE_FIGHTER_CARD_WIDTH = "w-[calc((100%-0.75rem)/2.15)] shrink-0";

function MobileFighterCard({ fighter: p }: { fighter: Fighter }) {
  const logoScale =
    "logoScale" in p ? Number((p as { logoScale?: number }).logoScale ?? 1) : 1;

  return (
    <Card
      className={cn(
        MOBILE_FIGHTER_CARD_WIDTH,
        "aspect-[2/3] snap-start overflow-hidden p-0",
      )}
    >
      <div className="flex h-full flex-col bg-black">
        <div className="relative min-h-0 flex-1">
          <Image
            src={p.imageSrc}
            alt={p.name}
            fill
            sizes="200px"
            className="object-cover object-[46%_top]"
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black to-transparent" />
        </div>

        <div className="grid h-[6.75rem] shrink-0 grid-rows-[2.5rem_1.25rem_2rem] gap-0 bg-black px-3 pb-3 pt-2">
          <p className="line-clamp-2 text-left text-[11px] font-semibold leading-5 tracking-[0.06em] text-white">
            {p.name}
          </p>
          <p className="line-clamp-1 text-left text-[10px] font-semibold leading-5 tracking-[0.06em] text-jfc-accent">
            {p.subtitle}
          </p>
          <div className="flex items-center overflow-hidden">
            {"logoSrc" in p && (p.logoSrc as string) ? (
              <Image
                src={p.logoSrc as string}
                alt={("logoAlt" in p ? (p.logoAlt as string) : "") || ""}
                width={116}
                height={36}
                style={{
                  width: `${Math.min(7.25 * logoScale, 6.25)}rem`,
                  height: `${2 * logoScale}rem`,
                  maxWidth: "100%",
                }}
                className="h-auto w-auto max-h-8 object-contain object-left opacity-95"
              />
            ) : "mark" in p ? (
              <p className="text-[10px] font-semibold tracking-[0.22em] text-white/65">
                {((p as { mark?: string }).mark as string) || ""}
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </Card>
  );
}

type FightersScrollProps = {
  fighters: readonly Fighter[];
  className?: string;
};

export function FightersScroll({ fighters, className }: FightersScrollProps) {
  return (
    <div
      className={cn("relative w-full max-w-full overflow-hidden", className)}
      aria-label="Бойцы клуба"
      role="region"
    >
      <div
        className={cn(
          "flex w-full max-w-full gap-3 overflow-x-auto overscroll-x-contain scroll-smooth",
          "snap-x snap-mandatory scroll-px-3 px-3 pb-1",
          "[-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
        )}
      >
        {fighters.map((p) => (
          <MobileFighterCard key={p.name} fighter={p} />
        ))}
      </div>

      <div className="pointer-events-none mt-3 flex items-center justify-center gap-1.5">
        <span className="h-1 w-6 rounded-full bg-white/10" />
        <span className="h-1 w-10 rounded-full bg-jfc-accent/75 shadow-[0_0_0_1px_rgba(208,0,0,0.12)]" />
        <span className="h-1 w-6 rounded-full bg-white/10" />
      </div>
    </div>
  );
}
