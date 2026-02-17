"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function NetworkNodes() {
  const groupRef = useRef<THREE.Group>(null!);
  
  const nodes = useMemo(() => {
    const positions: [number, number, number][] = [];
    for (let i = 0; i < 20; i++) {
      positions.push([
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 5,
        (Math.random() - 0.5) * 4,
      ]);
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.3;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.08) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {nodes.map((pos, i) => (
        <mesh key={i} position={pos}>
          <boxGeometry args={[0.15 + Math.random() * 0.2, 0.15 + Math.random() * 0.2, 0.15 + Math.random() * 0.2]} />
          <meshStandardMaterial
            color={i % 3 === 0 ? "#10b981" : i % 3 === 1 ? "#059669" : "#34d399"}
            emissive={i % 3 === 0 ? "#10b981" : "#059669"}
            emissiveIntensity={0.5}
            roughness={0.3}
            metalness={0.8}
          />
        </mesh>
      ))}
    </group>
  );
}

function Particles() {
  const ref = useRef<THREE.Points>(null!);
  
  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const pos = new Float32Array(200 * 3);
    for (let i = 0; i < 200; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }
    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    return geo;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <points ref={ref} geometry={geometry}>
      <pointsMaterial color="#10b981" size={0.02} transparent opacity={0.6} sizeAttenuation />
    </points>
  );
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 6], fov: 60 }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.3} />
        <pointLight position={[5, 5, 5]} intensity={0.8} color="#10b981" />
        <pointLight position={[-5, -5, 3]} intensity={0.4} color="#059669" />
        <NetworkNodes />
        <Particles />
      </Canvas>
    </div>
  );
}
