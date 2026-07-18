"use client";

import {
  Bell,
  Command,
  Moon,
  Plus,
} from "lucide-react";

import { NavbarNotifications } from "./navbar-notifications";
import { NavbarProfile } from "./navbar-profile";
import { NavbarTheme } from "./navbar-theme";

export function NavbarActions() {
  return (
    <div className="flex items-center gap-2">
      <button
        className="
          hidden
          lg:flex
          h-10
          items-center
          gap-2
          rounded-2xl
          border
          border-white/10
          bg-white/5
          px-4
          transition-all
          hover:bg-white/10
        "
      >
        <Plus className="h-4 w-4" />

        <span className="text-sm font-medium">
          Quick Action
        </span>
      </button>

      <button
        className="
          hidden
          xl:flex
          h-10
          w-10
          items-center
          justify-center
          rounded-2xl
          border
          border-white/10
          bg-white/5
          transition-all
          hover:bg-white/10
        "
      >
        <Command className="h-4 w-4" />
      </button>

      <NavbarNotifications />

      <NavbarTheme />

      <NavbarProfile />
    </div>
  );
}