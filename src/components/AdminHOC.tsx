import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { fetcher } from 'src/utils/fetcher';
import { JSXElementConstructor } from 'react';
import Loader from 'src/utils/Loader';

export default function AdminHoc(
  Component: JSXElementConstructor<any>,
  path: string
) {
  const AuthenticatedComponent = () => {
    const router = useRouter();
    const [data, setData] = useState(null);
    const checkAdmin = async () => {
      const response = await fetcher({
        url: '/admin/validate?path=' + path
      });
      if (!response) {
        router.push('/');
      } else {
        setData(response);
      }
    };
    useEffect(() => {
      checkAdmin();
    }, []);

    return !!data ? <Component /> : <Loader />; // Render whatever you want while the authentication occurs
  };

  return AuthenticatedComponent;
}
