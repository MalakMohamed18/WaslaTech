"use client";

import { Search } from "lucide-react";

export function NavbarSearch() {
  return (
    <button
      className="
        flex
        h-10
        w-full
        max-w-md
        items-center
        gap-3
        rounded-2xl
        border
        border-white/10
        bg-white/5
        px-4
        text-sm
        text-muted-foreground
        transition
        hover:bg-white/10
      "
    >
      <Search className="h-4 w-4" />

      <span>
        Search anything...
      </span>

      <kbd
        className="
          ml-auto
          rounded-lg
          bg-white/10
          px-2
          py-1
          text-xs
        "
      >
        ⌘ K
      </kbd>
    </button>
  );
}