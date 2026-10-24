import { useEffect, useState } from 'react'

export default function Typewriter({ words }) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[index % words.length]
    let timer

    if (!deleting && text === word) {
      timer = setTimeout(() => setDeleting(true), 1400)
    } else if (deleting && text === '') {
      timer = setTimeout(() => {
        setDeleting(false)
        setIndex((i) => i + 1)
      }, 200)
    } else {
      timer = setTimeout(
        () => setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1)),
        deleting ? 50 : 110
      )
    }

    return () => clearTimeout(timer)
  }, [text, deleting, index, words])

  return (
    <span className="text-brand">
      {text}
      <span className="animate-blink">|</span>
    </span>
  )
}
