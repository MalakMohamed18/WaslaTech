import type { LucideIcon } from "lucide-react";

export interface MetricCardProps {
  title: string;
  value: string | number;

  change?: string;

  description?: string;

  icon: LucideIcon;

  trend?: "up" | "down" | "neutral";

  loading?: boolean;

  className?: string;
}