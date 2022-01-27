import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Box, Button, Divider, Chip, Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Paper } from '@exam/uikit';
import { TextInput, SelectInput, PasswordInput } from '@exam/uikit/form';

const style = {
  root: {
    maxWidth: 500,
    my: 3,
    mx: 'auto',
  },
  form: {
    maxWidth: 370,
    mx: 'auto',
    mt: 5,
  },
  submitButton: {
    px: 6,
  },
};

const userTypes = [
  { value: 'admin', label: 'مدیر' },
  { value: 'manager', label: 'مدیر۲' },
  { value: 'author', label: 'طراح' },
  { value: 'observer', label: 'ناظر' },
  { value: 'admin2', label: 'مدیر' },
  { value: 'manager2', label: 'مدیر۲' },
  { value: 'author2', label: 'طراح' },
  { value: 'observer2', label: 'ناظر' },
];

const AddUser = () => {
  const navigate = useNavigate();
  const { handleSubmit, ...formMethods } = useForm({
    defaultValues: {
      abilities: [],
    },
  });

  const abilities = formMethods.watch('abilities', []);

  const onSubmit = (data: Array<string>) => {
    console.log(data);
  };

  const deleteAbility = (ability: string) => {
    formMethods.setValue(
      'abilities',
      abilities.filter((a) => a !== ability)
    );
  };

  return (
    <Paper sx={style.root} elevation={1} p={3}>
      <Typography variant="h2" className="text-center">
        افزودن شایستگی
      </Typography>
      <Divider light sx={{ py: 1, mb: 2 }} />
      <Box sx={style.form}>
        <FormProvider {...formMethods} handleSubmit={handleSubmit}>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <TextInput required name="firstName" label="نام" disableLabel />

            <TextInput name="lastName" label="نام خانوادگی" margin="normal" disableLabel />

            <TextInput name="email" label="پست الکترونیکی" margin="normal" disableLabel />

            <TextInput name="phone" label="شماره همراه" margin="normal" disableLabel />

            <PasswordInput name="password" label="رمزعبور" margin="normal" disableLabel />

            <SelectInput name="type" label="نوع کاربر" options={userTypes} margin="normal" disableLabel />

            <SelectInput
              multiple
              required
              name="abilities"
              label="شایستگی‌ها"
              options={userTypes}
              margin="normal"
              disableLabel
            />

            <Stack direction="row" alignItems="flex-start" flexWrap="wrap">
              {abilities.map((ability, index) => (
                <Chip
                  key={index}
                  sx={{ mt: 1, mr: 1 }}
                  color="primary"
                  onDelete={() => deleteAbility(ability)}
                  label={userTypes.find((type) => type.value === ability)?.label}
                />
              ))}
            </Stack>

            <Stack direction="row" justifyContent="center" spacing={3} alignItems="center" mt={4}>
              <Button variant="contained" type="submit" sx={style.submitButton}>
                ثبت
              </Button>
              <Button onClick={() => navigate('/panel/users')}>بازگشت</Button>
            </Stack>
          </form>
        </FormProvider>
      </Box>
    </Paper>
  );
};

export default AddUser;
