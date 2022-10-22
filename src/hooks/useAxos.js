import { useState, useEffect } from 'react';

const useAxios = (service) => {
  const [fetchData, setFetchData] = useState({});
  const [error, setError] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    service()
      .then(({ data }) => {
        setFetchData(data);
        console.log(data)
    })
      .catch(({ response }) => setError(response.data))
      .finally(() => setIsLoading(true));
  }, []);

  return [fetchData, error, isLoading];
};

export default useAxios;
