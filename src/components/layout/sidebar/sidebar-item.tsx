"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Keyboard } from "lucide-react";

import { cn } from "@/lib/utils";

import type { SidebarItemType } from "./sidebar-types";

interface Props {
  item: SidebarItemType;
}

export function SidebarItem({
  item,
}: Props) {
  const pathname = usePathname();

  const active =
    pathname === item.href ||
    pathname.startsWith(`${item.href}/`);

  const Icon = item.icon;

  return (
    <Link href={item.href}>
      <motion.div
        whileHover={{
          x: 4,
        }}
        whileTap={{
          scale: 0.97,
        }}
        className={cn(
          `
          group relative
          flex h-11
          items-center
          gap-3
          rounded-2xl
          px-3
          text-sm
          transition-all
          `,
          active
            ? `
              bg-white/10
              text-white
              shadow-lg
            `
            : `
              text-muted-foreground
              hover:bg-white/5
              hover:text-white
            `,
        )}
      >
        {active && (
          <motion.div
            layoutId="sidebar-active"
            className="
              absolute
              left-0
              h-7
              w-1
              rounded-full
              bg-primary
            "
          />
        )}

        <Icon
          className="
            h-5
            w-5
            shrink-0
          "
        />

        <span className="flex-1">
          {item.title}
        </span>

        <span
          className="
            hidden
            items-center
            gap-1
            text-[10px]
            opacity-50
            xl:flex
          "
        >
          <Keyboard className="h-3 w-3" />

          {item.shortcut}
        </span>
      </motion.div>
    </Link>
  );
}