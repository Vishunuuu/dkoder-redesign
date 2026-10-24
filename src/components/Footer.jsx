import Logo from './Logo'
import { brand, navLinks } from '../data/content'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/50 px-4 py-12">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
        <div>
          <Logo />
          <p className="mt-4 text-sm leading-6 text-gray-400">{brand.tagline.join(' ')}</p>
        </div>

        <ul className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-gray-400 md:justify-self-center">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition hover:text-brand">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="text-sm text-gray-500 md:justify-self-end md:text-right">
          <p className="font-semibold tracking-[0.2em] text-brand">{brand.motto}</p>
          <p className="mt-3">© {new Date().getFullYear()} Dkoder. Redesign concept for the Dkoder Hackathon.</p>
        </div>
      </div>
    </footer>
  )
}
