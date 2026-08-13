import React, { useMemo, useState } from 'react'
import { FaGithub, FaAppStoreIos, FaGooglePlay } from 'react-icons/fa'
import { HiOutlineExternalLink } from 'react-icons/hi'
import Reveal from './Reveal'
import useTilt from '../hooks/useTilt'

import PizzaImg from '../assets/pizza.jpg'
import Order from '../assets/order.png'
import Hospital from '../assets/hospital.jpg'
import Reservation from '../assets/Reservation.png'
import Api from '../assets/api.png'
import Livewire from '../assets/livewire.png'
import MasFm from '../assets/work-mas-fm.jpg'
import Nesba from '../assets/work-nesba.jpg'
import Elearning from '../assets/work-elearning.jpg'
import Airgate from '../assets/work-airgate.jpg'
import LaravelLogo from '../assets/laravel.svg'
import NodeLogo from '../assets/node.png'

// How each link renders: icon + label.
const LINK_KINDS = {
  code: { icon: FaGithub, label: 'Code' },
  live: { icon: HiOutlineExternalLink, label: 'Live site' },
  ios: { icon: FaAppStoreIos, label: 'App Store' },
  android: { icon: FaGooglePlay, label: 'Google Play' },
}

const projects = [
  // Company work — from the résumé.
  {
    title: 'MAS-FM',
    kind: 'work',
    img: MasFm,
    tags: ['Laravel', 'REST APIs'],
    links: [{ type: 'live', href: 'https://mas-fm.nahrdev.com/' }],
    summary:
      'Modular home-services platform with REST APIs for a mobile app and an admin dashboard: OTP/Sanctum auth, booking workflow, technician assignment, order tracking, loyalty points and RBAC.',
  },
  {
    title: 'Nesba — Education Management',
    kind: 'work',
    img: Nesba,
    tags: ['Laravel'],
    links: [{ type: 'live', href: 'https://nessba.nahrdev.com/nessba-links' }],
    summary:
      'Educational management platform handling student enrollment, academic progress tracking, course scheduling and certification workflows, plus payment tracking.',
  },
  {
    title: 'E-learning & Consultation',
    kind: 'work',
    img: Elearning,
    fit: 'portrait',
    tags: ['Laravel', 'REST APIs'],
    links: [
      { type: 'ios', href: 'https://apps.apple.com/kw/app/empowerment-center/id6754603437' },
    ],
    summary:
      'High-availability e-learning system serving both live and pre-recorded courses, with Zoom API integration for virtual classrooms and a digital library for videos, documents and quizzes.',
  },
  {
    title: 'Airgate — Pilgrim Logistics',
    kind: 'work',
    img: Airgate,
    fit: 'portrait',
    tags: ['Laravel'],
    links: [
      {
        type: 'android',
        href: 'https://play.google.com/store/apps/details?id=com.techvillage.airgate',
      },
    ],
    summary:
      'Tracking system for a shipping company covering pilgrim movement, accommodation assignment and baggage, with real-time reporting dashboards over sensitive tracking data.',
  },
  {
    title: 'Multi-Vendor Marketplace',
    kind: 'work',
    img: LaravelLogo,
    fit: 'logo',
    tags: ['Laravel', 'PHP'],
    links: [{ type: 'code', href: 'https://github.com/AhmedFarag12/laravel_store' }],
    summary:
      'Large-scale e-commerce marketplace where independent vendors manage their own stores and products, separated by a role-based permission system for super admins and vendors.',
  },
  {
    title: 'Node.js CRM System',
    kind: 'work',
    img: NodeLogo,
    fit: 'logo',
    tags: ['Node.js', 'REST APIs'],
    links: [{ type: 'code', href: 'https://github.com/AhmedFarag12/node-crm-application' }],
    summary:
      'CRM for customers and sales built on Node.js, Express and MongoDB — a full REST API for users, customers and leads with JWT auth, password hashing and admin/sales/user roles.',
  },

  // Personal projects — public on GitHub.
  {
    title: 'Restaurant App',
    kind: 'personal',
    tags: ['React'],
    img: PizzaImg,
    links: [
      { type: 'live', href: 'https://ahmedfarag12.github.io/resturant-app/' },
      { type: 'code', href: 'https://github.com/AhmedFarag12/resturant-app' },
    ],
  },
  {
    title: 'Laravel CRUD Livewire',
    kind: 'personal',
    tags: ['Laravel'],
    img: Livewire,
    links: [{ type: 'code', href: 'https://github.com/AhmedFarag12/crud_livewire' }],
  },
  {
    title: 'Laravel Order App',
    kind: 'personal',
    tags: ['Laravel'],
    img: Order,
    links: [{ type: 'code', href: 'https://github.com/AhmedFarag12/pizza-order-laravel' }],
  },
  {
    title: 'Hospital App',
    kind: 'personal',
    tags: ['Laravel'],
    img: Hospital,
    links: [{ type: 'code', href: 'https://github.com/AhmedFarag12/Hospital-App-Laravel' }],
  },
  {
    title: 'Reservation System',
    kind: 'personal',
    tags: ['PHP'],
    img: Reservation,
    links: [{ type: 'code', href: 'https://github.com/AhmedFarag12/Hospital-reservation-system-PHP-' }],
  },
  {
    title: 'CRUD API',
    kind: 'personal',
    tags: ['Laravel', 'REST APIs'],
    img: Api,
    links: [{ type: 'code', href: 'https://github.com/AhmedFarag12/api_crud' }],
  },
]

const FILTERS = ['All', 'Laravel', 'Node.js', 'React', 'PHP', 'REST APIs']

const ProjectLinks = ({ links = [], className = '' }) => (
  <div className={`flex flex-wrap gap-2 ${className}`}>
    {links.map(({ type, href }) => {
      const { icon: Icon, label } = LINK_KINDS[type]
      return (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs font-medium text-slatey-light transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/60 hover:text-accent"
        >
          <Icon /> {label}
        </a>
      )
    })}
  </div>
)

const Tags = ({ tags, className = '' }) => (
  <div className={`flex flex-wrap gap-1.5 ${className}`}>
    {tags.map((tag) => (
      <span
        key={tag}
        className="rounded-full border border-accent/30 bg-accent/10 px-2 py-0.5 font-mono text-[11px] text-accent"
      >
        {tag}
      </span>
    ))}
  </div>
)

// A cover is either a real screenshot (fills the card), a tall phone shot
// (anchored to the top) or a bare tech logo (floated over the gradient).
const coverStyle = (project) => {
  const image = { backgroundImage: `url(${project.img})`, backgroundRepeat: 'no-repeat' }
  if (project.fit === 'logo') {
    return { ...image, backgroundSize: 'auto 42%', backgroundPosition: 'center 28%' }
  }
  return {
    ...image,
    backgroundSize: 'cover',
    backgroundPosition: project.fit === 'portrait' ? 'center top' : 'center',
  }
}

const ProjectCard = ({ project, index }) => {
  const tilt = useTilt({ max: 5, scale: 1.02 })

  return (
    <div
      ref={tilt.ref}
      {...tilt.handlers}
      style={{ animationDelay: `${index * 70}ms` }}
      className="tilt group relative flex h-[300px] animate-popIn flex-col justify-end overflow-hidden rounded-2xl border border-white/10 shadow-card transition-colors duration-300 hover:border-accent/40"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-navy-light via-navy to-navy-deep" />
      <div
        className="absolute inset-0 saturate-[0.85] transition-transform duration-700 group-hover:scale-110"
        style={coverStyle(project)}
      />
      <div
        className={`absolute inset-0 transition-colors duration-500 ${
          project.fit === 'logo'
            ? 'bg-navy/55 group-hover:bg-navy/40'
            : 'bg-navy/75 group-hover:bg-navy/60'
        }`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/80 to-navy/25" />
      {/* Cursor-tracked glare */}
      <div className="glare pointer-events-none absolute inset-0" />

      <div className="relative flex flex-col p-5">
        <h3 className="text-lg font-bold text-slatey-light transition-transform duration-300 group-hover:-translate-y-0.5">
          {project.title}
        </h3>

        {project.summary && (
          <p className="clamp-3 mt-1.5 text-[13px] leading-relaxed text-slatey">
            {project.summary}
          </p>
        )}

        <Tags tags={project.tags} className="mt-3" />
        <ProjectLinks links={project.links} className="mt-2.5" />
      </div>
    </div>
  )
}

const Work = () => {
  const [filter, setFilter] = useState('All')

  const visible = useMemo(
    () => (filter === 'All' ? projects : projects.filter((p) => p.tags.includes(filter))),
    [filter]
  )

  const countFor = (name) =>
    name === 'All' ? projects.length : projects.filter((p) => p.tags.includes(name)).length

  return (
    <section id="work" className="w-full bg-navy text-slatey py-24">
      <div className="max-w-[1100px] mx-auto px-6">
        <Reveal>
          <h2 className="section-heading">
            <span className="section-num">03.</span>
            Some things I&apos;ve built
          </h2>
        </Reveal>

        {/* Filters */}
        <Reveal delay={80}>
          <div className="mb-8 flex flex-wrap gap-2">
            {FILTERS.map((name) => {
              const active = filter === name
              return (
                <button
                  key={name}
                  type="button"
                  onClick={() => setFilter(name)}
                  aria-pressed={active}
                  className={`rounded-full border px-4 py-1.5 text-sm transition-all duration-300 ${
                    active
                      ? 'border-accent bg-accent/15 text-accent shadow-glow'
                      : 'border-white/10 text-slatey hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent'
                  }`}
                >
                  {name}
                  <span className="ml-1.5 font-mono text-xs opacity-60">{countFor(name)}</span>
                </button>
              )
            })}
          </div>
        </Reveal>

        {/* Re-keying by filter replays the pop-in animation on every switch */}
        <div key={filter} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work
