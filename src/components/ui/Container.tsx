import type React from "react";
import { cn } from "@/lib/cn";

type ContainerProps = React.ComponentPropsWithoutRef<"div">;

export function Container({ className, ...props }: ContainerProps) {
  return (
    <div
      className={cn("mx-auto w-full max-w-7xl px-3 sm:px-5 lg:px-6", className)}
      {...props}
    />
  );
}

