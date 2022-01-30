import React, { useState } from 'react';
import { SideBar } from 'components/dashboard/SideBar'
import { Wrapper } from 'components/common/Wrapper'
import { Layout as LayoutComponent } from 'antd'
import { Outlet } from 'react-router-dom';

const Layout = () => {
  const [selectedKey, setSelectedKey] = useState<string>('');

  return (
    <Wrapper>
      <LayoutComponent>
        <SideBar selectedKey={selectedKey} />
        <LayoutComponent.Content style={{position: 'relative', height: '100vh', overflowX: "hidden" }}>
          <Outlet />
        </LayoutComponent.Content>
      </LayoutComponent>
    </Wrapper>
  )
}

export default Layout;
