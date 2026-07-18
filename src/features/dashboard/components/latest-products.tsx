const products = [
  "AI Platform",
  "HR System",
  "Medical ERP",
  "POS System",
  "Smart Home",
];

export function LatestProducts() {
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
        Latest Products
      </h3>

      <div className="space-y-4">
        {products.map((item) => (
          <div
            key={item}
            className="
              flex
              items-center
              justify-between
            "
          >
            <span>{item}</span>

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
              Live
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}