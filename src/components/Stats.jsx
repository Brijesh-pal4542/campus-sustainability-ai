import { Droplets, Leaf, Recycle, Zap } from "lucide-react";

const stats = [
  {
    icon: Leaf,
    value: "5",
    label: "Sustainability Categories",
  },
  {
    icon: Zap,
    value: "AI",
    label: "Assisted Classification",
  },
  {
    icon: Recycle,
    value: "3",
    label: "Recommended Actions",
  },
  {
    icon: Droplets,
    value: "24/7",
    label: "Issue Reporting",
  },
];

export default function Stats() {
  return (
    <section className="border-y border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y divide-slate-200 sm:grid-cols-4 sm:divide-y-0">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center px-4 py-7 text-center"
            >
              <Icon className="mb-2 text-green-600" size={23} />

              <p className="text-2xl font-bold text-slate-900">
                {stat.value}
              </p>

              <p className="mt-1 text-xs text-slate-500">
                {stat.label}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}