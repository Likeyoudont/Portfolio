import { FaGithub } from 'react-icons/fa'
import { socials } from '../data/profile'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'
import Reveal from './Reveal'
import './Projects.css'

const github = socials.find((s) => s.label === 'GitHub')

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <Reveal className="section-header projects__header">
          <div>
            <span className="section-label">Projects</span>
            <h2 className="section-title">
              Things I've <span className="gradient-text">built</span>
            </h2>
          </div>
          <a href={github.url} target="_blank" rel="noreferrer" className="btn btn-outline">
            <FaGithub /> All repositories
          </a>
        </Reveal>

        <ul className="projects__grid">
          {projects.map((project, i) => (
            <Reveal as="li" key={project.title} delay={i * 0.1}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
