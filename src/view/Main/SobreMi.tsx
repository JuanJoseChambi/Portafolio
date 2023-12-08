import { useState } from "react"
import sombra from "../../assets/main/SobreMi/sombraEnt.png"




function SobreMi() {

    const [image, setImage] = useState(false)

    function MouseEnter () {
      setImage(true)
    }
    function MouseLeave () {
      setImage(false)
    }
  

  return (
    <section className="area min-h-xl flex flex-wrap justify-around items-center space-y-28 medium:space-y-0 pt-20 medium:py-0 bg-redd-500 ">

          <picture className="max-w-90% sm:w-96 relative flex justify-center items-center ">
            <div className={`absolute w-full h-full rounded-full transition-all duration-500 ${image ? "bg-neutral-700 shadow-[0px_0px_10px_5px_#404040]" : "bg-[#D9D9D9] shadow-[0px_0px_100px_10px_#40404062]"} `}></div>
            <img src={sombra} alt="" className={`rounded-full z-10 sm:scale-125 hover:scale-100 drop-shadow-[10px_20px_10px_black] transition-all duration-500 `} onMouseEnter={MouseEnter} onMouseLeave={MouseLeave}/>
          </picture>

          <article className="w-[90%] medium:w-1/2 flex flex-col space-y-7 bg-bluee-500">
            <article className="relative flex justify-start items-end">
              <h2 className="text-8xl text-start bg-greenn-500 text-[#adadad8c] select-none">SOBRE MI</h2>
              <h2 className="absolute text-5xl text-center text-neutral-800 font-bold tracking-widest drop-shadow-[10px_5px_5px_#262626]">SOBRE MI</h2>
            </article>

            <p className="text-sm font-light text-neutral-700">Soy Juan José, <b className="inline text-violet">desarrollador Fullstack Jr</b>. Inicialmente interesado en ciberseguridad y videojuegos en 2022, me adentré en el desarrollo web. Comenzando de una manera Autodidacta y graduado de bootcamps como SoyHenry, donde he fortalecido habilidades tecnicas como blandas.</p>
            
            <p className="text-sm font-light text-neutral-700">Mi enfoque se basa en la <b className="inline text-violet">práctica constante</b> y la adquisición continua de habilidades para ofrecer soluciones innovadoras. Con experiencia en frontend, backend y bases de datos, domino tecnologías clave como React, Express y PostgreSQL/MongoDB.</p>

          </article>

        </section>
  )
}

export default SobreMi





