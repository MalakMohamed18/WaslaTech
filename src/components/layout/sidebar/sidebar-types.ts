import type { LucideIcon } from "lucide-react";

export interface SidebarItemType {
  id: string;
  title: string;
  href: string;
  shortcut: string;
  icon: LucideIcon;
}