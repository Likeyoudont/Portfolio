import { MotionConfig } from 'motion/react'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Journey from './components/Journey'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'
import { useTheme } from './hooks/useTheme'

export default function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    // reducedMotion="user" turns off animations for people who disabled them in their OS.
    <MotionConfig reducedMotion="user">
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  )
}
