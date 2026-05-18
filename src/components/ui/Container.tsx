import type React from "react";
import { cn } from "@/lib/cn";

type ContainerProps = React.ComponentPropsWithoutRef<"div">;

export function Container({ className, ...props }: ContainerProps) {
  return (
    <div
      className={cn("mx-auto w-full max-w-[88rem] px-2 sm:px-4 lg:px-5", className)}
      {...props}
    />
  );
}

