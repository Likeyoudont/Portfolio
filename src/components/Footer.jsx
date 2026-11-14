import { FiArrowUp } from 'react-icons/fi'
import { profile } from '../data/profile'
import './Footer.css'

// Computed once when the file loads, not on every render.
const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>
          © {year} {profile.firstName} {profile.lastName}. Built with React.
        </p>
        <a href="#home" className="icon-btn" aria-label="Back to top">
          <FiArrowUp />
        </a>
      </div>
    </footer>
  )
}
