import { LoaderCircle, Send } from "lucide-react";
import SampleIssues from "./SampleIssues";

export default function IssueInput({
  input,
  setInput,
  onAnalyze,
  loading,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!input.trim() || loading) return;

    onAnalyze();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm focus-within:border-green-400 focus-within:ring-4 focus-within:ring-green-100">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Describe a sustainability issue on your campus..."
            rows={6}
            className="w-full resize-none border-0 bg-transparent p-5 text-slate-800 outline-none placeholder:text-slate-400"
          />

          <div className="flex items-center justify-between border-t border-slate-100 bg-slate-50 px-4 py-3">
            <span className="text-xs text-slate-400">
              Describe the problem clearly
            </span>

            <button
              type="submit"
              disabled={!input.trim() || loading}
              className="inline-flex items-center gap-2 rounded-xl bg-green-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? (
                <>
                  <LoaderCircle size={17} className="animate-spin" />
                  Analyzing...
                </>
              ) : (
                <>
                  <Send size={17} />
                  Analyze Issue
                </>
              )}
            </button>
          </div>
        </div>
      </form>

      <SampleIssues onSelect={setInput} />

<div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
  <p className="text-xs leading-5 text-slate-500">
    <span className="font-semibold text-slate-700">
      Responsible AI:
    </span>{" "}
    This tool provides AI-assisted sustainability suggestions based on the
    information provided. Recommendations should be reviewed and verified by
    appropriate campus staff before implementation.
  </p>
</div>
    </div>
  );
}