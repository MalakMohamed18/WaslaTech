"use client";

import { Bell } from "lucide-react";

export function NavbarNotifications() {
  return (
    <button
      className="
        relative
        flex
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
      <Bell className="h-5 w-5" />

      <span
        className="
          absolute
          right-2
          top-2

          h-2.5
          w-2.5

          rounded-full

          bg-emerald-500

          ring-2

          ring-background
        "
      />
    </button>
  );
}