import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { HiOutlineExternalLink } from 'react-icons/hi'
import Reveal from './Reveal'

import PizzaImg from '../assets/pizza.jpg'
import Order from '../assets/order.png'
import Hospital from '../assets/hospital.jpg'
import Reservation from '../assets/Reservation.png'
import Api from '../assets/api.png'
import Livewire from '../assets/livewire.png'

const projects = [
  {
    title: 'Restaurant App',
    tag: 'React',
    img: PizzaImg,
    demo: 'https://ahmedfarag12.github.io/resturant-app/',
    code: 'https://github.com/AhmedFarag12/resturant-app',
  },
  {
    title: 'Laravel CRUD Livewire',
    tag: 'Laravel · Livewire',
    img: Livewire,
    code: 'https://github.com/AhmedFarag12/crud_livewire',
  },
  {
    title: 'Laravel Order App',
    tag: 'Laravel',
    img: Order,
    code: 'https://github.com/AhmedFarag12/pizza-order-laravel',
  },
  {
    title: 'Hospital App',
    tag: 'Laravel',
    img: Hospital,
    code: 'https://github.com/AhmedFarag12/Hospital-App-Laravel',
  },
  {
    title: 'Reservation System',
    tag: 'PHP',
    img: Reservation,
    code: 'https://github.com/AhmedFarag12/Hospital-reservation-system-PHP-',
  },
  {
    title: 'CRUD API',
    tag: 'Laravel · REST',
    img: Api,
    code: 'https://github.com/AhmedFarag12/api_crud',
  },
]

const Work = () => {
  return (
    <div name="work" className="w-full bg-navy text-slatey py-24">
      <div className="max-w-[1100px] mx-auto px-6">
        <Reveal>
          <h2 className="section-heading">
            <span className="section-num">03.</span>
            Some things I&apos;ve built
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <div className="group relative rounded-2xl overflow-hidden border border-white/10 shadow-card h-[260px]">
                {/* Background image */}
                <div
                  className="absolute inset-0 bg-center bg-cover transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${p.img})` }}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/70 to-navy/10 group-hover:from-navy/95 group-hover:via-navy/85 transition-all duration-500" />

                {/* Content */}
                <div className="relative h-full p-5 flex flex-col justify-end">
                  <p className="font-mono text-xs text-accent mb-1">{p.tag}</p>
                  <h3 className="text-xl font-bold text-slatey-light">{p.title}</h3>

                  <div className="flex gap-3 mt-4 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    {p.demo && (
                      <a
                        href={p.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-slatey-light hover:text-accent transition-colors"
                      >
                        <HiOutlineExternalLink /> Demo
                      </a>
                    )}
                    <a
                      href={p.code}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-slatey-light hover:text-accent transition-colors"
                    >
                      <FaGithub /> Code
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Work
