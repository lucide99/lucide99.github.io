import React, { useMemo } from 'react'
import { Canvas } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'

function Particles({ count = 1500 }) {
  const positions = useMemo(() => {
    const p = new Float32Array(count * 3)
    for (let i = 0; i < count * 3; i++) {
      p[i] = (Math.random() - 0.5) * 8
    }
    return p
  }, [count])
  return (
    <Points positions={positions}>
      <PointMaterial transparent color="#6366f1" size={0.01} sizeAttenuation depthWrite={false} />
    </Points>
  )
}

export default function ParticleBackground() {
  const enabled = (import.meta.env.VITE_ENABLE_PARTICLES || 'false') === 'true'
  if (!enabled) return null
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 opacity-40">
      <Canvas camera={{ position: [0, 0, 3], fov: 60 }}>
        <ambientLight intensity={0.3} />
        <Particles />
      </Canvas>
    </div>
  )
}


