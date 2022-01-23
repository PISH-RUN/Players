import React from 'react';
import { Box, Typography, Divider, TextField, FormControl, MenuItem, Button } from '@mui/material';
import { useForm, Controller, FormProvider } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { TextInput } from '@exam/uikit/form';

const data = [
  { value: 'test1', label: 'تست۱' },
  { value: 'test2', label: 'تست۲' },
  { value: 'test3', label: 'تست۳' },
];

type FormProps = {
  name: string;
  jobCategory: string;
  bookletTime: string;
  bookletNumber: string;
  jobs: string;
  minQuestionHard: string;
  minQuestionEasy: string;
  heading: string;
};

const style = {
  root: {
    width: 500,
    backgroundColor: '#fff',
    m: '12px auto',
    textAlign: 'center',
    border: '1px solid #e5e5e5',
    borderRadius: 1,
    p: 3,
  },
  divider: {
    py: 1,
  },
  form: {
    py: 2,
    px: 8,
    '& .MuiTextField-root': { m: 1 },
  },
  mainButton: {
    mt: 4,
  },
  submitButton: {
    px: 6,
    mr: 2,
  },
};

const AbilitiesForm: React.ComponentType = () => {
  const navigate = useNavigate();
  const { handleSubmit, ...formMethods } = useForm<FormProps>();

  const onSubmit = (data: Array<string>) => {
    console.log(data);
  };

  return (
    <FormProvider {...formMethods} handleSubmit={handleSubmit}>
      <Box sx={style.root}>
        <Typography variant="h2">افزودن شایستگی</Typography>
        <Divider light sx={style.divider} />
        <Box component="form" sx={style.form} onSubmit={handleSubmit(onSubmit)}>
          <FormControl fullWidth>
            <Controller name="name" render={({ field }) => <TextField {...field} label="نام دفترچه" />} />
          </FormControl>
          <FormControl fullWidth>
            <Controller
              name="jobCategory"
              render={({ field }) => (
                <TextField {...field} select label="دسته شغلی">
                  {data.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              )}
            />
          </FormControl>
          <FormControl fullWidth>
            <Controller
              name="bookletTime"
              render={({ field }) => <TextField {...field} label="زمان کل هر دفترچه(به دقیقه)" />}
            />
          </FormControl>
          <FormControl fullWidth>
            <Controller name="bookletNumber" render={({ field }) => <TextField {...field} label="تعداد دفترچه ها" />} />
          </FormControl>
          <FormControl fullWidth>
            <Controller name="jobs" render={({ field }) => <TextField {...field} label="شغل ها" />} />
          </FormControl>
          <FormControl fullWidth>
            <Controller
              name="minQuestionHard"
              render={({ field }) => <TextField {...field} label="حداقل تعداد سوال سخت" />}
            />
          </FormControl>
          <FormControl fullWidth>
            <Controller
              name="minQuestionEasy"
              render={({ field }) => <TextField {...field} label="حداقل تعداد سوال آسان" />}
            />
          </FormControl>
          <FormControl fullWidth>
            <Controller name="heading" render={({ field }) => <TextField {...field} label="سرفصل" />} />
          </FormControl>
          <Box sx={style.mainButton}>
            <FormControl>
              <Button variant="contained" type="submit" sx={style.submitButton}>
                ثبت
              </Button>
            </FormControl>
            <FormControl>
              <Button onClick={() => navigate('/abilities')}>بازگشت</Button>
            </FormControl>
          </Box>
        </Box>
      </Box>
    </FormProvider>
  );
};

export default AbilitiesForm;
