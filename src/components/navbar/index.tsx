import React from 'react';
import { Menu } from 'semantic-ui-react';
import { HeaderLogo } from './styles';

const Navbar: React.FC = () => {
  return (
    <>
      <Menu inverted borderless>
        <Menu.Item>
          <HeaderLogo as="h2">
            Duckbot<span>Dashboard</span>
          </HeaderLogo>
        </Menu.Item>
      </Menu>
    </>
  );
};

export default Navbar;
