import { profile, spokenLanguages } from '../data/profile'
import { projects } from '../data/projects'
import Reveal from './Reveal'
import './About.css'

// Numbers are computed from the data, so they update on their own.
const stats = [
  { value: projects.length, label: 'Projects built' },
  { value: spokenLanguages.length, label: 'Languages spoken' },
  { value: '2nd', label: 'Year at OFPPT' },
]

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <Reveal className="section-header">
          <span className="section-label">About me</span>
          <h2 className="section-title">
            From studying words <br />
            to <span className="gradient-text">writing code</span>.
          </h2>
        </Reveal>

        <div className="about__grid">
          <div className="about__text">
            {profile.about.map((paragraph, i) => (
              <Reveal as="p" key={i} delay={i * 0.1}>
                {paragraph}
              </Reveal>
            ))}
          </div>

          <ul className="about__stats">
            {stats.map((stat, i) => (
              <Reveal as="li" key={stat.label} delay={i * 0.1} className="about__stat">
                <span className="about__stat-value gradient-text">{stat.value}</span>
                <span className="about__stat-label">{stat.label}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
