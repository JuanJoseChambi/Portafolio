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
    <section className="area min-h-xl flex justify-around items-center bg-red-500 ">

          <picture className="w-96 relative flex justify-center items-center ">
            <div className={`absolute w-full h-full rounded-full transition-all duration-500 ${image ? "bg-neutral-700 shadow-[0px_0px_10px_5px_#404040]" : "bg-[#D9D9D9] shadow-[0px_0px_100px_10px_#40404062]"} `}></div>
            <img src={sombra} alt="" className={`rounded-full z-10 scale-125 drop-shadow-[10px_20px_10px_black] transition-all duration-500 `} onMouseEnter={MouseEnter} onMouseLeave={MouseLeave}/>
          </picture>

          <article className="w-1/2 flex flex-col space-y-7 bg-bluee-500">
            <article className="relative flex justify-start items-end">
              <h2 className="text-8xl text-start bg-greenn-500 text-[#adadad8c] select-none">SOBRE MI</h2>
              <h2 className="absolute text-5xl text-center text-neutral-800 font-bold tracking-widest drop-shadow-[10px_5px_5px_#262626]">SOBRE MI</h2>
            </article>

            <p className="text-sm font-light text-neutral-700">Soy Juan José, desarrollador Fullstack Jr. Mi interés inicial en ciberseguridad y criptomonedas en 2022 me llevó al fascinante mundo del desarrollo web. Desde entonces, he cultivado mis habilidades de manera autodidacta, completando Bootcamps como SoyHenry y continuando mi aprendizaje con enfoque autodidacta en tecnologías como MongoDB, Tailwind Css y en un futuro muy cercano Angular.</p>

            <p className="text-sm font-light text-neutral-700">Mi enfoque se basa en la práctica constante y la búsqueda continua de nuevas habilidades para ofrecer soluciones innovadoras</p>
            
            <p className="text-sm font-light text-neutral-700">Con experiencia en diversas áreas, incluyendo frontend, backend y bases de datos. Mi conjunto de habilidades abarca tecnologías clave como React para la creación de interfaces dinámicas, Express para el desarrollo eficiente del backend, y PostgreSQL/MongoDB para la gestión robusta de bases de datos.</p>
          </article>

        </section>
  )
}

export default SobreMi