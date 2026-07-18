"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface Props {
  title: string;
  value: string;
  change: string;
  icon: LucideIcon;
}

export function StatCard({
  title,
  value,
  change,
  icon: Icon,
}: Props) {
  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.02,
      }}
      transition={{
        duration: .2,
      }}
      className="
        rounded-3xl
        border
        border-white/10
        bg-white/[0.05]
        p-6
        backdrop-blur-xl
        shadow-xl
      "
    >
      <div className="flex items-center justify-between">

        <div>
          <p className="text-sm text-muted-foreground">
            {title}
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            {value}
          </h2>

          <p className="mt-2 text-sm text-emerald-400">
            {change}
          </p>
        </div>

        <div
          className="
            flex
            h-14
            w-14
            items-center
            justify-center

            rounded-2xl

            bg-primary/15
          "
        >
          <Icon className="h-7 w-7 text-primary" />
        </div>

      </div>
    </motion.div>
  );
}