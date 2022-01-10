import { mapValues } from 'lodash';
import { Theme } from '@mui/system';

import {
  defaultTypographyFontSize,
  xsTypographyFontSizes,
  smTypographyFontSizes,
  fontFamilies,
  fontWeights,
} from './variables/_font';
import { Typography, TypographyOptions } from '@mui/material/styles/createTypography';

export const defaultFontWeight: number = 400;

export const defaultHtmlFontSize = 14;

/*
 *  create constant result for typography with fontSize and fontWeight
 */

const typography: TypographyOptions = mapValues(defaultTypographyFontSize, (value, key: keyof Typography) => ({
  fontSize: value,
  fontWeight: fontWeights[key] || defaultFontWeight,
}));

typography.htmlFontSize = defaultHtmlFontSize;

typography.fontFamily = fontFamilies.join(',');

export const createTypography = (): TypographyOptions => typography;

export const responseTypography = (theme: Theme) => {
  theme.typography = mapValues(theme.typography as Typography, (value: Typography, key: keyof Typography) =>
    typeof value !== 'object'
      ? value
      : {
          ...value,
          [theme.breakpoints.down('sm')]: {
            fontSize: smTypographyFontSizes[key] || value.fontSize,
          },
          [theme.breakpoints.down('xs')]: {
            fontSize: xsTypographyFontSizes[key] || value.fontSize,
          },
        }
  );
  return theme;
};
