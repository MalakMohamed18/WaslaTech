import { cn } from "@/lib/utils";

import { GlassCard } from "@/components/ui/glass-card";
import { GradientBorder } from "@/components/ui/gradient-border";

import type { SurfaceProps } from "./surface.types";
import { SURFACE_VARIANTS } from "./surface.constants";

export function Surface({
  className,
  children,
  variant = "default",
  ...props
}: SurfaceProps) {
  return (
    <GradientBorder>
      <GlassCard
        className={cn(
          "p-6",
          SURFACE_VARIANTS[variant],
          className
        )}
        {...props}
      >
        {children}
      </GlassCard>
    </GradientBorder>
  );
}