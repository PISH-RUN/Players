import React, { Suspense } from 'react';
import './App.css';
import { Grid, LinearProgress, ThemeProvider, createTheme } from '@mui/material';
import routes from './routes';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { examTheme, RTL } from '@exam/uikit/src';

const AppRouter: React.ComponentType = () => {
  console.log(routes);
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
          {routes.map(({ path, exact, component: Component, layout: Layout }) => (
            <Route
              key={path}
              path={path}
              element={!!Layout ? <Layout>{!!Component && <Component />}</Layout> : !!Component && <Component />}
            />
          ))}
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

function App() {
  return (
    <ThemeProvider theme={examTheme()}>
      <RTL>
        <AppRouter />
      </RTL>
    </ThemeProvider>
  );
}

export default App;
