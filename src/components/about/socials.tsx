import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import INFO from '../../data/user';

import './styles/socials.css';

const Socials = () => {
  return (
    <div className="socials">
      <div className="social">
        <a href={INFO.socials.github} target="_blank" rel="noreferrer">
          <div className="social-icon">
            <FontAwesomeIcon icon={faGithub} />
          </div>
          <div className="social-text">GitHub</div>
        </a>
      </div>

      <div className="social">
        <a href={INFO.socials.linkedin} target="_blank" rel="noreferrer">
          <div className="social-icon">
            <FontAwesomeIcon icon={faLinkedin} />
          </div>
          <div className="social-text">LinkedIn</div>
        </a>
      </div>

      <div className="contact">
        <a href={`mailto:${INFO.main.email}`} target="_blank" rel="noreferrer">
          <div className="contact-icon">
            <FontAwesomeIcon icon={faEnvelope} />
          </div>

          <div className="contact-text">{INFO.main.email}</div>
        </a>
      </div>

      <div className="contact">
        <a href={`tel:${INFO.main.phone}`} rel="noreferrer">
          <div className="contact-icon">
            <FontAwesomeIcon icon={faPhone} />
          </div>

          <div className="contact-text">{INFO.main.phone}</div>
        </a>
      </div>
    </div>
  );
};

export default Socials;
