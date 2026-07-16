"use client";

import { Settings } from "lucide-react";

import { SidebarItem } from "./sidebar-item";

export function SidebarFooter() {
  return (
    <div className="border-t border-white/10 p-3">
      <SidebarItem
        item={{
          id: "settings",
          title: "Settings",
          href: "/dashboard/settings",
          shortcut: "⌘S",
          icon: Settings,
        }}
      />
    </div>
  );
}