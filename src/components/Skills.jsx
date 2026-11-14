import { motion } from 'motion/react'
import { FiGlobe } from 'react-icons/fi'
import { skillGroups, spokenLanguages } from '../data/profile'
import Reveal from './Reveal'
import './Skills.css'

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <Reveal className="section-header">
          <span className="section-label">Skills</span>
          <h2 className="section-title">
            What I <span className="gradient-text">work with</span>
          </h2>
        </Reveal>

        <div className="skills__grid">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 0.1} className="skills__card">
              <h3 className="skills__card-title">{group.title}</h3>
              <ul className="skills__list">
                {group.skills.map(({ name, icon: Icon }) => (
                  <li key={name} className="skills__chip">
                    <Icon aria-hidden="true" />
                    {name}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}

          <Reveal delay={0.3} className="skills__card skills__card--languages">
            <h3 className="skills__card-title">
              <FiGlobe aria-hidden="true" /> Spoken languages
            </h3>
            <ul className="languages">
              {spokenLanguages.map((lang) => (
                <li key={lang.name} className="language">
                  <div className="language__row">
                    <span className="language__name">{lang.name}</span>
                    <span className="language__level">{lang.level}</span>
                  </div>
                  <div className="language__track">
                    {/* The bar grows from 0 to its width when it scrolls into view */}
                    <motion.div
                      className="language__fill"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${lang.percent}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
