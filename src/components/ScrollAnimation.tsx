import React, { useEffect, useRef } from 'react';
import styled from '@emotion/styled';

const AnimatedSection = styled.div<{ isVisible: boolean }>`
  opacity: ${props => props.isVisible ? 1 : 0};
  transform: translateY(${props => props.isVisible ? '0' : '20px'});
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
`;

interface ScrollAnimationProps {
  children: React.ReactNode;
  threshold?: number;
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({ 
  children, 
  threshold = 0.1 
}) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  return (
    <AnimatedSection ref={ref} isVisible={isVisible}>
      {children}
    </AnimatedSection>
  );
};

export default ScrollAnimation; 