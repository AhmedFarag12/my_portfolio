import React from 'react'
import useInView from '../hooks/useInView'

/**
 * Fades/slides children in once they scroll into view.
 * Usage: <Reveal delay={150} direction="left"> ...content... </Reveal>
 */
const Reveal = ({ children, delay = 0, direction = 'up', className = '', as: Tag = 'div' }) => {
  const [ref, inView] = useInView({ threshold: 0.15 })

  return (
    <Tag
      ref={ref}
      data-dir={direction}
      className={`reveal ${inView ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  )
}

export default Reveal
