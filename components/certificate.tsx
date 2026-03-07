"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Award } from "lucide-react";

type Certificate = {
  title: string;
  issuer: string;
  date: string;
  credential?: string;
  image: string;
  logo: string;
  tags: string[];
  color: string;
  lightBg: string;
  lightText: string;
};

const certificates: Certificate[] = [
  {
    title: "SQL Basic",
    issuer: "HackerRank",
    date: "2025",
    credential: "https://www.hackerrank.com/certificates/f35e3e6aac3c", // ganti dengan link credential asli
    image: "/images/certificate/sertifikat1.png", // ganti dengan screenshot sertifikat
    logo: "/images/certificate/logo/hackerrank.png", // ganti dengan logo issuer
    tags: ["Data Analysis", "SQL", "Database", "Query Optimization"],
    color: "from-blue-500 to-cyan-400",
    lightBg: "bg-blue-50 dark:bg-blue-900/20",
    lightText: "text-blue-700 dark:text-blue-300",
  },
  // {
  //   title: "Python for Data Science",
  //   issuer: "IBM / Coursera",
  //   date: "2024",
  //   credential: "https://coursera.org",
  //   image: "/images/certificates/python-data-science.png",
  //   logo: "/images/certificates/logos/ibm.png",
  //   tags: ["Python", "Pandas", "NumPy", "ML"],
  //   color: "from-violet-500 to-indigo-400",
  //   lightBg: "bg-violet-50 dark:bg-violet-900/20",
  //   lightText: "text-violet-700 dark:text-violet-300",
  // },
  // {
  //   title: "Machine Learning Specialization",
  //   issuer: "DeepLearning.AI",
  //   date: "2025",
  //   credential: "https://coursera.org",
  //   image: "/images/certificates/ml-specialization.png",
  //   logo: "/images/certificates/logos/deeplearning.png",
  //   tags: ["ML", "Neural Networks", "Scikit-learn"],
  //   color: "from-brand-cyan to-teal-400",
  //   lightBg: "bg-cyan-50 dark:bg-cyan-900/20",
  //   lightText: "text-cyan-700 dark:text-cyan-300",
  // },
  // {
  //   title: "SQL for Data Analysis",
  //   issuer: "Udacity",
  //   date: "2023",
  //   credential: "https://udacity.com",
  //   image: "/images/certificates/sql-data-analysis.png",
  //   logo: "/images/certificates/logos/udacity.png",
  //   tags: ["SQL", "PostgreSQL", "Data Wrangling"],
  //   color: "from-emerald-500 to-green-400",
  //   lightBg: "bg-emerald-50 dark:bg-emerald-900/20",
  //   lightText: "text-emerald-700 dark:text-emerald-300",
  // },
];

export function Certificates() {
  const [selected, setSelected] = useState<Certificate | null>(null);

  return (
    <section id="certificates" className="section">
      <div className="mx-auto max-w-7xl">
        <p className="section-heading">Certificates</p>
        <h2 className="section-title">Sertifikasi yang telah saya peroleh.</h2>
        <p className="mb-10 max-w-2xl text-sm text-slate-600 dark:text-slate-400">
          Beberapa sertifikasi yang telah saya peroleh untuk memperdalam keahlian di bidang data, AI, dan analytics.
        </p>
      </div>

      {/* Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {certificates.map((cert, idx) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: idx * 0.07, ease: "easeOut" }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            onClick={() => setSelected(cert)}
            className="group cursor-pointer overflow-hidden rounded-2xl border border-slate-200/60 bg-white/80 shadow-soft backdrop-blur-xl transition-shadow hover:shadow-xl dark:border-slate-700/60 dark:bg-slate-800/80"
          >
            {/* Certificate preview image */}
            <div className={`relative h-36 overflow-hidden bg-gradient-to-tr ${cert.color}`}>
              <Image
                src={cert.image}
                alt={cert.title}
                fill
                className="object-cover opacity-90 transition-transform duration-300 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

              {/* Award icon top right */}
              <div className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                <Award className="h-4 w-4 text-white" />
              </div>

              {/* Year badge */}
              <div className="absolute bottom-3 left-3">
                <span className="rounded-full bg-white/20 px-2.5 py-0.5 text-[10px] font-semibold text-white backdrop-blur-sm">
                  {cert.date}
                </span>
              </div>
            </div>

            {/* Card body */}
            <div className="p-4">
              {/* Issuer logo + name */}
              <div className="mb-2 flex items-center gap-2">
                <div className="relative h-5 w-5 overflow-hidden rounded-sm">
                  <Image src={cert.logo} alt={cert.issuer} fill className="object-contain" />
                </div>
                <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">{cert.issuer}</span>
              </div>

              <h3 className="text-sm font-semibold text-slate-900 dark:text-white leading-snug">
                {cert.title}
              </h3>

              {/* Tags */}
              <div className="mt-3 flex flex-wrap gap-1.5">
                {cert.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${cert.lightBg} ${cert.lightText}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* View hint */}
              <p className="mt-3 text-[10px] font-medium text-slate-400 group-hover:text-brand-blue dark:group-hover:text-brand-cyan transition-colors">
                Klik untuk lihat sertifikat →
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/70 p-4 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 24 }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
              className="relative w-full max-w-2xl overflow-hidden rounded-3xl bg-white shadow-2xl dark:bg-slate-800"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setSelected(null)}
                className="absolute right-4 top-4 z-10 rounded-full bg-white/80 p-1.5 text-slate-600 shadow-sm backdrop-blur hover:bg-white dark:bg-slate-700/80 dark:text-slate-300 dark:hover:bg-slate-700"
              >
                <X className="h-4 w-4" />
              </button>

              {/* Certificate image full */}
              <div className={`relative h-64 w-full bg-gradient-to-tr ${selected.color} sm:h-72`}>
                <Image
                  src={selected.image}
                  alt={selected.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Info */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-1">
                  <div className="relative h-5 w-5 overflow-hidden rounded-sm">
                    <Image src={selected.logo} alt={selected.issuer} fill className="object-contain" />
                  </div>
                  <span className="text-xs font-medium text-slate-500 dark:text-slate-400">{selected.issuer} · {selected.date}</span>
                </div>

                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{selected.title}</h3>

                <div className="mt-3 flex flex-wrap gap-2">
                  {selected.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`rounded-full px-3 py-1 text-xs font-medium ${selected.lightBg} ${selected.lightText}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {selected.credential && (
                  <a
                    href={selected.credential}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
                  >
                    Lihat Credential
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}