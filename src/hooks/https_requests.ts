import { useCallback, useState } from "react";

export const useHttpRequest = <T>() => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const sendRequest = useCallback(
    async (
      url: string /*TODO: Ask on frontendmentor.io whether the result type is alright - is it needed or no*/,
      callbackFn: (result: T) => void
    ) => {
      try {
        setIsLoading(true);

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Error occured while fetching the data.");
        }

        const result = await response.json();
        console.log(result);

        callbackFn(result);
      } catch (error) {
        // if (error instanceof Error) {
        setError(
          "Something went wrong. Please check your internet connection or try again later."
        );
        // }
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  return {
    sendRequest,
    isLoading,
    error,
    setIsLoading,
    setError,
  };
};
