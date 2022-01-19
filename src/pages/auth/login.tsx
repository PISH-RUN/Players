import React from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { Box, FormControl, Typography, Grid } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { Paper, TextField } from '@exam/uikit';
import { LoginSide } from './login.side';
import { useLoginMutation } from 'api/auth';
import { LoginInput } from 'api/types';
import { useAuth } from 'modules/auth/auth';
import { useSnackbar } from 'notistack';
import { useNavigate, Navigate } from 'react-router-dom';

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

const Login: React.ComponentType = () => {
  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
  } = useForm<LoginInput>();
  const { setLogin, isLogin } = useAuth();
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const { mutate: login, isLoading } = useLoginMutation({
    onSuccess: ({ login }) => {
      setLogin(login);
      enqueueSnackbar('خوش آمدید', { variant: 'success' });
      navigate('/dashboard', { replace: true });
    },
    onError: (error) => {
      enqueueSnackbar('نام کاربری یا رمز عبور صحیح نمی باشد', { variant: 'error' });
    },
  });

  const onSubmit: SubmitHandler<LoginInput> = (data: LoginInput) => {
    login({ data });
  };

  if (isLogin) {
    return <Navigate to="/panel" />;
  }

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
                      autoFocus
                      align="left"
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
                      type="password"
                      placeholder="رمز عبور"
                      align="left"
                      error={!!errors.password}
                      helperText={errors.password?.message}
                    />
                  )}
                  control={control}
                  name="password"
                />
              </FormControl>
              <FormControl margin="normal" fullWidth sx={style.leftSide.mainButton}>
                <LoadingButton
                  type="submit"
                  color="primary"
                  variant="contained"
                  sx={style.leftSide.button}
                  loading={isLoading}
                >
                  ورود
                </LoadingButton>
              </FormControl>
            </form>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default Login;
