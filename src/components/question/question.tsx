import React from 'react';
import { Paper } from '@exam/uikit';
import {
  Typography,
  Box,
  Grid,
  Stack,
  Button,
  Divider,
  FormControl,
  FormControlLabel as FormControlLabelComponent,
  FormControlLabelProps,
  RadioGroup,
  Radio,
  Chip as ChipComponent,
  ChipProps,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import QuestionStatus from 'components/questionStatus';
import CommentIcon from '@mui/icons-material/Comment';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import EditIcon from '@mui/icons-material/Edit';
import Conversations from 'components/conversations';

const styles = {
  head: {
    borderBottom: '1px solid #ddd',
    p: 1,
  },
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

const Chip = styled((props: ChipProps) => <ChipComponent variant="outlined" {...props} />)(() => ({
  borderRadius: 4,
  fontWeight: 500,
  borderColor: '#ccc',
}));

const Question = () => {
  return (
    <Paper p={0} elevation={1}>
      <Box sx={styles.head}>
        <Grid container>
          <Grid item xs>
            <Stack
              direction="row"
              alignItems="center"
              spacing={1}
              divider={
                <Divider orientation="vertical" sx={{ height: 22, alignSelf: 'center' }} variant="middle" flexItem />
              }
            >
              <Stack alignItems="center" direction="row">
                <Typography variant="body1">سوال1:</Typography>
                <QuestionStatus status={[false, false, false]} />
              </Stack>
              <Typography variant="body1">سال 1400</Typography>
              <Typography variant="body1">سخت</Typography>
              <Button startIcon={<CommentIcon />} color="error" size="small">
                3 پیام جدید
              </Button>
            </Stack>
          </Grid>
          <Stack component={Grid} item direction="row" spacing={1}>
            <Button variant="outlined" startIcon={<AddIcon />} size="small">
              افزودن سوال مشابه
            </Button>
            <Button variant="outlined" startIcon={<EditIcon />} size="small">
              ویرایش سوال
            </Button>
            <Button variant="outlined" size="small" color="error">
              <DeleteIcon />
            </Button>
          </Stack>
        </Grid>
      </Box>
      <Box sx={{ pl: 2, py: 2 }}>
        <Stack direction="row" spacing={2} alignItems="center">
          <Box sx={styles.questionNumber}>
            <Typography variant="h3">1</Typography>
          </Box>
          <Typography variant="h5">
            کدام یک از گزینه های زیر صحیح نیست؟ کدام یک از گزینه های زیر صحیح نیست؟ کدام یک از گزینه های زیر صحیح نیست؟
            کدام یک از گزینه های زیر صحیح نیست؟{' '}
          </Typography>
        </Stack>
        <Box sx={{ pl: 8, pt: 2 }}>
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
        </Box>
      </Box>
      <Divider />
      <Box sx={{ pl: 8, py: 2 }}>
        <Stack direction="row" spacing={2}>
          <Typography variant="h5">متن پاسخ:</Typography>
          <Typography variant="body1">
            گزارش هزینه‌های پیش بینی و واقعی پروژه می تواند قسمتی از گزارش‌های تحلیلی کنترل پروژه باشد.
          </Typography>
        </Stack>
        <Box sx={{ my: 3, mr: 6, borderRadius: 2, border: '1px solid #eaeaea', bgcolor: '#f6f8fa' }}>
          <Conversations />
        </Box>
      </Box>
    </Paper>
  );
};

export default Question;
