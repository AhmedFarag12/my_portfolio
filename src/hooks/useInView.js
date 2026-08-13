import { useEffect, useRef, useState } from 'react'

/**
 * Fires once, the first time the element scrolls into view.
 * Shared by <Reveal>, the stat counters and the skill meters.
 */
const useInView = ({ threshold = 0.15, rootMargin = '0px' } = {}) => {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    if (typeof IntersectionObserver === 'undefined') {
      setInView(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.unobserve(node)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold, rootMargin])

  return [ref, inView]
}

export default useInView
