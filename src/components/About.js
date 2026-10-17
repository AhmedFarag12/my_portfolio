import React from 'react'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import Reveal from './Reveal'
import Counter from './Counter'

const stats = [
  { value: 2, suffix: '+', label: 'Years in the industry' },
  { value: 12, suffix: '+', label: 'Projects delivered' },
  { value: 2, suffix: '', label: 'Companies worked with' },
]

const tech = ['PHP', 'Laravel', 'Node.js', 'REST APIs', 'MySQL', 'Docker', 'Nginx', 'AWS']

const About = () => {
  return (
    <section id="about" className="w-full bg-navy text-slatey py-24">
      <div className="max-w-[1100px] mx-auto px-6">
        <Reveal>
          <h2 className="section-heading">
            <span className="section-num">01.</span>
            About me
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-10 items-start">
          <Reveal direction="left" className="md:col-span-2 space-y-4 leading-relaxed">
            <p>
              Hi, I&apos;m <span className="text-slatey-light font-semibold">Ahmed</span> —
              a <span className="text-accent">Software &amp; DevOps Engineer</span> focused on designing and
              building efficient, scalable and reliable server-side applications.
            </p>
            <p>
              I work day to day in PHP &amp; Laravel — shaping database schemas, building RESTful
              APIs and applying clean architecture so the code stays reusable, testable and
              maintainable. I also build on Node.js and Express when a project calls for it.
            </p>
            <p>
              I hold a <span className="text-slatey-light">BSc in Computer Science</span> and I&apos;m
              committed to continuous learning and to shipping high-quality solutions in
              collaborative, fast-paced teams.
            </p>
            <p>Here are a few technologies I&apos;ve been working with recently:</p>
            <ul className="flex flex-wrap gap-2 font-mono text-sm">
              {tech.map((t) => (
                <li
                  key={t}
                  className="group flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/60 hover:text-slatey-light hover:shadow-glow"
                >
                  <span className="text-accent transition-transform duration-300 group-hover:translate-x-0.5">▹</span>
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal direction="right" delay={150} className="glass p-6 transition-colors duration-300 hover:border-accent/30">
            <div className="space-y-6">
              {stats.map((s) => (
                <div key={s.label}>
                  <Counter
                    value={s.value}
                    suffix={s.suffix}
                    className="block text-3xl font-bold gradient-text"
                  />
                  <p className="text-sm text-slatey">{s.label}</p>
                </div>
              ))}

              <p className="flex items-center gap-2 border-t border-white/10 pt-5 font-mono text-sm text-slatey-dark">
                <HiOutlineLocationMarker className="text-accent" />
                Cairo, Egypt
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default About
