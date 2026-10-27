import React from "react";

const navigation = [
  ["ABOUT", "#about"],
  ["CAPABILITIES", "#stack"],
  ["PROJECTS", "#projects"],
  ["CONTACT", "#footer-contact"],
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-palette-bg/90 backdrop-blur-md border-b editorial-border px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#about" className="flex items-center gap-3">
          <span className="font-serif italic text-2xl font-light text-palette-gold">
            .K.
          </span>
          <div className="flex flex-col border-l editorial-border pl-3">
            <span className="font-semibold text-xs tracking-wider text-slate-100 uppercase">
              Kaleab Solomon
            </span>
            <span className="text-[10px] font-mono text-slate-400">
              FULL STACK DEVELOPER
            </span>
          </div>
        </a>

        <nav
          className="hidden md:flex items-center gap-8 font-mono text-xs text-slate-300 tracking-wider"
          aria-label="Primary navigation"
        >
          {navigation.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="hover:text-palette-gold transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-palette-card/60 border editorial-border text-[11px] font-mono text-slate-300">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>AVAILABLE FOR WORK</span>
          </div>
          <a
            href="#footer-contact"
            className="px-4 py-2 rounded bg-palette-gold text-palette-bg font-mono font-medium text-xs tracking-wider hover:bg-opacity-90 transition-all"
          >
            GET IN TOUCH
          </a>
        </div>
      </div>
    </header>
  );
}
