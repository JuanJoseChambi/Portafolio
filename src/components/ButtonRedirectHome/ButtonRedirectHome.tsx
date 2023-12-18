import { useEffect, useRef, useState } from "react";
import { useScrollSection } from "../../hooks/useScrollSections";
import { useFadeScrollY } from "../../hooks/useFadeScrollY";


interface RedirectProp {
    refHeader: React.RefObject<HTMLDivElement>;
}

function ButtonRedirectHome({refHeader}:RedirectProp) {
    const [button, setButton] = useState(false)
    const refButtom = useRef(null)

    const home = useScrollSection(refHeader)

    useEffect(() => {

        function handleScroll() {
    
          const scrollY = window.scrollY;
            // console.log(scrollY);
            
          if (refHeader.current && scrollY >= 57) {
            setButton(true)
          }else {
            setButton(false)
          }
        }
    
        window.addEventListener("scroll", handleScroll);
    
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
    
      }, [refHeader]);

      useFadeScrollY(refButtom, "opacity-100 translate-y-0")

  return (
    <button onClick={home} className={button ? "w-[50px] h-[50px] flex justify-center items-center rounded-full text-2xl 2xl:text-4xl fixed bottom-5 right-5 bg-[#171717] text-white opacity-0 scrollFadeTop" : "hidden"} ref={refButtom}>
        <i className='bx bx-chevrons-up'></i>
    </button>
  )
}

export default ButtonRedirectHome