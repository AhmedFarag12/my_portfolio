import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div name="home" className="relative w-full min-h-screen bg-navy overflow-hidden">
      {/* Ambient glow background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-24 w-[480px] h-[480px] bg-accent/20 rounded-full blur-[140px] animate-pulseGlow" />
        <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-indigo-500/10 rounded-full blur-[140px] animate-pulseGlow" />
      </div>

      {/* Container */}
      <div className="relative max-w-[1100px] mx-auto px-6 lg:px-8 flex flex-col justify-center min-h-screen">
        <p className="font-mono text-accent mb-4 animate-fadeUp" style={{ animationDelay: '0ms' }}>
          Hi, my name is
        </p>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-slatey-light animate-fadeUp" style={{ animationDelay: '100ms' }}>
          Ahmed Farag.
        </h1>

        <h2 className="mt-2 text-3xl sm:text-5xl lg:text-6xl font-bold text-slatey animate-fadeUp" style={{ animationDelay: '200ms' }}>
          I build <span className="gradient-text">back-end systems</span>.
        </h2>

        <p className="mt-6 max-w-[640px] text-slatey leading-relaxed animate-fadeUp" style={{ animationDelay: '300ms' }}>
          I&apos;m a back-end developer from Egypt specialized in PHP &amp; Laravel.
          I have the experience to take on large projects, work within teams, and ship
          plenty of my own products end-to-end.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4 animate-fadeUp" style={{ animationDelay: '400ms' }}>
          <Link to="work" smooth={true} offset={-70} duration={500} className="btn-primary group">
            View my work
            <HiArrowNarrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
          <Link to="contact" smooth={true} offset={-70} duration={500} className="btn-ghost">
            Get in touch
          </Link>
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
    </div>
  )
}

export default Home
