import { useEffect, useState } from 'react'
import usePrefersReducedMotion from './usePrefersReducedMotion'

/**
 * Types a word out, holds it, deletes it, moves to the next one.
 * With reduced motion the first word is simply returned as static text.
 */
const useTypewriter = (words, { typeMs = 85, deleteMs = 40, holdMs = 1800 } = {}) => {
  const reduced = usePrefersReducedMotion()
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (reduced) return undefined

    const word = words[index % words.length]
    const done = !deleting && text === word
    const cleared = deleting && text === ''

    if (done) {
      const t = setTimeout(() => setDeleting(true), holdMs)
      return () => clearTimeout(t)
    }

    if (cleared) {
      setDeleting(false)
      setIndex((i) => (i + 1) % words.length)
      return undefined
    }

    const t = setTimeout(
      () => setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1)),
      deleting ? deleteMs : typeMs
    )
    return () => clearTimeout(t)
  }, [text, deleting, index, words, typeMs, deleteMs, holdMs, reduced])

  return reduced ? words[0] : text
}

export default useTypewriter
