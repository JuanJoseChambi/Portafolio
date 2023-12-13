import React, { useCallback } from 'react';

export function useScrollSection(ref: React.RefObject<HTMLDivElement>) {
  const scrollToSection = useCallback(() => {
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  }, [ref]);

  return scrollToSection;
}