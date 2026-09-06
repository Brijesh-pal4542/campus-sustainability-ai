import { Leaf } from "lucide-react";

export default function Footer() {
  return (
    <footer
      id="about"
      className="border-t border-slate-200 bg-slate-900 text-white"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-600">
            <Leaf size={19} />
          </div>

          <div>
            <p className="font-bold">
              Campus<span className="text-green-400">AI</span>
            </p>

            <p className="text-xs text-slate-400">
              AI for sustainable campuses
            </p>
          </div>
        </div>

        <p className="text-sm text-slate-400">
          Version 1 Prototype • AI for Sustainability
        </p>
      </div>
    </footer>
  );
}
