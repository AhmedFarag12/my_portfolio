import React, { useEffect, useState } from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { animateScroll } from 'react-scroll'

/** Floating button that appears once you are well past the hero. */
const BackToTop = () => {
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const onScroll = () => setShown(window.scrollY > window.innerHeight * 0.9)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      type="button"
      onClick={() => animateScroll.scrollToTop({ duration: 600, smooth: true })}
      aria-label="Back to top"
      className={`fixed bottom-6 right-6 z-40 grid h-12 w-12 place-items-center rounded-full border border-accent/50 bg-navy-light/80 text-accent backdrop-blur-md transition-all duration-300 hover:bg-accent/15 hover:shadow-glow ${
        shown ? 'opacity-100 translate-y-0' : 'pointer-events-none opacity-0 translate-y-4'
      }`}
    >
      <HiArrowNarrowRight className="-rotate-90 text-lg" />
    </button>
  )
}

export default BackToTop
