import { createTheme } from '@mui/material/styles';
// import { createTypography, responseTypography } from './createTypography';
import { palettes } from './variables/_color';
import { createOverrides } from './createOverrides';

// declare module '@mui/material/styles' {
//   interface Theme {
//     status: {
//       danger: string;
//     };
//   }
//   // allow configuration using `createTheme`
//   interface ThemeOptions {
//     status?: {
//       danger?: string;
//     };
//   }
// }

// export enum Direction {
//   rtl = 'rtl',
//   ltr = 'ltr',
// }
//
// export type ExamTheme = {
//   direction?: Direction;
// };

export const theme = createTheme({
  direction: 'rtl',
  ...palettes,
  // overrides: { ...createOverrides() },
  // typography: createTypography(),
});

export const examTheme = () => {
  // theme.direction = direction;
  return theme;
  // return responseTypography(theme);
};
