import React, { useMemo } from 'react'
import { Canvas } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import { useTheme } from '../contexts/ThemeContext.jsx'

function Particles({ count = 1500, theme }) {
  const positions = useMemo(() => {
    const p = new Float32Array(count * 3)
    for (let i = 0; i < count * 3; i++) {
      p[i] = (Math.random() - 0.5) * 8
    }
    return p
  }, [count])

  // Use darker particles for light mode, lighter for dark mode
  const particleColor = theme === 'light' ? '#4f46e5' : '#6366f1'

  return (
    <Points positions={positions}>
      <PointMaterial transparent color={particleColor} size={0.01} sizeAttenuation depthWrite={false} />
    </Points>
  )
}

export default function ParticleBackground() {
  const { theme } = useTheme()
  const enabled = (import.meta.env.VITE_ENABLE_PARTICLES || 'false') === 'true'
  if (!enabled) return null

  // Adjust opacity based on theme
  const opacity = theme === 'light' ? 'opacity-20' : 'opacity-40'

  return (
    <div className={`pointer-events-none absolute inset-0 -z-10 ${opacity} transition-opacity duration-300`}>
      <Canvas camera={{ position: [0, 0, 3], fov: 60 }}>
        <ambientLight intensity={0.3} />
        <Particles theme={theme} />
      </Canvas>
    </div>
  )
}


