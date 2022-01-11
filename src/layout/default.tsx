import React from 'react';
import { Box, Grid } from '@mui/material';
import SideBar from './SideBar';

const DefaultLayout: React.ComponentType = ({ children }) => {
  return (
    <>
      <Grid container>
        <Grid item>
          <SideBar />
        </Grid>
        <Grid item>
          <Box sx={{ p: 2 }}>{children}</Box>
        </Grid>
      </Grid>
    </>
  );
};

export default DefaultLayout;
