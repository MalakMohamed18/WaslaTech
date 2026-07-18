"use client";

import { cn } from "@/lib/utils";

import { ORBS } from "./animated-background.constants";
import type { AnimatedBackgroundProps } from "./animated-background.types";

export function AnimatedBackground({
  className,
}: AnimatedBackgroundProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className
      )}
    >
      {ORBS.map((orb, index) => (
        <div
          key={index}
          className={cn(
            "absolute rounded-full blur-[120px]",
            orb.size,
            orb.position,
            orb.color,
            "animate-float"
          )}
          style={{
            animationDuration: orb.duration,
          }}
        />
      ))}
    </div>
  );
}