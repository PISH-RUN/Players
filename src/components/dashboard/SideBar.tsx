import React, { useEffect, useState } from 'react';
import { Layout, Menu, Avatar, Popover, Button } from 'antd';
import {
  AppstoreOutlined,
  CheckSquareOutlined,
  UserOutlined,
  SettingOutlined,
  BellOutlined,
  SecurityScanOutlined,
} from '@ant-design/icons';
import { Logo } from '../common/Logo';
import { DashboardMenuItem } from './DashboardMenuItem';
import './styles/SideBar.less';
import { useAuth } from 'contexts/auth/auth';
import { useLocation } from 'react-router-dom';
import AvatarImage from 'public/images/avatar-sample.png';

const { Sider } = Layout;

const menuKeys = ['main', 'tasks', 'users', 'adminTasks', 'settings'];

export const SideBar = (): JSX.Element => {
  const { isManager, participant, setLogout } = useAuth();
  const [selectedKey, setSelectedKey] = useState<string>('');
  const { pathname } = useLocation();

  const { firstName, lastName } = participant?.users_permissions_user || {};

  console.log(participant);

  useEffect(() => {
    if (pathname) {
      setSelectedKey(menuKeys.find((menuKey: string) => pathname.includes(menuKey)) || '');
    }
  }, [pathname]);

  const logoutMenu = (
    <Button type="link" onClick={() => setLogout()} key="1">
      خروج
    </Button>
  );

  return (
    <Sider style={{ minHeight: '100vh' }} collapsed theme="light">
      <Logo />
      <Menu mode="inline" defaultSelectedKeys={['main']} selectedKeys={[selectedKey]}>
        <DashboardMenuItem
          key="main"
          icon={<AppstoreOutlined style={{ fontSize: '18px', marginTop: '5px' }} />}
          route="main"
        >
          خلاصه آمار سفر
        </DashboardMenuItem>
        <DashboardMenuItem
          key="tasks"
          icon={<CheckSquareOutlined style={{ fontSize: '18px', marginTop: '5px' }} />}
          route="tasks"
        >
          وظایف
        </DashboardMenuItem>
        <DashboardMenuItem
          key="users"
          icon={<UserOutlined style={{ fontSize: '18px', marginTop: '5px' }} />}
          route="users"
        >
          همراهان سفر
        </DashboardMenuItem>
        {isManager && (
          <DashboardMenuItem
            key="adminTasks"
            icon={<SecurityScanOutlined style={{ fontSize: '18px', marginTop: '5px' }} />}
            route="adminTasks"
          >
            تسک های تیم شما
          </DashboardMenuItem>
        )}
        <DashboardMenuItem
          key="settings"
          icon={<SettingOutlined style={{ fontSize: '18px', marginTop: '5px' }} />}
          route="settings"
        >
          تنظیمات
        </DashboardMenuItem>
      </Menu>
      <Menu mode="inline" selectable={false}>
        <Menu.Item icon={<BellOutlined style={{ fontSize: '18px' }} />} />
        <Popover placement="leftBottom" content={logoutMenu} trigger="click" title={`${firstName} ${lastName}`}>
          <Menu.Item className="avatar" icon={<Avatar src={AvatarImage} />} />
        </Popover>
      </Menu>
    </Sider>
  );
};
