import React, { Suspense } from 'react';
import './App.css';
import { Grid, LinearProgress, ThemeProvider } from '@mui/material';
import routes from './routes';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Direction, examTheme, RTL } from '@exam/uikit/src';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { QueryClientProvider, QueryClient } from 'react-query';

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache(),
});

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
    <ApolloProvider client={client}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={examTheme({ direction: Direction.rtl })}>
          <RTL>
            <AppRouter />
          </RTL>
        </ThemeProvider>
      </QueryClientProvider>
    </ApolloProvider>
  );
}

export default App;
