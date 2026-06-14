import React from 'react'
import Reveal from './Reveal'

const stats = [
  { value: '3+', label: 'Years coding' },
  { value: '10+', label: 'Projects built' },
  { value: '5+', label: 'Team collaborations' },
]

const About = () => {
  return (
    <div name="about" className="w-full bg-navy text-slatey py-24">
      <div className="max-w-[1100px] mx-auto px-6">
        <Reveal>
          <h2 className="section-heading">
            <span className="section-num">01.</span>
            About me
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-10 items-start">
          <Reveal className="md:col-span-2 space-y-4 leading-relaxed">
            <p>
              Hi, I&apos;m <span className="text-slatey-light font-semibold">Ahmed</span> —
              nice to meet you. I work as a <span className="text-accent">back-end developer</span> focused
              on PHP &amp; Laravel, building reliable APIs and the systems behind the products people use.
            </p>
            <p>
              I have enough experience to take on large projects, and I&apos;ve collaborated in
              many teams. Alongside that, I&apos;ve created plenty of my own projects from scratch —
              from restaurant apps to hospital and reservation systems.
            </p>
            <p>Here are a few technologies I&apos;ve been working with recently:</p>
            <ul className="grid grid-cols-2 gap-2 font-mono text-sm">
              {['PHP', 'Laravel', 'JavaScript', 'React', 'REST APIs', 'Python'].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <span className="text-accent">▹</span>
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={150} className="glass p-6">
            <div className="space-y-6">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="text-3xl font-bold gradient-text">{s.value}</p>
                  <p className="text-sm text-slatey">{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  )
}

export default About
