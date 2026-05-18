import type React from "react";
import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/Container";

type SectionVariant = "base" | "surface";

type SectionProps = {
  id: string;
  variant?: SectionVariant;
  ariaLabelledby?: string;
  className?: string;
  containerClassName?: string;
  /** Renders full viewport width above the padded container (avoids breakout hacks). */
  leadingFullWidth?: React.ReactNode;
  withTopDivider?: boolean;
  withBottomDivider?: boolean;
  children: React.ReactNode;
};

export function Section({
  id,
  variant = "base",
  ariaLabelledby,
  className,
  containerClassName,
  leadingFullWidth,
  withTopDivider,
  withBottomDivider,
  children,
}: SectionProps) {
  const isSurface = variant === "surface";

  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledby}
      className={cn(
        "relative scroll-mt-24 py-16 sm:py-20 lg:py-24",
        isSurface ? "bg-jfc-surface/25" : "bg-jfc-bg",
        className,
      )}
    >
      {withTopDivider ? (
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/5" />
      ) : null}
      {withBottomDivider ? (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-white/5" />
      ) : null}

      {isSurface ? (
        <>
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_520px_at_20%_0%,rgba(208,0,0,0.10),transparent_60%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),transparent_35%)]" />
        </>
      ) : null}

      {leadingFullWidth ? (
        <div className="relative w-full overflow-x-clip">{leadingFullWidth}</div>
      ) : null}

      <Container className={cn("relative", containerClassName)}>
        {children}
      </Container>
    </section>
  );
}

