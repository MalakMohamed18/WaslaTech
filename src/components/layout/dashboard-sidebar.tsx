"use client";

import { motion } from "framer-motion";

import { GlassCard } from "@/components/ui/glass-card";

export function DashboardSidebar() {
  return (
    <motion.aside
      initial={{ x: -40, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="
        sticky left-0 top-0
        hidden h-screen
        w-[280px]
        p-4
        lg:block
      "
    >
      <GlassCard className="flex h-full flex-col overflow-hidden p-4">
        <div className="h-10" />
      </GlassCard>
    </motion.aside>
  );
}