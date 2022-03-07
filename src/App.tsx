import React, { Suspense } from 'react';
import './styles/const.less';
import './App.css';
import { routes, RenderComponent } from './routes';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';
import { CookiesProvider } from 'react-cookie';
import store from './redux/store';
import fa_IR from 'antd/lib/locale/fa_IR';
import { ConfigProvider } from 'antd';
import { Provider } from 'react-redux';
import 'moment/locale/fa';
import moment from 'jalali-moment';

moment.locale('fa');
moment.defaultFormat = 'jD jMMMM jYYYY';

const queryClient = new QueryClient();

const AppRouter: React.ComponentType = () => {
  return (
    <Suspense fallback={<></>}>
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
        <Provider store={store}>
          <ConfigProvider direction="rtl" locale={fa_IR}>
            <AppRouter />
          </ConfigProvider>
        </Provider>
      </CookiesProvider>
    </QueryClientProvider>
  );
}

export default App;
