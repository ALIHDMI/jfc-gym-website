import { AssetImage as Image } from "@/components/ui/AssetImage";
import { ABOUT } from "@/content/about";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/cn";

type Fighter = (typeof ABOUT.fighters)[number];

type DesktopFighterCardProps = {
  fighter: Fighter;
};

function getLogoScale(fighter: Fighter) {
  return "logoScale" in fighter
    ? Number((fighter as { logoScale?: number }).logoScale ?? 1)
    : 1;
}

export function DesktopFighterCard({ fighter: p }: DesktopFighterCardProps) {
  const logoScale = getLogoScale(p);

  return (
    <Card
      className={cn(
        "min-w-0 overflow-hidden p-0",
        "transition-[transform,box-shadow] duration-300 ease-out",
        "hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(0,0,0,0.55)]",
      )}
    >
      <div className="flex aspect-[3/4] flex-col bg-zinc-950">
        <div className="relative min-h-0 flex-1 overflow-hidden">
          <Image
            src={p.imageSrc}
            alt={p.name}
            fill
            sizes="(max-width: 1280px) 280px, 320px"
            className="object-cover object-[center_22%] transition-transform duration-500 ease-out group-hover:scale-[1.05]"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.2)_0%,transparent_38%,transparent_62%,rgba(0,0,0,0.45)_100%)]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-black via-black/75 to-transparent"
            aria-hidden
          />
        </div>

        <div className="relative z-10 shrink-0 border-t border-white/10 bg-black px-3.5 pb-3.5 pt-3 shadow-[0_-12px_28px_rgba(0,0,0,0.45)] before:absolute before:inset-x-3.5 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-jfc-accent/50 before:to-transparent">
          <div className="grid grid-rows-[2.75rem_1.25rem_2rem] items-start gap-0">
            <p className="line-clamp-2 text-[15px] font-semibold leading-[1.2] tracking-[0.03em] text-white">
              {p.name}
            </p>
            <p className="line-clamp-1 text-[10px] font-semibold leading-none tracking-[0.08em] text-jfc-accent">
              {p.subtitle}
            </p>
            <div className="flex h-8 items-end">
              {"logoSrc" in p && (p.logoSrc as string) ? (
                <div className="flex h-8 w-[5.75rem] max-w-full items-end">
                  <Image
                    src={p.logoSrc as string}
                    alt={("logoAlt" in p ? (p.logoAlt as string) : "") || ""}
                    width={116}
                    height={36}
                    style={{
                      width: `${Math.min(7.25 * logoScale, 5.75)}rem`,
                      height: `${Math.min(2 * logoScale, 2)}rem`,
                      maxWidth: "100%",
                    }}
                    className="h-auto w-auto max-h-8 object-contain object-left opacity-95"
                  />
                </div>
              ) : "mark" in p ? (
                <p className="text-[10px] font-semibold tracking-[0.22em] text-white/65">
                  {((p as { mark?: string }).mark as string) || ""}
                </p>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
