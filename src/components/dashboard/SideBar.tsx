import React from 'react';
import { Layout, Menu, Avatar } from 'antd';
import { AppstoreOutlined, CheckSquareOutlined, UserOutlined, SettingOutlined, BellOutlined } from '@ant-design/icons';
import { Logo } from '../common/Logo';
import { DashboardMenuItem } from './DashboardMenuItem';
import './styles/SideBar.less';

const { Sider } = Layout;

export const SideBar = (props: {selectedKey: string}): JSX.Element => {
    return (
        <Sider style={{ minHeight: '100vh'}} collapsed theme="light">
            <Logo />
            <Menu
                mode="inline"
                defaultSelectedKeys={['main']}
                selectedKeys={[props.selectedKey]}
            >
                <DashboardMenuItem key="main" icon={<AppstoreOutlined style={{fontSize: '18px', marginTop: '5px'}} />} route="main">
                    خلاصه آمار سفر
                </DashboardMenuItem>
                <DashboardMenuItem key="tasks" icon={<CheckSquareOutlined style={{fontSize: '18px', marginTop: '5px'}} />} route="tasks">
                    وظایف
                </DashboardMenuItem>
                <DashboardMenuItem key="users" icon={<UserOutlined style={{fontSize: '18px', marginTop: '5px'}} />} route="users">
                    همراهان سفر
                </DashboardMenuItem>
                <DashboardMenuItem key="settings" icon={<SettingOutlined style={{fontSize: '18px', marginTop: '5px'}} />} route="settings">
                    تنظیمات
                </DashboardMenuItem>
            </Menu>
            <Menu
                mode="inline"
                selectable={false}
            >
                <Menu.Item icon={<BellOutlined style={{fontSize: '18px'}} />} />
                <Menu.Item className="avatar" icon={<Avatar src="https://joeschmoe.io/api/v1/random" />} />
            </Menu>
        </Sider>
    )
}
