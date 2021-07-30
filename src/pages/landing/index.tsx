import React, { FormEvent } from 'react';
import { Button, Menu } from 'semantic-ui-react';

import {
  LandingSegment,
  LandingContent,
  LandingPageContainer,
  ContentWrapper,
  DuckAvatar,
  HeaderLogo,
} from './styles';

import { API_AUTH_URL } from '../../constants';

const LandingPage: React.FC = () => {
  const authenticate = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.location.href = API_AUTH_URL;
  };

  return (
    <>
      <LandingPageContainer>
        <LandingSegment vertical inverted>
          <Menu inverted borderless>
            <Menu.Item>
              <HeaderLogo as="h3">
                Duckbot<span>Dashboard</span>
              </HeaderLogo>
            </Menu.Item>
            <Menu.Item position="right">
              <Button onClick={authenticate} content="Login" as="a" inverted />
            </Menu.Item>
          </Menu>
          <LandingContent text textAlign="center">
            <ContentWrapper>
              <DuckAvatar src="src/assets/duck.jpg" size="medium" circular />
            </ContentWrapper>
          </LandingContent>
        </LandingSegment>
      </LandingPageContainer>
    </>
  );
};

export default LandingPage;
