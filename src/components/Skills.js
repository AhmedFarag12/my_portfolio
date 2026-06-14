import React from 'react'
import Reveal from './Reveal'

import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import JavaScript from '../assets/javascript.png'
import react from '../assets/react.png'
import Github from '../assets/github.png'
import PHP from '../assets/php.png'
import Laravel from '../assets/laravel.png'
import Python from '../assets/python.png'

const skills = [
  { name: 'HTML', img: HTML },
  { name: 'CSS', img: CSS },
  { name: 'JavaScript', img: JavaScript },
  { name: 'React', img: react },
  { name: 'GitHub', img: Github },
  { name: 'PHP', img: PHP },
  { name: 'Laravel', img: Laravel },
  { name: 'Python', img: Python },
]

const Skills = () => {
  return (
    <div name="skills" className="w-full bg-navy-deep text-slatey py-24">
      <div className="max-w-[1100px] mx-auto px-6">
        <Reveal>
          <h2 className="section-heading">
            <span className="section-num">02.</span>
            Skills
          </h2>
          <p className="font-mono text-accent/80 -mt-4 mb-10">{'//'} my technologies</p>
        </Reveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {skills.map((skill, i) => (
            <Reveal key={skill.name} delay={i * 60}>
              <div className="group glass p-8 flex flex-col items-center gap-4 transition-all duration-300 hover:-translate-y-2 hover:border-accent/50 hover:shadow-glow">
                <img
                  className="w-16 h-16 object-contain transition-transform duration-300 group-hover:scale-110"
                  src={skill.img}
                  alt={`${skill.name} logo`}
                />
                <p className="font-medium text-slatey-light">{skill.name}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills
