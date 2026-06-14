import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import Reveal from './Reveal'

const Contact = () => {
  return (
    <div name="contact" className="w-full bg-navy-deep text-slatey py-24">
      <div className="max-w-[700px] mx-auto px-6">
        <Reveal className="text-center">
          <p className="font-mono text-accent mb-3">04. What&apos;s next?</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slatey-light">Get in touch</h2>
          <p className="mt-4 text-slatey max-w-[520px] mx-auto leading-relaxed">
            I&apos;m currently open to new opportunities. Whether you have a question or
            just want to say hi, drop a message below and I&apos;ll get back to you.
          </p>
        </Reveal>

        <Reveal delay={150}>
          <form
            method="POST"
            action="https://getform.io/f/a2d979c6-5974-41d0-8cb2-760b3a004730"
            className="glass mt-10 p-6 sm:p-8 flex flex-col gap-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                className="bg-navy/60 border border-white/10 rounded-lg p-3 text-slatey-light placeholder-slatey-dark focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition"
                type="text"
                placeholder="Your name"
                name="name"
                required
              />
              <input
                className="bg-navy/60 border border-white/10 rounded-lg p-3 text-slatey-light placeholder-slatey-dark focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition"
                type="email"
                placeholder="Your email"
                name="email"
                required
              />
            </div>
            <textarea
              className="bg-navy/60 border border-white/10 rounded-lg p-3 text-slatey-light placeholder-slatey-dark focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition resize-none"
              name="message"
              rows="6"
              placeholder="Your message"
              required
            />
            <button type="submit" className="btn-primary self-center mt-2 group">
              Send message
              <HiArrowNarrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </form>
        </Reveal>
      </div>
    </div>
  )
}

export default Contact
