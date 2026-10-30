"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import FadeIn from "@/components/parallax/FadeIn";

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    color: "from-indigo-600 to-purple-600",
  },
  {
    title: "Brand Identity Redesign",
    category: "Brand Strategy",
    color: "from-pink-600 to-rose-600",
  },
  {
    title: "SaaS Dashboard",
    category: "UI/UX Design",
    color: "from-emerald-600 to-teal-600",
  },
  {
    title: "Marketing Campaign",
    category: "Digital Marketing",
    color: "from-amber-600 to-orange-600",
  },
  {
    title: "Mobile App Design",
    category: "UI/UX Design",
    color: "from-blue-600 to-cyan-600",
  },
  {
    title: "Corporate Website",
    category: "Web Development",
    color: "from-violet-600 to-indigo-600",
  },
];

export default function Portfolio() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section
      id="portfolio"
      ref={ref}
      className="relative overflow-hidden bg-zinc-950 py-32"
    >
      <motion.div
        style={{ y: bgY }}
        className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-indigo-500/10 blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <FadeIn>
          <div className="mb-16 text-center">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-indigo-400">
              Our Work
            </p>
            <h2 className="text-4xl font-bold text-white md:text-5xl">
              Featured Projects
            </h2>
          </div>
        </FadeIn>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <FadeIn key={project.title} direction="up" delay={0.08 * i}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="group cursor-pointer overflow-hidden rounded-2xl"
              >
                {/* Gradient placeholder for project image */}
                <div
                  className={`flex aspect-[4/3] items-end bg-gradient-to-br ${project.color} p-6`}
                >
                  <div>
                    <p className="mb-1 text-xs font-medium uppercase tracking-wider text-white/60">
                      {project.category}
                    </p>
                    <h3 className="text-lg font-semibold text-white">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
