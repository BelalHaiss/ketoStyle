import '../styles/globals.css';
import type { AppProps } from 'next/app';

import { useCreateStore, Provider } from 'src/store';
import { Layout } from 'src/components/layout/Layout';
function MyApp({ Component, pageProps }: AppProps) {
  const store = useCreateStore(pageProps.initialZustandState);
  return (
    <Provider createStore={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
