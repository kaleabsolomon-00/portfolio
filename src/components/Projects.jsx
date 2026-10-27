import React from "react";

const projects = [
  {
    category: "FINTECH / INFRASTRUCTURE",
    year: "2026",
    title: "Aether Ledger Engine",
    description:
      "Multi-currency settlement backend processing transaction queues with zero-downtime database migrations and automated audit trails.",
    tools: ["Next.js", "TypeScript", "PostgreSQL", "Redis"],
    metric: "SLA: 99.99% Availability",
  },
  {
    category: "SAAS / TELEMETRY",
    year: "2025",
    title: "OmniCloud Observer",
    description:
      "Log analytics dashboard built for real-time observability, processing over 15,000 events per second with sub-second queries.",
    tools: ["React", "Node.js", "Tailwind CSS", "Docker"],
    metric: "TTFB: < 45ms Global",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 px-6 max-w-7xl mx-auto border-t editorial-border"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
        <div>
          <span className="text-xs font-mono text-palette-gold uppercase tracking-widest">
            // SELECTED_WORK
          </span>
          <h2 className="text-3xl font-bold text-slate-100 mt-2">
            Production Systems &amp; Case Studies
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <article
            key={project.title}
            className="editorial-card rounded overflow-hidden flex flex-col justify-between"
          >
            <div className="p-8 space-y-4">
              <div className="flex items-center justify-between font-mono text-xs">
                <span className="text-palette-gold">{project.category}</span>
                <span className="text-slate-400">{project.year}</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-100">
                {project.title}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 pt-2 font-mono text-[11px] text-slate-300">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-2.5 py-1 rounded bg-palette-bg border editorial-border"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-palette-bg/80 px-8 py-4 border-t editorial-border flex items-center justify-between font-mono text-xs">
              <span className="text-slate-400">{project.metric}</span>
              <a
                href="#footer-contact"
                className="text-palette-gold hover:underline"
              >
                VIEW_CASE_STUDY →
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
