import React, { useState } from "react";

function ArrowIcon() {
  return (
    <svg
      className="w-3.5 h-3.5"
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

export default function ContactFooter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("SUBMIT");
  const [copied, setCopied] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    if (!email) return;
    setStatus("DISPATCHED!");
    setEmail("");
    window.setTimeout(() => setStatus("SUBMIT"), 3000);
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText("alex@vance.dev");
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Unable to copy email address.", error);
    }
  }

  return (
    <footer
      id="footer-contact"
      className="bg-palette-bg border-t editorial-border pt-16 pb-8 px-6"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="editorial-card p-8 sm:p-12 rounded border editorial-border">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-3">
              <span className="font-mono text-xs text-palette-gold uppercase tracking-widest">
                START_A_PROJECT
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-100">
                Ready to scale your web platform?
              </h2>
              <p className="text-slate-300 text-sm font-light leading-relaxed">
                Send a direct message or copy my address to discuss
                architecture, contract builds, or technical advisings.
              </p>
            </div>
            <div className="lg:col-span-6">
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="flex flex-col sm:flex-row items-stretch gap-2 bg-palette-bg p-2 rounded border editorial-border focus-within:border-palette-gold transition-colors">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="Enter your email address..."
                    className="w-full bg-transparent px-3 py-2 text-sm text-slate-100 placeholder-slate-500 focus:outline-none font-mono"
                  />
                  <button
                    type="submit"
                    className={`px-5 py-2.5 rounded ${status === "DISPATCHED!" ? "bg-emerald-600" : "bg-palette-gold"} text-palette-bg font-mono font-medium text-xs tracking-wider whitespace-nowrap hover:bg-opacity-90 transition-all flex items-center justify-center gap-2`}
                  >
                    <span>{status}</span>
                    {status === "SUBMIT" && <ArrowIcon />}
                  </button>
                </div>
                <div className="flex items-center justify-between font-mono text-[11px] text-slate-400 px-1">
                  <span>OR COPY DIRECTLY:</span>
                  <button
                    type="button"
                    onClick={copyEmail}
                    className="text-palette-gold hover:underline"
                  >
                    {copied
                      ? "COPIED TO CLIPBOARD!"
                      : "kaleabsolomon634@gmail.com"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 font-mono text-xs text-slate-400 pt-4 border-t editorial-border">
          <div className="space-y-3">
            <span className="text-slate-200 font-bold tracking-wider block">
              NAVIGATION
            </span>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="hover:text-palette-gold transition-colors"
                >
                  About &amp; Philosophy
                </a>
              </li>
              <li>
                <a
                  href="#stack"
                  className="hover:text-palette-gold transition-colors"
                >
                  Capabilities
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-palette-gold transition-colors"
                >
                  Selected Projects
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <span className="text-slate-200 font-bold tracking-wider block">
              SOCIAL
            </span>
            <ul className="space-y-2">
              <li>
                <a
                  href="#footer-contact"
                  className="hover:text-palette-gold transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="#footer-contact"
                  className="hover:text-palette-gold transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="#footer-contact"
                  className="hover:text-palette-gold transition-colors"
                >
                  X / Twitter
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <span className="text-slate-200 font-bold tracking-wider block">
              LOCATION &amp; TIME
            </span>
            <p className="text-slate-400 leading-relaxed">
              ADDIS ABABA / UTC+3
              <br />
              Available Worldwide
            </p>
          </div>
          <div className="space-y-3">
            <span className="text-slate-200 font-bold tracking-wider block">
              SYSTEM STATUS
            </span>
            <div className="flex items-center gap-2 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>ALL SYSTEMS OPERATIONAL</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-slate-500 pt-8 border-t editorial-border">
          <span>© 2026 KALEAB SOLOMON. ALL RIGHTS RESERVED.</span>
          <span>MADE WITH ❤️</span>
        </div>
      </div>
    </footer>
  );
}
