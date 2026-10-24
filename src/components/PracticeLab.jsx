import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Search, Play, CheckCircle2, Loader2 } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import Confetti from './Confetti'
import { companies, questions } from '../data/content'

const levelColor = { Easy: 'text-green-400', Medium: 'text-yellow-400', Hard: 'text-red-400' }

export default function PracticeLab() {
  const [company, setCompany] = useState('All')
  const [query, setQuery] = useState('')
  const [minLpa, setMinLpa] = useState(0)
  const [selected, setSelected] = useState(questions[0])
  const [code, setCode] = useState('# Write your solution here\n')
  const [status, setStatus] = useState('idle')
  const [shown, setShown] = useState(0)

  const list = useMemo(
    () =>
      questions.filter(
        (q) =>
          (company === 'All' || q.company === company) &&
          q.lpa >= minLpa &&
          q.title.toLowerCase().includes(query.toLowerCase())
      ),
    [company, query, minLpa]
  )

  useEffect(() => {
    if (status !== 'running') return
    setShown(0)
    const steps = [1, 2, 3].map((n) => setTimeout(() => setShown(n), n * 550))
    const done = setTimeout(() => setStatus('passed'), 1900)
    return () => [...steps, done].forEach(clearTimeout)
  }, [status])

  const pick = (q) => {
    setSelected(q)
    setStatus('idle')
  }

  const visibleTests = status === 'passed' ? 3 : shown

  return (
    <section id="lab" className="bg-black/40 px-4 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Practice Lab"
          title="Try the practice lab"
          text="Filter by company and salary, pick a question and run code. This is a demo preview."
        />

        <Reveal className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-ink/80 p-5 backdrop-blur">
            <div className="relative">
              <Search size={16} className="absolute left-3 top-3.5 text-gray-500" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search questions..."
                aria-label="Search questions"
                className="w-full rounded-lg border border-white/10 bg-card py-2.5 pl-9 pr-3 text-sm outline-none transition focus:border-brand"
              />
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {companies.map((c) => (
                <button
                  key={c}
                  onClick={() => setCompany(c)}
                  className={`rounded-full border px-3 py-1 text-xs font-semibold transition ${
                    company === c
                      ? 'border-brand bg-brand text-ink'
                      : 'border-white/15 text-gray-300 hover:border-brand hover:text-brand'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>

            <label className="mt-4 block text-xs text-gray-400">
              Minimum package: <span className="font-bold text-brand">{minLpa} LPA</span>
              <input
                type="range"
                min="0"
                max="7"
                step="0.5"
                value={minLpa}
                onChange={(e) => setMinLpa(Number(e.target.value))}
                className="mt-2 w-full accent-yellow-400"
              />
            </label>

            <ul className="mt-4 max-h-80 space-y-2 overflow-y-auto pr-1">
              <AnimatePresence mode="popLayout" initial={false}>
                {list.length === 0 && (
                  <motion.li
                    key="empty"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-6 text-center text-sm text-gray-500"
                  >
                    No questions match. Try changing the filters.
                  </motion.li>
                )}
                {list.map((q) => (
                  <motion.li
                    key={q.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    <button
                      onClick={() => pick(q)}
                      className={`w-full rounded-lg border p-3 text-left transition ${
                        selected.id === q.id
                          ? 'border-brand bg-brand/10'
                          : 'border-white/10 hover:border-white/30 hover:bg-white/5'
                      }`}
                    >
                      <div className="text-sm font-semibold">{q.title}</div>
                      <div className="mt-1 flex items-center gap-3 text-xs text-gray-400">
                        <span>{q.company}</span>
                        <span>{q.lpa} LPA</span>
                        <span className={levelColor[q.level]}>{q.level}</span>
                      </div>
                    </button>
                  </motion.li>
                ))}
              </AnimatePresence>
            </ul>
          </div>

          <div className="relative flex flex-col rounded-2xl border border-white/10 bg-ink/80 p-5 backdrop-blur">
            {status === 'passed' && <Confetti />}

            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="font-bold">{selected.title}</h3>
                <p className="mt-1 text-xs text-gray-400">
                  {selected.company} · {selected.lpa} LPA · {selected.level}
                </p>
              </div>
              <motion.button
                whileTap={{ scale: 0.94 }}
                onClick={() => setStatus('running')}
                disabled={status === 'running'}
                className="inline-flex shrink-0 items-center gap-2 rounded-full bg-brand px-5 py-2 text-sm font-bold text-ink shadow-lg shadow-brand/20 disabled:opacity-60"
              >
                {status === 'running' ? <Loader2 size={16} className="animate-spin" /> : <Play size={16} />} Run
              </motion.button>
            </div>

            <div className="mt-4 flex items-center gap-2 rounded-t-lg border border-b-0 border-white/10 bg-card px-3 py-2">
              <span className="size-2.5 rounded-full bg-red-400" />
              <span className="size-2.5 rounded-full bg-yellow-400" />
              <span className="size-2.5 rounded-full bg-green-400" />
              <span className="ml-2 text-xs text-gray-500">solution.py</span>
            </div>
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              spellCheck="false"
              aria-label="Code editor"
              className="min-h-48 w-full flex-1 resize-none rounded-b-lg border border-white/10 bg-card p-4 font-mono text-sm outline-none transition focus:border-brand"
            />

            <div className="mt-3 min-h-[5.5rem] space-y-1 text-sm">
              {status === 'running' && shown < 3 && (
                <div className="flex items-center gap-2 text-gray-400">
                  <Loader2 size={14} className="animate-spin" /> Running test cases...
                </div>
              )}
              {Array.from({ length: visibleTests }, (_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex items-center gap-2 text-green-400"
                >
                  <CheckCircle2 size={14} /> Test case {i + 1} passed
                </motion.div>
              ))}
              {status === 'passed' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-1 text-xs text-gray-400">
                  Demo only: the runner does not execute real code.
                </motion.div>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
