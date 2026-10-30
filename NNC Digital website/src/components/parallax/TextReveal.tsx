"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface TextRevealProps {
  children: string;
  className?: string;
  /** Animate word-by-word or character-by-character */
  mode?: "word" | "char";
}

export default function TextReveal({
  children,
  className = "",
  mode = "word",
}: TextRevealProps) {
  const ref = useRef<HTMLParagraphElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 90%", "start 30%"],
  });

  const units = mode === "word" ? children.split(" ") : children.split("");

  return (
    <p ref={ref} className={`flex flex-wrap ${className}`}>
      {units.map((unit, i) => {
        const start = i / units.length;
        const end = start + 1 / units.length;
        return (
          <Word key={i} range={[start, end]} progress={scrollYProgress}>
            {unit}
            {mode === "word" ? "\u00A0" : ""}
          </Word>
        );
      })}
    </p>
  );
}

function Word({
  children,
  range,
  progress,
}: {
  children: React.ReactNode;
  range: [number, number];
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  const y = useTransform(progress, range, [8, 0]);

  return (
    <motion.span style={{ opacity, y }} className="inline-block">
      {children}
    </motion.span>
  );
}
