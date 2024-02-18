import { useState } from "react";

interface ButtonLinkProp {
    text: string | null;
    icon: string;
    link:string;
}

function ButtonLink({text, icon, link}:ButtonLinkProp) {
    
    const [hoverLine, setHoverLine] = useState<string | null>()

    return (
    <li >
        <a href={link} target="_blank" onMouseEnter={() => setHoverLine(text)} onMouseLeave={() => setHoverLine(null)} className="w-auto h-[30px] space-x-1 flex justify-center items-center relative bg-redd-500">
            <i className={`cursor-pointer text-xl ${hoverLine === text && "text-violet"} ${icon}`}></i>
            <p className={`font-medium text-sm text-neutral-500 ${hoverLine === text && "text-violet"}`}>{text}</p>
            <div className={`${hoverLine === text ? "w-full" : "w-0"} absolute bottom-0 z-10 h-[1px] bg-violet transition-[width] duration-500`}></div>
        </a> 
    </li>
  )
}

export default ButtonLink