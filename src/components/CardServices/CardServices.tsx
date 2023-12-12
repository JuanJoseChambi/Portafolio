import { useEffect, useState } from "react"

interface CardProps {
    title:string;
    icon:string;
    info:string;
}

function CardServices({title, icon, info}:CardProps) {
    const [style, setStyle] = useState(false)
    const [cardInfo, setCardInfo] = useState(false)
    const [overFlow, setOverFlow] = useState(false)
  

    useEffect(() => {
        if (cardInfo) {
          setTimeout(() => setOverFlow(true),400)
        }
    
    
        return () => {
          setTimeout(() => setOverFlow(false),400)
        }
      }, [cardInfo])

  return (
    <article className={`cardServices relative cursor-pointer bg-redd-500 ${overFlow ? "" : "overflow-hidden"}`} onClick={() => setCardInfo(!cardInfo)} onMouseEnter={() => setStyle(true)} onMouseLeave={() => setStyle(false)}>
        <i className={`text-8xl textDegrade ${icon}`}></i>
        <article className="flex justify-center items-center space-x-2 bg-redd-600">
            <p className="text-lg relative font-semibold tracking-spacing firstLetter">
                {title}
                <div className={`absolute bottom-0 w-0 h-[1px] ${style?"w-full" :null} transition-[width] duration-1000 bg-violet`}></div>
            </p>
        </article>
        
        <section className={`absolute flex justify-center items-center w-almostFull h-1/2  ${cardInfo ?"cardInfoOpen " : "cardInfoClose"} transition-[transform_filter] duration-500 bg-white border border-gray-300`}>
            <p className="text-xs font-light text-center px-2">{info}</p>
        </section>
    </article>
  )
}

export default CardServices