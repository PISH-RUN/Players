import React from 'react';
import { Box, Grid } from '@mui/material';
import SideBar from './SideBar';
import { Outlet } from 'react-router-dom';

const DefaultLayout: React.ComponentType = ({ children }) => {
  return (
    <>
      <Grid container>
        <Grid item>
          <SideBar />
        </Grid>
        <Grid item xs>
          <Box sx={{ p: 2 }}>
            <Outlet />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default DefaultLayout;
