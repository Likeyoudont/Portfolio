import { useEffect, useState } from 'react'
import { FiArrowUpRight, FiCheck, FiCopy, FiMail } from 'react-icons/fi'
import { profile, socials } from '../data/profile'
import Reveal from './Reveal'
import './Contact.css'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
    } catch {
      // Clipboard can fail (old browser, no permission): fall back to the mail app.
      window.location.href = `mailto:${profile.email}`
    }
  }

  // Reset the "Copied!" message after 2 seconds.
  useEffect(() => {
    if (!copied) return
    const timer = setTimeout(() => setCopied(false), 2000)
    return () => clearTimeout(timer)
  }, [copied])

  return (
    <section id="contact" className="section">
      <div className="container">
        <Reveal className="contact">
          <span className="section-label">Contact</span>
          <h2 className="section-title contact__title">
            Let's build <span className="gradient-text">something</span> together.
          </h2>
          <p className="contact__text">
            I'm open to internships, collaborations and freelance projects. Send me an email
            or reach out on any of the platforms below.
          </p>

          <div className="contact__email">
            <a href={`mailto:${profile.email}`} className="btn btn-primary">
              <FiMail /> Send an email
            </a>
            <button type="button" className="btn btn-outline" onClick={copyEmail}>
              {copied ? <FiCheck /> : <FiCopy />}
              {copied ? 'Copied!' : profile.email}
            </button>
            {/* Announces the copy to screen readers */}
            <span className="sr-only" aria-live="polite">
              {copied ? 'Email copied to clipboard' : ''}
            </span>
          </div>

          <ul className="contact__socials">
            {socials.map(({ label, handle, url, icon: Icon }) => (
              <li key={label}>
                <a href={url} target="_blank" rel="noreferrer" className="contact__social">
                  <Icon className="contact__social-icon" aria-hidden="true" />
                  <span>
                    <strong>{label}</strong>
                    <small>{handle}</small>
                  </span>
                  <FiArrowUpRight className="contact__social-arrow" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
