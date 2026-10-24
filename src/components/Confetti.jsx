import { useMemo } from 'react'
import { motion } from 'framer-motion'

const colors = ['#FFD21F', '#ffffff', '#FFA800']

export default function Confetti({ count = 26 }) {
  const pieces = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        x: (Math.random() - 0.5) * 420,
        peak: -(Math.random() * 240 + 40),
        rotate: Math.random() * 540 - 270,
        size: Math.random() * 8 + 5,
        color: colors[i % colors.length],
      })),
    [count]
  )

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 grid place-items-center overflow-hidden">
      {pieces.map((p) => (
        <motion.span
          key={p.id}
          initial={{ x: 0, y: 0, opacity: 1, rotate: 0 }}
          animate={{ x: p.x, y: [0, p.peak, p.peak + 280], opacity: [1, 1, 0], rotate: p.rotate }}
          transition={{ duration: 1.6, ease: 'easeOut' }}
          style={{ width: p.size, height: p.size, background: p.color }}
          className="absolute"
        />
      ))}
    </div>
  )
}
