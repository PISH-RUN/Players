import React from 'react';
import { Paper } from '@exam/uikit';
import { Typography, Box, Stack, Divider } from '@mui/material';
import { SxProps } from '@mui/material/styles';
import QuestionHead from './question.head';
import QuestionText from './question.text';
import QuestionInfo from './question.info';
import QuestionMoreInfo from './question.moreInfo';
import { QuestionType as qType } from './types';

export type QuestionProps = {
  sx?: SxProps;
  type?: qType;
  isMain?: boolean;
};

const Question = ({ sx, type = qType.normal, isMain = false }: QuestionProps) => {
  return (
    <Paper p={0} elevation={type === qType.normal ? 1 : 0} sx={sx}>
      <QuestionHead isMain={isMain} type={type} question={{ number: 1 }} />
      <QuestionText question={{ number: 1 }} />
      <QuestionInfo />
      <Divider />
      <QuestionMoreInfo hideInfo={type !== 'normal'} />
    </Paper>
  );
};

export default Question;
