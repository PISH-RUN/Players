import React from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { Box, FormControl, Typography, Grid, Paper, Button } from '@mui/material';
import { TextField } from '@exam/uikit/src';
import { LoginSide } from './login.side';
import { SxProps } from '@mui/system';
import { jsx } from '@emotion/react';

type FormData = { userName: string; password: string };

// type Style = {
//   [key: string]: SxProps;
// };

const style = {
  root: {
    display: 'flex',
    justifyContent: 'center',
    mt: 20,
  },
  paper: {
    border: '1px solid #e5e5e5',
    boxShadow: 'none',
  },
  rightSide: {
    borderRight: '1px solid #e5e5e5',
    padding: '45px 45px 10px',
    textAlign: 'center',
  },
  leftSide: {
    p: 5,
    pb: 3,
    width: '500px',
    title: {
      display: 'flex',
      justifyContent: 'center',
      paddingBottom: 2,
      fontWeight: 700,
    },
    mainButton: {
      alignItems: 'center',
    },
    button: {
      fontSize: 18,
      width: 150,
      mt: 3,
    },
  },
};

// type user = {
//   username: string;
// };

const Login = () => {
  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
  } = useForm<FormData>();
  console.log('here');

  const onSubmit: SubmitHandler<FormData> = (data) => {};

  return (
    <Box sx={style.root}>
      <Paper sx={style.paper}>
        <Grid container>
          <Grid
            item
            sx={{
              borderRight: '1px solid #e5e5e5',
              padding: '45px 45px 10px',
              textAlign: 'center',
            }}
          >
            <LoginSide />
          </Grid>
          <Grid item sx={style.leftSide}>
            <Typography variant="h1" sx={style.leftSide.title}>
              ورود به سامانه
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormControl margin="dense" fullWidth>
                <Typography variant="body1" mb={1}>
                  نام کاربری:‌
                </Typography>
                <Controller
                  rules={{ required: 'نام کاربری خود را وارد نمایید' }}
                  render={(props) => (
                    <TextField
                      {...register('userName')}
                      {...props}
                      placeholder="نام کاربری"
                      // error={errors.userName}
                      helperText={errors.userName?.message}
                    />
                  )}
                  control={control}
                  name="userName"
                />
              </FormControl>
              <FormControl margin="dense" fullWidth>
                <Typography variant="body1" mb={1}>
                  رمز عبور:‌
                </Typography>
                <Controller
                  rules={{
                    required: 'رمز خود را وارد نمایید',
                    minLength: {
                      value: 8,
                      message: 'حداقل 8 کاراکتر شامل عدد و حروف انگلیسی',
                    },
                  }}
                  render={(props) => (
                    <TextField
                      {...register('password')}
                      {...props}
                      placeholder="رمز عبور"
                      // error={errors.password}
                      helperText={errors.password?.message}
                    />
                  )}
                  control={control}
                  name="password"
                />
              </FormControl>
              <FormControl margin="normal" fullWidth sx={style.leftSide.mainButton}>
                <Button type="submit" color="primary" variant="contained" sx={style.leftSide.button}>
                  ورود
                </Button>
              </FormControl>
            </form>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default Login;
