import type React from "react";
import { cn } from "@/lib/cn";

type FieldWrapperProps = {
  label: string;
  htmlFor: string;
  hint?: string;
  error?: string;
  className?: string;
  children: React.ReactNode;
};

export function FieldWrapper({
  label,
  htmlFor,
  hint,
  error,
  className,
  children,
}: FieldWrapperProps) {
  return (
    <div className={cn("grid gap-2", className)}>
      <label
        htmlFor={htmlFor}
        className="text-sm font-medium tracking-[-0.01em] text-white/90"
      >
        {label}
      </label>
      {children}
      {error ? (
        <p className="text-xs leading-5 text-jfc-accent/90">{error}</p>
      ) : hint ? (
        <p className="text-xs leading-5 text-white/45">{hint}</p>
      ) : null}
    </div>
  );
}

export const inputBase =
  "h-12 w-full rounded-xl border border-jfc-border bg-white/[0.02] px-4 text-[15px] text-white " +
  "placeholder:text-white/35 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] " +
  "transition-[border-color,box-shadow,background-color] duration-200 " +
  "focus-visible:outline-none focus-visible:border-white/12 focus-visible:bg-white/[0.03] " +
  "focus-visible:ring-2 focus-visible:ring-jfc-accent/35";

export const textareaBase =
  "min-h-32 w-full resize-none rounded-xl border border-jfc-border bg-white/[0.02] px-4 py-3 text-[15px] text-white " +
  "placeholder:text-white/35 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] " +
  "transition-[border-color,box-shadow,background-color] duration-200 " +
  "focus-visible:outline-none focus-visible:border-white/12 focus-visible:bg-white/[0.03] " +
  "focus-visible:ring-2 focus-visible:ring-jfc-accent/35";

