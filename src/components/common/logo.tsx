import { Link } from 'react-router-dom';

import INFO from '../../data/user';

import './styles/logo.css';

interface LogoProps {
  width: number;
  link?: boolean;
}

const Logo = ({ width, link = true }: LogoProps) => {
  const imageElement = (
    <img src={INFO.main.logo} alt="logo" className="logo" width={width} />
  );

  return link ? <Link to="/">{imageElement}</Link> : imageElement;
};

export default Logo;
