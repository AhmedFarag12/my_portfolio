import React, { useCallback, useRef } from 'react'
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion'

/**
 * Nudges its child toward the cursor while hovered, then springs back.
 * Renders a plain wrapper span so it can hold buttons or links.
 */
const Magnetic = ({ children, strength = 0.35, className = '' }) => {
  const ref = useRef(null)
  const reduced = usePrefersReducedMotion()

  const onMouseMove = useCallback(
    (e) => {
      const el = ref.current
      if (!el || reduced) return
      const rect = el.getBoundingClientRect()
      const dx = e.clientX - (rect.left + rect.width / 2)
      const dy = e.clientY - (rect.top + rect.height / 2)
      el.style.transform = `translate3d(${dx * strength}px, ${dy * strength}px, 0)`
    },
    [strength, reduced]
  )

  const reset = useCallback(() => {
    const el = ref.current
    if (el) el.style.transform = 'translate3d(0, 0, 0)'
  }, [])

  return (
    <span
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={reset}
      className={`inline-block will-change-transform transition-transform duration-300 ease-out ${className}`}
    >
      {children}
    </span>
  )
}

export default Magnetic
