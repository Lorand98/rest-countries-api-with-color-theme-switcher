import { useCallback, useState } from 'react';

export const useHttpRequest = <T>() => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const sendRequest = useCallback(
    async (
      url: string /*TODO: Ask on frontendmentor.io whether the result type is alright - is it needed or no*/,
      callbackFn: (result: T) => void
    ) => {
      try {
        setIsLoading(true);

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error('Error occured while fetching the data.');
        }

        const result = await response.json();

        callbackFn(result);
      } catch (error) {
        console.log();
        let errorMsg = 'An error occured.';
        if (error instanceof Error) {
          if (error.name === 'TypeError') {
            errorMsg = `${error.message}. Please check your internet connection!`;
          }
        }
        setError(errorMsg);
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
  };
};
