import { faBook } from '@fortawesome/free-solid-svg-icons';

import Card from '../common/card';
import { PUBLICATIONS } from '../../data/user';

import './styles/publications.css';

const Publications = () => {
  return (
    <div className="publications">
      <Card
        icon={faBook}
        title="Publications"
        body={
          <div className="publications-body">
            {PUBLICATIONS.map((pub, idx) => (
              // eslint-disable-next-line @eslint-react/no-array-index-key
              <div className="publication" key={pub.conference + idx}>
                <div className="publication-main">
                  <div className="publication-info">
                    <div className="publication-details">
                      {pub.url ? (
                        <a
                          className="publication-title"
                          href={pub.url}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {pub.conference}
                        </a>
                      ) : (
                        <div className="publication-title">
                          {pub.conference}
                        </div>
                      )}
                      <div className="publication-subtitle">{pub.project}</div>
                    </div>
                  </div>
                </div>
                {pub.detail && (
                  <div className="publication-detail">{pub.detail}</div>
                )}
              </div>
            ))}
          </div>
        }
      />
    </div>
  );
};

export default Publications;
