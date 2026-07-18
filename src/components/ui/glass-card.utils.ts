import { cn } from "@/lib/utils";

import { GLASS_BLUR } from "./glass-card.constants";

export function glassCardClass(
  blur: keyof typeof GLASS_BLUR,
  hover: boolean,
  glow: boolean
) {
  return cn(
    "relative overflow-hidden rounded-[24px]",
    "border border-white/10",
    "bg-white/[0.04]",
    GLASS_BLUR[blur],
    "shadow-2xl",

    hover &&
      "transition-all duration-300 hover:-translate-y-1 hover:border-white/20",

    glow &&
      "before:absolute before:inset-0 before:bg-gradient-to-br before:from-violet-500/10 before:to-cyan-400/5 before:pointer-events-none"
  );
}