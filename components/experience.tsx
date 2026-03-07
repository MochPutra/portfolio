"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const items = [
  {
    title: "Admin ADS Marketplace",
    org: "Trustdigital",
    duration: "Nov 2025 - Jan 2026",
    type: "Internship",
    description: [
      "Manajemen Iklan Berbayar: Merencanakan, memantau, dan mengoptimalkan kampanye iklan di Shopee Ads, Tokopedia Ads, dan TikTok Ads untuk mencapai target ROAS yang telah ditentukan.",
      "Optimasi SEO Marketplace: Melakukan riset kata kunci serta mengoptimalkan judul dan deskripsi produk untuk meningkatkan traffic organik dan peringkat pencarian toko.",
      "Analisis Performa: Menyusun laporan performa harian dan mingguan yang mencakup metrik penting seperti CTR (Click-Through Rate), CPC (Cost Per Click), dan tingkat konversi penjualan untuk mendukung pengambilan keputusan berbasis data.",
      "Manajemen Promosi: Mengelola kalender promosi toko, termasuk flash sale, voucher toko, serta partisipasi dalam kampanye besar seperti 11.11 dan 12.12.",
      "Pengelolaan Operasional Toko: Menjaga kesehatan toko dengan memproses pesanan tepat waktu, memperbarui stok secara berkala, serta memberikan layanan pelanggan yang responsif.",
    ],
    focus: ["Data Analysis", "Search Engine Optimization", "E-commerce Communication", "Paid Advertising", "Performance Reporting", "Marketplace Management","Market Analysis","Campaign Management"],
    logo: "/images/experience/trust.jpg",
    color: "from-brand-blue to-blue-500",
    lightBg: "bg-blue-50 dark:bg-blue-900/20",
    lightText: "text-blue-700 dark:text-blue-300",
    dotColor: "from-brand-blue to-blue-500",
  },
  {
    title: "Teaching Assistant - Basic Programming",
    org: "University Muhammadiyah Sukabumi",
    duration: "Mar 2024 - Dec 2024",
    type: "Part-time",
    description: [
      "Memberikan dukungan akademik kepada 24 mahasiswa dengan menyederhanakan konsep pemrograman yang kompleks, seperti Algoritma dan Struktur Data.",
      "Memimpin sesi laboratorium mingguan serta latihan coding untuk membantu mahasiswa menerapkan konsep teori ke dalam praktik.",
      "Menilai tugas, kuis, dan ujian praktikum untuk 24 mahasiswa dengan tingkat ketelitian dan konsistensi yang tinggi.",
      "Berkolaborasi dengan dosen pengampu dalam menyusun materi pembelajaran dan soal latihan untuk kebutuhan perkuliahan selama satu semester.",
    ],
    focus: ["Python-Programming", "Logic Programming", "Object Oriented Programming", "Data Structures", "Algorithm Design","Public Speaking", "Mentoring","Educational Support","Teaching","Leadership"],
    logo: "/images/experience/ummi.png",
    color: "from-brand-cyan to-cyan-400",
    lightBg: "bg-cyan-50 dark:bg-cyan-900/20",
    lightText: "text-cyan-700 dark:text-cyan-300",
    dotColor: "from-brand-cyan to-cyan-400",
  },
  {
    title: "Cashier & Administrative Assistant",
    org: "Mister Penyet 2",
    duration: "Mar 2024 - Des 2024",
    type: "Full-Time",
    description: [
      "Melakukan rekonsiliasi kas harian (cash count) dan memastikan saldo petty cash selalu akurat.",
      "Mengelola transaksi pembayaran tunai, kartu kredit, serta pembayaran digital (QRIS/E-wallet) dengan tingkat ketelitian hingga 99,9%.",
      "Memberikan pelayanan kepada pelanggan secara ramah dan efisien untuk meningkatkan kepuasan pelanggan.",
    ],
    focus: ["Data Entry", "Microsoft Office", "Customer Service", "Cash Handling", "Financial Reporting", "Cash Handling"],
    logo: "/images/experience/mister.jpg",
    color: "from-violet-500 to-indigo-500",
    lightBg: "bg-violet-50 dark:bg-violet-900/20",
    lightText: "text-violet-700 dark:text-violet-300",
    dotColor: "from-violet-500 to-indigo-500",
  },
  {
    title: "Management Staff",
    org: "CV. Alam Printing",
    duration: "Jan 2023 - Mar 2023",
    type: "Internship",
    description: [
      "Berinteraksi langsung dengan pelanggan untuk memahami kebutuhan mereka, memberikan solusi, dan memastikan kepuasan pelanggan melalui produk berkualitas tinggi.",
      "Berkolaborasi dengan tim pemasaran untuk mengembangkan kampanye promosi melalui media sosial dan website perusahaan.",
      "Mengelola proyek cetak sablon dan percetakan khusus untuk perusahaan-perusahaan besar, mengoordinasikan jadwal, anggaran, dan persyaratan spesifik lainnya.",
    ],
    focus: ["Microsoft Office", "Data Entry", "Device Drivers", "Customer Service"],
    logo: "/images/experience/alam.jpg",
    color: "from-violet-500 to-indigo-500",
    lightBg: "bg-violet-50 dark:bg-violet-900/20",
    lightText: "text-violet-700 dark:text-violet-300",
    dotColor: "from-violet-500 to-indigo-500",
  },
];

const typeBadge: Record<string, string> = {
  "Full-time": "bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-300",
  "Part-time": "bg-yellow-50 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-300",
  "Internship": "bg-orange-50 text-orange-700 dark:bg-orange-900/20 dark:text-orange-300",
  "Freelance": "bg-pink-50 text-pink-700 dark:bg-pink-900/20 dark:text-pink-300",
};

export function Experience() {
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <section id="experience" className="section">
      <div className="mx-auto max-w-7xl">
        <p className="section-heading">Experience</p>
        <h2 className="section-title">Beberapa Pengalaman Kerja Saya</h2>
      </div>

      <div className="mt-10 mx-auto max-w-3xl">
        <div className="relative">
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
                  <motion.div
                    className={`absolute -left-9 top-5 h-3 w-3 rounded-full bg-gradient-to-tr ${item.dotColor} shadow-soft ring-2 ring-white dark:ring-slate-900`}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", bounce: 0.5, delay: idx * 0.1 }}
                  />

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
                      <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-xl border border-slate-100 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-700">
                        <Image
                          src={item.logo}
                          alt={item.org}
                          fill
                          className="object-contain p-1.5"
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          {item.duration && (
                            <span className={`inline-block rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${item.lightBg} ${item.lightText}`}>
                              {item.duration}
                            </span>
                          )}
                          {item.type && (
                            <span className={`inline-block rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${typeBadge[item.type] ?? ""}`}>
                              {item.type}
                            </span>
                          )}
                        </div>
                        <p className="mt-0.5 text-sm font-semibold text-slate-900 dark:text-white truncate">
                          {item.title}
                        </p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">{item.org}</p>
                      </div>

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
                            {Array.isArray(item.description) ? (
                              <ul className="space-y-1">
                                {item.description.map((point, i) => (
                                  <li key={i} className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                                    - {point}
                                  </li>
                                ))}
                              </ul>
                            ) : (
                              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                                {item.description}
                              </p>
                            )}
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