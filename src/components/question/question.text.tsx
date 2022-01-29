import React from 'react';
import {
  Box,
  FormControl,
  FormControlLabel as FormControlLabelComponent,
  FormControlLabelProps,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from '@mui/material';
import { BoxLvl1, BoxLvl2 } from './utils';
import { QuestionType } from './types';

const styles = {
  questionNumber: {
    height: 48,
    background: '#e0e0e0',
    borderRadius: 24,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: 48,
  },
};

const FormControlLabel = (props: Omit<FormControlLabelProps, 'control'>) => (
  <FormControlLabelComponent
    control={<Radio />}
    componentsProps={{
      typography: {
        variant: 'body1',
      },
    }}
    {...props}
  />
);

export type QuestionTextProps = {
  question: { number: number };
  type: QuestionType;
  isMain: boolean;
};

const QuestionText = ({ question, type, isMain }: QuestionTextProps) => {
  return (
    <>
      <BoxLvl1 sx={{ pt: 2 }}>
        <Stack direction="row" spacing={2} alignItems="center">
          <Box sx={styles.questionNumber}>
            <Typography variant="h3">{type === QuestionType.group && isMain ? '?' : question.number}</Typography>
          </Box>
          <Typography variant="h5">
            کدام یک از گزینه های زیر صحیح نیست؟ کدام یک از گزینه های زیر صحیح نیست؟ کدام یک از گزینه های زیر صحیح نیست؟
            کدام یک از گزینه های زیر صحیح نیست؟{' '}
          </Typography>
        </Stack>
      </BoxLvl1>

      {type !== QuestionType.group ||
        (!isMain && (
          <BoxLvl2 sx={{ pt: 2 }}>
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                value="female"
                onChange={() => null}
                name="radio-buttons-group"
              >
                <FormControlLabel value="female" label=" شاخص CPI از شاخص SPI حساس‌تر است." />
                <FormControlLabel label="گزارش هزینه‌های پیش بینی و واقعی پروژه می تواند قسمتی از گزارش‌های تحلیلی کنترل پروژه باشد." />
                <FormControlLabel label="شاخص CPI برابر تقسیم BCWP بر BCWS است." />
                <FormControlLabel label="در صورتی که شاخص بحرانی بودن از عدد یک کمتر باشد،‌بیانگر وجود مشکل در پروژه است." />
              </RadioGroup>
            </FormControl>
          </BoxLvl2>
        ))}
    </>
  );
};

export default QuestionText;
