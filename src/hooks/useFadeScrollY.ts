import { useEffect } from "react";

export function useFadeScrollY(ref: null | React.RefObject<HTMLDivElement>, classList:string) {
  useEffect(() => {
    function callback(entries: IntersectionObserverEntry[]) {

      const arrayClass = classList.split(" ")
        
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting) {
          arrayClass.forEach(className => {
            entry.target.classList.add(className);
          });
        }
      });
    }

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    };

    const observador = new IntersectionObserver(callback, options);
    if (ref?.current) {
      observador.observe(ref.current);
    }

    // Cleanup the observer on component unmount
    return () => {
      observador.disconnect();
    };
  }, [ref]);
}
