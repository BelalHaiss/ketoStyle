/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/display-name */
import { useStore } from 'src/store';
import { useRouter } from 'next/router';
import { JSXElementConstructor, ReactPropTypes } from 'react';
import Loader from 'src/utils/Loader';
export default function AuthHOC(Component: JSXElementConstructor<any>) {
  return function HigherFunc(props: ReactPropTypes) {
    if (window !== undefined) {
      const user = useStore((state) => state.user);
      const setUser = useStore((state) => state.setUser);
      const router = useRouter();
      if (!user) {
        router.push('/');
      }
      if (user) {
        return <Component user={user} {...props} />;
      }
    }
    return <Loader />;
  };
}
