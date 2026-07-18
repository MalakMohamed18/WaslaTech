import type { ComponentPropsWithoutRef } from "react";

export interface GlassCardProps
  extends ComponentPropsWithoutRef<"div"> {
  hover?: boolean;
  glow?: boolean;
  blur?: "sm" | "md" | "lg";
}