"use client";

import { motion } from "framer-motion";

import { GlassCard } from "@/components/ui/glass-card";

import { NavbarSearch } from "./navbar-search";
import { NavbarActions } from "./navbar-actions";
import { WorkspaceSwitcher } from "./navbar-workspace";

export function Navbar() {
  return (
    <motion.header
      initial={{
        opacity: 0,
        y: -20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.35,
      }}
      className="
        sticky
        top-4
        z-40
        px-4
        sm:px-6
        lg:px-8
      "
    >
      <GlassCard
        className="
          flex
          h-16
          items-center
          justify-between
          gap-4
          px-5
        "
      >
        <WorkspaceSwitcher />

        <div
          className="
            hidden
            flex-1
            justify-center
            lg:flex
          "
        >
          <NavbarSearch />
        </div>

        <NavbarActions />
      </GlassCard>
    </motion.header>
  );
}