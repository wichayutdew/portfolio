import {
  faCode,
  faDatabase,
  faTools,
  faCoffee,
  faLeaf,
  faServer,
  faTheaterMasks,
  faFlask,
  faSeedling,
  faDharmachakra,
  faCubes,
  faStream,
  faBolt,
  faStar,
  faCloud,
  faCodeBranch,
  faDog,
  faFire,
  faSearch,
  faTerminal,
  faRobot,
  faChartLine,
} from '@fortawesome/free-solid-svg-icons';
import {
  faPython,
  faNodeJs,
  faDocker,
  faGithub,
  faJava,
  faTypescript,
  faReact,
  faGitlab,
} from '@fortawesome/free-brands-svg-icons';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import INFO from '../../data/user';

import './styles/proficiency.css';

const iconMap: Record<string, IconDefinition> = {
  faCode,
  faDatabase,
  faTools,
  faCoffee,
  faLeaf,
  faServer,
  faTheaterMasks,
  faFlask,
  faSeedling,
  faDharmachakra,
  faCubes,
  faStream,
  faBolt,
  faStar,
  faCloud,
  faCodeBranch,
  faDog,
  faFire,
  faSearch,
  faTerminal,
  faRobot,
  faChartLine,
  faPython,
  faNodeJs,
  faDocker,
  faGithub,
  faJava,
  faTypescript,
  faReact,
  faGitlab,
};

const Proficiency = () => {
  return (
    <div className="proficiency">
      {INFO.about.proficiency.map((category) => (
        <div className="proficiency-category" key={category.name}>
          <div className="proficiency-header">
            <div className="proficiency-icon">
              <FontAwesomeIcon icon={iconMap[category.icon]} />
            </div>
            <div className="proficiency-name">{category.name}</div>
          </div>
          <div className="proficiency-items">
            {category.items.map((item) => (
              <div className="proficiency-item" key={item.name}>
                <div className="proficiency-item-icon">
                  <FontAwesomeIcon icon={iconMap[item.icon]} />
                </div>
                <div className="proficiency-item-name">{item.name}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Proficiency;
