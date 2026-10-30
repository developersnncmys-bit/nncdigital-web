"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="hero" ref={ref} className="relative min-h-[100vh] overflow-hidden bg-slate-950">
      {/* Layered gradient */}
      <motion.div style={{ y: bgY }} className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/80 via-slate-950 to-slate-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(56,189,248,0.12),transparent)]" />
        <div className="absolute bottom-0 h-32 w-full bg-gradient-to-t from-white to-transparent" />
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 flex min-h-[100vh] flex-col items-center justify-center px-6 text-center">
        <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-6 text-sm font-semibold uppercase tracking-[0.15em] text-blue-300/80">
          Canada&apos;s Trusted Development Partner
        </motion.p>

        <motion.h1 initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mb-6 max-w-4xl text-[clamp(2.2rem,5.5vw,4.2rem)] font-extrabold leading-[1.1] tracking-tight text-white">
          We engineer CRM systems, websites &amp; mobile apps that scale your business
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }}
          className="mx-auto mb-10 max-w-lg text-[15px] leading-relaxed text-slate-400">
          Enterprise-grade software delivered from Canada, engineered by our 40+ person team at Nakshatra Namaha Creations in India — at 40–60% lower cost.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col gap-3 sm:flex-row">
          <a href="#contact" className="rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-slate-900 shadow-lg shadow-white/10 transition hover:shadow-xl hover:shadow-white/20">
            Get a Free Consultation
          </a>
          <a href="#services" className="rounded-full border border-white/20 px-8 py-3.5 text-sm font-medium text-white/80 transition hover:bg-white/5 hover:text-white">
            Explore Services
          </a>
        </motion.div>

        {/* Trust strip */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9, duration: 0.8 }}
          className="mt-20 flex flex-wrap items-center justify-center gap-6 text-[13px] text-slate-500">
          {["150+ projects delivered", "50+ clients", "8+ years experience", "5+ countries"].map((t) => (
            <span key={t} className="flex items-center gap-1.5">
              <span className="h-1 w-1 rounded-full bg-blue-400" />
              {t}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
