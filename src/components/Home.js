import React, { useCallback, useRef } from 'react'
import { HiArrowNarrowRight, HiOutlineDocumentDownload } from 'react-icons/hi'
import { Link } from 'react-scroll'
import Magnetic from './Magnetic'
import useTypewriter from '../hooks/useTypewriter'
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion'

const ROLES = ['back-end systems', 'REST APIs', 'Laravel apps', 'Node.js services', 'Docker deployments', 'cloud infrastructure']
const longestRole = ROLES.reduce((a, b) => (b.length > a.length ? b : a))

const Home = () => {
  const sectionRef = useRef(null)
  const typed = useTypewriter(ROLES)
  const reduced = usePrefersReducedMotion()

  // Cursor spotlight — CSS variables only, so no re-render per mouse move.
  const onMouseMove = useCallback(
    (e) => {
      const el = sectionRef.current
      if (!el || reduced) return
      const rect = el.getBoundingClientRect()
      el.style.setProperty('--spot-x', `${e.clientX - rect.left}px`)
      el.style.setProperty('--spot-y', `${e.clientY - rect.top}px`)
    },
    [reduced]
  )

  return (
    <section
      id="home"
      ref={sectionRef}
      onMouseMove={onMouseMove}
      className="spotlight relative w-full min-h-screen bg-navy overflow-hidden"
    >
      {/* Ambient glow background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="grid-bg absolute inset-0 opacity-[0.35]" />
        <div className="absolute -top-32 -left-24 w-[480px] h-[480px] bg-accent/20 rounded-full blur-[140px] animate-drift" />
        <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-indigo-500/10 rounded-full blur-[140px] animate-pulseGlow" />
      </div>

      {/* Container */}
      <div className="relative max-w-[1100px] mx-auto px-6 xl:px-8 pt-28 pb-20 flex flex-col justify-center min-h-screen">
        <p className="font-mono text-accent mb-4 animate-fadeUp" style={{ animationDelay: '0ms' }}>
          Hi, my name is
        </p>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-slatey-light animate-fadeUp" style={{ animationDelay: '100ms' }}>
          Ahmed Farag.
        </h1>

        {/* The hidden copy holds the longest role so the typing never reflows the page */}
        <h2 className="relative mt-2 text-3xl sm:text-5xl lg:text-6xl font-bold text-slatey animate-fadeUp" style={{ animationDelay: '200ms' }}>
          <span className="invisible" aria-hidden="true">I build {longestRole}</span>
          <span className="absolute inset-0">
            I build{' '}
            <span className="gradient-text">{typed}</span>
            <span className="ml-1 inline-block w-[3px] h-[0.85em] translate-y-[0.1em] bg-accent animate-blink" aria-hidden="true" />
          </span>
        </h2>

        <p className="mt-6 max-w-[640px] text-slatey leading-relaxed animate-fadeUp" style={{ animationDelay: '300ms' }}>
          I&apos;m a Software &amp; DevOps Engineer based in Cairo, Egypt, specialised in PHP &amp; Laravel
          and Node.js. I design and build efficient, scalable server-side applications —
          clean architecture, solid database schemas and RESTful APIs.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4 animate-fadeUp" style={{ animationDelay: '400ms' }}>
          <Magnetic>
            <Link to="work" smooth={true} offset={-100} duration={500} className="btn-primary group">
              View my work
              <HiArrowNarrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </Magnetic>
          <Magnetic>
            <Link to="contact" smooth={true} offset={-100} duration={500} className="btn-ghost">
              Get in touch
            </Link>
          </Magnetic>
          <Magnetic>
            <a
              href={`${process.env.PUBLIC_URL}/Ahmed-Farag-CV.pdf`}
              target="_blank"
              rel="noreferrer"
              className="btn-ghost group"
            >
              <HiOutlineDocumentDownload className="text-lg transition-transform duration-300 group-hover:translate-y-0.5" />
              Download CV
            </a>
          </Magnetic>
        </div>

        {/* Availability badge */}
        <div className="mt-12 inline-flex items-center gap-2 text-sm text-slatey animate-fadeIn" style={{ animationDelay: '600ms' }}>
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
          </span>
          Available for new opportunities
        </div>
      </div>

      {/* Scroll cue */}
      <Link
        to="about"
        smooth={true}
        offset={-100}
        duration={500}
        aria-label="Scroll to about"
        className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 h-10 w-6 cursor-pointer items-start justify-center rounded-full border border-slatey-dark/70 pt-2 transition-colors hover:border-accent animate-fadeIn"
        style={{ animationDelay: '900ms' }}
      >
        <span className="h-1.5 w-1 rounded-full bg-accent animate-wheel" />
      </Link>
    </section>
  )
}

export default Home
