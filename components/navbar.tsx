"use client";

import { useEffect, useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/components/theme-provider";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#ai-assistant", label: "AI Assistant" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY || document.documentElement.scrollTop || 0;
      setIsScrolled(offset > 10);

      const sections = links.map((l) => document.querySelector(l.href));
      let current = "";
      sections.forEach((section) => {
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = `#${section.id}`;
          }
        }
      });
      setActiveLink(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Floating Pill Navbar */}
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-4 z-50 hidden md:flex justify-center px-4"
      >
        <div
          className={`flex items-center gap-1 rounded-full px-3 py-2 transition-all duration-500 ${
            isScrolled
              ? "bg-white/85 backdrop-blur-xl shadow-[0_8px_32px_rgba(37,99,235,0.15),0_0_0_1px_rgba(37,99,235,0.12)] dark:bg-slate-900/85 dark:shadow-[0_8px_32px_rgba(56,189,248,0.12),0_0_0_1px_rgba(56,189,248,0.1)]"
              : "bg-white/70 backdrop-blur-md shadow-[0_4px_24px_rgba(15,23,42,0.08),0_0_0_1px_rgba(148,163,184,0.2)] dark:bg-slate-900/70 dark:shadow-[0_4px_24px_rgba(0,0,0,0.2),0_0_0_1px_rgba(148,163,184,0.1)]"
          }`}
        >
          {/* Logo */}
          <a
            href="#hero"
            className="mr-2 flex flex-col leading-tight px-3 py-1 rounded-full hover:bg-slate-100/80 dark:hover:bg-slate-800/80 transition-colors"
          >
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-slate-800 dark:text-slate-100">
              PUTRA
            </span>
            <span className="text-[9px] tracking-[0.35em] uppercase text-slate-400 dark:text-slate-500">
              AI/DATA
            </span>
          </a>

          {/* Divider */}
          <div className="h-4 w-px bg-slate-200 dark:bg-slate-700 mx-1" />

          {/* Links */}
          {links.map((link) => {
            const isActive = activeLink === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                className="relative px-3 py-1.5 text-xs font-medium rounded-full transition-colors duration-200 group"
              >
                {/* Hover background */}
                <span className="absolute inset-0 rounded-full bg-slate-100/0 group-hover:bg-slate-100/80 dark:group-hover:bg-slate-800/80 transition-colors duration-200" />

                {/* Active background */}
                {isActive && (
                  <motion.span
                    layoutId="active-pill"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 dark:from-blue-500/20 dark:to-cyan-500/20"
                    transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                  />
                )}

                {/* Text */}
                <span
                  className={`relative z-10 transition-colors duration-200 ${
                    isActive
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-slate-600 group-hover:text-slate-900 dark:text-slate-400 dark:group-hover:text-slate-100"
                  }`}
                >
                  {link.label}
                </span>

                {/* Active dot indicator */}
                {isActive && (
                  <motion.span
                    layoutId="active-dot"
                    className="absolute bottom-0.5 left-1/2 -translate-x-1/2 h-1 w-1 rounded-full bg-blue-500 dark:bg-blue-400"
                    transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                  />
                )}
              </a>
            );
          })}

          {/* Divider */}
          <div className="h-4 w-px bg-slate-200 dark:bg-slate-700 mx-1" />

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="rounded-full p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100/80 dark:text-slate-400 dark:hover:text-slate-100 dark:hover:bg-slate-800/80 transition-all duration-200"
            aria-label="Toggle theme"
          >
            <AnimatePresence mode="wait">
              {theme === "dark" ? (
                <motion.div
                  key="sun"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Sun className="h-3.5 w-3.5" />
                </motion.div>
              ) : (
                <motion.div
                  key="moon"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Moon className="h-3.5 w-3.5" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.header>

      {/* Mobile Navbar */}
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed inset-x-0 top-0 z-50 md:hidden h-16 flex items-center justify-between px-4 bg-white/80 backdrop-blur-xl border-b border-slate-200/50 dark:bg-slate-900/80 dark:border-slate-700/50"
      >
        <a href="#hero" className="flex flex-col leading-tight">
          <span className="text-xs font-bold tracking-[0.25em] uppercase text-slate-800 dark:text-slate-100">
            PUTRA
          </span>
          <span className="text-[9px] tracking-[0.35em] uppercase text-slate-400">
            AI/DATA
          </span>
        </a>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="rounded-full p-2 text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 transition-colors"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <button
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white/60 text-slate-700 dark:border-slate-600 dark:bg-slate-800/60 dark:text-slate-200"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-x-4 top-20 z-40 md:hidden"
          >
            <div className="rounded-2xl bg-white/90 p-4 shadow-xl backdrop-blur-xl border border-slate-200/50 dark:bg-slate-900/90 dark:border-slate-700/50">
              <div className="flex flex-col gap-1">
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`rounded-xl px-3 py-2 text-sm transition-colors ${
                      activeLink === link.href
                        ? "bg-blue-50 text-blue-600 font-medium dark:bg-blue-900/30 dark:text-blue-400"
                        : "text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
                <button
                  onClick={() => { toggleTheme(); setOpen(false); }}
                  className="rounded-xl px-3 py-2 text-left text-sm text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-700"
                >
                  {theme === "dark" ? "Light mode" : "Dark mode"}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}