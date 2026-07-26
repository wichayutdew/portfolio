import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faNpm } from '@fortawesome/free-brands-svg-icons';

import './styles/project.css';

interface ProjectProps {
  logo: string;
  title: string;
  description: string;
  actions: Array<{
    label: 'GitHub' | 'npm';
    link: string;
  }>;
}

const actionIcons = {
  GitHub: faGithub,
  npm: faNpm,
};

const Project = ({ logo, title, description, actions }: ProjectProps) => {
  return (
    <div className="project">
      <div className="project-container">
        <div className="project-logo">
          <img src={logo} alt={`${title} logo`} />
        </div>
        <div className="project-title">{title}</div>
        <div className="project-description">{description}</div>
        <div className="project-actions">
          {actions.map((action) => (
            <a
              key={action.label}
              className="project-action"
              href={action.link}
              target="_blank"
              rel="noreferrer"
              aria-label={`${action.label}: ${title}`}
              title={action.label}
            >
              <FontAwesomeIcon icon={actionIcons[action.label]} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
