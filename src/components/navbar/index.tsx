import React, { FC } from 'react';
import { Header, Menu } from 'semantic-ui-react';

type FixedLocation = 'left' | 'top' | 'right' | 'bottom';

interface NavbarProps {
  fixed: FixedLocation;
}

const Navbar: FC<NavbarProps> = ({ fixed }) => {
  return (
    <>
      <Menu inverted borderless fixed={fixed}>
        <Menu.Item>
          <Header inverted as="h2">
            <Header.Content>
              Duckbot
              <Header.Subheader
                style={{
                  display: 'inline-block',
                  marginLeft: '2px',
                }}
              >
                Dashboard
              </Header.Subheader>
            </Header.Content>
          </Header>
        </Menu.Item>
      </Menu>
    </>
  );
};

export default Navbar;
