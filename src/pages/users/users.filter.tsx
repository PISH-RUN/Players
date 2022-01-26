import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Box, Grid } from '@mui/material';
import { SelectInput, TextInput } from '@exam/uikit/src/form';

const data = [
  { value: 'test1', label: 'تست۱' },
  { value: 'test2', label: 'تست۲' },
  { value: 'test3', label: 'تست۳' },
];

type FormData = {};

const style = {
  root: {
    '& .MuiTextField-root': { m: 1 },
  },
  icon: {
    color: '#BDBDBD',
  },
  activeIcon: {
    color: '#46D7A7',
  },
  mainCheckbox: {
    mx: 1,
  },
};

const Filter: React.ComponentType = () => {
  const formMethods = useForm<FormData>();

  const onSubmit = (data: Array<string>) => {
    console.log(data);
  };

  return (
    <FormProvider {...formMethods}>
      <Box component="form" sx={style.root} onSubmit={formMethods.handleSubmit(onSubmit)} noValidate autoComplete="off">
        <Grid container spacing={1}>
          <Grid item xs>
            <SelectInput name="job" label="نوع کاربر" disableLabel options={data} />
          </Grid>
          <Grid item xs>
            <TextInput name="bookletName" label="نام کاربر" required disableLabel />
          </Grid>
          <Grid item xs>
            <SelectInput name="ability" label="شایستگی" disableLabel options={data} />
          </Grid>
        </Grid>
      </Box>
    </FormProvider>
  );
};

export default Filter;
