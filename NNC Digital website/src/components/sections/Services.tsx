"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ScrollReveal from "@/components/parallax/ScrollReveal";

const services = [
  {
    title: "CRM Development",
    desc: "Custom CRM platforms tailored to your sales process — pipeline automation, lead management, 360° customer views, and real-time reporting dashboards.",
    features: ["Pipeline Automation", "Lead Scoring", "Custom Dashboards", "API Integrations"],
    color: "bg-blue-600",
    lightBg: "bg-blue-50",
  },
  {
    title: "Website Development",
    desc: "High-performance websites and web apps — corporate sites, SaaS platforms, e-commerce stores — built responsive, fast, and SEO-optimized.",
    features: ["Web Applications", "E-Commerce", "CMS Integration", "Performance & SEO"],
    color: "bg-cyan-600",
    lightBg: "bg-cyan-50",
  },
  {
    title: "Mobile App Development",
    desc: "Native and cross-platform iOS & Android apps — from UI/UX prototyping to App Store launch and ongoing maintenance.",
    features: ["iOS & Android", "React Native / Flutter", "UI/UX Design", "Post-Launch Support"],
    color: "bg-violet-600",
    lightBg: "bg-violet-50",
  },
];

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], [20, -20]);

  return (
    <section id="services" ref={ref} className="relative overflow-hidden bg-white py-28">
      <motion.div style={{ y: bgY }} className="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full bg-blue-50 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6">
        <ScrollReveal distance={30}>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.15em] text-blue-600">Services</p>
          <h2 className="mb-4 text-3xl font-extrabold leading-snug text-slate-900 md:text-[2.5rem]">
            What we do best
          </h2>
          <p className="mb-16 max-w-lg text-[15px] leading-relaxed text-slate-500">
            Three focused services — each backed by deep expertise and a proven delivery process.
          </p>
        </ScrollReveal>

        <div className="grid gap-6 lg:grid-cols-3">
          {services.map((s, i) => (
            <ScrollReveal key={s.title} distance={50} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
                className="group flex h-full flex-col rounded-2xl bg-white p-8 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.06)] transition-shadow hover:shadow-[0_1px_3px_rgba(0,0,0,0.04),0_16px_40px_rgba(0,0,0,0.08)]"
              >
                <div className={`mb-6 h-1.5 w-10 rounded-full ${s.color}`} />
                <h3 className="mb-3 text-xl font-bold text-slate-900">{s.title}</h3>
                <p className="mb-6 flex-1 text-sm leading-relaxed text-slate-500">{s.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {s.features.map((f) => (
                    <span key={f} className={`rounded-full px-3 py-1 text-xs font-medium text-slate-700 ${s.lightBg}`}>{f}</span>
                  ))}
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
