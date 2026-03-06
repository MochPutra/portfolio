"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  LineChart,
  Line,
  AreaChart,
  Area,
} from "recharts";

const ENGAGEMENT_DATA = [
  { name: "Jan", value: 72 },
  { name: "Feb", value: 85 },
  { name: "Mar", value: 78 },
  { name: "Apr", value: 92 },
  { name: "May", value: 88 },
  { name: "Jun", value: 95 },
];

const REVENUE_DATA = [
  { name: "Jan", value: 4200 },
  { name: "Feb", value: 5800 },
  { name: "Mar", value: 5100 },
  { name: "Apr", value: 7300 },
  { name: "May", value: 6900 },
  { name: "Jun", value: 8400 },
];

const CHURN_DATA = [
  { name: "Jan", value: 8.2 },
  { name: "Feb", value: 7.5 },
  { name: "Mar", value: 6.8 },
  { name: "Apr", value: 5.9 },
  { name: "May", value: 5.2 },
  { name: "Jun", value: 4.1 },
];

export function MiniDashboard() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="dashboard" className="section">
      <div className="mx-auto max-w-7xl">
        <p className="section-heading">Dashboard Demo</p>
        <h2 className="section-title">Sample analytics view</h2>
        <p className="mb-10 max-w-2xl text-sm text-slate-600 dark:text-slate-400">
          Sebuah grafik interaktif sederhana untuk menunjukkan bagaimana saya menyajikan data: sumbu yang jelas, tooltip yang informatif, serta tampilan dalam card yang bersih dan rapi. Contoh ini menggunakan Recharts dan dapat merepresentasikan engagement, conversion, atau KPI lainnya dari waktu ke waktu.

        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">

        {/* Chart 1 — Engagement Bar Chart */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0 }}
          className="overflow-hidden rounded-3xl bg-white/80 p-5 shadow-soft backdrop-blur-xl dark:bg-slate-800/80"
        >
          <div className="mb-1 flex items-center justify-between">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Engagement
            </p>
            <span className="rounded-full bg-blue-50 px-2.5 py-0.5 text-[10px] font-medium text-blue-600 dark:bg-blue-900/30 dark:text-blue-300">
              Last 6 months
            </span>
          </div>
          <p className="mb-4 text-2xl font-semibold text-slate-900 dark:text-white">
            95% <span className="text-sm font-normal text-emerald-500">↑ 12%</span>
          </p>
          <div className="h-[160px] w-full">
            {mounted && (
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={ENGAGEMENT_DATA} margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(148,163,184,0.2)" vertical={false} />
                  <XAxis dataKey="name" tick={{ fontSize: 10, fill: "currentColor" }} axisLine={false} tickLine={false} className="text-slate-400" />
                  <YAxis tick={{ fontSize: 10, fill: "currentColor" }} axisLine={false} tickLine={false} domain={[0, 100]} className="text-slate-400" />
                  <Tooltip
                    contentStyle={{ borderRadius: "10px", border: "1px solid rgba(148,163,184,0.3)", backgroundColor: "rgba(255,255,255,0.95)", fontSize: 12 }}
                    formatter={(value: unknown) => [`${value}%`, "Engagement"]}

                  />
                  <Bar dataKey="value" fill="#2563eb" radius={[5, 5, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            )}
          </div>
          <p className="mt-3 text-[11px] text-slate-400 dark:text-slate-500">
            <strong className="text-slate-600 dark:text-slate-300">Insight:</strong> Tren naik stabil — Jun mencapai puncak tertinggi.
          </p>
        </motion.div>

        {/* Chart 2 — Revenue Line Chart */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="overflow-hidden rounded-3xl bg-white/80 p-5 shadow-soft backdrop-blur-xl dark:bg-slate-800/80"
        >
          <div className="mb-1 flex items-center justify-between">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Revenue
            </p>
            <span className="rounded-full bg-cyan-50 px-2.5 py-0.5 text-[10px] font-medium text-cyan-600 dark:bg-cyan-900/30 dark:text-cyan-300">
              Last 6 months
            </span>
          </div>
          <p className="mb-4 text-2xl font-semibold text-slate-900 dark:text-white">
            $8.4K <span className="text-sm font-normal text-emerald-500">↑ 21%</span>
          </p>
          <div className="h-[160px] w-full">
            {mounted && (
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={REVENUE_DATA} margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(148,163,184,0.2)" vertical={false} />
                  <XAxis dataKey="name" tick={{ fontSize: 10, fill: "currentColor" }} axisLine={false} tickLine={false} className="text-slate-400" />
                  <YAxis tick={{ fontSize: 10, fill: "currentColor" }} axisLine={false} tickLine={false} className="text-slate-400" />
                  <Tooltip
                    contentStyle={{ borderRadius: "10px", border: "1px solid rgba(148,163,184,0.3)", backgroundColor: "rgba(255,255,255,0.95)", fontSize: 12 }}
                    formatter={(value: unknown) => [`$${Number(value).toLocaleString()}`, "Revenue"]}

                  />
                  <Line dataKey="value" stroke="#06b6d4" strokeWidth={2.5} dot={{ r: 3, fill: "#06b6d4" }} activeDot={{ r: 5 }} />
                </LineChart>
              </ResponsiveContainer>
            )}
          </div>
          <p className="mt-3 text-[11px] text-slate-400 dark:text-slate-500">
            <strong className="text-slate-600 dark:text-slate-300">Insight:</strong> Revenue tumbuh 2x lipat dari Jan ke Jun.
          </p>
        </motion.div>

        {/* Chart 3 — Churn Area Chart */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.16 }}
          className="overflow-hidden rounded-3xl bg-white/80 p-5 shadow-soft backdrop-blur-xl dark:bg-slate-800/80"
        >
          <div className="mb-1 flex items-center justify-between">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Churn Rate
            </p>
            <span className="rounded-full bg-rose-50 px-2.5 py-0.5 text-[10px] font-medium text-rose-600 dark:bg-rose-900/30 dark:text-rose-300">
              Last 6 months
            </span>
          </div>
          <p className="mb-4 text-2xl font-semibold text-slate-900 dark:text-white">
            4.1% <span className="text-sm font-normal text-emerald-500">↓ 50%</span>
          </p>
          <div className="h-[160px] w-full">
            {mounted && (
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={CHURN_DATA} margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="churnGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#f43f5e" stopOpacity={0.2} />
                      <stop offset="95%" stopColor="#f43f5e" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(148,163,184,0.2)" vertical={false} />
                  <XAxis dataKey="name" tick={{ fontSize: 10, fill: "currentColor" }} axisLine={false} tickLine={false} className="text-slate-400" />
                  <YAxis tick={{ fontSize: 10, fill: "currentColor" }} axisLine={false} tickLine={false} domain={[0, 10]} className="text-slate-400" />
                  <Tooltip
                    contentStyle={{ borderRadius: "10px", border: "1px solid rgba(148,163,184,0.3)", backgroundColor: "rgba(255,255,255,0.95)", fontSize: 12 }}
                    formatter={(value: unknown) => [`${value}%`, "Churn Rate"]}

                  />
                  <Area dataKey="value" stroke="#f43f5e" strokeWidth={2.5} fill="url(#churnGradient)" dot={{ r: 3, fill: "#f43f5e" }} activeDot={{ r: 5 }} />
                </AreaChart>
              </ResponsiveContainer>
            )}
          </div>
          <p className="mt-3 text-[11px] text-slate-400 dark:text-slate-500">
            <strong className="text-slate-600 dark:text-slate-300">Insight:</strong> Churn berhasil ditekan dari 8.2% menjadi 4.1%.
          </p>
        </motion.div>

      </div>
    </section>
  );
}