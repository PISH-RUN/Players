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
import CircleIcon from '@mui/icons-material/CircleTwoTone';

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
  // {
  //   title: 'دسته های شغلی',
  //   path: '/panel/job-categories',
  //   icon: <AssignmentIcon />,
  //   subItems: [
  //     {
  //       title: 'تست1',
  //       path: '',
  //     },
  //   ],
  // },
  {
    title: 'مدیریت کاربران',
    path: '/panel/users',
    icon: <GroupIcon />,
  },
  {
    title: 'لیست سوالات',
    path: '/panel/questions',
    icon: <CircleIcon fontSize="small" />,
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
      {navLinks.map(({ title, path, icon }, i) => (
        <ListItemButton title={title} path={path} icon={icon} key={i} />
      ))}
      <Divider />
      <ListItemButton title="خروج" icon={<LogoutIcon />} key="logout" onClick={() => logout()} />
    </List>
  );
};

export default Navbar;
