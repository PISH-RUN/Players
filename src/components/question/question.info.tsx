import React from 'react';
import { BoxLvl2 } from './utils';
import { Box, Chip as ChipComponent, ChipProps, Divider, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const Chip = styled((props: ChipProps) => <ChipComponent variant="outlined" {...props} />)(() => ({
  borderRadius: 4,
  fontWeight: 500,
  borderColor: '#ccc',
}));

export type QuestionInfoProps = {};

const QuestionInfo = (props: QuestionInfoProps) => {
  return (
    <BoxLvl2 sx={{ pb: 2, pt: 0 }}>
      <Box component={Divider} sx={{ my: 2 }} />
      <Stack sx={{ my: 2 }} direction="row" alignItems="center" spacing={1}>
        <Typography variant="body2">دسته های شغلی:</Typography>
        <Chip label="مهندسی" />
        <Chip label="سلامت" />
        <Chip label="بازاریابی و فروش" />
      </Stack>
      <Stack direction="row" alignItems="center" spacing={1}>
        <Typography variant="body2">سرفصل ها:</Typography>
        <Chip label="سرفصل 1" />
        <Chip label="سرفصل 2" />
        <Chip label="سر فصل 3" />
      </Stack>
    </BoxLvl2>
  );
};

export default QuestionInfo;
