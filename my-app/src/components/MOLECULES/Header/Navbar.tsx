

import { Header, Menu } from 'semantic-ui-react';
import Logo from '../../ATOMS/Logo/Logo';
import { ButtonsHeadDiscover, ButtonsHeadJoin } from '../../ATOMS/Buttons/Buttons';

import './navbar.css';
import './navbar-laptop.css';

const Navbar = () => {
  return (
    <Header className="navbar">
      <Menu.Item className="navbar-left">
        <Logo />
      </Menu.Item>
      <Menu.Menu position="right" className="navbar-right">
        <Menu.Item>
          <ButtonsHeadDiscover />
        </Menu.Item>
        <Menu.Item>
          <ButtonsHeadJoin />
        </Menu.Item>
      </Menu.Menu>
    </Header>
  );
};

export default Navbar;
