const services = [
  {
    name: "API",
    status: "Healthy",
  },
  {
    name: "Database",
    status: "Healthy",
  },
  {
    name: "Storage",
    status: "Healthy",
  },
  {
    name: "Server",
    status: "Healthy",
  },
];

export function HealthStatus() {
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
        System Health
      </h3>

      <div className="space-y-4">
        {services.map((service) => (
          <div
            key={service.name}
            className="
              flex
              items-center
              justify-between
            "
          >
            <span>{service.name}</span>

            <span
              className="
                rounded-full
                bg-emerald-500/20
                px-3
                py-1
                text-xs
                text-emerald-400
              "
            >
              {service.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}