import React, { useState } from 'react';
import { SideBar } from 'components/dashboard/SideBar';
import { Wrapper } from 'components/common/Wrapper';
import { Layout as LayoutComponent } from 'antd';
import { Outlet } from 'react-router-dom';
import { Earth } from '../components/earth/Earth';
import { useLocation } from 'react-router-dom';
import PinProvider, { usePin } from 'contexts/pin';

export type EarthStatusProps = {
  path: string;
  status: any;
};

const EarthStatuses: Array<EarthStatusProps> = [{
  path: '/dashboard/main',
  status: 'dashboard',
}, {
  path: '/dashboard/tasks',
  status: 'tasks',
}, {
  path: '/dashboard/users',
  status: 'persons',
}, {
  path: '/dashboard/adminTasks',
  status: 'tasks',
}];

const EarthContainer = () => {
  const { pathname } = useLocation();
  const { pins } = usePin();
  const earthStatus = EarthStatuses.find(s => pathname.indexOf(s.path) > -1)?.status;

  return !!earthStatus ? <Earth status={earthStatus} pins={pins} /> : <></>;
};
const Layout = () => {
  const [selectedKey, setSelectedKey] = useState<string>('');

  return (
    <PinProvider>
      <Wrapper>
        <LayoutComponent>
          <SideBar selectedKey={selectedKey} />
          <LayoutComponent.Content style={{ position: 'relative', height: '100vh', overflowX: 'hidden' }}>
            <EarthContainer />
            <Outlet />
          </LayoutComponent.Content>
        </LayoutComponent>
      </Wrapper>
    </PinProvider>
  );
};

export default Layout;
