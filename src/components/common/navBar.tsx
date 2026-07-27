import { Link } from 'react-router-dom';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './styles/navBar.css';
import { useTheme } from './theme';

interface NavBarProps {
  active: string;
}

const NavBar = ({ active }: NavBarProps) => {
  const { theme, toggleTheme } = useTheme();
  const toggleLabel =
    theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';

  return (
    <div className="nav-container">
      <nav className="navbar">
        <div className="nav-background">
          <ul className="nav-list">
            <li className={active === 'home' ? 'nav-item active' : 'nav-item'}>
              <Link to="/">Home</Link>
            </li>
            <li className={active === 'about' ? 'nav-item active' : 'nav-item'}>
              <Link to="/about">About</Link>
            </li>
            <li
              className={active === 'projects' ? 'nav-item active' : 'nav-item'}
            >
              <Link to="/projects">Projects</Link>
            </li>
            <li
              className={active === 'articles' ? 'nav-item active' : 'nav-item'}
            >
              <Link to="/articles">Articles</Link>
            </li>
            <li
              className={active === 'contact' ? 'nav-item active' : 'nav-item'}
            >
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <button
            type="button"
            className="theme-toggle"
            aria-label={toggleLabel}
            onClick={toggleTheme}
          >
            <FontAwesomeIcon icon={theme === 'dark' ? faSun : faMoon} />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
