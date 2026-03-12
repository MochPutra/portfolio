"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const GITHUB_USERNAME = "mochputra";

const toolLogos = [
  { name: "Python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "SQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "Pandas", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
  { name: "NumPy", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
  { name: "Scikit-learn", src: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" },
  { name: "Git", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "Jupyter", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" },
  { name: "PostgreSQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "VS Code", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  { name: "Excel", src: "https://img.icons8.com/color/48/microsoft-excel-2019.png" },
  { name: "TensorFlow", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
];

const marqueeItems = [...toolLogos, ...toolLogos];

export function Skills() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="skills" className="section">
      <div className="mx-auto max-w-7xl">
        <p className="section-heading">GitHub Activity</p>
        <h2 className="section-title">Kontribusi &amp; Aktivitas Coding Saya.</h2>
      </div>

      {/* GitHub Contribution Heatmap */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto mb-12 max-w-5xl overflow-hidden rounded-3xl bg-white/80 p-6 shadow-soft backdrop-blur-xl dark:bg-slate-800/80"
      >
        {/* Header */}
        <div className="mb-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-slate-800 to-slate-600 text-white shadow-soft dark:from-slate-600 dark:to-slate-400">
              <Github className="h-4 w-4" />
            </span>
            <div>
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
                @{GITHUB_USERNAME}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                GitHub Contributions
              </p>
            </div>
          </div>
          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-600 transition-colors hover:bg-slate-50 dark:border-slate-700 dark:text-slate-400 dark:hover:bg-slate-700/50"
          >
            Lihat Profil
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>

        {/* Chart */}
        {mounted && (
          <div className="w-full overflow-x-auto rounded-2xl bg-slate-50/80 p-4 dark:bg-slate-900/40">
            <img
              src={`https://ghchart.rshah.org/2563eb/${GITHUB_USERNAME}`}
              alt={`GitHub contribution chart for ${GITHUB_USERNAME}`}
              className="w-full min-w-[600px] dark:hidden"
            />
            <img
              src={`https://ghchart.rshah.org/38bdf8/${GITHUB_USERNAME}`}
              alt={`GitHub contribution chart for ${GITHUB_USERNAME}`}
              className="hidden w-full min-w-[600px] dark:block"
            />
          </div>
        )}

        {/* Legend */}
        <div className="mt-3 flex items-center justify-end gap-2 text-xs text-slate-400">
          <span>Less</span>
          {[
            "bg-slate-100 dark:bg-slate-700",
            "bg-blue-200 dark:bg-blue-900",
            "bg-blue-400 dark:bg-blue-700",
            "bg-blue-500 dark:bg-blue-500",
            "bg-blue-700 dark:bg-blue-400",
          ].map((c, i) => (
            <span key={i} className={`h-3 w-3 rounded-sm ${c}`} />
          ))}
          <span>More</span>
        </div>
      </motion.div>

      {/* Logo Marquee */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="overflow-hidden rounded-2xl bg-white/60 py-5 shadow-soft backdrop-blur-xl dark:bg-slate-800/60"
      >
        <p className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
          Teknologi &amp; Tools yang Saya Gunakan
        </p>
        <div className="relative">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-white/80 to-transparent dark:from-slate-800/80" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-white/80 to-transparent dark:from-slate-800/80" />
          <div className="flex w-max animate-marquee gap-8 px-4">
            {marqueeItems.map((tool, i) => (
              <div key={`${tool.name}-${i}`} className="flex flex-col items-center gap-2 group">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 p-2 shadow-sm transition-transform duration-200 group-hover:scale-110 dark:bg-slate-700/60">
                  <img src={tool.src} alt={tool.name} className="h-8 w-8 object-contain" />
                </div>
                <span className="text-[10px] font-medium text-slate-500 dark:text-slate-400">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}