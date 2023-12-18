import React, { useCallback } from 'react';

export function useScrollSection(ref: React.RefObject<HTMLDivElement>) {
  const scrollToSection = useCallback(() => {
    if (ref.current) {
      ref.current.scrollIntoView();
    }
  }, [ref]);

  return scrollToSection;
}