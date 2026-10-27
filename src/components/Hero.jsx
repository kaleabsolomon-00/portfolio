import React from "react";

const metrics = [
  ["08+", "Years Experience", true],
  ["120+", "Production Deployments", false],
  ["99.9%", "System SLA Uptime", true],
  ["30+", "Global Clients", false],
];

function ArrowIcon() {
  return (
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M14 5l7 7m0 0l-7 7m7-7H3"
      />
    </svg>
  );
}

export default function Hero() {
  return (
    <section id="about" className="pt-16 pb-12 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-palette-card border editorial-border text-palette-gold text-xs font-mono">
            FULL-STACK ARCHITECT &amp; WEB DEVELOPER
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-100 tracking-tight leading-[1.15]">
            Engineered for{" "}
            <span className="font-serif italic font-normal text-palette-gold">
              Performance,
            </span>{" "}
            Built with Precision.
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light max-w-xl">
            I build high-throughput microservices, low-latency API
            orchestrations, and responsive web systems that combine editorial
            aesthetics with solid software engineering.
          </p>
        </div>

        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-sm rounded-t-full overflow-hidden bg-palette-card border editorial-border p-2">
            <div className="relative rounded-t-full overflow-hidden bg-palette-bg aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800"
                alt="Alex Vance"
                className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-700 opacity-90"
                onError={(event) => {
                  event.currentTarget.src =
                    "https://placehold.co/600x800/122324/DB9F75?text=Alex+Vance";
                }}
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-palette-bg via-palette-bg/70 to-transparent p-4 text-center">
                <span className="font-mono text-[11px] text-palette-gold tracking-widest uppercase">
                  Alex Vance — London / Remote
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 font-mono">
        {metrics.map(([value, label, highlighted]) => (
          <div key={label} className="editorial-card p-6 rounded">
            <div
              className={`text-3xl font-bold ${highlighted ? "text-palette-gold" : "text-slate-100"}`}
            >
              {value}
            </div>
            <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider">
              {label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
