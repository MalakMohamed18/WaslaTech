"use client";

import { motion } from "framer-motion";

import { SidebarHeader } from "./sidebar-header";
import { SidebarMenu } from "./sidebar-menu";
import { SidebarFooter } from "./sidebar-footer";

export function Sidebar() {
  return (
    <motion.aside
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        duration: 0.35,
        ease: "easeOut",
      }}
      className="
        fixed left-0 top-0
        z-50
        hidden
        h-screen
        w-[280px]
        p-4
        lg:block
      "
    >
      <div
        className="
          flex h-full flex-col
          overflow-hidden
          rounded-3xl
          border border-white/10
          bg-white/[0.04]
          shadow-2xl
          backdrop-blur-2xl
        "
      >
        <SidebarHeader />

        <SidebarMenu />

        <SidebarFooter />
      </div>
    </motion.aside>
  );
}