import { useState, useEffect, useRef } from 'react';
import { fetcher, Args } from '../utils/fetcher';
type Options = {
  onRequest?: () => void;
  onSuccess?: (data: any) => void;
};
export function useAsync(
  arg: Args | null,
  setState: any | null,
  options?: Options
) {
  const [data, setData] = useState(false);
  const isMount = useRef(true);
  async function fetchData(arg: Args, setState: any) {
    const res = await fetcher({
      ...arg
    });
    if (res && isMount.current) {
      if (options && options.onSuccess) {
        options.onSuccess(res);
      }
      setState && setState(res);
      setData(true);
    }
  }

  useEffect(() => {
    isMount.current = true;
    if (arg) {
      fetchData(arg, setState);
      if (options && options.onRequest) {
        options.onRequest();
      }
    } else {
      setData(false);
    }

    // clean custom hook
    return () => {
      isMount.current = false;
    };
  }, [arg]);

  return { data };
}
