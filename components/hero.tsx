"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, LineChart, Brain } from "lucide-react";

const roles = ["Data Analyst", "AI Automation Builder", "LLM Enthusiast"];

const techStack = [
  { label: "Python", color: "bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-700/40" },
  { label: "SQL", color: "bg-violet-100 text-violet-700 border-violet-200 dark:bg-violet-900/30 dark:text-violet-300 dark:border-violet-700/40" },
  { label: "Pandas", color: "bg-cyan-100 text-cyan-700 border-cyan-200 dark:bg-cyan-900/30 dark:text-cyan-300 dark:border-cyan-700/40" },
  { label: "Tableau", color: "bg-sky-100 text-sky-700 border-sky-200 dark:bg-sky-900/30 dark:text-sky-300 dark:border-sky-700/40" },
  { label: "Excel", color: "bg-indigo-100 text-indigo-700 border-indigo-200 dark:bg-indigo-900/30 dark:text-indigo-300 dark:border-indigo-700/40" },
];

export function Hero() {
  return (
    <section id="hero" className="section pt-16 sm:pt-20">
      <div className="relative grid gap-12 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-center">
        <div className="pointer-events-none absolute -left-40 top-0 h-72 w-72 rounded-full bg-gradient-to-tr from-brand-blue/30 to-brand-cyan/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-gradient-to-tr from-slate-900/10 to-brand-blue/10 blur-3xl" />

        <div className="relative space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-medium text-slate-600 shadow-sm backdrop-blur-xl"
          >
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-tr from-brand-blue to-brand-cyan text-white">
              <Sparkles className="h-3 w-3" />
            </span>
            Lagi seru-serunya ngulik titik temu antara{" "}
            <span className="font-semibold text-slate-900">
              data, AI, dan otomasi
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.05 }}
            className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 sm:text-5xl lg:text-6xl"
          >
            Mengubah{" "}
            <span className="bg-gradient-to-tr from-brand-blue to-brand-cyan bg-clip-text text-transparent">
              Data
            </span>{" "}
            menjadi Solusi Cerdas
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.08 }}
            className="max-w-xl text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:text-base"
          >
            Halo! Perkenalkan nama saya Putra, saya adalah mahasiswa Teknik Informatika yang berfokus di bidang data analytics, AI automation, dan Large Language Models.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut", delay: 0.12 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-medium text-white shadow-soft transition hover:bg-slate-800"
            >
              Lihat Projects Saya
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-5 py-2.5 text-sm font-medium text-slate-800 shadow-sm backdrop-blur-xl transition hover:bg-slate-50"
            >
              Kontak Saya
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.16 }}
            className="flex flex-wrap gap-2"
          >
            {techStack.map((tech) => (
              <span
                key={tech.label}
                className={`rounded-md border px-3 py-1 text-sm font-medium ${tech.color}`}
              >
                {tech.label}
              </span>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.05 }}
          className="relative mt-4 flex justify-center md:mt-0"
        >
          <div className="glass relative flex w-full max-w-sm flex-col gap-4 rounded-3xl p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
                  Roles
                </p>
                <TypingText items={roles} />
              </div>
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-tr from-brand-blue to-brand-cyan text-white shadow-soft">
                <Brain className="h-6 w-6" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="rounded-2xl bg-slate-900 px-3 py-3 text-slate-100 shadow-soft">
                <div className="flex items-center gap-2">
                  <LineChart className="h-4 w-4 text-brand-cyan" />
                  <span className="font-medium">Data Insights</span>
                </div>
                <p className="mt-1 text-[11px] text-slate-300">
                  Analisis mendalam, visualisasi data, dan monitoring eksperimen.
                </p>
              </div>
              <div className="rounded-2xl bg-slate-900/95 px-3 py-3 text-slate-100 shadow-soft">
                <div className="flex items-center gap-2">
                  <Brain className="h-4 w-4 text-brand-blue" />
                  <span className="font-medium">AI Automation</span>
                </div>
                <p className="mt-1 text-[11px] text-slate-300">
                  Otomatisasi data lewat LLM: Meringkas informasi, mengarahkan alur, dan memperkaya konteks secara instan.
                </p>
              </div>
            </div>

            <motion.div
              className="pointer-events-none absolute -right-10 -top-8 h-40 w-40 rounded-full bg-gradient-to-tr from-brand-blue/40 to-brand-cyan/40 blur-3xl"
              animate={{ y: [0, -8, 0], opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

type TypingTextProps = {
  items: string[];
};

function TypingText({ items }: TypingTextProps) {
  const [index, setIndex] = React.useState(0);
  const [subIndex, setSubIndex] = React.useState(0);
  const [deleting, setDeleting] = React.useState(false);

  React.useEffect(() => {
    const current = items[index];

    if (!deleting && subIndex === current.length) {
      const timeout = setTimeout(() => setDeleting(true), 1100);
      return () => clearTimeout(timeout);
    }

    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % items.length);
      return;
    }

    const timeout = setTimeout(
      () => setSubIndex((prev) => prev + (deleting ? -1 : 1)),
      deleting ? 40 : 80
    );

    return () => clearTimeout(timeout);
  }, [items, index, subIndex, deleting]);

  return (
    <p className="mt-1 text-sm font-medium text-slate-800">
      <span className="text-slate-500">I&apos;m a&nbsp;</span>
      <span className="bg-gradient-to-tr from-brand-blue to-brand-cyan bg-clip-text text-transparent">
        {items[index].slice(0, subIndex) || "\u200B"}
      </span>
      <span className="inline-block w-[1ch] animate-pulse text-slate-400">|</span>
    </p>
  );
}