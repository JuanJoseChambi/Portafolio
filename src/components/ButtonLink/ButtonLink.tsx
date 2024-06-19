import { useState } from "react";

interface ButtonLinkProp {
    text?: string | null;
    icon?: string;
    link?:string;
    sizeIcon?:string
    sizeLetter?:string
    duration?:string;
    onClick?:() => void;
}

function ButtonLink({text, icon, link, sizeIcon = "text-xl", sizeLetter = "text-sm", duration = "500", onClick}:ButtonLinkProp) {
    
    const [hoverLine, setHoverLine] = useState<string | null>()

    return (
    <li >
        <a href={link} target="_blank" 
            onClick={onClick}
            onMouseEnter={() => setHoverLine(link)} 
            onMouseLeave={() => setHoverLine(null)}
            className="w-auto h-[30px] space-x-1 flex justify-center items-center relative bg-redd-500">
            <i className={`cursor-pointer ${sizeIcon} ${hoverLine === link && "text-violet"} transition-colors duration-${duration}  ${icon}`}></i>
            <p className={`font-medium no-wrap ${sizeLetter} text-neutral-500 ${hoverLine === link && "text-violet"}`} >{text}</p>
            {text && <div className={`${hoverLine === link ? "w-full" : "w-0"} absolute bottom-0 z-10 h-[1px] bg-violet transition-[width] duration-500`}></div>}
        </a> 
    </li>
  )
}

export default ButtonLink