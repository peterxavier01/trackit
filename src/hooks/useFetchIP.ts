import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";

interface ApiResponse<T> {
  data: T | null;
  setData: React.Dispatch<React.SetStateAction<T | null>>;
  loading: boolean;
  error: Error | null;
}

const useFetchIP = <T>(url: string): ApiResponse<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response: AxiosResponse = await axios.get(url);

        if (response.statusText !== "OK") {
          const message = `An error has occured: ${response.status}`;
          throw new Error(message);
        }

        setData(response.data);
        setLoading(false);
        setError(null);
      } catch (err) {
        setError(new Error((err as Error)?.message));
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error, setData };
};

export default useFetchIP;
