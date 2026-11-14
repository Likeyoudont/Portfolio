import { motion } from 'motion/react'
import { FiArrowRight, FiCode, FiMapPin } from 'react-icons/fi'
import photo from '../assets/profile.jpg'
import { profile, socials } from '../data/profile'
import './Hero.css'

// Each child of the text column appears one after the other.
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__bg" aria-hidden="true" />

      <div className="container hero__inner">
        <motion.div className="hero__text" variants={container} initial="hidden" animate="show">
          <motion.p variants={item} className="hero__location">
            <FiMapPin /> {profile.location}
          </motion.p>

          <motion.h1 variants={item} className="hero__title">
            Hi, I'm {profile.firstName}
            <br />
            <span className="gradient-text">{profile.role}</span>
          </motion.h1>

          <motion.p variants={item} className="hero__tagline">
            {profile.tagline}
          </motion.p>

          <motion.div variants={item} className="hero__ctas">
            <a href="#projects" className="btn btn-primary">
              View my work <FiArrowRight />
            </a>
            <a href="#contact" className="btn btn-outline">
              Contact me
            </a>
          </motion.div>

          <motion.ul variants={item} className="hero__socials">
            {socials.map(({ label, url, icon: Icon }) => (
              <li key={label}>
                <a href={url} target="_blank" rel="noreferrer" className="icon-btn" aria-label={label}>
                  <Icon />
                </a>
              </li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero__photo-frame">
            <img
              src={photo}
              alt={`Portrait of ${profile.firstName} ${profile.lastName}`}
              className="hero__photo"
              width="688"
              height="860"
            />
          </div>

          <motion.div
            className="hero__badge"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span className="hero__badge-icon">
              <FiCode />
            </span>
            <span>
              <strong>React · Laravel · PHP</strong>
              <small>Full-stack</small>
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
