import { motion } from 'framer-motion'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import SpotlightCard from './SpotlightCard'
import { exams } from '../data/content'

const list = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } }
const chip = {
  hidden: { opacity: 0, scale: 0.6, y: 10 },
  show: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 260, damping: 18 } },
}

export default function ExamPrep() {
  return (
    <section id="exams" className="px-4 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Exam Prep" title="Entrance exam preparation" text="Focused practice for the big hiring tests." />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {exams.map(({ name, icon: Icon, topics }, i) => (
            <Reveal key={name} delay={i * 0.12}>
              <SpotlightCard className="h-full">
                <div className="relative p-8">
                  <Icon size={140} strokeWidth={1} className="absolute -right-6 -top-6 text-white/5" aria-hidden="true" />
                  <div className="grid size-12 place-items-center rounded-xl bg-brand text-ink">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-5 text-3xl font-black text-brand">{name}</h3>
                  <motion.div
                    variants={list}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="mt-6 flex flex-wrap gap-2"
                  >
                    {topics.map((t) => (
                      <motion.span
                        key={t}
                        variants={chip}
                        whileHover={{ y: -3 }}
                        className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm text-gray-200 hover:border-brand hover:text-brand"
                      >
                        {t}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
