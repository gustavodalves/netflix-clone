import { useState, useEffect } from 'react';

const useAxios = (service) => {
  const [fetchData, setFetchData] = useState({});
  const [error, setError] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    service()
      .then(({ data }) => {
        setFetchData(data);
      })
      .catch(({ response }) => setError(response.data))
      .finally(() => setIsLoading(false));
  }, []);

  return [fetchData, error, isLoading];
};

export default useAxios;
