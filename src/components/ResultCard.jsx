import { AlertTriangle, CheckCircle2, Lightbulb, Target } from "lucide-react";

export default function ResultCard({ result, onNewAnalysis }) {
  if (!result) return null;

  const priorityClasses = {
    High: "bg-red-50 text-red-700 border-red-200",
    Medium: "bg-amber-50 text-amber-700 border-amber-200",
    Low: "bg-blue-50 text-blue-700 border-blue-200",
  };

  return (
    <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-200 bg-slate-50 p-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-500"></span>

              <p className="text-xs font-semibold uppercase tracking-wider text-green-600">
                AI Analysis Result
              </p>
            </div>

            <h3 className="mt-1 text-2xl font-bold text-slate-900">
              Sustainability Assessment
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              AI-generated analysis and practical recommendations for your
              campus issue.
            </p>
          </div>

          <div className="flex gap-2">
            <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
              {result.category}
            </span>

            <span
              className={`rounded-full border px-4 py-2 text-sm font-semibold ${
                priorityClasses[result.priority] || priorityClasses.Low
              }`}
            >
              {result.priority} Priority
            </span>
          </div>
        </div>
      </div>

      <div className="grid gap-6 p-6 lg:grid-cols-2">
        <div className="rounded-xl border border-slate-200 p-5">
          <div className="mb-3 flex items-center gap-2">
            <div className="rounded-lg bg-amber-100 p-2 text-amber-600">
              <AlertTriangle size={19} />
            </div>

            <h4 className="font-bold text-slate-900">Problem Identified</h4>

            <p className="mt-1 text-xs text-slate-400">
              What the AI identified
            </p>
          </div>

          <p className="leading-7 text-slate-600">{result.problem}</p>
        </div>

        <div className="rounded-xl border border-slate-200 p-5">
          <div className="mb-3 flex items-center gap-2">
            <div className="rounded-lg bg-blue-100 p-2 text-blue-600">
              <Lightbulb size={19} />
            </div>

            <h4 className="font-bold text-slate-900">Recommended Actions</h4>

            <p className="mt-1 text-xs text-slate-400">
              Practical steps suggested by AI
            </p>
          </div>

          <ol className="space-y-3">
            {result.actions.map((action, index) => (
              <li
                key={action}
                className="flex gap-3 text-sm leading-6 text-slate-600"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-50 text-xs font-bold text-blue-600">
                  {index + 1}
                </span>

                <span>{action}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="rounded-xl border border-green-200 bg-green-50 p-5 lg:col-span-2">
          <div className="mb-3 flex items-center gap-2">
            <div className="rounded-lg bg-green-100 p-2 text-green-600">
              <Target size={19} />
            </div>

            <h4 className="font-bold text-green-900">Expected Impact</h4>

            <p className="mt-1 text-xs text-green-600">
              Potential sustainability benefits
            </p>
          </div>

          <p className="leading-7 text-green-800">{result.impact}</p>
        </div>
      </div>
      <div className="border-t border-slate-100 bg-slate-50 px-6 py-4">
        <p className="text-xs leading-5 text-slate-500">
          <span className="font-semibold text-slate-700">Responsible AI:</span>{" "}
          This analysis is AI-generated and intended to support sustainability
          decision-making. It may not account for all campus-specific
          conditions. Verify recommendations with relevant campus staff before
          taking action.
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 px-6 py-4">
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <CheckCircle2 size={15} className="text-green-600" />
          AI-assisted sustainability recommendation
        </div>

        <div className="flex items-center gap-3">
          <div className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600">
            Powered by IBM watsonx.ai
          </div>

          <button
            onClick={onNewAnalysis}
            className="rounded-xl border border-green-200 bg-green-50 px-4 py-2 text-xs font-semibold text-green-700 transition hover:bg-green-100"
          >
            New Analysis
          </button>
        </div>
      </div>
    </div>
  );
}
