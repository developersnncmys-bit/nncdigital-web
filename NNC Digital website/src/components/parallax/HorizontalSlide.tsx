"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface HorizontalSlideProps {
  children: React.ReactNode;
  direction?: "left" | "right";
  className?: string;
}

export default function HorizontalSlide({
  children,
  direction = "left",
  className = "",
}: HorizontalSlideProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    direction === "left" ? ["5%", "-5%"] : ["-5%", "5%"]
  );

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div style={{ x }}>{children}</motion.div>
    </div>
  );
}
