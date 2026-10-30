"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface FadeInProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right";
  /** Stagger delay — shifts start of animation in scroll range (0–0.3) */
  delay?: number;
  className?: string;
  /** Distance to travel in px */
  distance?: number;
}

const directionMap = {
  up: (d: number) => ({ x: 0, y: d }),
  down: (d: number) => ({ x: 0, y: -d }),
  left: (d: number) => ({ x: d, y: 0 }),
  right: (d: number) => ({ x: -d, y: 0 }),
};

export default function FadeIn({
  children,
  direction = "up",
  delay = 0,
  className = "",
  distance = 60,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 95%", "start 45%"],
  });

  const offset = directionMap[direction](distance);
  const start = delay;
  const end = Math.min(start + 0.7, 1);

  const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);
  const x = useTransform(scrollYProgress, [start, end], [offset.x, 0]);
  const y = useTransform(scrollYProgress, [start, end], [offset.y, 0]);

  return (
    <div ref={ref}>
      <motion.div style={{ opacity, x, y }} className={className}>
        {children}
      </motion.div>
    </div>
  );
}
