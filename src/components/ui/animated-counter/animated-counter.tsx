"use client";

import { useEffect, useRef, useState } from "react";

import type { AnimatedCounterProps } from "./animated-counter.types";

export function AnimatedCounter({
  value,
  duration = 1200,
  prefix = "",
  suffix = "",
  decimals = 0,
  className,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);

  const frame = useRef<number>(0);

  useEffect(() => {
    let start: number | null = null;

    function animate(time: number) {
      if (!start) start = time;

      const progress = Math.min(
        (time - start) / duration,
        1
      );

      setCount(progress * value);

      if (progress < 1) {
        frame.current = requestAnimationFrame(
          animate
        );
      }
    }

    frame.current = requestAnimationFrame(
      animate
    );

    return () =>
      cancelAnimationFrame(frame.current);
  }, [duration, value]);

  return (
    <span className={className}>
      {prefix}
      {count.toFixed(decimals)}
      {suffix}
    </span>
  );
}