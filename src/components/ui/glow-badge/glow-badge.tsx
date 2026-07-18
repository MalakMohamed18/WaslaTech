"use client";

import { cn } from "@/lib/utils";

import {
  GLOW_BADGE_VARIANTS,
} from "./glow-badge.constants";

import type {
  GlowBadgeProps,
} from "./glow-badge.types";

export function GlowBadge({
  children,
  variant = "primary",
  pulse = true,
  className,
  ...props
}: GlowBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium backdrop-blur-xl",
        GLOW_BADGE_VARIANTS[variant],
        className
      )}
      {...props}
    >
      <span
        className={cn(
          "h-2 w-2 rounded-full bg-current",
          pulse && "animate-pulse"
        )}
      />

      {children}
    </span>
  );
}