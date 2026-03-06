"use client";

import { useEffect, useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/components/theme-provider";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#dashboard", label: "Dashboard" },
  { href: "#ai-assistant", label: "AI Assistant" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const offset =
        window.scrollY ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;
      setIsScrolled(offset > 10);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 h-20 min-h-20 transition-all ${
        isScrolled
          ? "scroll-shadow border-b border-white/40 bg-white/80 backdrop-blur-xl dark:border-slate-700/40 dark:bg-slate-900/80"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-full max-w-5xl items-center justify-between px-4 py-4 sm:px-6">
        <a
            href="#hero"
            className="flex flex-col leading-tight"
          >
            <span className="text-sm font-semibold tracking-[0.3em] uppercase text-slate-700 dark:text-slate-200">
              PUTRA
            </span>
            <span className="text-[10px] tracking-[0.4em] uppercase text-slate-500 dark:text-slate-400">
              AI/DATA
            </span>
          </a>
        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="hidden items-center gap-2 md:flex">
          <button
            onClick={toggleTheme}
            className="rounded-full p-2 text-slate-600 transition hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100"
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
        </div>
        <button
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white/60 text-slate-700 shadow-sm transition hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-800/60 dark:text-slate-200 dark:hover:bg-slate-700 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.18 }}
            className="md:hidden"
          >
            <div className="mx-4 mb-4 rounded-2xl bg-white/80 p-4 shadow-soft backdrop-blur-xl dark:bg-slate-800/90">
              <div className="flex flex-col gap-2">
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-700"
                  >
                    {link.label}
                  </a>
                ))}
                <button
                  onClick={() => {
                    toggleTheme();
                    setOpen(false);
                  }}
                  className="rounded-xl px-3 py-2 text-left text-sm text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-700"
                >
                  {theme === "dark" ? "Light mode" : "Dark mode"}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

