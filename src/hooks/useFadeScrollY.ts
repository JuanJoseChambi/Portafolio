import { useEffect } from "react";

export function useFadeScrollY(ref: null | React.RefObject<HTMLDivElement>, classList:string) {
  useEffect(() => {
    function callback(entries: IntersectionObserverEntry[]) {
    //   console.log(entries);
        const arrayClass = classList.split(" ")
        // console.log(arrayClass);
        
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting) {
          // Assuming style.visibleInfo is defined somewhere in your code
          arrayClass.forEach(className => {
            entry.target.classList.add(className);
          });
        }else {
          arrayClass.forEach(className => {
                entry.target.classList.remove(className);
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
