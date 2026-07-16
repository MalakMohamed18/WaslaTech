"use client";

import { motion } from "framer-motion";

import { GlassCard } from "@/components/ui/glass-card";

export function DashboardNavbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="sticky top-4 z-40 px-4 sm:px-6 lg:px-8"
    >
      <GlassCard className="flex h-16 items-center justify-between px-5">
        <div />

        <div />
      </GlassCard>
    </motion.header>
  );
}