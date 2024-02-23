import { useState } from "react";

interface IconLinkHDRProp {
    text:string;
    link:string;
    icon:string;
}

function IconLinkHDR({text, link, icon}: IconLinkHDRProp) {

    const [hover, setHover] = useState<string | null>(null)

  return (
    <li className={`${hover === text ? "w-[120px]" : "w-[40px]"} h-[30px] space-x-2 transition-[width] duration-500 flex justify-start items-center rounded-full overflow-hidden bg-blu-500`} onMouseEnter={() => setHover(text)} onMouseLeave={() => setHover(null)}>
        <a href={link} target="_blanck" className="w-full h-full font-light text-sm flex justify-start items-center bg-redd-500">
            <i className={`text-2xl py-1 pl-2 pr-3 rounded-full ${icon} ${hover === text ? "text-violet" : ""} transition-colors duration-500`}></i>
            <b className="tracking-widest text-xs relative">
                {text}
                <div className={`${hover === text ? "w-full" : "w-0"} h-[1px] bg-violet absolute -bottom-[2px] transition-[width] duration-700`}></div>
            </b>
        </a>
    </li>
  )
}

export default IconLinkHDR