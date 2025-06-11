import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';

const CursorDot = styled.div`
  width: 8px;
  height: 8px;
  background: #4a90e2;
  border-radius: 50%;
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  transition: transform 0.1s ease;
`;

const CursorRing = styled.div`
  width: 40px;
  height: 40px;
  border: 2px solid #4a90e2;
  border-radius: 50%;
  position: fixed;
  pointer-events: none;
  z-index: 9998;
  transition: transform 0.15s ease, width 0.2s ease, height 0.2s ease;
  opacity: 0.5;
`;

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      <CursorDot
        style={{
          transform: `translate(${position.x - 4}px, ${position.y - 4}px)`,
        }}
      />
      <CursorRing
        style={{
          transform: `translate(${position.x - 20}px, ${position.y - 20}px)`,
          width: isHovering ? '60px' : '40px',
          height: isHovering ? '60px' : '40px',
        }}
      />
    </>
  );
};

export default CustomCursor; 