/*
 *  Default textfiled font size
 */
import { Typography } from '@mui/material/styles/createTypography';

export type TypographyProps = {
  [key in keyof Typography]?: string | number;
};

export const defaultTypographyFontSize: TypographyProps = {
  h1: '32px',
  h2: '28px',
  h3: '24px',
  h4: '20px',
  h5: '18px',
  h6: '14px',
  button: '16px',
  subtitle1: '16px',
  subtitle2: '14px',
  body1: '16px',
  body2: '14px',
  caption: '12px',
};

/*
 *  smTypography for small screen responsive mode
 */
export const smTypographyFontSizes: TypographyProps = {
  h1: '29px',
  h2: '25px',
  h3: '20px',
  h4: '18px',
  h5: '16px',
  h6: '13px',
};

/*
 *  xsTypography for small screen responsive mode
 */
export const xsTypographyFontSizes: TypographyProps = {
  h1: '26px',
  h2: '23px',
  h3: '18px',
  h4: '16px',
  h5: '15px',
  h6: '12px',
};

export const fontWeights: TypographyProps = {
  h1: 900,
  h2: 700,
  h3: 700,
  h4: 500,
  h5: 500,
  h6: 500,
  button: 700,
  subtitle1: 500,
  subtitle2: 500,
  body1: 400,
  body2: 400,
  caption: 400,
  overline: 400,
};

export const fontFamilies = [
  'YekanBakh',
  '-apple-system',
  'BlinkMacSystemFont',
  '"Segoe UI"',
  'Roboto',
  '"Helvetica Neue"',
  'Arial',
  'sans-serif',
  '"Apple Color Emoji"',
  '"Segoe UI Emoji"',
  '"Segoe UI Symbol"',
];
