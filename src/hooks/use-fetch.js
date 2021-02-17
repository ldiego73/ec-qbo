import axios from "axios";
import { useState, useEffect } from "react";

export function useFetch(url, options = {}) {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();
    const { signal } = abortController;
    const isNotAborted = () => !signal.aborted;

    const invokeFetch = async () => {
      if (isNotAborted()) setLoading(true);

      try {
        const { data } = await axios.get(url, options);

        if (isNotAborted()) setResponse(data);
      } catch (error) {
        if (isNotAborted()) setError(error);
      } finally {
        if (isNotAborted()) setLoading(false);
      }
    };

    invokeFetch();

    return () => {
      abortController.abort();
    };
  }, []);

  return [response, error, loading];
}
