"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="section">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="rounded-3xl bg-white/70 p-6 shadow-soft backdrop-blur-xl dark:bg-slate-800/70"
      >
        {/* Top: Photo + About Text */}
        <div className="grid gap-8 md:grid-cols-[1.3fr,1fr]">
          <div>
            <p className="section-heading">Tentang Saya</p>
            <h2 className="section-title">A student obsessed with data & AI.</h2>
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:text-base">
              Saya mahasiswa Teknik Informatika dengan ketertarikan besar di dunia data analytics, otomasi AI, dan Large Language Models (LLM). Saya suka mengubah data mentah menjadi narasi yang terstruktur, membangun dashboard yang menonjolkan poin-poin penting, serta merancang alur kerja AI untuk membantu orang menghemat waktu.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:text-base">
              Akhir-akhir ini, saya sedang fokus menggabungkan Python, SQL, dan alat analisis modern dengan LLM untuk mengotomatiskan pelaporan, meringkas dokumen yang rumit, hingga membangun asisten cerdas untuk tugas-tugas yang repetitif.
            </p>
          </div>

          {/* Photo */}
          <div className="flex items-start justify-center md:justify-end">
            <div className="relative h-64 w-52 overflow-hidden rounded-2xl shadow-soft">
              <Image
                src="/images/IMG_6657.jpg"
                alt="Foto Putra"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Bottom: Education & Career Goals */}
        <div className="mt-6 grid gap-4 text-sm text-slate-600 dark:text-slate-400 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-100 bg-slate-50/60 p-4 dark:border-slate-700 dark:bg-slate-700/40">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
              Edukasi
            </p>
            <p className="mt-2 font-medium text-slate-900 dark:text-white">
              S1 Universitas Muhammadiyah Sukabumi, 
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Teknik Informatika (2024 - Sekarang)
            </p>
          </div>
          <div className="rounded-2xl border border-slate-100 bg-slate-50/60 p-4 dark:border-slate-700 dark:bg-slate-700/40">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
              Tujuan Karir
            </p>
            <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
              Jangka Pendek: Menjadi Junior Data Analyst atau Analytics Engineer yang bekerja langsung dengan tim produk dan data untuk menciptakan solusi nyata.
            </p>
            <p className="mt-1 text-sm text-slate-700 dark:text-slate-300">
              Jangka Panjang: Membangun ekosistem data yang menggabungkan kekuatan AI dan analitik untuk menghadirkan solusi yang intuitif dan berdampak besar bagi pengguna
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}