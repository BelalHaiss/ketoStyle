import '../styles/globals.css';
import type { AppProps } from 'next/app';

import { useCreateStore, Provider } from 'src/store';
import { Layout } from 'src/components/layout/Layout';
import { User } from 'src/ts/register.types';
import { useEffect } from 'react';
declare global {
  interface Window {
    snaptr: any;
    handleSnap: (event?: string, user?: User | null, eventPara?: any) => void;
    user: User | null;
  }
}
function MyApp({ Component, pageProps }: AppProps) {
  const store = useCreateStore(pageProps.initialZustandState);
  useEffect(() => {
    window.handleSnap = function (
      event?: string,
      user?: User | null,
      eventPara?: any
    ) {
      if (
        user &&
        (!window.user || window.user.profile.email !== user.profile.email)
      ) {
        window.user = user;
        window.snaptr('init', '92c88017-7992-43fe-82a9-e4719af8f5ad', {
          user_email: window.user.profile.email
        });
      }
      if (event && window.user) {
        if (eventPara) {
          window.snaptr('track', event, eventPara);
        } else window.snaptr('track', event);
      }
    };
    const agent = navigator.userAgent.toLowerCase();
  }, []);
  return (
    <Provider createStore={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
