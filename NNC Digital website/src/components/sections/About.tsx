"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ScrollReveal from "@/components/parallax/ScrollReveal";

const stats = [
  { value: "8+", label: "Years in Business" },
  { value: "150+", label: "Projects Delivered" },
  { value: "40+", label: "Team Members" },
  { value: "99%", label: "Client Retention" },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const y2 = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section id="about" ref={ref} className="relative overflow-hidden bg-slate-50 py-28">
      {/* Subtle parallax accents */}
      <motion.div style={{ y: y1 }} className="pointer-events-none absolute -right-32 top-20 h-72 w-72 rounded-full bg-blue-100/40 blur-3xl" />
      <motion.div style={{ y: y2 }} className="pointer-events-none absolute -left-32 bottom-20 h-64 w-64 rounded-full bg-cyan-100/30 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <ScrollReveal distance={30}>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.15em] text-blue-600">About Us</p>
              <h2 className="mb-6 text-3xl font-extrabold leading-snug text-slate-900 md:text-[2.5rem]">
                Canadian management.<br />Indian engineering excellence.
              </h2>
              <p className="mb-5 text-[15px] leading-relaxed text-slate-600">
                <strong className="text-slate-900">NNC Digital</strong> is your Canadian point of contact — we own strategy, project management, QA, and compliance.
              </p>
              <p className="mb-5 text-[15px] leading-relaxed text-slate-600">
                <strong className="text-slate-900">Nakshatra Namaha Creations</strong>, our development arm in India, brings 40+ engineers with 8+ years of experience building complex CRM systems, web platforms, and mobile applications.
              </p>
              <p className="text-[15px] leading-relaxed text-slate-600">
                Together we deliver enterprise-grade software at <strong className="text-slate-900">40–60% lower cost</strong> than local agencies — without compromising quality or communication.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal distance={40} delay={0.1}>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="rounded-2xl bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.04)]">
                  <p className="text-3xl font-extrabold text-slate-900">{s.value}</p>
                  <p className="mt-1 text-sm text-slate-500">{s.label}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
