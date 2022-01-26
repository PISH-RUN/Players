import React from 'react';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import Dashboard from '@mui/icons-material/Dashboard';
import MessageIcon from '@mui/icons-material/Message';
import AssignmentIcon from '@mui/icons-material/Assignment';
import GroupIcon from '@mui/icons-material/Group';
import LogoutIcon from '@mui/icons-material/Logout';
import ListItemButton from './ListItemButton';
import { useAuth } from 'modules/auth/auth';

const navLinks = [
  {
    title: 'داشبورد',
    path: '/panel',
    icon: <Dashboard />,
  },
  {
    title: 'شایستگی‌ها',
    path: '/panel/abilities',
    icon: <MessageIcon />,
  },
  {
    title: 'دسته های شغلی',
    path: '/panel/job-categories',
    icon: <AssignmentIcon />,
    subItems: [
      {
        title: 'تست1',
        path: '',
      },
      {
        title: 'تست2',
        path: '',
      },
      {
        title: 'تست3',
        path: '',
      },
    ],
  },
  {
    title: 'مدیریت کاربران',
    path: '/panel/users',
    icon: <GroupIcon />,
  },
];

const Navbar = (): JSX.Element => {
  const { setLogout } = useAuth();

  const logout = () => {
    setLogout();
  };

  return (
    <List
      sx={{
        width: '100%',
        maxWidth: '256px',
      }}
      component="nav"
    >
      {navLinks.map(({ title, path, icon, subItems }, i) => (
        <ListItemButton title={title} path={path} icon={icon} subItems={subItems} key={i} />
      ))}
      <Divider />
      <ListItemButton title="خروج" icon={<LogoutIcon />} key="logout" onClick={() => logout()} />
    </List>
  );
};

export default Navbar;
