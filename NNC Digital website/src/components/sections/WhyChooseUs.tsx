"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ScrollReveal from "@/components/parallax/ScrollReveal";

const items = [
  { title: "Dual-Shore Delivery", desc: "Canadian project leads + India engineering team = timezone coverage, local accountability, global talent." },
  { title: "8+ Years Track Record", desc: "Nakshatra Namaha Creations has delivered 150+ projects across CRM, web, and mobile since 2017." },
  { title: "Agile & Transparent", desc: "Bi-weekly demos, daily standups, shared dashboards. You see everything, in real time." },
  { title: "40–60% Cost Savings", desc: "Enterprise-grade software without enterprise pricing. Same quality, smarter structure." },
  { title: "Security-First", desc: "NDA-protected, SOC 2 practices, PIPEDA-compliant. Your IP and data are safe." },
  { title: "Post-Launch Partnership", desc: "Maintenance, feature updates, monitoring, and 24/7 support. We stay after launch." },
];

export default function WhyChooseUs() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-slate-900 py-28">
      <motion.div style={{ y: bgY }} className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.08),transparent_60%)]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <ScrollReveal distance={30}>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.15em] text-blue-400">Why NNC Digital</p>
          <h2 className="mb-4 text-3xl font-extrabold leading-snug text-white md:text-[2.5rem]">
            Why companies choose us
          </h2>
          <p className="mb-16 max-w-lg text-[15px] leading-relaxed text-slate-400">
            We&apos;re not the cheapest. We&apos;re not the biggest. We&apos;re the most reliable partner you&apos;ll work with.
          </p>
        </ScrollReveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <ScrollReveal key={item.title} distance={40} delay={i * 0.05}>
              <div className="rounded-xl border border-slate-800 bg-slate-800/40 p-6 backdrop-blur-sm transition-colors hover:border-slate-700 hover:bg-slate-800/60">
                <h3 className="mb-2 text-[15px] font-semibold text-white">{item.title}</h3>
                <p className="text-sm leading-relaxed text-slate-400">{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
