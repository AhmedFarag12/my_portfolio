import React, { useEffect, useRef } from 'react'

/** Thin accent bar across the top showing how far down the page you are. */
const ScrollProgress = () => {
  const barRef = useRef(null)

  useEffect(() => {
    let frame = null

    const update = () => {
      frame = null
      const bar = barRef.current
      if (!bar) return
      const max = document.documentElement.scrollHeight - window.innerHeight
      const ratio = max > 0 ? window.scrollY / max : 0
      bar.style.transform = `scaleX(${Math.min(Math.max(ratio, 0), 1)})`
    }

    const onScroll = () => {
      if (frame === null) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame !== null) cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <div className="fixed top-0 inset-x-0 h-[3px] z-[60] pointer-events-none" aria-hidden="true">
      <div
        ref={barRef}
        className="h-full origin-left scale-x-0 bg-gradient-to-r from-accent via-sky-400 to-cyan-300 shadow-glow"
      />
    </div>
  )
}

export default ScrollProgress
