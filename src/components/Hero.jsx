import { ArrowDown, Leaf, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-emerald-50"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">

        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-green-200 bg-white px-4 py-2 text-sm font-medium text-green-700 shadow-sm">
            <Sparkles size={16} />
            AI-Powered Campus Sustainability
          </div>

          <h2 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Make your campus
            <span className="text-green-600"> more sustainable.</span>
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            Report a campus sustainability issue and get AI-assisted
            classification, practical recommendations, and expected impact.
          </p>

          <a
            href="#analyze"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-green-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-green-600/20 transition hover:bg-green-700"
          >
            Analyze an Issue
            <ArrowDown size={18} />
          </a>
        </div>

        <div className="relative">
          <div className="mx-auto flex max-w-md items-center justify-center">
            <div className="relative flex h-72 w-72 items-center justify-center rounded-full bg-green-100">
              <div className="flex h-52 w-52 items-center justify-center rounded-full bg-green-200">
                <div className="flex h-36 w-36 items-center justify-center rounded-full bg-green-600 text-white shadow-2xl">
                  <Leaf size={65} />
                </div>
              </div>
            </div>
          </div>

          <div className="absolute right-0 top-5 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl">
            <p className="text-xs text-slate-500">AI Classification</p>
            <p className="mt-1 font-bold text-green-600">Energy • Medium</p>
          </div>

          <div className="absolute bottom-5 left-0 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl">
            <p className="text-xs text-slate-500">Expected Impact</p>
            <p className="mt-1 font-bold text-slate-800">
              Reduced waste
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}