import React from 'react';
import { Box, Typography } from '@mui/material';
import logo from '../../public/images/logos/logoInre512.png';

const style = {
  title: {
    fontWeight: 600,
    width: '95%',
    mb: 10,
  },
  subtitle: {
    color: '#777777',
    paddingBottom: '12px',
  },
};

const LoginSide: React.ComponentType = (): JSX.Element => {
  return (
    <Box>
      <img src={logo} alt="inre" width={180} height={180} />
      <Typography variant="h2" sx={style.title}>
        سامانه سوالات آزمون
      </Typography>
      <Typography variant="body2" sx={style.subtitle}>
        آزمون استخدام بخش خصوصی
      </Typography>
    </Box>
  );
};

export { LoginSide };
