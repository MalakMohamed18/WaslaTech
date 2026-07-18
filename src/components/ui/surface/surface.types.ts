import type { ComponentPropsWithoutRef } from "react";

export interface SurfaceProps
  extends ComponentPropsWithoutRef<"section"> {
  variant?: "default" | "secondary" | "ghost";
}