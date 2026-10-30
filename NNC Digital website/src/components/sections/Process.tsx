"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ScrollReveal from "@/components/parallax/ScrollReveal";

const steps = [
  { n: "01", title: "Discovery & Strategy", desc: "Requirements gathering, stakeholder interviews, technical scoping, and project planning." },
  { n: "02", title: "Design & Prototyping", desc: "Wireframes, UI mockups, and clickable prototypes — approved before development starts." },
  { n: "03", title: "Agile Development", desc: "Bi-weekly sprints by our India team with continuous QA, demos, and transparent progress tracking." },
  { n: "04", title: "Launch & Ongoing Support", desc: "Production deployment, performance tuning, documentation, and dedicated post-launch maintenance." },
];

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 60%", "end 40%"] });
  const lineH = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="process" ref={ref} className="bg-slate-50 py-28">
      <div className="mx-auto max-w-4xl px-6">
        <ScrollReveal distance={30}>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.15em] text-blue-600">Process</p>
          <h2 className="mb-16 text-3xl font-extrabold leading-snug text-slate-900 md:text-[2.5rem]">
            How we deliver
          </h2>
        </ScrollReveal>

        <div className="relative">
          <div className="absolute left-[19px] top-2 hidden h-[calc(100%-16px)] w-px bg-slate-200 md:block">
            <motion.div style={{ height: lineH }} className="w-full bg-blue-500" />
          </div>

          <div className="space-y-10">
            {steps.map((s, i) => (
              <ScrollReveal key={s.n} distance={40} delay={i * 0.06}>
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-sm font-bold text-blue-600 shadow-[0_1px_3px_rgba(0,0,0,0.08),0_4px_12px_rgba(0,0,0,0.04)] ring-1 ring-slate-100">
                      {s.n}
                    </div>
                  </div>
                  <div className="rounded-xl bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.04)] flex-1">
                    <h3 className="mb-2 text-base font-bold text-slate-900">{s.title}</h3>
                    <p className="text-sm leading-relaxed text-slate-500">{s.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
