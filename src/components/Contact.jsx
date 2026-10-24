import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Send, CheckCircle2 } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import Confetti from './Confetti'

const field =
  'w-full rounded-lg border border-white/10 bg-ink px-4 py-3 text-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20'

function FieldError({ text }) {
  return (
  <AnimatePresence>
    {text && (
      <motion.p
        initial={{ opacity: 0, y: -4 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        className="mt-1 text-xs text-red-400"
      >
        {text}
      </motion.p>
    )}
  </AnimatePresence>
  )
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', college: '', message: '' })
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = (e) => {
    e.preventDefault()
    const err = {}
    if (!form.name.trim()) err.name = 'Please enter your name'
    if (!/^\S+@\S+\.\S+$/.test(form.email)) err.email = 'Please enter a valid email'
    if (!form.college.trim()) err.college = 'Please enter your college'
    setErrors(err)
    if (Object.keys(err).length === 0) setSent(true)
  }

  return (
    <section id="contact" className="bg-black/40 px-4 py-24 sm:py-28">
      <div className="mx-auto max-w-2xl">
        <SectionHeading
          eyebrow="Contact"
          title="Request a demo"
          text="Tell us about your college and we will get back to you."
        />

        <Reveal delay={0.1} className="relative mt-12">
          {sent ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative overflow-hidden rounded-2xl border border-green-400/30 bg-green-400/5 p-10 text-center"
            >
              <Confetti />
              <CheckCircle2 className="mx-auto text-green-400" size={48} />
              <h3 className="mt-4 text-xl font-bold">Thank you, {form.name}!</h3>
              <p className="mt-2 text-gray-400">We have received your request.</p>
            </motion.div>
          ) : (
            <form
              onSubmit={submit}
              noValidate
              className="space-y-4 rounded-2xl border border-white/10 bg-card/80 p-6 backdrop-blur sm:p-8"
            >
              <div>
                <input name="name" value={form.name} onChange={change} placeholder="Your name" aria-label="Your name" className={field} />
                <FieldError text={errors.name} />
              </div>
              <div>
                <input name="email" value={form.email} onChange={change} placeholder="Email address" aria-label="Email address" className={field} />
                <FieldError text={errors.email} />
              </div>
              <div>
                <input name="college" value={form.college} onChange={change} placeholder="College name" aria-label="College name" className={field} />
                <FieldError text={errors.college} />
              </div>
              <textarea
                name="message"
                value={form.message}
                onChange={change}
                rows="4"
                placeholder="Message (optional)"
                aria-label="Message"
                className={field}
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand py-3.5 font-bold text-ink shadow-lg shadow-brand/20"
              >
                Send Request <Send size={16} />
              </motion.button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  )
}
