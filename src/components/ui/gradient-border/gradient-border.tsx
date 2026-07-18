"use client";

import { cn } from "@/lib/utils";

import { GRADIENT_BORDER } from "./gradient-border.constants";
import type { GradientBorderProps } from "./gradient-border.types";

export function GradientBorder({
  children,
  className,
  animated = true,
  ...props
}: GradientBorderProps) {
  return (
    <div
      className={cn(
        "relative rounded-[26px] p-px overflow-hidden",
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "absolute inset-0 rounded-[26px]",
          GRADIENT_BORDER,
          animated && "animate-gradient"
        )}
      />

      <div className="relative rounded-[25px] bg-background">
        {children}
      </div>
    </div>
  );
}