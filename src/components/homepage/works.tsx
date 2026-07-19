import { faBriefcase } from '@fortawesome/free-solid-svg-icons';

import Card from '../common/card';
import { WORKS } from '../../data/user';

import './styles/works.css';

const Works = () => {
  return (
    <div className="works">
      <Card
        icon={faBriefcase}
        title="Work"
        body={
          <div className="works-body">
            {WORKS.map((work, idx) => (
              <div className="work" key={work.company + idx}>
                <img
                  src={work.image}
                  alt={work.company}
                  className="work-image"
                />
                <div className="work-title">{work.company}</div>
                <div className="work-subtitle">{work.role}</div>
                <div className="work-duration">{work.duration}</div>
              </div>
            ))}
          </div>
        }
      />
    </div>
  );
};

export default Works;
