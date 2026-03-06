"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const items = [
  {
    period: "2025",
    title: "Data Analytics Internship",
    org: "Tech Company / Startup",
    description:
      "Worked with product and marketing teams to build dashboards, clean data, and support weekly performance reviews.",
    focus: ["SQL", "Reporting", "Stakeholder communication"],
    logo: "/images/experience/ummi.png", // ← ganti path logo instansi
    color: "from-brand-blue to-blue-500",
    lightBg: "bg-blue-50 dark:bg-blue-900/20",
    lightText: "text-blue-700 dark:text-blue-300",
    dotColor: "from-brand-blue to-blue-500",
  },
  {
    period: "2024",
    title: "Research Assistant — Applied ML",
    org: "University Lab",
    description:
      "Assisted in running experiments with classical ML models, comparing baselines, and documenting results for internal reports.",
    focus: ["Scikit-learn", "Experimentation", "Documentation"],
    logo: "/images/experience/trust.jpg", // ← ganti path logo instansi
    color: "from-brand-cyan to-cyan-400",
    lightBg: "bg-cyan-50 dark:bg-cyan-900/20",
    lightText: "text-cyan-700 dark:text-cyan-300",
    dotColor: "from-brand-cyan to-cyan-400",
  },
  {
    period: "2023",
    title: "Student Projects & Hackathons",
    org: "Various Teams",
    description:
      "Participated in hackathons focused on AI assistants, data visualization, and productivity tools, often taking the data role in the team.",
    focus: ["Prototyping", "Teamwork", "Presentations"],
    logo: "/images/experience/mister.jpg", // ← ganti path logo instansi
    color: "from-violet-500 to-indigo-500",
    lightBg: "bg-violet-50 dark:bg-violet-900/20",
    lightText: "text-violet-700 dark:text-violet-300",
    dotColor: "from-violet-500 to-indigo-500",
  },
  
];

export function Experience() {
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <section id="experience" className="section">
      <div className="mx-auto max-w-7xl">
        <p className="section-heading">Experience & Research</p>
        <h2 className="section-title">Learning by building in public.</h2>
      </div>

      <div className="mt-10 mx-auto max-w-3xl">
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-brand-blue/70 via-slate-200 to-brand-cyan/70 dark:via-slate-600" />

          <div className="space-y-6 pl-14">
            {items.map((item, idx) => {
              const isOpen = expanded === idx;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <motion.div
                    className={`absolute -left-9 top-5 h-3 w-3 rounded-full bg-gradient-to-tr ${item.dotColor} shadow-soft ring-2 ring-white dark:ring-slate-900`}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", bounce: 0.5, delay: idx * 0.1 }}
                  />

                  {/* Accordion card */}
                  <motion.button
                    onClick={() => setExpanded(isOpen ? null : idx)}
                    className={`w-full text-left overflow-hidden rounded-2xl border transition-all duration-300 ${
                      isOpen
                        ? "border-slate-200 bg-white shadow-soft dark:border-slate-700 dark:bg-slate-800"
                        : "border-slate-200/60 bg-white/60 hover:bg-white hover:shadow-soft dark:border-slate-700/60 dark:bg-slate-800/60 dark:hover:bg-slate-800"
                    }`}
                    whileHover={{ scale: isOpen ? 1 : 1.01 }}
                    transition={{ duration: 0.2 }}
                  >
                    {/* Header */}
                    <div className="flex items-center gap-4 p-4">
                      {/* Logo */}
                      <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-xl border border-slate-100 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-700">
                        <Image
                          src={item.logo}
                          alt={item.org}
                          fill
                          className="object-contain p-1.5"
                        />
                      </div>

                      {/* Text */}
                      <div className="flex-1 min-w-0">
                        <span className={`inline-block rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${item.lightBg} ${item.lightText}`}>
                          {item.period}
                        </span>
                        <p className="mt-0.5 text-sm font-semibold text-slate-900 dark:text-white truncate">
                          {item.title}
                        </p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">{item.org}</p>
                      </div>

                      {/* Chevron */}
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="shrink-0"
                      >
                        <ChevronDown className="h-4 w-4 text-slate-400" />
                      </motion.div>
                    </div>

                    {/* Expandable body */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="body"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className={`mx-4 h-px bg-gradient-to-r ${item.color} opacity-20`} />
                          <div className="px-4 pb-4 pt-3">
                            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                              {item.description}
                            </p>
                            <div className="mt-3">
                              <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                                Focus
                              </p>
                              <div className="flex flex-wrap gap-2">
                                {item.focus.map((f) => (
                                  <motion.span
                                    key={f}
                                    initial={{ opacity: 0, scale: 0.85 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.2 }}
                                    className={`rounded-full px-3 py-1 text-xs font-medium ${item.lightBg} ${item.lightText}`}
                                  >
                                    {f}
                                  </motion.span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}