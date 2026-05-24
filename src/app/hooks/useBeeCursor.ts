import { useState, useEffect, useRef } from 'react';

export function useBeeCursor() {
  const pos = useRef({ x: -100, y: -100 });
  const prevPos = useRef({ x: -100, y: -100 });
  const raf = useRef<number>(0);
  const elRef = useRef<HTMLDivElement>(null);
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    const onMove = (event: MouseEvent) => {
      pos.current = { x: event.clientX, y: event.clientY };
    };

    window.addEventListener('mousemove', onMove);

    const tick = () => {
      if (elRef.current) {
        const { x, y } = pos.current;
        elRef.current.style.transform = `translate(${x}px, ${y}px)`;
        const dx = x - prevPos.current.x;
        const dy = y - prevPos.current.y;

        if (Math.abs(dx) > 1 || Math.abs(dy) > 1) {
          setAngle(Math.atan2(dy, dx) * (180 / Math.PI) + 90);
        }

        prevPos.current = { x, y };
      }

      raf.current = requestAnimationFrame(tick);
    };

    raf.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return { elRef, angle };
}
