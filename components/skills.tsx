"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const GITHUB_USERNAME = "MochPutra";

type ContributionDay = {
  date: string;
  contributionCount: number;
  color: string;
};

type Week = {
  contributionDays: ContributionDay[];
};

type CalendarData = {
  totalContributions: number;
  weeks: Week[];
};

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

const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

export function Skills() {
  const [mounted, setMounted] = useState(false);
  const [calendar, setCalendar] = useState<CalendarData | null>(null);
  const [tooltip, setTooltip] = useState<{ day: ContributionDay; x: number; y: number } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  setMounted(true);
  fetch("/api/github")
    .then((r) => r.json())
    .then((data) => {
      // ✅ Cek apakah data valid sebelum set
      if (data?.weeks) {
        setCalendar(data);
      }
      setLoading(false);
    })
    .catch(() => setLoading(false));
}, []);

  // Get month labels from weeks
  const monthLabels: { label: string; index: number }[] = [];
  if (calendar?.weeks) {
    let lastMonth = -1;
    calendar.weeks.forEach((week, i) => {
      const month = new Date(week.contributionDays[0]?.date).getMonth();
      if (month !== lastMonth) {
        monthLabels.push({ label: MONTHS[month], index: i });
        lastMonth = month;
      }
    });
  }

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
        className="mx-auto mb-8 max-w-5xl overflow-hidden rounded-3xl bg-white/80 p-6 shadow-soft backdrop-blur-xl dark:bg-slate-800/80"
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
              {calendar && (
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {calendar.totalContributions.toLocaleString()} contributions this year
                </p>
              )}
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
        <div className="w-full overflow-x-auto rounded-2xl bg-slate-50/80 p-4 dark:bg-slate-900/40">
          {loading || !mounted ? (
            // Skeleton
            <div className="flex gap-1 animate-pulse">
              {Array.from({ length: 53 }).map((_, i) => (
                <div key={i} className="flex flex-col gap-1">
                  {Array.from({ length: 7 }).map((_, j) => (
                    <div key={j} className="h-3 w-3 rounded-sm bg-slate-200 dark:bg-slate-700" />
                  ))}
                </div>
              ))}
            </div>
          ) : calendar ? (
            <div className="relative">
              {/* Month labels */}
              <div className="mb-1 flex text-[10px] text-slate-400 dark:text-slate-500" style={{ paddingLeft: "2px" }}>
                {monthLabels.map(({ label, index }) => (
                  <div
                    key={label + index}
                    className="absolute text-[10px] text-slate-400"
                    style={{ left: `${index * 14}px` }}
                  >
                    {label}
                  </div>
                ))}
              </div>

              {/* Grid */}
              <div className="mt-5 flex gap-[3px]">
                {calendar.weeks.map((week, wi) => (
                  <div key={wi} className="flex flex-col gap-[3px]">
                    {week.contributionDays.map((day) => (
                      <div
                        key={day.date}
                        className="h-[11px] w-[11px] rounded-sm cursor-pointer transition-transform hover:scale-125"
                        style={{ backgroundColor: day.color === "#ebedf0" ? undefined : day.color }}
                        onMouseEnter={(e) => {
                          const rect = (e.target as HTMLElement).getBoundingClientRect();
                          setTooltip({ day, x: rect.left, y: rect.top });
                        }}
                        onMouseLeave={() => setTooltip(null)}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <p className="text-xs text-slate-400">Gagal memuat data GitHub.</p>
          )}
        </div>

        {/* Legend */}
        <div className="mt-3 flex items-center justify-end gap-2 text-xs text-slate-400">
          <span>Less</span>
          {["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"].map((color, i) => (
            <span
              key={i}
              className="h-3 w-3 rounded-sm"
              style={{ backgroundColor: color }}
            />
          ))}
          <span>More</span>
        </div>
      </motion.div>

      {/* Tooltip */}
      {tooltip && (
        <div
          className="fixed z-50 pointer-events-none rounded-lg bg-slate-900 px-2.5 py-1.5 text-xs text-white shadow-xl"
          style={{ top: tooltip.y - 40, left: tooltip.x - 20 }}
        >
          <span className="font-semibold">{tooltip.day.contributionCount} contributions</span>
          <br />
          <span className="text-slate-300">{new Date(tooltip.day.date).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })}</span>
        </div>
      )}

      {/* Logo Marquee */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mt-12 overflow-hidden rounded-2xl bg-white/60 py-5 shadow-soft backdrop-blur-xl dark:bg-slate-800/60"
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