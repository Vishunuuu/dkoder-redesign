import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import SpotlightCard from './SpotlightCard'
import { features } from '../data/content'

export default function Features() {
  return (
    <section id="features" className="px-4 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Features"
          title="Everything for placement success"
          text="Simple tools that help students practice smarter and colleges track results."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 0.08}>
              <SpotlightCard className="h-full hover:-translate-y-1">
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="grid size-12 place-items-center rounded-xl bg-brand/10 text-brand transition duration-300 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-brand group-hover:text-ink">
                      <Icon size={22} />
                    </div>
                    <span className="text-3xl font-black text-white/10">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <h3 className="mt-5 text-lg font-bold">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-400">{text}</p>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
