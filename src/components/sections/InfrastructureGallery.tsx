import Image from "next/image";
import { cn } from "@/lib/cn";

type GalleryItem = {
  src: string;
  alt: string;
};

type InfrastructureGalleryProps = {
  items: readonly GalleryItem[];
  className?: string;
};

/** Фиксированная ширина слайда — % внутри `width: max-content` ленты даёт схлопывание до «точек». */
const SLIDE_CLASS =
  "relative aspect-[16/10] w-[13.5rem] shrink-0 overflow-hidden rounded-2xl border border-white/10 shadow-[0_18px_50px_rgba(0,0,0,0.35)] sm:w-[14.5rem]";

export function InfrastructureGallery({ items, className }: InfrastructureGalleryProps) {
  const loop = [...items, ...items];

  return (
    <div
      className={cn(
        "relative mt-4 w-full min-w-0 max-w-full overflow-hidden",
        className,
      )}
      aria-label="Фото инфраструктуры клуба"
      role="region"
    >
      <div className="jfc-infra-scroll-fade relative w-full overflow-hidden">
        <div className="jfc-infra-scroll-track flex w-max flex-nowrap gap-3">
          {loop.map((item, index) => (
            <div key={`${item.src}-${index}`} className={SLIDE_CLASS}>
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 216px, 232px"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
