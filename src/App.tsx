import React, { Suspense } from 'react';
import './App.css';
import { Grid, LinearProgress, ThemeProvider } from '@mui/material';
import { routes, RenderComponent } from './routes';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Direction, examTheme, RTL } from '@exam/uikit/src';
import { QueryClientProvider, QueryClient } from 'react-query';
import { CookiesProvider } from 'react-cookie';
import AuthProvider from 'modules/auth/auth';
import { SnackbarProvider } from 'notistack';

const queryClient = new QueryClient();

const AppRouter: React.ComponentType = () => {
  return (
    <Suspense
      fallback={
        <Grid container>
          <LinearProgress color="secondary" style={{ width: '100%' }} />
        </Grid>
      }
    >
      <BrowserRouter>
        <Routes>
          {routes.map(({ path, subRoutes, exact, ...rest }) => (
            <Route key={path} path={path} element={<RenderComponent {...rest} />}>
              {subRoutes?.map(({ path, exact, ...rest }) => (
                <Route key={path} path={path} element={<RenderComponent {...rest} />} />
              ))}
            </Route>
          ))}
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CookiesProvider>
        <ThemeProvider theme={examTheme({ direction: Direction.rtl })}>
          <SnackbarProvider maxSnack={5}>
            <RTL>
              <AuthProvider>
                <AppRouter />
              </AuthProvider>
            </RTL>
          </SnackbarProvider>
        </ThemeProvider>
      </CookiesProvider>
    </QueryClientProvider>
  );
}

export default App;
