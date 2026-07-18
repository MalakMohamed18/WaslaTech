import type { HTMLAttributes } from "react";

export interface GradientBorderProps
  extends HTMLAttributes<HTMLDivElement> {
  animated?: boolean;

  children: React.ReactNode;
}