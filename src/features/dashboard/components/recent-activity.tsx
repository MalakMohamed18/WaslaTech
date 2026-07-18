const activity = [
  "Ahmed created Product",
  "Malak published Article",
  "New User Registered",
  "Database Backup Finished",
  "API Deployment Success",
];

export function RecentActivity() {
  return (
    <div
      className="
        rounded-3xl
        border
        border-white/10
        bg-white/[0.04]
        p-6
      "
    >
      <h3 className="mb-6 text-lg font-semibold">
        Recent Activity
      </h3>

      <div className="space-y-4">
        {activity.map((item) => (
          <div
            key={item}
            className="
              rounded-2xl
              bg-white/5
              p-3
            "
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}