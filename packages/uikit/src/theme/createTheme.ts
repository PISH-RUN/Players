import { createTheme } from '@mui/material/styles';
import { Theme } from '@mui/system';
import { responseTypography, createTypography } from './createTypography';
import { palettes } from './variables/_color';

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

export enum Direction {
  rtl = 'rtl',
  ltr = 'ltr',
}

export type ExamTheme = {
  direction?: Direction;
};

export const theme: Theme = createTheme({
  direction: 'rtl',
  ...palettes,
  // overrides: { ...createOverrides() },
  typography: createTypography(),
});

export const examTheme = ({ direction = Direction.rtl }: ExamTheme) => {
  theme.direction = direction;
  return responseTypography(theme);
};
