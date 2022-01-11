import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export type Responsive = {
  mdDown: boolean;
  smDown: boolean;
  xsDown: boolean;
};

export const useResponsive = (): Responsive => {
  const theme = useTheme();

  return {
    mdDown: useMediaQuery<boolean>(theme.breakpoints.down('md')),
    smDown: useMediaQuery<boolean>(theme.breakpoints.down('sm')),
    xsDown: useMediaQuery<boolean>(theme.breakpoints.down('xs')),
  };
};
