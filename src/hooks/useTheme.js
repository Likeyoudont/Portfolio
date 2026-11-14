import { useEffect, useState } from 'react'

export function useTheme() {
  // The small script in index.html already chose the theme (saved choice or
  // system preference) before React loaded, so we just read it from <html>.
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme || 'dark')

  // Every time the theme changes: update <html data-theme="..."> and save it.
  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))

  return { theme, toggleTheme }
}
