import { useEffect, useRef, useLayoutEffect } from 'react';

export const useGameLoop = (callback: (deltaTime: number) => void) => {
  const requestRef = useRef<number | null>(null);
  const previousTimeRef = useRef<number | null>(null);
  const callbackRef = useRef(callback);

  // By using useLayoutEffect, we ensure callbackRef.current is updated
  // synchronously after DOM mutations but before the browser paints. This guarantees
  // the `animate` function always has the latest callback, solving the stale closure issue.
  useLayoutEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    const animate = (time: number) => {
      if (previousTimeRef.current !== null) {
        const deltaTime = time - previousTimeRef.current;
        // Execute the latest callback from the ref
        callbackRef.current(deltaTime);
      }
      previousTimeRef.current = time;
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (requestRef.current !== null) {
        cancelAnimationFrame(requestRef.current);
      }
    };
    // The empty dependency array is intentional. The loop should not be reset.
  }, []);
};
