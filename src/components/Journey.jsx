import { FiBookOpen } from 'react-icons/fi'
import { education } from '../data/profile'
import Reveal from './Reveal'
import './Journey.css'

export default function Journey() {
  return (
    <section id="journey" className="section journey">
      <div className="container">
        <Reveal className="section-header">
          <span className="section-label">Journey</span>
          <h2 className="section-title">
            Education & <span className="gradient-text">path</span>
          </h2>
        </Reveal>

        <ol className="timeline">
          {education.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 0.15} className="timeline__item">
              <span className="timeline__dot" aria-hidden="true">
                <FiBookOpen />
              </span>
              <div className="timeline__card">
                <span className="timeline__period">{step.period}</span>
                <h3 className="timeline__title">{step.title}</h3>
                <p className="timeline__place">{step.place}</p>
                <p className="timeline__description">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
