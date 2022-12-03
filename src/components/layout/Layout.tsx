import { ChakraProvider, Flex } from "@chakra-ui/react";
import { createStandaloneToast } from "@chakra-ui/toast";
import theme from "src/utils/theme";
import Meta from "src/utils/Meta";
import "@fontsource/vazir";
import Header from "./Header";
import { useStore } from "src/store";

import Fotter from "./Footer";
import { fetchUser as fetchUserData } from "src/utils/fetchData";
import { useState, useEffect } from "react";
import { fetchPrices } from "src/utils/fetchData";
const { ToastContainer, toast } = createStandaloneToast(theme);
export const Toast = toast;
export function Layout({ children }: any) {
  const setPrices = useStore((state) => state.setPrices);
  const setUser = useStore((state) => state.setUser);
  const user = useStore((state) => state.user);
  const [isHydradated, setIsHydradated] = useState(false);
  const [fetchUser, setUserFetched] = useState(false);

  useEffect(() => {
    fetchPrices(setPrices);
    setIsHydradated(true);
  }, []);
  useEffect(() => {
    if (user && !fetchUser && !user.role) {
      const justLogin = Date.now() - user.loginTime < 3000;
      if (!justLogin) {
        fetchUserData(user._id, setUser);
        setUserFetched(true);
      }
    }
  }, [user]);
  if (!isHydradated) {
    return null;
  }

  return (
    <ChakraProvider theme={theme}>
      <Flex flexDir={"column"} minH="100vh">
        <Meta />
        <Header />

        <main style={{ marginTop: "5px" }}>{children}</main>
        <ToastContainer />
        <Fotter />
      </Flex>
    </ChakraProvider>
  );
}
