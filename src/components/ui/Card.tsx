import type React from "react";
import { cn } from "@/lib/cn";

type CardProps = React.ComponentPropsWithoutRef<"div">;

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-jfc-border bg-jfc-card/85 shadow-[0_18px_50px_rgba(0,0,0,0.45)]",
        "before:pointer-events-none before:absolute before:inset-0 before:opacity-0 before:transition-opacity before:duration-200",
        "before:bg-[radial-gradient(520px_220px_at_20%_0%,rgba(208,0,0,0.10),transparent_60%)]",
        "hover:before:opacity-100 hover:border-white/10",
        className,
      )}
      {...props}
    />
  );
}

