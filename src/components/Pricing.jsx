import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import CountUp from './CountUp'

const perks = [
  'Full question bank access',
  'Live coding lab',
  'Company and salary filters',
  'TCS NQT and InfyTQ prep',
  'Access for all 4 years',
]

const list = { hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } } }
const item = { hidden: { opacity: 0, x: -16 }, show: { opacity: 1, x: 0 } }

export default function Pricing() {
  return (
    <section id="pricing" className="bg-black/40 px-4 py-24 sm:py-28">
      <div className="mx-auto max-w-3xl">
        <SectionHeading eyebrow="Pricing" title="Simple pricing for colleges" text="One fair price per student. No hidden costs." />

        <Reveal delay={0.1} className="mt-12">
          <div className="relative overflow-hidden rounded-3xl p-[2px]">
            <div className="absolute -inset-[60%] animate-spin-slow bg-[conic-gradient(from_0deg,transparent_0%,#FFD21F_20%,transparent_45%)]" />
            <div className="relative rounded-[calc(1.5rem-2px)] bg-ink p-8 text-center sm:p-12">
              <div className="text-6xl font-black text-brand sm:text-7xl">
                <CountUp to={1000} prefix="₹" />
              </div>
              <div className="mt-2 text-gray-400">per student for 4 years</div>

              <motion.ul
                variants={list}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="mx-auto mt-8 max-w-sm space-y-3 text-left"
              >
                {perks.map((p) => (
                  <motion.li key={p} variants={item} className="flex items-center gap-3 text-gray-300">
                    <span className="grid size-5 shrink-0 place-items-center rounded-full bg-brand text-ink">
                      <Check size={13} strokeWidth={3} />
                    </span>
                    {p}
                  </motion.li>
                ))}
              </motion.ul>

              <a
                href="#contact"
                className="mt-9 inline-block rounded-full bg-brand px-9 py-3.5 font-bold text-ink shadow-lg shadow-brand/30 transition hover:scale-105"
              >
                Talk to Us
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
