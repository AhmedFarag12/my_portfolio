import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { Link } from 'react-scroll'

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'work', label: 'Work' },
  { id: 'contact', label: 'Contact' },
]

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const handleClick = () => setNav(!nav)
  const closeNav = () => setNav(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
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
          {navLinks.map((link, i) => (
            <li key={link.id}>
              <Link
                to={link.id}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                activeClass="!text-accent"
                className="cursor-pointer px-4 py-2 text-sm text-slatey hover:text-accent transition-colors duration-200"
              >
                <span className="font-mono text-accent/70 mr-1">0{i + 1}.</span>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={handleClick}
          className="md:hidden z-50 text-slatey-light text-xl"
          aria-label="Toggle menu"
        >
          {!nav ? <FaBars /> : <FaTimes />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed inset-0 bg-navy/95 backdrop-blur-lg flex flex-col justify-center items-center gap-8 transition-all duration-300 ${
          nav ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        {navLinks.map((link, i) => (
          <Link
            key={link.id}
            onClick={closeNav}
            to={link.id}
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer text-3xl font-semibold text-slatey-light hover:text-accent transition-colors"
          >
            <span className="font-mono text-accent text-lg mr-2">0{i + 1}.</span>
            {link.label}
          </Link>
        ))}

        <div className="flex gap-6 mt-6 text-2xl text-slatey">
          <a href="https://www.linkedin.com/in/ahmed-farag-2aa7a5203/" className="hover:text-accent transition-colors" aria-label="LinkedIn"><FaLinkedin /></a>
          <a href="https://github.com/AhmedFarag12" className="hover:text-accent transition-colors" aria-label="GitHub"><FaGithub /></a>
          <a href="#contact" className="hover:text-accent transition-colors" aria-label="Email"><HiOutlineMail /></a>
        </div>
      </div>

      {/* Fixed social rail (desktop) */}
      <div className="hidden lg:flex flex-col fixed bottom-0 left-8 items-center gap-5 text-slatey">
        <a href="https://www.linkedin.com/in/ahmed-farag-2aa7a5203/" className="hover:text-accent hover:-translate-y-1 transition-all duration-200" aria-label="LinkedIn"><FaLinkedin size={20} /></a>
        <a href="https://github.com/AhmedFarag12" className="hover:text-accent hover:-translate-y-1 transition-all duration-200" aria-label="GitHub"><FaGithub size={20} /></a>
        <a href="#contact" className="hover:text-accent hover:-translate-y-1 transition-all duration-200" aria-label="Email"><HiOutlineMail size={22} /></a>
        <a href="/" className="hover:text-accent hover:-translate-y-1 transition-all duration-200" aria-label="Resume"><BsFillPersonLinesFill size={20} /></a>
        <span className="w-px h-24 bg-slatey-dark/50" />
      </div>
    </header>
  )
}

export default Navbar
