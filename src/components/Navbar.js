import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { Link } from 'react-scroll'

/* num === null renders without a number, keeping the nav in sync with the
   "01. About / 02. Skills / 03. Work / 04. What's next" section headings. */
const navLinks = [
  { id: 'home', label: 'Home', num: null },
  { id: 'about', label: 'About', num: '01' },
  { id: 'skills', label: 'Skills', num: '02' },
  { id: 'work', label: 'Work', num: '03' },
  { id: 'contact', label: 'Contact', num: '04' },
]

const RESUME = `${process.env.PUBLIC_URL}/Ahmed-Farag-CV.pdf`

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const handleClick = () => setNav(!nav)
  const closeNav = () => setNav(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Prevent the page from scrolling behind the open mobile menu
  useEffect(() => {
    document.body.style.overflow = nav ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [nav])

  return (
    /* The header's backdrop-blur makes it a containing block for fixed children,
       so the mobile overlay and the social rail must live outside of it. */
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled && !nav
            ? 'h-[64px] bg-navy/80 backdrop-blur-md border-b border-white/10 shadow-card'
            : 'h-[80px] bg-transparent'
        }`}
      >
        <div className="max-w-[1100px] mx-auto h-full px-6 flex items-center justify-between">
          {/* Logo / name */}
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="cursor-pointer font-mono text-xl font-bold text-slatey-light"
          >
            <span className="text-accent">{'</'}</span>
            AF
            <span className="text-accent">{'>'}</span>
          </Link>

          {/* Desktop menu */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link
                  to={link.id}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  activeClass="is-active !text-accent"
                  className="nav-link"
                >
                  {link.num && <span className="font-mono text-accent/70 mr-1">{link.num}.</span>}
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile toggle */}
          <button
            onClick={handleClick}
            className="md:hidden text-slatey-light text-xl"
            aria-label="Toggle menu"
            aria-expanded={nav}
          >
            {!nav ? <FaBars /> : <FaTimes />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-navy/95 backdrop-blur-lg flex flex-col justify-center items-center gap-8 transition-opacity duration-300 ${
          nav ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.id}
            onClick={closeNav}
            to={link.id}
            smooth={true}
            offset={-100}
            duration={500}
            className="cursor-pointer text-3xl font-semibold text-slatey-light hover:text-accent transition-colors"
          >
            {link.num && <span className="font-mono text-accent text-lg mr-2">{link.num}.</span>}
            {link.label}
          </Link>
        ))}

        <div className="flex gap-6 mt-6 text-2xl text-slatey">
          <a href="https://www.linkedin.com/in/ahmed-farag-2aa7a5203/" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors" aria-label="LinkedIn"><FaLinkedin /></a>
          <a href="https://github.com/AhmedFarag12" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors" aria-label="GitHub"><FaGithub /></a>
          <a href="mailto:ahmed.faragg1211@gmail.com" className="hover:text-accent transition-colors" aria-label="Email"><HiOutlineMail /></a>
          <a href={RESUME} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors" aria-label="Résumé"><BsFillPersonLinesFill /></a>
        </div>
      </div>

      {/* Fixed social rail — xl only, so it never overlaps the page container */}
      <div className="hidden xl:flex flex-col fixed bottom-0 left-8 z-40 items-center gap-5 text-slatey">
        <a href="https://www.linkedin.com/in/ahmed-farag-2aa7a5203/" target="_blank" rel="noreferrer" className="hover:text-accent hover:-translate-y-1 transition-all duration-200" aria-label="LinkedIn"><FaLinkedin size={20} /></a>
        <a href="https://github.com/AhmedFarag12" target="_blank" rel="noreferrer" className="hover:text-accent hover:-translate-y-1 transition-all duration-200" aria-label="GitHub"><FaGithub size={20} /></a>
        <a href="mailto:ahmed.faragg1211@gmail.com" className="hover:text-accent hover:-translate-y-1 transition-all duration-200" aria-label="Email"><HiOutlineMail size={22} /></a>
        <a href={RESUME} target="_blank" rel="noreferrer" className="hover:text-accent hover:-translate-y-1 transition-all duration-200" aria-label="Résumé"><BsFillPersonLinesFill size={20} /></a>
        <span className="w-px h-24 bg-slatey-dark/50" />
      </div>
    </>
  )
}

export default Navbar
