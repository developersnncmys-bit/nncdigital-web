"use client";

import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  distance?: number;
  delay?: number;
  rotate?: number;
  scale?: number;
}

export default function ScrollReveal({
  children,
  className = "",
  distance = 60,
  delay = 0,
  rotate = 0,
  scale = 1,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 90%", "start 35%"],
  });

  const start = delay;
  const end = Math.min(start + 0.65, 1);

  const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);
  const y = useTransform(scrollYProgress, [start, end], [distance, 0]);
  const r = useTransform(scrollYProgress, [start, end], [rotate, 0]);
  const s = useTransform(scrollYProgress, [start, end], [scale, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, y, rotate: r, scale: s }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
