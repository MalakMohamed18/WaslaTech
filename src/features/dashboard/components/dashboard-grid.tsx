import { HealthStatus } from "./health-status";
import { LatestProducts } from "./latest-products";
import { RecentActivity } from "./recent-activity";
import { RevenueAreaChart } from "./revenue-area-chart";

export function DashboardGrid() {
  return (
    <div className="grid gap-6 xl:grid-cols-12">
      <div className="space-y-6 xl:col-span-8">
        <RevenueAreaChart />

        <LatestProducts />
      </div>

      <div className="space-y-6 xl:col-span-4">
        <HealthStatus />

        <RecentActivity />
      </div>
    </div>
  );
}