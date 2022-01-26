import React from 'react';
import { Box, BoxProps as BoxComponentProps } from '@mui/material';

export type BoxProps = {} & BoxComponentProps;

export const BoxLvl1 = ({ children, ...rest }: BoxProps) => (
  <Box {...rest} sx={{ pl: 2, ...rest.sx }}>
    {children}
  </Box>
);

export const BoxLvl2 = ({ children, ...rest }: BoxProps) => (
  <Box {...rest} sx={{ pl: 10, ...rest.sx }}>
    {children}
  </Box>
);
