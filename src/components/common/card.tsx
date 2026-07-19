import type { ReactNode } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

import './styles/card.css';

interface CardProps {
  icon: IconDefinition;
  title: string;
  body: ReactNode;
}

const Card = ({ icon, title, body }: CardProps) => {
  return (
    <div className="card">
      <div className="card-container">
        <div className="card-header">
          <div className="card-icon">
            <FontAwesomeIcon icon={icon} />
          </div>
          <div className="card-title">{title}</div>
        </div>
        <div className="card-body">
          <div className="card-text">{body}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
