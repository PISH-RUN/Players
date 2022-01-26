import React from 'react';
import { Controller, SubmitHandler, useForm, FormProvider } from 'react-hook-form';
import { Box, FormControl, Typography, Grid } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { Paper, TextField } from '@exam/uikit';
import { PasswordInput, TextInput } from '@exam/uikit/form';
import { LoginSide } from './login.side';
import { useLoginMutation } from 'api/auth';
import { LoginInput, User_Roles } from 'api/types';
import { useAuth } from 'modules/auth/auth';
import { useSnackbar } from 'notistack';
import { useNavigate, Navigate } from 'react-router-dom';
import { useCreateUserMutation } from 'api/user';

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
  const { handleSubmit, ...formMethods } = useForm<LoginInput>();

  const { setLogin, isLogin } = useAuth();
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const { mutate: createUser } = useCreateUserMutation();

  const { mutate: login, isLoading } = useLoginMutation({
    onSuccess: ({ login }) => {
      setLogin(login);
      enqueueSnackbar('خوش آمدید', { variant: 'success' });
      navigate('/panel', { replace: true });
    },
    onError: (error) => {
      enqueueSnackbar('نام کاربری یا رمز عبور صحیح نمی باشد', { variant: 'error' });
    },
  });

  const onSubmit: SubmitHandler<LoginInput> = (data: LoginInput) => {
    createUser({
      data: {
        id: 10,
        username: 'user',
        password: '123456',
        firstName: 'علی',
        lastName: 'سوری',
        canLogin: true,
        lastLogin: '2021-05-05',
        role: User_Roles.Admin,
      },
    });
    // login({ data });
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
            <FormProvider {...formMethods} handleSubmit={handleSubmit}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <TextInput name="username" label="نام کاربری" align="left" />

                <PasswordInput name="password" label="رمزعبور" />

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
            </FormProvider>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default Login;
