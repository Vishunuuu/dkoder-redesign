import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'
import { navLinks } from '../data/content'

const ids = navLinks.map((l) => l.href.slice(1))

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' }
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition ${
        scrolled || open ? 'border-b border-white/10 bg-ink/85 backdrop-blur-lg' : ''
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <a href="#top" aria-label="Dkoder home">
          <Logo />
        </a>

        <ul className="hidden items-center gap-8 text-sm md:flex">
          {navLinks.map((l) => {
            const id = l.href.slice(1)
            return (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`relative py-1 transition hover:text-brand ${active === id ? 'text-brand' : 'text-gray-300'}`}
                >
                  {l.label}
                  {active === id && (
                    <motion.span layoutId="nav-underline" className="absolute inset-x-0 -bottom-1 h-0.5 rounded bg-brand" />
                  )}
                </a>
              </li>
            )
          })}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-full bg-brand px-5 py-2 text-sm font-bold text-ink transition hover:scale-105 hover:shadow-lg hover:shadow-brand/30 md:inline-block"
        >
          Request a Demo
        </a>

        <button className="p-2 md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-t border-white/10 bg-ink px-4 pb-4 md:hidden"
        >
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block border-b border-white/5 py-3 text-gray-200"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-4 block rounded-full bg-brand py-3 text-center font-bold text-ink"
          >
            Request a Demo
          </a>
        </motion.div>
      )}
    </header>
  )
}
