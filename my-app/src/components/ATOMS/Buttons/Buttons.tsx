import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

import twitter from "../../../assets/twitter.svg"
import facebook from "../../../assets/facebook.svg"

import "./buttons.css"

const ButtonsHeadDiscover = () => {
  return (
    <div className="link-discover">
      <Link to="/discover">
        <Button className="header-button">Discover</Button>
      </Link>
    </div>
  );
};

const ButtonsHeadJoin= () => {
  return (
    <div className="link-join">
      <Link to="/join">
        <Button className="header-button">Join</Button>
      </Link>
    </div>
  );
};

const ButtonJoin = () => {
  return (
    <Button className="join-now" as={Link} to="/join" primary>
      Join Now
    </Button>
  );
};

const ButtonAbout = () => {
  return (
    <div className="btn-about footer-button">
      <Link to="">About Us</Link>
    </div>
  )
};

const ButtonContact = () => {
  return (
    <div className="btn-contact footer-button">
      <Link to="">Contact</Link>
    </div>
  )
};

const ButtonTwitter = () => {
  return (
    <div className='btn-twitter media-btn'>
      <img src={twitter} alt="logo-twitter" />
      <Link to="https://twitter.com/?lang=es/" className="footer-button">
        Twitter
      </Link>
    </div>
  )
};

const ButtonFacebook = () => {
  return (
    <div className='btn-facebook media-btn'>
      <img src={facebook} alt="" />
      <Link to="https://es-es.facebook.com/" className="footer-button">
        Facebook
      </Link>
    </div>
  )
};

export { ButtonsHeadDiscover, ButtonsHeadJoin, ButtonJoin, ButtonAbout, ButtonContact, ButtonTwitter, ButtonFacebook };
