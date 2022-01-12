import React from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { Box, FormControl, Typography, Grid, useRadioGroup } from '@mui/material';
import { Button, Paper, TextField } from '@exam/uikit';
import { LoginSide } from './login.side';
import { gql, useMutation } from '@apollo/client';
import { useLoginMutation, LoginInput, useCreateUserMutation, UserCreateInput, useGetUserQuery, GetUserQuery } from 'api';

type FormData = { username: string; password: string };

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

type user = {
  username: string;
};

const LOGIN = gql`
  mutation Login($data: LoginInput!) {
    login(data: $data) {
      id
      username
    }
  }
`;

const Login: React.ComponentType = () => {
  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
  } = useForm<LoginInput>();

  const { mutate } = useLoginMutation();
  const { mutate: createUser } = useCreateUserMutation();

  const { data } = useGetUserQuery({
    where: { id: 1, username: 'user' },
  });

  console.log(data);

  const onSubmit: SubmitHandler<LoginInput> = (data: LoginInput) => {
    // login({ variables: { data } });

    const user: UserCreateInput = {
      username: 'user',
      password: '123456',
      canLogin: true,
      role: 'superadmin',
      lastLogin: 'Wed Jan 12 2022 11:25:32 GMT+0330 (Iran Standard Time)',
    };

    // createUser({ data: user });

    mutate({ data });
  };

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
                      {...register('username')}
                      {...props}
                      placeholder="نام کاربری"
                      error={!!errors.username}
                      helperText={errors.username?.message}
                    />
                  )}
                  control={control}
                  name="username"
                />
              </FormControl>
              <FormControl margin="dense" fullWidth>
                <Typography variant="body1" mb={1}>
                  رمز عبور:‌
                </Typography>
                <Controller
                  rules={{
                    required: 'رمز خود را وارد نمایید',
                    // minLength: {
                    //   value: 8,
                    //   message: 'حداقل 8 کاراکتر شامل عدد و حروف انگلیسی',
                    // },
                  }}
                  render={(props) => (
                    <TextField
                      {...register('password')}
                      {...props}
                      placeholder="رمز عبور"
                      error={!!errors.password}
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
