"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Instagram, MessageCircle, Send } from "lucide-react";

export function Contact() {
  const [sent, setSent] = useState(false);

  // Sesudah — ganti dengan ini
const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const form = e.currentTarget;

  const res = await fetch("https://formspree.io/f/mbdzrvja", {
    method: "POST",
    body: new FormData(form),
    headers: { Accept: "application/json" },
  });

  if (res.ok) {
    setSent(true);
    form.reset();
    setTimeout(() => setSent(false), 3000);
  }
};
  const emailHref = "https://mail.google.com/mail/?view=cm&to=putranurhadi123@gmail.com&su=Collaboration Opportunity&body=Halo Putra,";
  const waHref = "https://wa.me/6281573438175?text=Halo%20Putra%2C%20saya%20tertarik%20untuk%20berkolaborasi%20dengan%20kamu.%20Boleh%20kita%20diskusi%20lebih%20lanjut%3F";

  return (
    <section id="contact" className="section">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="grid gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]"
      >
        <div>
          <p className="section-heading">Contact</p>
          <h2 className="section-title">Let's talk.</h2>
          <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base">
            Jika kamu tertarik untuk berkolaborasi dalam sebuah proyek, sedang mencari junior data analyst, atau sekadar ingin berdiskusi tentang AI automation dan LLM, saya akan sangat senang mendengarnya.
          </p>
          <div className="mt-6 space-y-3 text-sm text-slate-600 dark:text-slate-400">
            <a
              href={emailHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-700 hover:text-brand-blue dark:text-slate-200 dark:hover:text-cyan-400"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-slate-50 dark:bg-slate-100 dark:text-slate-900">
                <Mail className="h-4 w-4" />
              </span>
              putranurhadi123@gmail.com
            </a>
            <div className="flex gap-3 pt-2">
              <a
                href="https://www.linkedin.com/in/putra-nurhadi/"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white/70 text-slate-700 shadow-sm hover:text-brand-blue dark:border-slate-600 dark:bg-slate-800/70 dark:text-slate-200 dark:hover:text-cyan-400"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://github.com/MochPutra"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white/70 text-slate-700 shadow-sm hover:text-slate-900 dark:border-slate-600 dark:bg-slate-800/70 dark:text-slate-200 dark:hover:text-white"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white/70 text-slate-700 shadow-sm hover:text-green-500 dark:border-slate-600 dark:bg-slate-800/70 dark:text-slate-200 dark:hover:text-green-400"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
              <a
                href="https://instagram.com/putranurhd" // ← ganti username
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white/70 text-slate-700 shadow-sm hover:text-pink-500 dark:border-slate-600 dark:bg-slate-800/70 dark:text-slate-200 dark:hover:text-pink-400"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>

            </div>
            </div>
          </div>
        <form
          onSubmit={handleSubmit}
          className="glass flex flex-col gap-4 rounded-3xl p-5 dark:bg-slate-800/60 dark:border-slate-700/50"
        >
          <div>
            <label
              htmlFor="name"
              className="text-xs font-medium text-slate-700 dark:text-slate-300"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              required
              className="mt-1 w-full rounded-2xl border border-slate-200 bg-white/70 px-3 py-2 text-sm text-slate-900 outline-none ring-0 transition focus:border-brand-blue focus:bg-white dark:border-slate-600 dark:bg-slate-700/50 dark:text-slate-100 dark:focus:border-cyan-500 dark:focus:bg-slate-700"
              placeholder="Nama kamu"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="text-xs font-medium text-slate-700 dark:text-slate-300"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="mt-1 w-full rounded-2xl border border-slate-200 bg-white/70 px-3 py-2 text-sm text-slate-900 outline-none ring-0 transition focus:border-brand-blue focus:bg-white dark:border-slate-600 dark:bg-slate-700/50 dark:text-slate-100 dark:focus:border-cyan-500 dark:focus:bg-slate-700"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="text-xs font-medium text-slate-700 dark:text-slate-300"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              className="mt-1 w-full resize-none rounded-2xl border border-slate-200 bg-white/70 px-3 py-2 text-sm text-slate-900 outline-none ring-0 transition focus:border-brand-blue focus:bg-white dark:border-slate-600 dark:bg-slate-700/50 dark:text-slate-100 dark:focus:border-cyan-500 dark:focus:bg-slate-700"
              placeholder="Tulis pesanmu di sini..."
            />
          </div>
          <button
            type="submit"
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-4 py-2.5 text-sm font-medium text-white shadow-soft transition hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200"
          >
            <Send className="h-4 w-4" />
            {sent ? "Message sent!" : "Send message"}
          </button>
          <p className="text-[11px] text-slate-500 dark:text-slate-400">
            *This form is powered by Formspree. No spam, just genuine messages will reach my inbox.
          </p>
        </form>
      </motion.div>
    </section>
  );
}

