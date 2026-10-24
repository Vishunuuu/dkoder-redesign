import { motion } from 'framer-motion'
import Reveal from './Reveal'

export default function SectionHeading({ eyebrow, title, text }) {
  return (
    <Reveal className="mx-auto max-w-2xl text-center">
      <span className="text-xs font-semibold uppercase tracking-[0.25em] text-brand">{eyebrow}</span>
      <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">{title}</h2>
      <motion.span
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.25 }}
        className="mx-auto mt-4 block h-1 w-20 origin-center rounded bg-brand"
      />
      {text && <p className="mt-4 text-gray-400">{text}</p>}
    </Reveal>
  )
}
