import { marqueeNames } from '../data/content'

export default function Marquee() {
  const items = [...marqueeNames, ...marqueeNames]

  return (
    <section aria-label="Companies" className="px-4 pt-20">
      <p className="text-center text-xs uppercase tracking-[0.3em] text-gray-500">Prepare for hiring at companies like</p>
      <div className="relative mt-6 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
        <div className="flex w-max animate-marquee py-2 hover:[animation-play-state:paused]">
          {items.map((name, i) => (
            <span
              key={i}
              className="cursor-default whitespace-nowrap pr-14 text-2xl font-black tracking-tight text-white/25 transition hover:text-brand sm:text-3xl"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
