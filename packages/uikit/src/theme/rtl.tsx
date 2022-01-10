import React, { Provider } from 'react';
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider, EmotionCache } from '@emotion/react';
import createCache from '@emotion/cache';

// Create rtl cache
const cacheRtl = createCache({
  key: 'mui-rtl',
  stylisPlugins: [rtlPlugin],
});

export type Props = {
  children: JSX.Element;
};

export const RTL = (props: Props) => {
  return <CacheProvider value={cacheRtl}> {props.children} </CacheProvider>;
};
