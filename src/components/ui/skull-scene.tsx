"use client";

import { Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

interface SkullSceneProps {
  className?: string;
}

/**
 * Stylised, brand-tinted skull built from primitive geometries.
 * Same UX as the original Spline scene — drag to rotate, slow auto-rotate
 * when idle — but renders locally via react-three-fiber (no external scene
 * to load, much smaller runtime, fully themed in cyan).
 */

const BONE_COLOUR = "#dbf2eb"; // bone-white with a faint cyan cast
const BONE_DARK = "#040b1a"; // socket / cavity void
const CYAN_GLOW = "#41e4c0"; // surgical-cyan accent — site primary

function Skull() {
  return (
    <group rotation={[0.1, -0.35, 0]}>
      {/* Cranium — slightly tall sphere for human-skull silhouette */}
      <mesh position={[0, 0.55, 0]} scale={[1, 1.08, 1.04]}>
        <sphereGeometry args={[1.15, 64, 64]} />
        <meshStandardMaterial
          color={BONE_COLOUR}
          emissive={CYAN_GLOW}
          emissiveIntensity={0.06}
          roughness={0.32}
          metalness={0.18}
        />
      </mesh>

      {/* Eye sockets — dark insets, slightly pushed in */}
      <mesh position={[-0.42, 0.5, 0.94]}>
        <sphereGeometry args={[0.28, 32, 32]} />
        <meshBasicMaterial color={BONE_DARK} />
      </mesh>
      <mesh position={[0.42, 0.5, 0.94]}>
        <sphereGeometry args={[0.28, 32, 32]} />
        <meshBasicMaterial color={BONE_DARK} />
      </mesh>

      {/* Inner-eye cyan glow (the "tech medical" detail) */}
      <mesh position={[-0.42, 0.5, 0.78]}>
        <sphereGeometry args={[0.07, 16, 16]} />
        <meshStandardMaterial
          color={CYAN_GLOW}
          emissive={CYAN_GLOW}
          emissiveIntensity={3}
          toneMapped={false}
        />
      </mesh>
      <mesh position={[0.42, 0.5, 0.78]}>
        <sphereGeometry args={[0.07, 16, 16]} />
        <meshStandardMaterial
          color={CYAN_GLOW}
          emissive={CYAN_GLOW}
          emissiveIntensity={3}
          toneMapped={false}
        />
      </mesh>

      {/* Nose cavity — inverted little pyramid */}
      <mesh position={[0, 0.13, 1.02]} rotation={[Math.PI, 0, Math.PI / 4]}>
        <coneGeometry args={[0.11, 0.3, 4]} />
        <meshBasicMaterial color={BONE_DARK} />
      </mesh>

      {/* Cheekbones — subtle bumps either side */}
      <mesh position={[-0.62, 0.16, 0.72]}>
        <sphereGeometry args={[0.18, 24, 24]} />
        <meshStandardMaterial
          color={BONE_COLOUR}
          emissive={CYAN_GLOW}
          emissiveIntensity={0.04}
          roughness={0.4}
        />
      </mesh>
      <mesh position={[0.62, 0.16, 0.72]}>
        <sphereGeometry args={[0.18, 24, 24]} />
        <meshStandardMaterial
          color={BONE_COLOUR}
          emissive={CYAN_GLOW}
          emissiveIntensity={0.04}
          roughness={0.4}
        />
      </mesh>

      {/* Upper jaw / palate — squashed sphere under the cranium */}
      <mesh position={[0, -0.18, 0.32]} scale={[1, 0.55, 0.95]}>
        <sphereGeometry args={[0.85, 48, 48]} />
        <meshStandardMaterial
          color={BONE_COLOUR}
          emissive={CYAN_GLOW}
          emissiveIntensity={0.05}
          roughness={0.38}
          metalness={0.15}
        />
      </mesh>

      {/* Lower jaw / mandible — slightly forward, rounded */}
      <mesh position={[0, -0.6, 0.32]} scale={[0.95, 0.55, 0.9]}>
        <sphereGeometry args={[0.78, 48, 48]} />
        <meshStandardMaterial
          color={BONE_COLOUR}
          emissive={CYAN_GLOW}
          emissiveIntensity={0.05}
          roughness={0.42}
          metalness={0.12}
        />
      </mesh>

      {/* Teeth — small box row along the bite line */}
      {Array.from({ length: 9 }).map((_, i) => (
        <mesh
          key={`tooth-top-${i}`}
          position={[(i - 4) * 0.12, -0.32, 0.92]}
        >
          <boxGeometry args={[0.07, 0.14, 0.08]} />
          <meshStandardMaterial
            color="#f5fcfa"
            roughness={0.45}
            metalness={0.1}
          />
        </mesh>
      ))}
    </group>
  );
}

export function SkullScene({ className }: SkullSceneProps) {
  // r3f v8 occasionally misses its initial ResizeObserver fire under
  // React 18 StrictMode, leaving the canvas at its default 300x150.
  // Firing synthetic resize events at staggered offsets reliably wakes the
  // observer regardless of mount timing.
  useEffect(() => {
    const fire = () => window.dispatchEvent(new Event("resize"));
    const t1 = window.setTimeout(fire, 0);
    const t2 = window.setTimeout(fire, 120);
    const t3 = window.setTimeout(fire, 400);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      window.clearTimeout(t3);
    };
  }, []);

  return (
    <Canvas
      className={className}
      style={{ touchAction: "none" }}
      camera={{ position: [0, 0.25, 4.2], fov: 38 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
    >
      <Suspense fallback={null}>
        {/* Lighting — cool, slightly cinematic, brand-cyan biased */}
        <ambientLight intensity={0.45} />
        <pointLight position={[3, 3.5, 4]} intensity={2.4} color="#bff1e3" />
        <pointLight position={[-3, 1.5, 2.5]} intensity={1.6} color={CYAN_GLOW} />
        <pointLight position={[0, -2, 2]} intensity={0.7} color="#5fb8ff" />

        <Skull />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.6}
          enableDamping
          dampingFactor={0.06}
          minPolarAngle={Math.PI / 3.2}
          maxPolarAngle={Math.PI - Math.PI / 3.2}
        />
      </Suspense>
    </Canvas>
  );
}
