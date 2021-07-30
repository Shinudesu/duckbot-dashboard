import React, { FC } from 'react';
import { Container, Menu, Segment, Sidebar } from 'semantic-ui-react';

import { DashboardContainer } from './styles';

const VerticalSidebar: FC = () => {
  return (
    <Sidebar as={Menu} inverted width="thin" visible vertical direction="left">
      <Menu.Item>Test</Menu.Item>
    </Sidebar>
  );
};

const DashboardPage: FC = () => {
  return (
    <>
      <DashboardContainer>
        <Sidebar.Pushable as={Segment} vertical style={{ overflow: 'hidden' }}>
          <VerticalSidebar />
          <Sidebar.Pusher>
            <Segment vertical>
              <Container>Dashboard</Container>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </DashboardContainer>
    </>
  );
};

export default DashboardPage;
