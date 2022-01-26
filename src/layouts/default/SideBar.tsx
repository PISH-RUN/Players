import React, { FunctionComponent } from 'react';
import { Stack, Avatar } from '@mui/material';
import Menu from './components/menu';
import NavBar from './components/navbar';

type Props = {};

const style = {
  root: {
    width: 256,
    backgroundColor: '#fff',
    p: '20px 16px',
    borderRight: '1px solid #e5e5e5',
    minHeight: '100vh',
    height: '100%',
    boxSizing: 'border-box',
  },
  avatar: {
    width: 60,
    height: 60,
  },
};

const SideBar: FunctionComponent<Props> = () => {
  return (
    <Stack sx={style.root} spacing={1}>
      <Avatar alt="avatar" src={''} sx={style.avatar} />
      <Menu userName={'علی سوری'} />
      <NavBar />
    </Stack>
  );
};

export default SideBar;
