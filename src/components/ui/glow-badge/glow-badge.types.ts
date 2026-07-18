import type { HTMLAttributes } from "react";

export type GlowBadgeVariant =
  | "success"
  | "danger"
  | "warning"
  | "info"
  | "primary";

export interface GlowBadgeProps
  extends HTMLAttributes<HTMLSpanElement> {
  variant?: GlowBadgeVariant;

  pulse?: boolean;

  children: React.ReactNode;
}