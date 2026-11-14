import { useEffect, useState } from 'react'

// Returns the id of the section currently in the middle of the screen.
// The navbar uses it to highlight the matching link.
export function useActiveSection(ids) {
  const [active, setActive] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      // Shrinks the "viewport" to a thin band in the middle of the screen,
      // so only one section counts as visible at a time.
      { rootMargin: '-45% 0px -55% 0px' },
    )

    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    // Cleanup: stop observing when the component unmounts.
    return () => observer.disconnect()
  }, [ids])

  return active
}
