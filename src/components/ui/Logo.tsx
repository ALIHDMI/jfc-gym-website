import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { SITE } from "@/content/site";

type LogoProps = {
  className?: string;
  priority?: boolean;
  withLink?: boolean;
  size?: "sm" | "md";
};

const sizes = {
  sm: { w: 96, h: 28 },
  md: { w: 124, h: 36 },
} as const;

export function Logo({
  className,
  priority = true,
  withLink = true,
  size = "md",
}: LogoProps) {
  const { w, h } = sizes[size];

  const img = (
    <Image
      src="/assets/brand/logo3.png"
      alt={`${SITE.name} logo`}
      width={w}
      height={h}
      priority={priority}
      className={cn("h-auto w-auto", className)}
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

