"use client";

import {
  Boxes,
  FilePlus2,
  UserPlus,
  WandSparkles,
} from "lucide-react";

const actions = [
  {
    title: "New Product",
    icon: Boxes,
  },
  {
    title: "Write Article",
    icon: FilePlus2,
  },
  {
    title: "Invite User",
    icon: UserPlus,
  },
  {
    title: "AI Assistant",
    icon: WandSparkles,
  },
];

export function QuickActions() {
  return (
    <div
      className="
        grid
        gap-4

        grid-cols-2

        lg:grid-cols-4
      "
    >
      {actions.map((action) => (
        <button
          key={action.title}
          className="
            flex
            flex-col
            items-center
            justify-center

            gap-4

            rounded-3xl

            border
            border-white/10

            bg-white/[0.04]

            p-6

            transition-all

            hover:-translate-y-1
            hover:bg-white/10
          "
        >
          <action.icon
            className="
              h-6
              w-6
            "
          />

          <span className="text-sm font-medium">
            {action.title}
          </span>
        </button>
      ))}
    </div>
  );
}