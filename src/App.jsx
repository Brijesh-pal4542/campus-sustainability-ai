import { useState } from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import IssueInput from "./components/IssueInput";
import ResultCard from "./components/ResultCard";
import Footer from "./components/Footer";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleAnalyze = async () => {
    if (!input.trim() || loading) return;

    setLoading(true);
    setResult(null);
    setError("");

    try {
      const response = await fetch("http://localhost:5000/api/analyze", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          problem: input,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "AI analysis failed.");
      }

      setResult(data.response);
    } catch (error) {
      console.error("AI Error:", error);

      setError(
        "Unable to analyze the sustainability problem. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main>
        <Hero />
        <Stats />

        <section
          id="analyze"
          className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24"
        >
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-block rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
              Sustainability Analyzer
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Describe a campus sustainability issue
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
              Enter a real or hypothetical campus problem. The AI will analyze
              the issue and suggest practical sustainability actions.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-4xl">
            <IssueInput
              input={input}
              setInput={setInput}
              onAnalyze={handleAnalyze}
              loading={loading}
            />

            {error && (
              <div className="mt-6 rounded-xl border border-red-200 bg-red-50 p-4 text-center text-sm text-red-700">
                {error}
              </div>
            )}

            {result && (
              <ResultCard
                result={result}
                onNewAnalysis={() => {
                  setResult(null);
                  setInput("");
                }}
              />
            )}
          </div>
        </section>

        <section className="bg-green-50 px-5 py-16">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-green-600">
              Prototype Goal
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              From campus problems to practical action
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
              CampusAI demonstrates how AI-assisted analysis can help students
              and institutions identify sustainability issues and take
              meaningful action.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
