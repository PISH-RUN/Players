import React from 'react';
import { Paper } from '@exam/uikit';
import { Typography, Box, Stack, Divider } from '@mui/material';
import { SxProps } from '@mui/material/styles';
import QuestionHead from './question.head';
import QuestionText from './question.text';
import QuestionInfo from './question.info';
import QuestionMoreInfo from './question.moreInfo';

export type QuestionProps = {
  sx?: SxProps;
  isSimilar?: boolean;
  isMainSimilar?: boolean;
};

const Question = ({ sx, isSimilar = false, isMainSimilar = false }: QuestionProps) => {
  return (
    <Paper p={0} elevation={isSimilar ? 0 : 1} sx={sx}>
      <QuestionHead isMainSimilar={isMainSimilar} isSimilar={isSimilar} question={{ number: 1 }} />
      <QuestionText question={{ number: 1 }} />
      <QuestionInfo />
      <Divider />
      <QuestionMoreInfo isSimilar={isSimilar} />
    </Paper>
  );
};

export default Question;
