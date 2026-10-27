import React from "react";

const capabilities = [
  [
    "01 / ARCHITECTURE",
    "Full-Stack Engineering",
    "End-to-end web applications built with React, Next.js, and Node.js using clean architecture and domain-driven design.",
    "React • Next.js • TypeScript",
  ],
  [
    "02 / BACKEND",
    "API & Microservices",
    "Resilient REST and GraphQL microservices with Redis caching layer, event queues, and PostgreSQL data persistence.",
    "Node.js • PostgreSQL • Redis",
  ],
  [
    "03 / PERFORMANCE",
    "Core Web Vitals",
    "Optimizing runtime execution, bundle sizes, asset delivery, and SSR rendering for sub-100ms TTFB scores.",
    "SSR • Edge Network • Caching",
  ],
  [
    "04 / INTERFACE",
    "UI Systems & Design",
    "Translating complex design concepts into modular Tailwind CSS component libraries focused on accessibility and polish.",
    "Tailwind CSS • Accessibility",
  ],
];

export default function Capabilities() {
  return (
    <section
      id="stack"
      className="py-20 px-6 max-w-7xl mx-auto border-t editorial-border"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
        <div>
          <span className="text-xs font-mono text-palette-gold uppercase tracking-widest">
            // CORE_CAPABILITIES
          </span>
          <h2 className="text-3xl font-bold text-slate-100 mt-2">
            Architecture &amp; Development Pillars
          </h2>
        </div>
        <p className="text-xs font-mono text-slate-400">
          Strictly typed, decoupled, and built for scale
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {capabilities.map(([eyebrow, title, description, tools]) => (
          <article
            key={eyebrow}
            className="editorial-card p-6 rounded flex flex-col justify-between"
          >
            <div>
              <div className="font-mono text-xs text-palette-gold mb-4">
                {eyebrow}
              </div>
              <h3 className="text-lg font-bold text-slate-100 mb-2">{title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {description}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t editorial-border font-mono text-[11px] text-slate-400">
              {tools}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
