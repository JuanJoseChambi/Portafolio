
import { ReactNode, useState } from "react"

interface TooltipProp {
    children: ReactNode;
    text:string ;
    positionY?:string;
    positionX?:string;
}

function Tooltip({children, text, positionY = "top"}: TooltipProp) {

    const [hoverTooltip, setHoverTooltip] = useState<string | null>(null)

    return (
        <div className="relative w-auto h-full inline-block bg-redd-500">
            <div onMouseEnter={() => setHoverTooltip(text)} onMouseLeave={() => setHoverTooltip(null)}>
                {children}
            </div>
            <div className={`min-w-[50px] h-full flex justify-center items-center text-white absolute top-0 bottom-0 font-light px-3 py-1 text-xs tracking-widest rounded-full

                    ${text === "Activo" ? "bg-green-700" : (text === "Desactivo" ? "bg-red-700" : "bg-yellow-500")} 
                    ${positionY === "top" && "-top-[125%] -left-[10px] "}
                    ${positionY === "bottom" && "top-[125%] -left-[10px]"}
                    ${positionY === "left" && "right-[145%]"}
                    ${positionY === "right" && "left-[145%]"}

                    ${hoverTooltip === text ? " opacity-100" : " opacity-0"} transition-opacity duration-500`}>
                {text}
                <i className={`absolute text-black 
                    ${positionY === "left" ? "-right-[13px] bx bxs-chevron-right" : 
                        (positionY === "right" ? "-left-[13px] bx bxs-chevron-left" : null)}
                `} ></i>
            </div>
        </div>
    )
}

export default Tooltip