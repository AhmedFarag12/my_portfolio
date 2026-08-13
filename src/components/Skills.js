import React from 'react'
import Reveal from './Reveal'
import useTilt from '../hooks/useTilt'
import useInView from '../hooks/useInView'

import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import JavaScript from '../assets/javascript.png'
import react from '../assets/react.png'
import Github from '../assets/github.png'
import PHP from '../assets/php.svg'
import Laravel from '../assets/laravel.svg'
import Python from '../assets/python.png'
import Node from '../assets/node.png'
import Mongo from '../assets/mongo.png'
import Tailwind from '../assets/tailwind.png'
import Firebase from '../assets/firebase.png'

// Levels are a self-assessment — tweak the numbers freely.
const skills = [
  { name: 'PHP', img: PHP, level: 92 },
  { name: 'Laravel', img: Laravel, level: 90 },
  { name: 'Node.js', img: Node, level: 80 },
  { name: 'JavaScript', img: JavaScript, level: 82 },
  { name: 'React', img: react, level: 75 },
  { name: 'MongoDB', img: Mongo, level: 72 },
  { name: 'Python', img: Python, level: 70 },
  { name: 'HTML', img: HTML, level: 95 },
  { name: 'CSS', img: CSS, level: 88 },
  { name: 'Tailwind', img: Tailwind, level: 85 },
  { name: 'Firebase', img: Firebase, level: 68 },
  { name: 'GitHub', img: Github, level: 85 },
]

const stack = [
  { group: 'Languages', items: ['PHP', 'JavaScript', 'Python'] },
  {
    group: 'Back-end',
    items: ['Laravel', 'Node.js', 'Express.js', 'REST APIs', 'MVC', 'Queue Workers', 'WebSockets', 'Cron Jobs'],
  },
  {
    group: 'Front-end',
    items: ['HTML', 'CSS', 'Bootstrap', 'Tailwind CSS', 'AJAX', 'React.js', 'Vue.js', 'Livewire'],
  },
  { group: 'Databases', items: ['MySQL', 'MongoDB', 'Redis'] },
  {
    group: 'DevOps & Deployment',
    items: ['Docker', 'Docker Compose', 'Nginx', 'Apache', 'Vercel', 'Git', 'GitHub', 'AWS'],
  },
  {
    group: 'Integrations & Services',
    items: ['Payment Gateways', 'Twilio', 'Firebase', 'RabbitMQ', 'FFmpeg', 'Video/Camera', 'Postman'],
  },
]

const marquee = [
  'PHP', 'Laravel', 'Node.js', 'Express.js', 'REST APIs', 'MySQL', 'MongoDB', 'Redis',
  'Docker', 'Nginx', 'AWS', 'RabbitMQ', 'WebSockets', 'React.js', 'Vue.js', 'Livewire',
  'Tailwind CSS', 'Twilio', 'Firebase', 'Postman',
]

const SkillCard = ({ skill }) => {
  const tilt = useTilt()
  const [meterRef, meterInView] = useInView({ threshold: 0.4 })

  return (
    <div
      ref={tilt.ref}
      {...tilt.handlers}
      className="tilt glare group glass relative overflow-hidden p-6 flex flex-col items-center gap-4 transition-colors duration-300 hover:border-accent/50 hover:shadow-glow"
    >
      <img
        className="w-16 h-16 object-contain transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1"
        src={skill.img}
        alt={`${skill.name} logo`}
      />
      <p className="font-medium text-slatey-light">{skill.name}</p>

      {/* Proficiency meter — fills the first time the card scrolls into view */}
      <div ref={meterRef} className="w-full">
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-gradient-to-r from-accent to-cyan-300 transition-[width] duration-1000 ease-out"
            style={{ width: meterInView ? `${skill.level}%` : '0%' }}
          />
        </div>
        <p className="mt-2 text-center font-mono text-xs text-slatey-dark opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          {skill.level}%
        </p>
      </div>
    </div>
  )
}

const Skills = () => {
  return (
    <section id="skills" className="w-full bg-navy-deep text-slatey py-24 overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-6">
        <Reveal>
          <h2 className="section-heading">
            <span className="section-num">02.</span>
            Skills
          </h2>
          <p className="font-mono text-accent/80 -mt-4 mb-10">{'//'} hover a card to see the level</p>
        </Reveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {skills.map((skill, i) => (
            <Reveal key={skill.name} delay={i * 50} direction="zoom">
              <SkillCard skill={skill} />
            </Reveal>
          ))}
        </div>

        {/* Full stack, grouped the way the résumé lists it */}
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {stack.map((group, i) => (
            <Reveal key={group.group} delay={i * 70}>
              <div className="glass h-full p-5 transition-colors duration-300 hover:border-accent/30">
                <h3 className="font-mono text-sm text-accent">{group.group}</h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs text-slatey transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/60 hover:text-accent"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Infinite tech marquee — pauses on hover */}
      <div className="marquee-wrap relative mt-16 flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <div className="marquee flex w-max animate-marquee gap-4 pr-4">
          {[...marquee, ...marquee].map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="whitespace-nowrap rounded-full border border-white/10 bg-white/[0.03] px-5 py-2 font-mono text-sm text-slatey transition-colors duration-300 hover:border-accent/60 hover:text-accent"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
