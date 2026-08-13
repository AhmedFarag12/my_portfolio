import { useCallback, useRef } from 'react'
import usePrefersReducedMotion from './usePrefersReducedMotion'

/**
 * 3D tilt + cursor-tracked glare for a card.
 * Writes CSS custom properties instead of re-rendering, so the effect stays
 * on the compositor and never trips React on every mouse move.
 *
 * Usage:
 *   const tilt = useTilt()
 *   <div ref={tilt.ref} {...tilt.handlers} className="tilt glare" />
 */
const useTilt = ({ max = 7, scale = 1.03 } = {}) => {
  const ref = useRef(null)
  const reduced = usePrefersReducedMotion()

  const onMouseMove = useCallback(
    (e) => {
      const el = ref.current
      if (!el || reduced) return
      const rect = el.getBoundingClientRect()
      const px = (e.clientX - rect.left) / rect.width
      const py = (e.clientY - rect.top) / rect.height

      el.style.setProperty('--rx', `${(0.5 - py) * 2 * max}deg`)
      el.style.setProperty('--ry', `${(px - 0.5) * 2 * max}deg`)
      el.style.setProperty('--s', scale)
      el.style.setProperty('--mx', `${px * 100}%`)
      el.style.setProperty('--my', `${py * 100}%`)
    },
    [max, scale, reduced]
  )

  const reset = useCallback(() => {
    const el = ref.current
    if (!el) return
    el.style.setProperty('--rx', '0deg')
    el.style.setProperty('--ry', '0deg')
    el.style.setProperty('--s', 1)
  }, [])

  return {
    ref,
    handlers: { onMouseMove, onMouseLeave: reset, onBlur: reset },
  }
}

export default useTilt
