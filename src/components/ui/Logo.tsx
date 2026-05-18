import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { SITE } from "@/content/site";

type LogoProps = {
  className?: string;
  priority?: boolean;
  withLink?: boolean;
  size?: "xs" | "sm" | "md" | "footer";
};

const sizes = {
  xs: { w: 72, h: 21, className: "h-6 w-auto max-w-[4.75rem] sm:h-6" },
  sm: { w: 96, h: 28, className: "h-7 w-auto max-w-[6rem]" },
  md: { w: 124, h: 36, className: "h-9 w-auto max-w-[7.75rem]" },
  footer: {
    w: 280,
    h: 80,
    className:
      "h-[4.5rem] w-auto max-w-[15rem] sm:h-20 sm:max-w-[16.5rem] lg:h-[5.5rem] lg:max-w-[18rem]",
  },
} as const;

export function Logo({
  className,
  priority = true,
  withLink = true,
  size = "md",
}: LogoProps) {
  const { w, h, className: sizeClassName } = sizes[size];

  const img = (
    <Image
      src="/assets/brand/logo3.png"
      alt={`${SITE.name} logo`}
      width={w}
      height={h}
      priority={priority}
      className={cn(sizeClassName, className)}
    />
  );

  if (!withLink) return img;
  return (
    <Link
      href="#top"
      aria-label={SITE.name}
      className="inline-flex items-center gap-2"
    >
      {img}
    </Link>
  );
}

