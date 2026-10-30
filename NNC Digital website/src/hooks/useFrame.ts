"use client";

import { useEffect, useRef } from "react";

export function useFrame(callback: (time: number) => void) {
  const callbackRef = useRef(callback);
  callbackRef.current = callback;

  useEffect(() => {
    let animationId: number;

    function loop(time: number) {
      callbackRef.current(time);
      animationId = requestAnimationFrame(loop);
    }

    animationId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animationId);
  }, []);
}
