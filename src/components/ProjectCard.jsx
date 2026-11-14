import { FaGithub } from 'react-icons/fa'
import { FiExternalLink } from 'react-icons/fi'
import './ProjectCard.css'

export default function ProjectCard({ project }) {
  const { title, description, tags, icon: Icon, accent, image, code, live } = project

  // Clicking anywhere on the card opens the live demo, or the code if there is no demo.
  const mainLink = live || code
  const linkClass = (url) =>
    `project-card__link ${url === mainLink ? 'project-card__link--main' : ''}`

  return (
    // The CSS variable --card-accent lets each card have its own color.
    <article
      className={`project-card ${mainLink ? 'project-card--clickable' : ''}`}
      style={{ '--card-accent': accent }}
    >
      <div className="project-card__cover">
        {image ? (
          <img src={image} alt={`Screenshot of ${title}`} loading="lazy" />
        ) : (
          <div className="project-card__placeholder" aria-hidden="true">
            <Icon />
          </div>
        )}
      </div>

      <div className="project-card__body">
        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__description">{description}</p>

        <ul className="project-card__tags">
          {tags.map((tag) => (
            <li key={tag} className="tag">
              {tag}
            </li>
          ))}
        </ul>

        {/* Only render the links row if there is at least one link */}
        {(code || live) && (
          <div className="project-card__links">
            {code && (
              <a href={code} target="_blank" rel="noreferrer" className={linkClass(code)}>
                <FaGithub /> Code
              </a>
            )}
            {live && (
              <a href={live} target="_blank" rel="noreferrer" className={linkClass(live)}>
                <FiExternalLink /> Live demo
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  )
}
