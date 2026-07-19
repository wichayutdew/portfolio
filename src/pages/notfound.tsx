import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import INFO from '../data/user';

import '../pages/styles/404.css';

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>{`404 | ${INFO.main.title}`}</title>
      </Helmet>

      <div className="not-found">
        <div className="not-found-title">404</div>
        <div className="not-found-subtitle">
          The page you&apos;re looking for doesn&apos;t exist.
        </div>
        <div className="not-found-link">
          <Link to="/">← Back to Home</Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
