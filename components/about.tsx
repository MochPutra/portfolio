"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

const tabs = [
  {
    id: "story",
    label: "Story",
    content: (
      <>
        <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:text-base">
          Saya adalah mahasiswa Teknik Informatika dengan ketertarikan besar di dunia data analytics, otomasi AI, dan Large Language Models (LLM). Saya suka mengubah data mentah menjadi narasi yang terstruktur, membangun dashboard yang menonjolkan poin-poin penting, serta merancang alur kerja AI untuk membantu orang menghemat waktu.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:text-base">
          Akhir-akhir ini, saya sedang fokus menggabungkan Python, SQL, dan alat analisis modern dengan LLM untuk mengotomatiskan pelaporan, meringkas dokumen yang rumit, hingga membangun asisten cerdas untuk tugas-tugas yang repetitif.
        </p>
      </>
    ),
  },
  {
    id: "focus",
    label: "Focus",
    content: (
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {[
          { icon: "📊", title: "Data Analytics", desc: "Memvisualisasikan data untuk memahami tren dan pola" },
          { icon: "🤖", title: "AI Automation", desc: "Membangun alur kerja cerdas yang menghemat waktu" },
          { icon: "🧠", title: "LLM Integration", desc: "Menerapkan model bahasa untuk menyelesaikan masalah nyata" },
          { icon: "📈", title: "Dashboard Design", desc: "Membuat visualisasi yang menarik melalui data" },
        ].map((item) => (
          <motion.div
            key={item.title}
            whileHover={{ scale: 1.03, y: -2 }}
            transition={{ duration: 0.2 }}
            className="rounded-xl border border-slate-100 bg-slate-50/80 p-3 dark:border-slate-700 dark:bg-slate-700/40"
          >
            <span className="text-xl">{item.icon}</span>
            <p className="mt-1 text-sm font-semibold text-slate-800 dark:text-white">{item.title}</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    ),
  },
  {
    id: "values",
    label: "Values",
    content: (
      <div className="space-y-3">
        {[
          { label: "Public Speaking", value: 95, color: "from-blue-500 to-cyan-400" },
          { label: "Detail-oriented", value: 88, color: "from-blue-600 to-blue-400" },
          { label: "Adaptable", value: 92, color: "from-cyan-500 to-blue-500" },
          { label: "Analytical Thinking", value: 85, color: "from-blue-400 to-cyan-300" },
        ].map((item) => (
          <div key={item.label}>
            <div className="mb-1 flex justify-between text-xs">
              <span className="font-medium text-slate-700 dark:text-slate-300">{item.label}</span>
              <span className="text-slate-400">{item.value}%</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-700">
              <motion.div
                className={`h-full rounded-full bg-gradient-to-r ${item.color}`}
                initial={{ width: 0 }}
                whileInView={{ width: `${item.value}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
              />
            </div>
          </div>
        ))}
      </div>
    ),
  },
];

export function About() {
  const [activeTab, setActiveTab] = useState("story");
  const [isHovered, setIsHovered] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const photoY = useTransform(scrollYProgress, [0, 1], [-30, 30]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 0]);

  const activeContent = tabs.find((t) => t.id === activeTab)?.content;

  return (
    <section id="about" className="section" ref={sectionRef}>
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="rounded-3xl bg-white/70 p-6 shadow-soft backdrop-blur-xl dark:bg-slate-800/70 md:p-8 overflow-hidden"
      >
        <div className="grid gap-8 md:grid-cols-[1.4fr,1fr]">

          {/* FOTO — letakkan duluan di JSX agar tampil di atas saat mobile */}
          <motion.div
            style={{ y: photoY }}
            className="flex items-center justify-center pt-4 md:col-start-2 md:row-start-1 md:justify-end md:pt-0"

          >
            <motion.div
              className="group relative cursor-pointer"
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Glow effect */}
              <motion.div
                className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-blue-500/30 to-cyan-400/30 blur-xl"
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />

              {/* Decorative border */}
              <motion.div
                className="absolute -inset-[2px] rounded-2xl bg-gradient-to-tr from-blue-500 to-cyan-400"
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />

              {/* Photo */}
              <div className="relative h-72 w-56 overflow-hidden rounded-2xl shadow-soft">
                <Image
                  src="/images/IMG_6657.jpg"
                  alt="Foto Putra"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Overlay on hover */}
                <motion.div
                  className="absolute inset-0 flex items-end bg-gradient-to-t from-blue-900/60 to-transparent p-4"
                  animate={{ opacity: isHovered ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div>
                    <p className="text-sm font-bold text-white">Moch Putra</p>
                    <p className="text-xs text-blue-200">AI / Data Enthusiast</p>
                  </div>
                </motion.div>
              </div>

              {/* Floating badge removed per request */}
            </motion.div>
          </motion.div>

          {/* TEKS — letakkan setelah foto di JSX */}
          <motion.div
            style={{ y: textY }}
            className="md:col-start-1 md:row-start-1"
          >
            <p className="section-heading">About</p>
            <h2 className="section-title">Get To Know Me</h2>

            {/* Tabs */}
            <div className="mb-5 flex gap-1 rounded-xl bg-slate-100/80 p-1 dark:bg-slate-700/50">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className="relative flex-1 rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors duration-200"
                >
                  {activeTab === tab.id && (
                    <motion.span
                      layoutId="tab-indicator"
                      className="absolute inset-0 rounded-lg bg-white shadow-sm dark:bg-slate-600"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                    />
                  )}
                  <span
                    className={`relative z-10 transition-colors duration-200 ${
                      activeTab === tab.id
                        ? "text-blue-600 dark:text-blue-400"
                        : "text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
                    }`}
                  >
                    {tab.label}
                  </span>
                </button>
              ))}
            </div>

            {/* Tab content */}
            <div className="min-h-[120px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                >
                  {activeContent}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}