import { DashboardGrid } from "./dashboard-grid";
import { QuickActions } from "./quick-actions";
import { StatsGrid } from "./stats-grid";
import { WelcomeCard } from "./welcome-card";

export function DashboardHome() {
  return (
    <section className="space-y-6">

      <WelcomeCard />

      <QuickActions />

      <StatsGrid />

      <DashboardGrid />

    </section>
  );
}