import { useEffect, useState } from 'react';

const useFetch = <T>(url: string, defaultValue?: any) => {
  const [data, setData] = useState<T>(defaultValue);

  useEffect(() => {
    fetch(url).then(async (resp) => {
      setData(await resp.json());
    });
  }, []);

  return {
    data,
  };
};

export default useFetch;
