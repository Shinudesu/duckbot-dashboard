import React, { FC } from 'react';
import { Menu, Segment, Sidebar } from 'semantic-ui-react';

import Navbar from '../../components/navbar';
import { DashboardContainer } from './styles';

const VerticalSidebar: FC = () => {
  return (
    <Sidebar as={Menu} inverted visible vertical direction="left">
      <Menu.Item>Discord Info Here</Menu.Item>
      <Menu.Item>General</Menu.Item>
      <Menu.Item>Auto Role Join</Menu.Item>
      <Menu.Item>Reminders</Menu.Item>
      <Menu.Item>Twitter Webhooks</Menu.Item>
    </Sidebar>
  );
};

const DashboardPage: FC = () => {
  return (
    <>
      <DashboardContainer>
        <Navbar fixed="top" />
        <Sidebar.Pushable
          as={Segment}
          vertical
          style={{ overflow: 'hidden', marginTop: '52px' }}
        >
          <VerticalSidebar />
          <Sidebar.Pusher>
            <Segment vertical>Content Here</Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </DashboardContainer>
    </>
  );
};

export default DashboardPage;
