import { SWRConfig } from 'swr';
import { ChakraProvider } from '@chakra-ui/react';
import { createStandaloneToast } from '@chakra-ui/toast';
import { fetcher } from 'src/utils/fetcher';
import theme from 'src/utils/theme';
import Meta from 'src/utils/Meta';
import '@fontsource/vazirmatn';
import Header from './Header';
import Fotter from './Footer';
const { ToastContainer, toast } = createStandaloneToast(theme);
export const Toast = toast;

export function Layout({ children }: any) {
  return (
    <ChakraProvider theme={theme}>
      <SWRConfig
        value={{
          fetcher
        }}
      >
        <Meta />
        <Header />
        <main style={{ marginTop: '5px' }}>{children}</main>
        <Fotter />
      </SWRConfig>
    </ChakraProvider>
  );
}
