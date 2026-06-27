"use client";

import { useRef, useMemo, type MutableRefObject } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

interface FloatingShapesProps {
  mouse: MutableRefObject<{ x: number; y: number }>;
  isDark: boolean;
}

function Shape({ position, mouse, isDark, geometry, color, speed, scale }: {
  position: [number, number, number];
  mouse: MutableRefObject<{ x: number; y: number }>;
  isDark: boolean;
  geometry: THREE.BufferGeometry;
  color: string;
  speed: number;
  scale: number;
}) {
  const mesh = useRef<THREE.Mesh>(null);
  const initialPos = useRef(position);

  useFrame((state) => {
    if (!mesh.current) return;
    const t = state.clock.elapsedTime * speed;
    const mx = mouse.current.x;
    const my = mouse.current.y;
    mesh.current.position.x = initialPos.current[0] + Math.sin(t * 0.5 + initialPos.current[0]) * 0.4 + mx * 0.003;
    mesh.current.position.y = initialPos.current[1] + Math.cos(t * 0.4 + initialPos.current[1]) * 0.4 + my * 0.003;
    mesh.current.position.z = initialPos.current[2] + Math.sin(t * 0.3) * 0.3;
    mesh.current.rotation.x += 0.005 * speed;
    mesh.current.rotation.y += 0.008 * speed;
    mesh.current.rotation.z += 0.003 * speed;
  });

  return (
    <mesh ref={mesh} position={position} scale={scale} geometry={geometry}>
      <MeshDistortMaterial
        color={color}
        transparent
        opacity={isDark ? 0.35 : 0.2}
        roughness={0.3}
        metalness={0.2}
        distort={0.15}
        speed={1.5}
      />
    </mesh>
  );
}

export default function FloatingShapes({ mouse, isDark }: FloatingShapesProps) {
  const icoGeo = useMemo(() => new THREE.IcosahedronGeometry(1, 1), []);
  const torusGeo = useMemo(() => new THREE.TorusKnotGeometry(0.8, 0.3, 64, 8), []);
  const dodeGeo = useMemo(() => new THREE.DodecahedronGeometry(0.9, 0), []);
  const octaGeo = useMemo(() => new THREE.OctahedronGeometry(0.8, 0), []);

  const shapes = useMemo(() => [
    { geometry: icoGeo, position: [-2.8, 1.2, -3] as [number, number, number], color: "#0071e3", speed: 0.6, scale: 0.9 },
    { geometry: torusGeo, position: [3, -1, -4] as [number, number, number], color: "#5e5ce6", speed: 0.8, scale: 0.85 },
    { geometry: dodeGeo, position: [-1.5, -1.8, -2] as [number, number, number], color: "#0071e3", speed: 0.5, scale: 0.7 },
    { geometry: octaGeo, position: [2.5, 1.8, -3.5] as [number, number, number], color: "#5e5ce6", speed: 0.7, scale: 0.75 },
    { geometry: icoGeo, position: [0, 2.5, -5] as [number, number, number], color: "#0071e3", speed: 0.4, scale: 0.6 },
  ], [icoGeo, torusGeo, dodeGeo, octaGeo]);

  return (
    <>
      {shapes.map((s, i) => (
        <Shape key={i} {...s} mouse={mouse} isDark={isDark} />
      ))}
    </>
  );
}
