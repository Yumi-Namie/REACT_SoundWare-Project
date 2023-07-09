import { Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png';

import './logo.css';

const Logo = () => {
  return (
    <Link to="/" className="logo-link">
      <div className="logo-container">
        <Image className="logo" src={logo} alt="Logo" />
        <div className="logo-title">
          <span className="title-text">SoundWave</span>
        </div>
      </div>
    </Link>
  );
};

export default Logo;