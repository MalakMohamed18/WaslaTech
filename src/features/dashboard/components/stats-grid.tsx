import { StatCard } from "./stat-card";
import { stats } from "./stats";

export function StatsGrid() {
  return (
    <section
      className="
        grid
        gap-6

        sm:grid-cols-2

        xl:grid-cols-3
      "
    >
      {stats.map((item) => (
        <StatCard
          key={item.title}
          {...item}
        />
      ))}
    </section>
  );
}