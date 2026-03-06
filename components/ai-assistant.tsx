"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Bot, User } from "lucide-react";

type Message = {
  id: string;
  role: "user" | "assistant";
  text: string;
};

const PREDEFINED_QA: { keywords: string[]; answer: string }[] = [
  {
    keywords: ["siapa", "who are you", "about", "tentang", "perkenalan", "introduce", "nama", "name"],
    answer:
      "Halo! Saya **Putra**, mahasiswa **Teknik Informatika** di Universitas Muhammadiyah Sukabumi (UMMI), angkatan 2024. Saya berasal dari **Sukabumi, Jawa Barat**. Passion saya ada di bidang **data analytics, AI automation, dan Large Language Models**.",
  },
  {
    keywords: ["umur", "age", "lahir", "born", "tahun lahir", "berapa umur"],
    answer:
      "Saya lahir pada tahun **2005**, jadi sekarang berumur **19 tahun**. Saya mulai kuliah di 2024 dan saat ini masih di semester awal.",
  },
  {
    keywords: ["asal", "dari mana", "domisili", "kota", "where are you from", "location", "tinggal"],
    answer:
      "Saya berasal dan tinggal di **Sukabumi, Jawa Barat, Indonesia**. Kota yang tenang tapi semangat belajarnya tetap membara! 🔥",
  },
  {
    keywords: ["kuliah", "pendidikan", "education", "universitas", "kampus", "university", "jurusan", "prodi", "studi"],
    answer:
      "Saya sedang menempuh pendidikan **S1 Teknik Informatika** di **Universitas Muhammadiyah Sukabumi (UMMI)**, angkatan **2024**. Fokus studi saya meliputi algoritma, struktur data, basis data, dan machine learning.",
  },
  {
    keywords: ["skill", "skills", "kemampuan", "bisa apa", "keahlian", "expertise", "what can you do"],
    answer:
      "Skill saya terbagi dalam 3 kategori:\n\n**Data:** Python (80%), SQL (75%), Excel (85%)\n**AI & ML:** Pandas/NumPy (80%), Scikit-learn (70%), LLM Integration (65%)\n**Tools:** Power BI (70%), Tableau (65%), Git/GitHub (75%)\n\nSaya fokus pada mengubah data mentah menjadi insight yang actionable.",
  },
  {
    keywords: ["python", "sql", "excel", "pandas", "numpy", "scikit", "tableau", "power bi", "git"],
    answer:
      "Berikut detail tools yang saya gunakan:\n\n🐍 **Python** — scripting, data cleaning, ML modeling\n🗄️ **SQL** — query, aggregasi, join kompleks\n📊 **Excel** — pivot, VLOOKUP, dashboard sederhana\n🐼 **Pandas/NumPy** — manipulasi dan analisis data\n🤖 **Scikit-learn** — klasifikasi, regresi, clustering\n📈 **Tableau & Power BI** — visualisasi interaktif\n🔧 **Git/GitHub** — version control & kolaborasi",
  },
  {
    keywords: ["project", "projects", "proyek", "portfolio", "karya", "built", "what have you"],
    answer:
      "Beberapa project yang telah saya kerjakan:\n\n📊 **Dashboard Matriks Internal** — Dashboard Tableau dengan dbt untuk metrik produk tim engineering\n🤖 **Support Ticket LLM Triage** — Pipeline klasifikasi tiket support dengan LLM\n📈 **Sales Forecasting** — Eksperimen ML untuk prediksi penjualan\n🔍 **Customer Churn Analytics** — Analisis kohort & prediksi churn dengan Power BI\n\nCek section Projects untuk case study lengkap!",
  },
  {
    keywords: ["career", "karir", "goal", "goals", "tujuan", "cita-cita", "impian", "dream", "aspiring", "rencana"],
    answer:
      "**Jangka pendek:** Menjadi **Junior Data Analyst** atau **Analytics Engineer** — bekerja langsung dengan tim produk dan data untuk menciptakan solusi nyata.\n\n**Jangka panjang:** Membangun ekosistem data yang menggabungkan kekuatan AI dan analitik untuk menghadirkan solusi yang intuitif dan berdampak besar bagi pengguna.",
  },
  {
    keywords: ["llm", "ai", "artificial intelligence", "machine learning", "ml", "automasi", "automation", "gpt", "language model"],
    answer:
      "Saya sangat tertarik dengan **Large Language Models (LLMs)**! Saya fokus pada:\n\n🔗 **LLM Integration** — menghubungkan LLM ke pipeline data\n⚙️ **AI Automation** — otomatisasi laporan dan dokumen\n🧠 **Intelligent Assistants** — membangun chatbot berbasis konteks\n📄 **Document Summarization** — meringkas dokumen kompleks secara otomatis",
  },
  {
    keywords: ["hobi", "hobby", "interest", "minat", "suka", "likes", "free time", "waktu luang"],
    answer:
      "Di luar coding, saya suka:\n\n📚 Belajar hal baru seputar AI dan data science\n🎮 Gaming sesekali untuk refreshing\n📊 Eksplorasi dataset publik yang menarik\n🛠️ Prototyping ide-ide AI yang unik\n\nBagi saya, belajar adalah hobi itu sendiri!",
  },
  {
    keywords: ["cara","menghubungi","kolaborasi","berikan","kontak", "contact", "hubungi", "reach", "email", "hire", "kerja sama", "collaborate"],
    answer:
      "Saya terbuka untuk peluang magang, kolaborasi project, atau sekadar ngobrol seputar data & AI!\n\nSilakan hubungi saya melalui:\n📧 **Email** — tersedia di section Contact\n💼 **LinkedIn** — tersedia di section Contact\n🐙 **GitHub** — cek project saya di sana\n\nSaya selalu senang berkenalan dengan orang-orang yang passionate di bidang yang sama!",
  },
  {
    keywords: ["pengalaman", "experience", "internship", "magang", "kerja", "work"],
    answer:
      "Saya masih mahasiswa semester awal (2024), namun saya aktif membangun pengalaman melalui:\n\n🏗️ **Project mandiri** — membangun portfolio data & AI secara independen\n📖 **Self-learning** — kursus online, dokumentasi, dan eksplorasi dataset\n🤝 **Komunitas** — aktif belajar dari komunitas data science\n\nSaya sangat antusias untuk mendapatkan pengalaman nyata melalui magang atau project kolaborasi!",
  },
  {
    keywords: ["motivasi", "motivation", "kenapa", "why data", "why ai", "alasan", "reason"],
    answer:
      "Saya tertarik dengan data & AI karena **data adalah bahasa universal**. Di balik setiap angka ada cerita, dan saya ingin bisa membaca dan menceritakan cerita itu.\n\nLLMs membuka peluang baru yang luar biasa — menggabungkan kemampuan analitik dengan kecerdasan bahasa untuk menciptakan solusi yang benar-benar berdampak bagi orang banyak.",
  },
];

function getReply(query: string): string {
  const lower = query.toLowerCase().trim();
  for (const qa of PREDEFINED_QA) {
    if (qa.keywords.some((k) => lower.includes(k))) {
      return qa.answer;
    }
  }
  return "Saya bisa menjawab pertanyaan tentang **siapa saya**, **skill**, **project**, **pendidikan**, **asal**, **karir**, **hobi**, atau **cara menghubungi saya**.\n\nCoba tanya: \"Dari mana asalmu?\", \"Apa skillmu?\", atau \"Apa project yang pernah kamu buat?\"";
}

export function AiAssistant() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "0",
      role: "assistant",
      text: "Halo! Saya AI assistant Putra. Tanyakan apa saja tentang saya — skill, project, pendidikan, karir, atau hal lainnya! 👋",
    },
  ]);
  const [input, setInput] = useState("");
  const endRef = useRef<HTMLDivElement>(null);

  const send = () => {
    const trimmed = input.trim();
    if (!trimmed) return;
    const userMsg: Message = {
      id: Date.now().toString(),
      role: "user",
      text: trimmed,
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setTimeout(() => {
      const reply = getReply(trimmed);
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          text: reply,
        },
      ]);
      endRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 600);
  };

  return (
    <section id="ai-assistant" className="section">
      <div className="mx-auto max-w-7xl">
        <p className="section-heading">AI Assistant</p>
        <h2 className="section-title">Tanyakan AI Tentang Saya</h2>
        <p className="mb-6 max-w-2xl text-sm text-slate-600 dark:text-slate-400">
          Bot tanya jawab sederhana dengan jawaban yang sudah disiapkan tentang keterampilan, proyek, dan tujuan karier saya.  Coba tanyakan: &quot;Apa saja skill kamu?&quot; atau &quot;Proyek apa yang pernah kamu buat?&quot;
        </p>
      </div>

      {/* Suggestion chips */}
      <div className="mx-auto mb-4 max-w-2xl flex flex-wrap gap-2">
        {["Dari mana asalmu?", "Apa skillmu?", "Ceritakan projectmu", "Apa tujuan karirmu?", "Cara menghubungimu?"].map((q) => (
          <button
            key={q}
            onClick={() => { setInput(q); }}
            className="rounded-full border border-slate-200 bg-white/70 px-3 py-1.5 text-xs font-medium text-slate-600 backdrop-blur transition hover:border-brand-blue hover:text-brand-blue dark:border-slate-600 dark:bg-slate-800/70 dark:text-slate-400 dark:hover:border-cyan-400 dark:hover:text-cyan-400"
          >
            {q}
          </button>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        className="mx-auto max-w-2xl overflow-hidden rounded-3xl bg-white/80 shadow-soft backdrop-blur-xl dark:bg-slate-800/80 dark:shadow-slate-900/20"
      >
        <div className="flex h-[420px] flex-col border-b border-slate-200 dark:border-slate-700">
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            <AnimatePresence initial={false}>
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
                >
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                      msg.role === "assistant"
                        ? "bg-gradient-to-br from-brand-blue to-brand-cyan text-white"
                        : "bg-slate-200 text-slate-700 dark:bg-slate-600 dark:text-slate-200"
                    }`}
                  >
                    {msg.role === "assistant" ? <Bot className="h-4 w-4" /> : <User className="h-4 w-4" />}
                  </span>
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm ${
                      msg.role === "assistant"
                        ? "bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-200"
                        : "bg-slate-900 text-white dark:bg-slate-600"
                    }`}
                  >
                    <span className="whitespace-pre-wrap">
                      {msg.text.split("**").map((part, i) =>
                        i % 2 === 1 ? <strong key={i}>{part}</strong> : part
                      )}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            <div ref={endRef} />
          </div>
          <div className="flex gap-2 border-t border-slate-200 p-3 dark:border-slate-700">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              placeholder="Tanya sesuatu tentang saya..."
              className="flex-1 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm outline-none transition focus:border-brand-blue focus:bg-white dark:border-slate-600 dark:bg-slate-700/50 dark:focus:border-cyan-500 dark:focus:bg-slate-700"
            />
            <button
              onClick={send}
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white transition hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200"
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}