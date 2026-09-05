import { Leaf, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-600 text-white">
            <Leaf size={22} />
          </div>

          <div>
            <h1 className="text-lg font-bold text-slate-900">
              Campus<span className="text-green-600">AI</span>
            </h1>
            <p className="hidden text-xs text-slate-500 sm:block">
              Sustainability Assistant
            </p>
          </div>
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#home"
            className="text-sm font-medium text-slate-600 transition hover:text-green-600"
          >
            Home
          </a>

          <a
            href="#analyze"
            className="text-sm font-medium text-slate-600 transition hover:text-green-600"
          >
            Analyze
          </a>

          <a
            href="#about"
            className="text-sm font-medium text-slate-600 transition hover:text-green-600"
          >
            About
          </a>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="rounded-lg p-2 text-slate-700 md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-slate-200 bg-white px-5 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            <a href="#home">Home</a>
            <a href="#analyze">Analyze</a>
            <a href="#about">About</a>
          </div>
        </nav>
      )}
    </header>
  );
}