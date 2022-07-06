import { SWRConfig } from 'swr';
import { ChakraProvider, Flex } from '@chakra-ui/react';
import { createStandaloneToast } from '@chakra-ui/toast';
import { fetcher } from 'src/utils/fetcher';
import theme from 'src/utils/theme';
import Meta from 'src/utils/Meta';
import '@fontsource/vazir';
import Header from './Header';
import { useStore } from 'src/store';
import Fotter from './Footer';
import { useState, useEffect } from 'react';
import { fetchPrices } from 'src/utils/fetchData';
const { ToastContainer, toast } = createStandaloneToast(theme);
export const Toast = toast;
export function Layout({ children }: any) {
  const setPrices = useStore((state) => state.setPrices);
  const [isHydradated, setIsHydradated] = useState(false);
  useEffect(() => {
    fetchPrices(setPrices);
    setIsHydradated(true);
  }, []);
  if (!isHydradated) {
    return null;
  }
  return (
    <ChakraProvider theme={theme}>
      <Flex flexDir={'column'} minH='100vh'>
        <SWRConfig
          value={{
            fetcher
          }}
        >
          <Meta />
          <Header />

          <main style={{ marginTop: '5px' }}>{children}</main>
          <ToastContainer />
          <Fotter />
        </SWRConfig>
      </Flex>
    </ChakraProvider>
  );
}
