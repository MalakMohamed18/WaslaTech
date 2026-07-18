import type { LucideIcon } from "lucide-react";

export interface NavbarAction {
  id: string;

  title: string;

  icon: LucideIcon;

  onClick: () => void;
}

export interface NavbarLink {
  title: string;

  href: string;
}