"use client";

import { motion, useInView, useMotionValue, useTransform, animate, useReducedMotion } from "framer-motion";
import { useRef, useEffect } from "react";

interface StatsCounterProps {
  target: number;
  label: string;
  suffix?: string;
  prefix?: string;
}

export default function StatsCounter({
  target,
  label,
  suffix = "",
  prefix = "",
}: StatsCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const prefersReduced = useReducedMotion();
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (v) => Math.floor(v));

  useEffect(() => {
    if (!isInView) return;
    if (prefersReduced) {
      motionValue.set(target);
      return;
    }
    const controls = animate(motionValue, target, {
      duration: 1.8,
      ease: "easeOut",
    });
    return () => controls.stop();
  }, [isInView, target, prefersReduced, motionValue]);

  return (
    <div ref={ref} className="text-center">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: prefersReduced ? 0 : 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl"
      >
        {prefix}
        <motion.span>{rounded}</motion.span>
        {suffix}
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: prefersReduced ? 0 : 0.5, delay: prefersReduced ? 0 : 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="mt-2 text-sm text-text-secondary"
      >
        {label}
      </motion.p>
    </div>
  );
}
