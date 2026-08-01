'use client';

import { motion } from 'framer-motion';

interface ParticleProps {
  index: number;
}

function Particle({ index }: ParticleProps) {
  const delay = (index * 0.5) % 3;
  const x = (index % 6) * 16 + 6;
  const duration = 3 + (index % 4) * 0.6;

  return (
    <motion.div
      key={`particle-${index}`}
      className="pointer-events-none absolute h-2 w-2 rounded-full bg-gold-light"
      initial={{ x: `${x}%`, y: '0%', opacity: 0 }}
      animate={{ y: '-100vh', opacity: [0, 0.6, 0.8, 0] }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'easeIn',
      }}
      style={{
        filter: 'blur(1.5px)',
        boxShadow: '0 0 8px rgba(240, 215, 123, 0.6)',
      }}
    />
  );
}

export function ParticleGlow() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {Array.from({ length: 12 }).map((_, i) => (
        <Particle key={i} index={i} />
      ))}
    </div>
  );
}
