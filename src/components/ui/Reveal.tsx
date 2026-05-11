"use client";

import type React from "react";
import { Children, useMemo, useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import type { UseInViewOptions } from "framer-motion";
import { cn } from "@/lib/cn";

export type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  viewport?: UseInViewOptions;
};

export function Reveal({
  children,
  className,
  delay = 0,
  y = 14,
  viewport,
}: RevealProps) {
  const reduce = useReducedMotion();
  const vp = viewport ?? { once: true, amount: "some", margin: "-10% 0px" };

  if (reduce) return <div className={className}>{children}</div>;

  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, vp);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y, scale: 0.985 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y, scale: 0.985 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

export type RevealStaggerProps = {
  children: React.ReactNode;
  className?: string;
  itemClassName?: string;
  stagger?: number;
  delayChildren?: number;
  viewport?: UseInViewOptions;
};

export function RevealStagger({
  children,
  className,
  itemClassName,
  stagger = 0.06,
  delayChildren = 0.02,
  viewport,
}: RevealStaggerProps) {
  const reduce = useReducedMotion();
  const vp = viewport ?? { once: true, amount: "some", margin: "-10% 0px" };

  const childArray = useMemo(() => Children.toArray(children), [children]);

  if (reduce) return <div className={className}>{children}</div>;

  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, vp);

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger, delayChildren } },
      }}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
    >
      {childArray.map((child, idx) => (
        <motion.div
          key={(child as any)?.key ?? idx}
          className={cn(itemClassName)}
          variants={{
            hidden: { opacity: 0, y: 14, scale: 0.99 },
            show: {
              opacity: 1,
              y: 0,
              scale: 1,
              transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
            },
          }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}

