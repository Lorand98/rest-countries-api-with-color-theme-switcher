import { RefObject, useEffect } from 'react';

export function useOutsideClickHandler<T extends HTMLElement>(
  ref: RefObject<T>,
  callbackFn: () => void
) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callbackFn();
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, callbackFn]);
}
