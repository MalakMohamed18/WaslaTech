"use client";

import {
  Building2,
  ChevronDown,
} from "lucide-react";

export function WorkspaceSwitcher() {
  return (
    <button
      className="
        hidden
        md:flex

        h-11

        items-center

        gap-3

        rounded-2xl

        border
        border-white/10

        bg-white/5

        px-4

        transition-all

        hover:bg-white/10
      "
    >
      <Building2 className="h-5 w-5 text-primary" />

      <div className="text-left">
        <p className="text-sm font-semibold">
          WaslaTech HQ
        </p>

        <p className="text-xs text-muted-foreground">
          Enterprise
        </p>
      </div>

      <ChevronDown className="h-4 w-4" />
    </button>
  );
}