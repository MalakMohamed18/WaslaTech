"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export function SidebarHeader() {
  return (
    <div className="flex h-20 items-center gap-3 px-5">
      <motion.div
        whileHover={{
          scale: 1.08,
          rotate: 5,
        }}
        className="
          flex h-11 w-11
          items-center justify-center
          rounded-2xl
          bg-gradient-to-br
          from-primary
          to-purple-500
          shadow-lg
        "
      >
        <Sparkles
          className="h-6 w-6 text-white"
          strokeWidth={2}
        />
      </motion.div>

      <div>
        <h1 className="text-lg font-semibold tracking-tight">
          WaslaTech
        </h1>

        <p className="text-xs text-muted-foreground">
          HQ Platform
        </p>
      </div>
    </div>
  );
}