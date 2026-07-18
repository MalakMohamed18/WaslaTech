import {
  ArrowDownRight,
  ArrowUpRight,
  Minus,
} from "lucide-react";

import { Surface } from "@/components/ui/surface";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { GlowBadge } from "@/components/ui/glow-badge";
import { cn } from "@/lib/utils";

import { METRIC_COLORS } from "./metric-card.constants";
import type { MetricCardProps } from "./metric-card.types";
import { metricCardClasses } from "./metric-card.utils";

export function MetricCard({
  title,
  value,
  change,
  description,
  icon: Icon,
  trend = "neutral",
  className,
}: MetricCardProps) {
  const TrendIcon =
    trend === "up"
      ? ArrowUpRight
      : trend === "down"
      ? ArrowDownRight
      : Minus;

  return (
    <Surface className={metricCardClasses(className)}>
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <p className="text-sm text-muted-foreground">
            {title}
          </p>

          <h2 className="text-4xl font-bold tracking-tight">
            {typeof value === "number" ? (
              <AnimatedCounter value={value} />
            ) : (
              value
            )}
          </h2>

          {description && (
            <div className="flex items-center gap-3">
              <p className="text-sm text-muted-foreground">
                {description}
              </p>

              <GlowBadge variant="success">
                LIVE
              </GlowBadge>
            </div>
          )}
        </div>

        <div
          className="
            flex h-14 w-14 items-center justify-center
            rounded-2xl
            border border-white/10
            bg-white/5
          "
        >
          <Icon className="h-7 w-7" />
        </div>
      </div>

      {change && (
        <div
          className={cn(
            "flex items-center gap-2 text-sm",
            METRIC_COLORS[trend]
          )}
        >
          <TrendIcon className="h-4 w-4" />
          <span>{change}</span>
        </div>
      )}
    </Surface>
  );
}