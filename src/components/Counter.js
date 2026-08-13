import React, { useEffect, useState } from 'react'
import useInView from '../hooks/useInView'
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion'

const easeOut = (t) => 1 - Math.pow(1 - t, 3)

/** Counts up from 0 to `value` the first time it scrolls into view. */
const Counter = ({ value, suffix = '', duration = 1400, className = '' }) => {
  const [ref, inView] = useInView({ threshold: 0.4 })
  const reduced = usePrefersReducedMotion()
  const [shown, setShown] = useState(0)

  useEffect(() => {
    if (!inView) return undefined
    if (reduced) {
      setShown(value)
      return undefined
    }

    let frame
    let startedAt

    const tick = (now) => {
      if (startedAt === undefined) startedAt = now
      const progress = Math.min((now - startedAt) / duration, 1)
      setShown(Math.round(easeOut(progress) * value))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, value, duration, reduced])

  return (
    <span ref={ref} className={className}>
      {shown}
      {suffix}
    </span>
  )
}

export default Counter
