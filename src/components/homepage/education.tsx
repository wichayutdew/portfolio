import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';

import Card from '../common/card';
import { EDUCATION } from '../../data/user';

import './styles/education.css';

const Education = () => {
  return (
    <div className="educations">
      <Card
        icon={faGraduationCap}
        title="Education"
        body={
          <div className="educations-body">
            {EDUCATION.map((edu, idx) => (
              // eslint-disable-next-line @eslint-react/no-array-index-key
              <div className="education" key={edu.school + idx}>
                <div className="education-main">
                  {edu.image && (
                    <img
                      src={edu.image}
                      alt={edu.school}
                      className="education-image"
                    />
                  )}
                  <div className="education-info">
                    <div className="education-details">
                      <div className="education-title">{edu.school}</div>
                      <div className="education-subtitle">{edu.degree}</div>
                      <div className="education-gpa">GPA: {edu.gpa}</div>
                    </div>
                    <div className="education-meta">
                      <div className="education-period">{edu.period}</div>
                      <div className="education-location">{edu.location}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        }
      />
    </div>
  );
};

export default Education;
