"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-[0_1px_3px_rgba(0,0,0,0.08)] border-b border-slate-200/60"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-6">
        <a href="#hero" className={`text-lg font-bold tracking-tight transition-colors ${scrolled ? "text-slate-900" : "text-white"}`}>
          NNC Digital
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className={`rounded-full px-4 py-2 text-[13px] font-medium transition-colors ${scrolled ? "text-slate-600 hover:text-slate-900" : "text-white/70 hover:text-white"}`}>
              {l.label}
            </a>
          ))}
          <a href="#contact" className={`ml-3 rounded-full px-5 py-2 text-[13px] font-semibold transition-all ${scrolled ? "bg-slate-900 text-white hover:bg-slate-800" : "bg-white text-slate-900 hover:bg-white/90"}`}>
            Start a Project
          </a>
        </nav>

        <button onClick={() => setOpen(!open)} className="md:hidden" aria-label="Menu">
          <div className="space-y-1.5">
            <span className={`block h-px w-5 transition-all ${scrolled ? "bg-slate-900" : "bg-white"} ${open ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`block h-px w-5 transition-all ${scrolled ? "bg-slate-900" : "bg-white"} ${open ? "opacity-0" : ""}`} />
            <span className={`block h-px w-5 transition-all ${scrolled ? "bg-slate-900" : "bg-white"} ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-slate-100 bg-white md:hidden">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block px-6 py-3 text-sm text-slate-600 hover:text-slate-900">{l.label}</a>
            ))}
            <div className="px-6 pb-4 pt-1">
              <a href="#contact" onClick={() => setOpen(false)} className="block rounded-lg bg-slate-900 py-2.5 text-center text-sm font-semibold text-white">Start a Project</a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
