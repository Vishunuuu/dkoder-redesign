import Reveal from './Reveal'
import SpotlightCard from './SpotlightCard'
import CountUp from './CountUp'
import { stats } from '../data/content'

export default function Stats() {
  return (
    <section className="px-4 pt-16">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08}>
            <SpotlightCard className="h-full">
              <div className="px-4 py-7 text-center">
                <div className="text-3xl font-black text-brand sm:text-5xl">
                  <CountUp to={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-2 text-sm text-gray-400">{s.label}</div>
              </div>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
