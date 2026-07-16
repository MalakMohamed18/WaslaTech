"use client";

import { motion } from "framer-motion";

import { SidebarItem } from "./sidebar-item";
import { sidebarItems } from "./sidebar-items";

export function SidebarMenu() {
  return (
    <nav
      className="
        flex-1
        space-y-1
        overflow-y-auto
        px-3
        py-4
      "
    >
      {sidebarItems.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{
            opacity: 0,
            x: -10,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            delay: index * 0.03,
          }}
        >
          <SidebarItem item={item} />
        </motion.div>
      ))}
    </nav>
  );
}