import { cn } from "@/lib/utils";

import { glassCardClass } from "./glass-card.utils";
import type { GlassCardProps } from "./glass-card.types";

export function GlassCard({
  children,
  className,
  blur = "md",
  hover = true,
  glow = true,
  ...props
}: GlassCardProps) {
  return (
    <div
      className={cn(
        glassCardClass(
          blur,
          hover,
          glow
        ),
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}