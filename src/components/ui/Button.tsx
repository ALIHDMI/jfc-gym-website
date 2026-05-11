"use client";

import type React from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md";

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
};

type ButtonAsButtonProps = CommonProps &
  Omit<React.ComponentPropsWithoutRef<"button">, keyof CommonProps | "href">;

type ButtonAsLinkProps = CommonProps & {
  href: string;
} & Omit<React.ComponentPropsWithoutRef<typeof Link>, keyof CommonProps | "href">;

export type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl font-medium " +
  "transition-[transform,box-shadow,background-color,color,border-color] duration-200 " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-jfc-accent/55 focus-visible:ring-offset-2 focus-visible:ring-offset-jfc-bg " +
  "active:translate-y-[1px] disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary:
    "bg-jfc-accent text-white shadow-glow-accent hover:bg-jfc-accent/90 hover:shadow-[0_0_0_1px_rgba(208,0,0,0.22),0_0_44px_rgba(208,0,0,0.26)]",
  secondary:
    "border border-jfc-border bg-white/[0.02] text-white hover:border-white/10 hover:bg-white/[0.04]",
  ghost:
    "text-white/90 hover:text-white hover:bg-white/[0.03]",
};

const sizes: Record<Size, string> = {
  sm: "h-10 px-4 text-sm",
  md: "h-12 px-5 text-[15px]",
};

export function Button(props: ButtonProps) {
  const variant = props.variant ?? "primary";
  const size = props.size ?? "md";
  const className = props.className;
  const classes = cn(base, variants[variant], sizes[size], className);

  if ("href" in props) {
    const { href, variant: _v, size: _s, className: _c, ...linkProps } = props;
    return <Link href={href} className={classes} {...linkProps} />;
  }

  const { variant: _v, size: _s, className: _c, ...buttonProps } = props;
  return <button className={classes} {...buttonProps} />;
}

