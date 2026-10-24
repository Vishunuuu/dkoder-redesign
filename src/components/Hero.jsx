import { motion } from 'framer-motion'
import { ArrowRight, Play, Sparkles, Zap } from 'lucide-react'
import TiltCard from './TiltCard'
import MagneticButton from './MagneticButton'
import Typewriter from './Typewriter'
import { brand, heroCompanies } from '../data/content'

const START = 1.0
const headline = ['Crack', 'placements', 'with', 'real', 'company', 'questions']
const gradientText =
  'bg-gradient-to-r from-brand via-white to-brand bg-[length:200%_auto] bg-clip-text text-transparent animate-shine'

const codeLines = [
  [['def ', 'text-brand'], ['two_sum', 'text-white'], ['(nums, target):', 'text-gray-400']],
  [['    seen = {}', 'text-gray-300']],
  [['    for ', 'text-brand'], ['i, n ', 'text-gray-300'], ['in ', 'text-brand'], ['enumerate(nums):', 'text-gray-300']],
  [['        if ', 'text-brand'], ['target - n ', 'text-gray-300'], ['in ', 'text-brand'], ['seen:', 'text-gray-300']],
  [['            return ', 'text-brand'], ['[seen[target - n], i]', 'text-gray-300']],
  [['        seen[n] = i', 'text-gray-300']],
]

const container = { hidden: {}, show: { transition: { staggerChildren: 0.09, delayChildren: START } } }
const word = {
  hidden: { opacity: 0, y: 40, rotateX: -40 },
  show: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay: START + delay },
})

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-4 pb-14 pt-24 sm:px-6 sm:pb-20 sm:pt-32 lg:pb-24 lg:pt-36">
      <div className="mx-auto grid w-full max-w-6xl min-w-0 grid-cols-1 items-center gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-14">
        <div>
          <motion.span
            {...fadeUp(0)}
            className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-4 py-1.5 text-xs font-semibold text-brand"
          >
            <span className="relative flex size-2">
              <span className="absolute inset-0 animate-ping2 rounded-full bg-brand" />
              <span className="relative size-2 rounded-full bg-brand" />
            </span>
            The Placement LMS for Engineering Colleges
          </motion.span>

          <motion.h1
            variants={container}
            initial="hidden"
            animate="show"
            className="mt-5 max-w-full break-words text-[2.15rem] font-black leading-[1.08] tracking-[-0.04em] sm:mt-6 sm:text-5xl sm:tracking-tight lg:text-6xl"
            style={{ perspective: 600 }}
          >
            {headline.map((w, i) => (
              <motion.span key={i} variants={word} className={`inline-block pr-2 sm:pr-3 ${i >= 3 ? gradientText : ''}`}>
                {w}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p {...fadeUp(0.7)} className="mt-4 max-w-xl text-base leading-7 text-gray-300 sm:mt-5 sm:text-lg sm:leading-normal">
            Company-tagged questions, a live coding lab, salary filters and entrance exam prep. Everything your students
            need in one place.
          </motion.p>

          <motion.p {...fadeUp(0.85)} className="mt-4 text-base font-semibold sm:mt-4 sm:text-xl">
            Questions asked at <Typewriter words={heroCompanies} />
          </motion.p>

          <motion.div {...fadeUp(1)} className="mt-5 border-l-4 border-brand pl-4 text-sm font-medium leading-6 text-gray-200 sm:mt-6">
            {brand.tagline.map((t) => (
              <div key={t}>{t}</div>
            ))}
          </motion.div>

          <motion.div {...fadeUp(1.1)} className="mt-7 flex w-full flex-col gap-3 sm:mt-8 sm:w-auto sm:flex-row sm:flex-wrap sm:gap-4">
            <MagneticButton
              href="#contact"
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-brand px-6 py-3.5 font-bold text-ink shadow-lg shadow-brand/30 transition hover:-translate-y-0.5 hover:shadow-brand/40 sm:w-auto sm:px-7"
            >
              Get Started <ArrowRight size={18} />
            </MagneticButton>
            <MagneticButton
              href="#lab"
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 font-bold backdrop-blur transition hover:border-brand/60 sm:w-auto sm:px-7"
            >
              <Play size={16} className="text-brand" /> Try the Lab
            </MagneticButton>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: START + 0.3 }}
          className="relative mx-auto w-full min-w-0 max-w-2xl lg:mx-0"
        >
          <div className="absolute -inset-6 rounded-[2rem] bg-brand/10 blur-3xl" />

          <div className="absolute -left-3 -top-6 z-10 hidden animate-float items-center gap-2 rounded-xl border border-white/10 bg-card/90 px-3 py-2 text-xs font-semibold backdrop-blur sm:flex">
            <Sparkles size={14} className="text-brand" /> 12,500+ questions
          </div>
          <div
            className="absolute -right-3 top-1/3 z-10 hidden animate-float items-center gap-2 rounded-xl border border-white/10 bg-card/90 px-3 py-2 text-xs font-semibold backdrop-blur sm:flex"
            style={{ animationDelay: '1.5s' }}
          >
            <Zap size={14} className="text-brand" /> TCS NQT · InfyTQ
          </div>
          <div
            className="absolute -bottom-5 left-8 z-10 hidden animate-float items-center gap-2 rounded-xl border border-brand/40 bg-brand px-3 py-2 text-xs font-bold text-ink sm:flex"
            style={{ animationDelay: '3s' }}
          >
            ₹ Salary filters
          </div>

          <TiltCard className="relative min-w-0 overflow-hidden rounded-2xl border border-white/10 bg-card/95 shadow-2xl shadow-black/50 backdrop-blur">
            <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
              <span className="size-3 rounded-full bg-red-400" />
              <span className="size-3 rounded-full bg-yellow-400" />
              <span className="size-3 rounded-full bg-green-400" />
              <span className="ml-3 text-xs text-gray-500">two_sum.py</span>
              <span className="ml-auto rounded bg-brand/15 px-2 py-0.5 text-xs font-semibold text-brand">TCS</span>
            </div>
            <pre className="max-w-full overflow-x-auto p-4 font-mono text-[11px] leading-6 sm:p-5 sm:text-sm sm:leading-7">
              {codeLines.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: START + 0.8 + i * 0.18 }}
                  className="whitespace-pre"
                >
                  {line.map(([t, c], j) => (
                    <span key={j} className={c}>
                      {t}
                    </span>
                  ))}
                </motion.div>
              ))}
            </pre>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: START + 2.1 }}
              className="border-t border-white/10 px-5 py-3 text-sm font-semibold text-green-400"
            >
              ✓ All test cases passed
            </motion.div>
          </TiltCard>
        </motion.div>
      </div>
    </section>
  )
}
