import { default as PaperComponent, PaperProps as PaperComponentProps } from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

export type PaperProps = { p?: number | Array<Number> } & PaperComponentProps;

// const calculatePadding = (theme: Theme, p: Pick<PaperProps, 'p'>) {
//
// }

const Paper = styled(PaperComponent)<PaperProps>(({ theme, p }) => ({
  // padding: theme.spacing(p[0] || p, p[1] || p, p[2] || p[0] || p, p[3] || p[1] || p),
}));

export default Paper;
