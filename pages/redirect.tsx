import Loader from 'src/utils/Loader';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useStore } from 'src/store';
import { fetchUser } from 'src/utils/fetchData';
export default function Redirect() {
  const user = useStore((state) => state.user);
  const setUser = useStore((state) => state.setUser);
  const router = useRouter();
  async function fetchData() {
    await fetchUser(user!._id, setUser);
    const path = router.query?.re;
    if (path) {
      router.replace('/' + path.toString());
      return;
    }
    router.replace('/');
  }
  useEffect(() => {
    const path = router.query?.re;
    if (user && path) {
      setTimeout(fetchData, 4000);
    }
  }, [router, user]);

  return <Loader />;
}
