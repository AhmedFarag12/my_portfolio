import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'

const Footer = () => {
  return (
    <footer name="footer" className="w-full bg-navy border-t border-white/10">
      <div className="max-w-[1100px] mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-sm text-slatey">© 2026 Ahmed Farag</p>

        <div className="flex gap-6 text-xl text-slatey">
          <a href="https://www.linkedin.com/in/ahmed-farag-2aa7a5203/" className="hover:text-accent hover:-translate-y-0.5 transition-all" aria-label="LinkedIn"><FaLinkedin /></a>
          <a href="https://github.com/AhmedFarag12" className="hover:text-accent hover:-translate-y-0.5 transition-all" aria-label="GitHub"><FaGithub /></a>
          <a href="#contact" className="hover:text-accent hover:-translate-y-0.5 transition-all" aria-label="Email"><HiOutlineMail /></a>
        </div>

        <p className="font-mono text-xs text-slatey-dark">Built with React &amp; Tailwind</p>
      </div>
    </footer>
  )
}

export default Footer
