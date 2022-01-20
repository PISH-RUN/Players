import { default as PaperComponent, PaperProps as PaperComponentProps } from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { Theme } from '@mui/system';
import { SpacingArgument } from '@mui/system/createTheme/createSpacing';

export type PaperProps = { p?: SpacingArgument | Array<SpacingArgument> } & PaperComponentProps;

const calculatePadding = (theme: Theme, p: PaperProps['p']) => {
  if (typeof p === 'number') {
    return theme.spacing(p);
  } else if (!!p && p.length) {
    return theme.spacing(p[0], p[1] || p[0], p[2] || p[0], p[3] || p[1] || p[0]);
  }
};

const Paper = styled(PaperComponent)<PaperProps>(({ theme, p }) => ({
  padding: !!p ? calculatePadding(theme, p) : theme.spacing(1),
}));

export default Paper;
