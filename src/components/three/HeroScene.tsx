"use client";

import { useEffect } from "react";
import { useReducedMotion } from "framer-motion";
import { useTheme } from "@/components/ThemeProvider";
import { useThree, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import ThreeCanvas from "./ThreeCanvas";
import GridParticles from "./GridParticles";
import SolarSystem from "./SolarSystem";

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

function SceneContent({ isDark }: { isDark: boolean }) {
  const { scene, camera, pointer } = useThree();

  useEffect(() => {
    scene.fog = new THREE.FogExp2(isDark ? "#000000" : "#ffffff", isDark ? 0.02 : 0.025);
    return () => { scene.fog = null; };
  }, [scene, isDark]);

  useEffect(() => {
    camera.position.set(0, 11, 16);
    (camera as THREE.PerspectiveCamera).fov = 50;
    camera.updateProjectionMatrix();
  }, [camera]);

  useFrame(() => {
    camera.position.x = pointer.x * 1.5;
    camera.position.y = 11 + pointer.y * 1.0;
    camera.lookAt(0, 0, -2);
  });

  return (
    <>
      <GridParticles isDark={isDark} />
      <SolarSystem isDark={isDark} />
    </>
  );
}

export default function HeroScene() {
  const prefersReduced = useReducedMotion();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  if (prefersReduced) return null;
  if (typeof window !== "undefined" && (!hasWebGL() || isMobile())) return null;

  return (
    <ThreeCanvas
      camera={{ position: [0, 11, 16], fov: 50, near: 0.1, far: 150 }}
    >
      <SceneContent isDark={isDark} />
    </ThreeCanvas>
  );
}
