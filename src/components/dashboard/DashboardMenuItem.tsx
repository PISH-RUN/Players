import React from 'react';
import { Menu, MenuItemProps } from 'antd';
import { useNavigate } from 'react-router-dom';

interface DashboardMenuItemProps extends MenuItemProps {
  route: string;
}

// Change dashboard route on click menu item
export const DashboardMenuItem = (props: DashboardMenuItemProps): JSX.Element => {
  const navigate = useNavigate();

  return (
    <Menu.Item onClick={() => navigate(props.route, {})} {...props}>
      {props.children}
    </Menu.Item>
  );
};
