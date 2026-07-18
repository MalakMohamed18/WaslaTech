"use client";

import {
  ChevronDown,
  User,
} from "lucide-react";

export function NavbarProfile() {
  return (
    <button
      className="
        flex
        h-11
        items-center
        gap-3

        rounded-2xl

        border
        border-white/10

        bg-white/5

        px-3

        transition-all

        hover:bg-white/10
      "
    >
      <div
        className="
          flex
          h-8
          w-8
          items-center
          justify-center
          rounded-full
          bg-gradient-to-br
          from-primary
          to-purple-500
        "
      >
        <User className="h-4 w-4 text-white" />
      </div>

      <div className="hidden text-left xl:block">
        <p className="text-sm font-medium">
          Ahmed
        </p>

        <p className="text-xs text-muted-foreground">
          Administrator
        </p>
      </div>

      <ChevronDown className="hidden h-4 w-4 xl:block" />
    </button>
  );
}