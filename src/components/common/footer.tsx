import { Link } from 'react-router-dom';

import './styles/footer.css';

const COPYRIGHT_NAME = 'Wichayut Phongphanpanya';
const CURRENT_YEAR = new Date().getFullYear();

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-links">
        <ul className="footer-nav-link-list">
          <li className="footer-nav-link-item">
            <Link to="/">Home</Link>
          </li>
          <li className="footer-nav-link-item">
            <Link to="/about">About</Link>
          </li>
          <li className="footer-nav-link-item">
            <Link to="/projects">Projects</Link>
          </li>
          <li className="footer-nav-link-item">
            <Link to="/articles">Articles</Link>
          </li>
          <li className="footer-nav-link-item">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>

      <div className="footer-credits">
        <div className="footer-credits-text">
          © {CURRENT_YEAR} {COPYRIGHT_NAME}. All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
