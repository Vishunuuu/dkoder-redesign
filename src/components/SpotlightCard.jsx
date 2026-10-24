import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'

export default function SpotlightCard({ children, className = '' }) {
  const x = useMotionValue(-300)
  const y = useMotionValue(-300)
  const background = useMotionTemplate`radial-gradient(280px circle at ${x}px ${y}px, rgba(255,210,31,0.16), transparent 70%)`

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    x.set(e.clientX - r.left)
    y.set(e.clientY - r.top)
  }

  return (
    <div
      onMouseMove={onMove}
      className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-card/80 backdrop-blur transition hover:border-brand/40 ${className}`}
    >
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100"
        style={{ background }}
      />
      <div className="relative h-full">{children}</div>
    </div>
  )
}
