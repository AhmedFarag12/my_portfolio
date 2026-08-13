import React, { useState } from 'react'
import {
  HiArrowNarrowRight,
  HiCheckCircle,
  HiExclamationCircle,
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
} from 'react-icons/hi'
import Reveal from './Reveal'

const ENDPOINT = 'https://getform.io/f/a2d979c6-5974-41d0-8cb2-760b3a004730'
const MESSAGE_MAX = 600

const CHANNELS = [
  {
    href: 'mailto:ahmed.faragg1211@gmail.com',
    icon: HiOutlineMail,
    label: 'Email',
    value: 'ahmed.faragg1211@gmail.com',
  },
  {
    href: 'tel:+201012519946',
    icon: HiOutlinePhone,
    label: 'Phone',
    value: '+20 101 251 9946',
  },
  {
    href: 'https://www.google.com/maps/place/Cairo,+Egypt',
    icon: HiOutlineLocationMarker,
    label: 'Location',
    value: 'Cairo, Egypt',
  },
]

/** Input that floats its label up once the field has focus or content. */
const Field = ({ id, label, type = 'text', value, onChange, textarea = false, ...rest }) => {
  const shared =
    'peer w-full rounded-lg border border-white/10 bg-navy/60 px-3 pt-6 pb-2 text-slatey-light placeholder-transparent transition focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent'

  return (
    <div className="relative">
      {textarea ? (
        <textarea
          id={id}
          name={id}
          value={value}
          onChange={onChange}
          placeholder={label}
          className={`${shared} resize-none`}
          {...rest}
        />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={label}
          className={shared}
          {...rest}
        />
      )}
      <label
        htmlFor={id}
        className={`pointer-events-none absolute left-3 top-2 font-mono text-xs text-accent transition-all duration-200 peer-placeholder-shown:text-sm peer-placeholder-shown:text-slatey-dark peer-focus:top-2 peer-focus:translate-y-0 peer-focus:text-xs peer-focus:text-accent ${
          // A tall textarea keeps its resting label near the top; inputs centre it.
          textarea
            ? 'peer-placeholder-shown:top-4'
            : 'peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2'
        }`}
      >
        {label}
      </label>
    </div>
  )
}

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const body = new FormData()
      Object.entries(form).forEach(([key, value]) => body.append(key, value))

      const res = await fetch(ENDPOINT, {
        method: 'POST',
        body,
        headers: { Accept: 'application/json' },
      })

      if (!res.ok) throw new Error(`Request failed with ${res.status}`)

      setStatus('sent')
      setForm({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  const sending = status === 'sending'

  return (
    <section id="contact" className="w-full bg-navy-deep text-slatey py-24">
      <div className="max-w-[700px] mx-auto px-6">
        <Reveal className="text-center">
          <p className="font-mono text-accent mb-3">04. What&apos;s next?</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slatey-light">Get in touch</h2>
          <p className="mt-4 text-slatey max-w-[520px] mx-auto leading-relaxed">
            I&apos;m currently open to new opportunities. Whether you have a question or
            just want to say hi, drop a message below and I&apos;ll get back to you.
          </p>
        </Reveal>

        {/* Direct channels */}
        <Reveal delay={80}>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {CHANNELS.map(({ href, icon: Icon, label, value }) => (
              <a
                key={label}
                href={href}
                className="glass group flex flex-col items-center gap-1 p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-glow"
              >
                <Icon className="text-xl text-accent transition-transform duration-300 group-hover:scale-110" />
                <span className="font-mono text-[11px] uppercase tracking-wider text-slatey-dark">{label}</span>
                <span className="break-words text-[13px] leading-snug text-slatey-light">{value}</span>
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={150}>
          {status === 'sent' ? (
            <div className="glass mt-10 flex animate-popIn flex-col items-center gap-3 p-10 text-center">
              <HiCheckCircle className="text-4xl text-emerald-400" />
              <h3 className="text-xl font-semibold text-slatey-light">Message sent</h3>
              <p className="text-sm text-slatey">Thanks for reaching out — I&apos;ll reply soon.</p>
              <button
                type="button"
                onClick={() => setStatus('idle')}
                className="mt-2 font-mono text-sm text-accent underline-offset-4 hover:underline"
              >
                Send another
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              method="POST"
              action={ENDPOINT}
              className="glass mt-10 flex flex-col gap-4 p-6 sm:p-8"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <Field id="name" label="Your name" value={form.name} onChange={update('name')} required />
                <Field id="email" label="Your email" type="email" value={form.email} onChange={update('email')} required />
              </div>

              <Field
                id="message"
                label="Your message"
                textarea
                rows="6"
                maxLength={MESSAGE_MAX}
                value={form.message}
                onChange={update('message')}
                required
              />

              <div className="flex items-center justify-between font-mono text-xs text-slatey-dark">
                <span
                  className={`flex items-center gap-1.5 transition-opacity ${
                    status === 'error' ? 'text-red-400 opacity-100' : 'opacity-0'
                  }`}
                >
                  <HiExclamationCircle /> Couldn&apos;t send — please try again.
                </span>
                <span className={form.message.length > MESSAGE_MAX - 60 ? 'text-accent' : ''}>
                  {form.message.length}/{MESSAGE_MAX}
                </span>
              </div>

              <button
                type="submit"
                disabled={sending}
                className="btn-primary group mt-2 self-center disabled:cursor-not-allowed disabled:opacity-60"
              >
                {sending ? 'Sending…' : 'Send message'}
                {sending ? (
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-accent/30 border-t-accent" />
                ) : (
                  <HiArrowNarrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                )}
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  )
}

export default Contact
