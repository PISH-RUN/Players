import React, { Suspense } from 'react';
import './styles/const.less'
import './App.css';
import { routes, RenderComponent } from './routes';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';
import { CookiesProvider } from 'react-cookie';
import AuthProvider from 'contexts/auth/auth';
import store from './redux/store';
import fa_IR from 'antd/lib/locale/fa_IR';
import { ConfigProvider } from 'antd';
import { Provider } from 'react-redux';

const queryClient = new QueryClient();

const AppRouter: React.ComponentType = () => {
  return (
    <Suspense
      fallback={
        <></>
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
        <AuthProvider>
          <Provider store={store}>
            <ConfigProvider direction='rtl' locale={fa_IR}>
              <AppRouter />
            </ConfigProvider>
          </Provider>
        </AuthProvider>
      </CookiesProvider>
    </QueryClientProvider>
  );
}

export default App;
