'use client';

import { useEffect, useState } from 'react';

type Props = {
  className?: string;
};

const Cursor = ({ className = '' }: Props) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Check if the environment is client-side
    if (typeof window !== 'undefined') {
      const onMouseMove = (e: MouseEvent) => {
        setPosition({ x: e.clientX, y: e.clientY });
      };

      document.addEventListener('mousemove', onMouseMove);

      // Cleanup event listener on unmount
      return () => {
        document.removeEventListener('mousemove', onMouseMove);
      };
    }
  }, []);

  return (
    <div
      className={`fixed w-[100%] h-[140%] z-30 transition duration-300 pointer-events-none -translate-x-1/2 -translate-y-1/2 bg-torch ${className}`}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
      }}
    ></div>
  );
};

export default Cursor;
