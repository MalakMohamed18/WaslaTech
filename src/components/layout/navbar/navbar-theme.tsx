"use client";

import { Moon } from "lucide-react";

export function NavbarTheme() {
  return (
    <button
      className="
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
      <Moon className="h-5 w-5" />
    </button>
  );
}