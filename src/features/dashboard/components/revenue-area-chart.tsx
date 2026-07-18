"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";

const data = [
  { month: "Jan", revenue: 12000 },
  { month: "Feb", revenue: 18000 },
  { month: "Mar", revenue: 22000 },
  { month: "Apr", revenue: 31000 },
  { month: "May", revenue: 27000 },
  { month: "Jun", revenue: 39000 },
  { month: "Jul", revenue: 46000 },
];

export function RevenueAreaChart() {
  return (
    <div
      className="
        rounded-3xl
        border
        border-white/10
        bg-white/[0.04]
        p-6
        backdrop-blur-xl
      "
    >
      <div className="mb-6">
        <h3 className="text-lg font-semibold">
          Revenue Overview
        </h3>

        <p className="text-sm text-muted-foreground">
          Last 7 Months
        </p>
      </div>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <CartesianGrid
              strokeDasharray="3 3"
              opacity={0.15}
            />

            <XAxis dataKey="month" />

            <Tooltip />

            <Area
              dataKey="revenue"
              stroke="#6366f1"
              fill="#6366f1"
              fillOpacity={0.25}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}