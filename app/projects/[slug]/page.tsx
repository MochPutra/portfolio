import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { getProjectBySlug, projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-10 sm:px-10 sm:pt-14">

        {/* Back button */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-sm font-medium text-slate-700 backdrop-blur-md transition hover:border-brand-blue hover:text-brand-blue dark:border-slate-700 dark:bg-slate-800/70 dark:text-slate-300 dark:hover:text-brand-cyan"
        >
          <ArrowLeft className="h-4 w-4" />
          Kembali
        </Link>

        {/* Tags */}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-slate-200 bg-slate-100 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h1 className="mt-4 text-3xl font-semibold text-slate-900 dark:text-white sm:text-4xl">
          {project.title}
        </h1>

        {/* Image — tidak full, ada rounded dan shadow */}
        {project.image && (
          <div className="mt-8 relative h-[280px] w-full overflow-hidden rounded-2xl shadow-soft sm:h-[360px]">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="mx-auto max-w-3xl px-6 py-12 sm:px-10">

        {/* Description + links */}
        <div className="mb-10">
          <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300">
            {project.description}
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 dark:bg-slate-700 dark:text-slate-300"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {project.demo && project.demo !== "#" && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
              >
                Live Demo <ExternalLink className="h-3.5 w-3.5" />
              </a>
            )}
            {project.github && project.github !== "#" && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-800 transition hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
            )}
          </div>
        </div>

        <div className="border-t border-slate-200 dark:border-slate-700" />

        {/* Case study */}
        <div className="mt-10 space-y-10">
          <div>
            <h2 className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
              Masalah
            </h2>
            <p className="text-base leading-relaxed text-slate-700 dark:text-slate-300">
              {project.caseStudy.problem}
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
              Pendekatan
            </h2>
            <p className="text-base leading-relaxed text-slate-700 dark:text-slate-300">
              {project.caseStudy.approach}
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
              Tools yang Digunakan
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.caseStudy.toolsUsed.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h2 className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
              Insights
            </h2>
            <ul className="space-y-3">
              {project.caseStudy.insights.map((insight, i) => (
                <li key={i} className="flex items-start gap-3 text-base text-slate-700 dark:text-slate-300">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-blue" />
                  {insight}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl bg-gradient-to-tr from-brand-blue/5 to-brand-cyan/5 p-6 dark:bg-slate-800/60 dark:from-slate-800/60 dark:to-slate-800/60">
            <h2 className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
              Hasil &amp; Impact
            </h2>
            <p className="text-base leading-relaxed text-slate-700 dark:text-slate-300">
              {project.caseStudy.results}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}