"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import { useTheme } from "@/components/ThemeProvider";
import ThreeCanvas from "./ThreeCanvas";
import Particles from "./Particles";
import FloatingShapes from "./FloatingShapes";

function hasWebGL(): boolean {
  try {
    const canvas = document.createElement("canvas");
    return !!(canvas.getContext("webgl") || canvas.getContext("webgl2"));
  } catch {
    return false;
  }
}

function isMobile(): boolean {
  return "ontouchstart" in window || navigator.maxTouchPoints > 0;
}

export default function HeroScene() {
  const prefersReduced = useReducedMotion();
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const color = isDark ? "#0071e3" : "#5e5ce6";

  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      mouse.current.x = e.clientX - window.innerWidth / 2;
      mouse.current.y = e.clientY - window.innerHeight / 2;
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  if (prefersReduced) return null;
  if (typeof window !== "undefined" && (!hasWebGL() || isMobile())) return null;

  return (
    <ThreeCanvas>
      <Particles count={200} color={color} mouse={mouse} />
      <FloatingShapes mouse={mouse} isDark={isDark} />
    </ThreeCanvas>
  );
}
