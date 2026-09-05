import { ArrowRight, Droplets, Recycle, Truck, Zap } from "lucide-react";

const samples = [
  {
    text: "Lights and fans are left running after classes.",
    icon: Zap,
  },
  {
    text: "Students put food waste and plastic bottles in the same bin.",
    icon: Recycle,
  },
  {
    text: "A water tap near the hostel keeps leaking.",
    icon: Droplets,
  },
  {
    text: "Students travel individually on motorcycles every day.",
    icon: Truck,
  },
];

export default function SampleIssues({ onSelect }) {
  return (
    <div className="mt-5">
      <p className="mb-3 text-sm font-medium text-slate-600">
        Try a sample issue
      </p>

      <div className="grid gap-3 sm:grid-cols-2">
        {samples.map((sample) => {
          const Icon = sample.icon;

          return (
            <button
              key={sample.text}
              onClick={() => onSelect(sample.text)}
              className="group flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 text-left transition hover:border-green-300 hover:bg-green-50"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-600">
                <Icon size={18} />
              </div>

              <span className="flex-1 text-sm text-slate-600">
                {sample.text}
              </span>

              <ArrowRight
                size={17}
                className="text-slate-400 transition group-hover:translate-x-1 group-hover:text-green-600"
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}