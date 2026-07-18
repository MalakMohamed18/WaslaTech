import { cn } from "@/lib/utils";

export function metricCardClasses(
  className?: string
) {
  return cn(
    "relative overflow-hidden",
    "space-y-5",
    className
  );
}