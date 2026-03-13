"use client";

import { ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  const scrollToTop = () => {
  document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
  document.body.scrollTo({ top: 0, behavior: "smooth" });
  window.scrollTo({ top: 0, behavior: "smooth" });
};

  return (
    <footer className="border-t border-slate-200/60 bg-white/60 backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-900/60">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-8 sm:grid-cols-[1fr_auto_auto] sm:items-start">

          {/* Left — name + tagline + badge */}
          <div>
            <p className="text-sm font-semibold text-slate-900 dark:text-white">
              Putra Nurhadi
            </p>
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
              Turning Data Into Intelligent Solutions
            </p>

            {/* Open to opportunities badge */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-4 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 dark:border-emerald-700/40 dark:bg-emerald-900/20"
            >
              {/* Pulsing green dot */}
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="text-[11px] font-medium text-emerald-700 dark:text-emerald-400">
                Open to opportunities
              </span>
            </motion.div>
          </div>

          {/* Center — quick links */}
          <div>
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
              Navigation
            </p>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-xs font-medium text-slate-600 transition hover:text-brand-blue dark:text-slate-400 dark:hover:text-brand-cyan"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — back to top */}
          <div className="flex sm:items-start sm:pt-0.5">
            <button
              onClick={scrollToTop}
              className="group inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-xs font-medium text-slate-700 shadow-sm backdrop-blur transition hover:border-brand-blue hover:text-brand-blue dark:border-slate-600 dark:bg-slate-800/70 dark:text-slate-300 dark:hover:border-brand-cyan dark:hover:text-brand-cyan"
            >
              <ArrowUp className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5" />
              Back to top
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-2 border-t border-slate-200/60 pt-6 dark:border-slate-700/60">
          <p className="text-[11px] text-slate-400 dark:text-slate-500">
            © {new Date().getFullYear()} Putra Nurhadi. All rights reserved.
          </p>
          <p className="text-[11px] text-slate-400 dark:text-slate-500">
            Built with{" "}
            <span className="font-medium text-slate-600 dark:text-slate-300">Next.js</span>
            {" & "}
            <span className="font-medium text-slate-600 dark:text-slate-300">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}