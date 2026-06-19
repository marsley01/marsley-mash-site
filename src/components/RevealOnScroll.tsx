"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef, type ReactNode } from "react";

interface RevealOnScrollProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "span";
}

export default function RevealOnScroll({
  children,
  className = "",
  delay = 0,
  as = "div",
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const prefersReduced = useReducedMotion();

  const Component = motion[as === "span" ? "span" : "div"];

  return (
    <Component
      ref={ref}
      initial={prefersReduced ? {} : { opacity: 0, y: 40 }}
      animate={
        isInView
          ? { opacity: 1, y: 0 }
          : prefersReduced
            ? {}
            : { opacity: 0, y: 40 }
      }
      transition={
        prefersReduced
          ? { duration: 0 }
          : {
              duration: 0.8,
              delay,
              ease: [0.16, 1, 0.3, 1],
              type: "spring",
              stiffness: 80,
              damping: 20,
            }
      }
      className={className}
    >
      {children}
    </Component>
  );
}
