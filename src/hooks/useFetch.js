import { useState, useEffect } from "react";

export const useFetch = (url, method = "GET") => {
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const [options, setOptions] = useState(null);

  const postData = (postData) => {
    setOptions({
      method: "POST",
      Header: { "Content-Type": "application/json" },
      Body: JSON.stringify(postData),
    });
  };

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async (fetchOptions) => {
      setIsPending(true);
      // console.log(fetchOptions);

      try {
        const res = await fetch(url, {
          ...fetchOptions,
          signal: controller.signal,
        });

        if (!res.ok) {
          throw new Error(res.statusText);
        }
        const data = await res.json();
        // console.log(fetchOptions);
        setIsPending(false);
        setData(data);
        setError(null);
      } catch (err) {
        if (err.name === "AbortError") {
          // console.log("the fetch was aborted");
        } else {
          setIsPending(false);
          setError("Could not fetch the data");
        }
      }
    };

    if (method === "GET") {
      fetchData();
    }

    if (method === "POST" && options) {
      fetchData(options);
    }

    return () => {
      controller.abort();
    };
  }, [url, method, options]);

  return { data, isPending, error, postData };
};
