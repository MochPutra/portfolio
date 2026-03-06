"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Database, Brain, BarChart3 } from "lucide-react";
import {
  Radar,
  RadarChart as RechartsRadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

const skillCategories = [
  {
    icon: Database,
    label: "Data",
    items: [
      { name: "Python", level: 80 },
      { name: "SQL", level: 75 },
      { name: "Excel", level: 85 },
    ],
  },
  {
    icon: Brain,
    label: "AI & ML",
    items: [
      { name: "Pandas / NumPy", level: 80 },
      { name: "Scikit-learn", level: 70 },
      { name: "LLM Integration", level: 65 },
    ],
  },
  {
    icon: BarChart3,
    label: "Tools",
    items: [
      { name: "Power BI", level: 70 },
      { name: "Tableau", level: 65 },
      { name: "Git / GitHub", level: 75 },
    ],
  },
];

const radarData = [
  { subject: "Python", value: 80, fullMark: 100 },
  { subject: "SQL", value: 75, fullMark: 100 },
  { subject: "Excel", value: 85, fullMark: 100 },
  { subject: "Pandas/NumPy", value: 80, fullMark: 100 },
  { subject: "Scikit-learn", value: 70, fullMark: 100 },
  { subject: "LLM", value: 65, fullMark: 100 },
  { subject: "Power BI", value: 70, fullMark: 100 },
  { subject: "Tableau", value: 65, fullMark: 100 },
];

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

// Duplicate for seamless infinite scroll
const marqueeItems = [...toolLogos, ...toolLogos];

export function Skills() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="skills" className="section">
      <div className="mx-auto max-w-7xl">
        <p className="section-heading">Skills/Tools</p>
        <h2 className="section-title">Apa saja yang saya gunakan untuk bekerja.</h2>
      </div>

      {/* Radar chart */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto mb-12 max-w-2xl overflow-hidden rounded-3xl bg-white/80 p-6 shadow-soft backdrop-blur-xl dark:bg-slate-800/80 dark:shadow-slate-900/20"
      >
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          Skills overview
        </h3>
        <div className="w-full min-h-[300px] h-[288px]">
          {mounted && (
            <ResponsiveContainer width="100%" height="100%">
              <RechartsRadarChart data={radarData}>
                <PolarGrid stroke="rgba(148,163,184,0.4)" />
                <PolarAngleAxis
                  dataKey="subject"
                  tick={{ fontSize: 11, fill: "currentColor" }}
                  className="text-slate-600 dark:text-slate-400"
                />
                <PolarRadiusAxis
                  angle={90}
                  domain={[0, 100]}
                  tick={{ fontSize: 10 }}
                />
                <Radar
                  name="Proficiency"
                  dataKey="value"
                  stroke="#2563eb"
                  fill="#2563eb"
                  fillOpacity={0.4}
                  strokeWidth={2}
                />
                <Tooltip
                  contentStyle={{
                    borderRadius: "12px",
                    border: "1px solid rgba(148,163,184,0.3)",
                  }}
                />
                <Legend />
              </RechartsRadarChart>
            </ResponsiveContainer>
          )}
        </div>
      </motion.div>

      {/* Skill cards */}
      <div className="grid gap-6 md:grid-cols-3">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={category.label}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: idx * 0.08, ease: "easeOut" }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="glass flex flex-col rounded-2xl p-5 transition-shadow hover:shadow-xl dark:bg-slate-800/60 dark:border-slate-700/50"
          >
            <div className="flex items-center gap-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-tr from-brand-blue/90 to-brand-cyan/90 text-white shadow-soft">
                <category.icon className="h-5 w-5" />
              </span>
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
                {category.label}
              </h3>
            </div>
            <div className="mt-4 space-y-3">
              {category.items.map((skill) => (
                <div key={skill.name}>
                  <div className="flex items-center justify-between text-xs text-slate-600 dark:text-slate-400">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="mt-1 h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-700">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-brand-blue to-brand-cyan"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true, amount: 0.6 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Logo Marquee */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mt-12 overflow-hidden rounded-2xl bg-white/60 py-5 shadow-soft backdrop-blur-xl dark:bg-slate-800/60"
      >
        <p className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
          Teknologi & Tools yang Saya Gunakan
        </p>

        {/* Fade edges */}
        <div className="relative">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-white/80 to-transparent dark:from-slate-800/80" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-white/80 to-transparent dark:from-slate-800/80" />

          <div className="flex w-max animate-marquee gap-8 px-4">
            {marqueeItems.map((tool, i) => (
              <div
                key={`${tool.name}-${i}`}
                className="flex flex-col items-center gap-2 group"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 p-2 shadow-sm transition-transform duration-200 group-hover:scale-110 dark:bg-slate-700/60">
                  <img
                    src={tool.src}
                    alt={tool.name}
                    className="h-8 w-8 object-contain"
                  />
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