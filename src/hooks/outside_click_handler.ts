import { RefObject, useEffect } from 'react';

export function useOutsideClickHandler<
  T extends HTMLElement,
  T1 extends HTMLElement
>(
  observedRef: RefObject<T>,
  boundaryRef: RefObject<T1>,
  callbackFn: () => void
) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (!observedRef.current) {
        return;
      }

      if (!boundaryRef.current) {
        !observedRef.current.contains(event.target as Node) && callbackFn();
        return;
      }

      !boundaryRef.current.contains(event.target as Node) && callbackFn();
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [observedRef, boundaryRef, callbackFn]);
}
