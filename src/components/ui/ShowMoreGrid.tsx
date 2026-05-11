"use client";

import type React from "react";
import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

type Columns = {
  base: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
};

function getColumnsByWidth(width: number, cols: Columns) {
  if (width >= 1280 && cols.xl) return cols.xl;
  if (width >= 1024 && cols.lg) return cols.lg;
  if (width >= 768 && cols.md) return cols.md;
  if (width >= 640 && cols.sm) return cols.sm;
  return cols.base;
}

export type ShowMoreGridProps<T> = {
  items: readonly T[];
  initialRows?: number;
  columns: Columns;
  showMoreLabel: string;
  className?: string;
  gridClassName?: string;
  renderItem: (item: T, index: number) => React.ReactNode;
};

export function ShowMoreGrid<T>({
  items,
  initialRows = 4,
  columns,
  showMoreLabel,
  className,
  gridClassName,
  renderItem,
}: ShowMoreGridProps<T>) {
  const [expanded, setExpanded] = useState(false);
  const [width, setWidth] = useState<number | null>(null);

  useEffect(() => {
    const update = () => setWidth(window.innerWidth);
    update();
    window.addEventListener("resize", update, { passive: true });
    return () => window.removeEventListener("resize", update);
  }, []);

  const initialCount = useMemo(() => {
    const cols = getColumnsByWidth(width ?? 1024, columns);
    return Math.max(1, initialRows * cols);
  }, [columns, initialRows, width]);

  const visibleItems = expanded ? items : items.slice(0, initialCount);
  const canShowMore = items.length > visibleItems.length;

  return (
    <div className={cn("grid gap-6", className)}>
      <div className={cn("grid gap-4", gridClassName)}>
        {visibleItems.map((item, idx) => renderItem(item, idx))}
      </div>

      {canShowMore ? (
        <div className="flex justify-center">
          <Button
            variant="secondary"
            onClick={() => setExpanded(true)}
            className="min-w-52 justify-center"
          >
            {showMoreLabel}
          </Button>
        </div>
      ) : null}
    </div>
  );
}

