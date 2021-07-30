import { Container, Segment, Image as SImage, Header } from 'semantic-ui-react';
import styled from 'styled-components';

export const HeaderLogo = styled(Header)`
  span {
    font-weight: normal;
    font-size: 0.9em;
  }
`;

export const LandingPageContainer = styled.div`
  height: 100vh;
  padding: 0;
  margin: 0;
`;

export const LandingSegment = styled(Segment)`
  display: flex;
  flex-direction: column;
  padding: 1em 0em;
  height: 100vh;
`;
export const LandingContent = styled(Container)`
  flex: 1;
  justify-content: center;
`;

export const ContentWrapper = styled.div`
  vertical-align: middle;
  position: relative;
  margin-top: 10rem;
  flex: 1;
`;

export const DuckAvatar = styled(SImage)`
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
`;
