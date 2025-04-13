import React, { useRef } from 'react';
import gsap from 'gsap';

const Tilt = ({ children, className}) => {
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const halfWidth = rect.width / 2;
    const halfHeight = rect.height / 2;

    const rotateY = ((x - halfWidth) / halfWidth) * 10;
    const rotateX = -((y - halfHeight) / halfHeight) * 10;

    gsap.to(containerRef.current, {
      rotationY: rotateY,
      rotationX: rotateX,
      scale: 0.95,
      transformPerspective: 600,
      ease: 'power3.out',
      duration: 0.4
    });
  };

  const handleMouseLeave = () => {
    gsap.to(containerRef.current, {
      rotationY: 0,
      rotationX: 0,
      scale: 1,
      ease: 'power3.out',
      duration: 0.5
    });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`${className} will-change-transform`}
    >
      {children}
    </div>
  );
};

export default Tilt;
