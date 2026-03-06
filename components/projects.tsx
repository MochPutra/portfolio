"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Github, X, ExternalLink } from "lucide-react";
import { projects, type ProjectTag } from "@/lib/projects";

const FILTER_TABS: { id: "all" | ProjectTag; label: string }[] = [
  { id: "all", label: "All" },
  { id: "Data Analysis", label: "Data Analysis" },
  { id: "Machine Learning", label: "Machine Learning" },
  { id: "AI Automation", label: "AI Automation" },
  { id: "LLM", label: "LLM" },
  { id: "Dashboard", label: "Dashboard" },
];

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<"all" | ProjectTag>("all");
  const [caseStudyProject, setCaseStudyProject] = useState<(typeof projects)[0] | null>(null);

  const filtered =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.tags.includes(activeFilter));

  return (
    <section id="projects" className="section">
      <div className="mx-auto max-w-7xl">
        <p className="section-heading">Projects</p>
        <h2 className="section-title">Beberapa project yang telah saya kerjakan.</h2>

        <div className="mt-6 flex flex-wrap gap-2">
          {FILTER_TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className="relative rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
            >
              {activeFilter === tab.id && (
                <motion.span
                  layoutId="project-filter-underline"
                  className="absolute inset-0 rounded-full bg-slate-900/10 dark:bg-white/10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                />
              )}
              <span className="relative z-10">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, idx) => (
            <motion.article
              key={project.title}
              layout
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              className="group flex flex-col overflow-hidden rounded-2xl bg-white/80 shadow-soft backdrop-blur-xl transition-all hover:scale-[1.02] hover:shadow-xl dark:bg-slate-800/80 dark:shadow-slate-900/20"
            >
              {/* Card image — klik menuju halaman detail */}
              <Link href={`/projects/${project.slug}`} className="block">
                <div className="relative h-36 overflow-hidden">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <div className="h-full w-full bg-gradient-to-tr from-slate-900 via-slate-800 to-slate-900">
                      <div className="absolute inset-0 opacity-40">
                        <div className="h-full w-full bg-[radial-gradient(circle_at_0_0,rgba(37,99,235,0.6),transparent_55%),radial-gradient(circle_at_100%_0,rgba(6,182,212,0.6),transparent_55%)]" />
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-slate-900/40" />
                  <div className="relative flex h-full items-end justify-between p-4">
                    <h3 className="max-w-[75%] text-sm font-semibold text-slate-50">
                      {project.title}
                    </h3>
                    <ArrowUpRight className="h-5 w-5 text-slate-200 opacity-80 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
                  </div>
                </div>
              </Link>

              <div className="flex flex-1 flex-col gap-4 p-4">
                <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-slate-200 bg-slate-50 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-slate-500 dark:border-slate-600 dark:bg-slate-700/50 dark:text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] text-slate-700 dark:bg-slate-700 dark:text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-auto flex flex-wrap items-center justify-between gap-2 pt-2">
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-800 hover:text-brand-blue dark:text-slate-200 dark:hover:text-cyan-400">
                      Live demo <ExternalLink className="h-3 w-3" />
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">
                      <Github className="h-3.5 w-3.5" /> GitHub
                    </a>
                  )}
                  <button
                    onClick={() => setCaseStudyProject(project)}
                    className="rounded-full bg-slate-900 px-3 py-1.5 text-[11px] font-medium text-white transition hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200"
                  >
                    Case study
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {caseStudyProject && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-sm"
            onClick={() => setCaseStudyProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", bounce: 0.2 }}
              className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl dark:bg-slate-800 dark:shadow-slate-900/50"
              onClick={(e) => e.stopPropagation()}
            >
              <button onClick={() => setCaseStudyProject(null)}
                className="absolute right-4 top-4 rounded-full p-1.5 text-slate-500 hover:bg-slate-100 hover:text-slate-700 dark:hover:bg-slate-700 dark:hover:text-slate-200">
                <X className="h-5 w-5" />
              </button>
              <h3 className="pr-10 text-xl font-semibold text-slate-900 dark:text-white">{caseStudyProject.title}</h3>
              <div className="mt-4 space-y-4 text-sm">
                <div>
                  <h4 className="font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Masalah</h4>
                  <p className="mt-1 text-slate-700 dark:text-slate-300">{caseStudyProject.caseStudy.problem}</p>
                </div>
                <div>
                  <h4 className="font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Pendekatan</h4>
                  <p className="mt-1 text-slate-700 dark:text-slate-300">{caseStudyProject.caseStudy.approach}</p>
                </div>
                <div>
                  <h4 className="font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Tools yang digunakan</h4>
                  <div className="mt-1 flex flex-wrap gap-2">
                    {caseStudyProject.caseStudy.toolsUsed.map((t) => (
                      <span key={t} className="rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-700 dark:bg-slate-700 dark:text-slate-300">{t}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Insights</h4>
                  <ul className="mt-1 list-inside list-disc space-y-1 text-slate-700 dark:text-slate-300">
                    {caseStudyProject.caseStudy.insights.map((i, k) => (<li key={k}>{i}</li>))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Hasil dan Impact</h4>
                  <p className="mt-1 text-slate-700 dark:text-slate-300">{caseStudyProject.caseStudy.results}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}