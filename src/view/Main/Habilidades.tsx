import { useState } from "react"
import { tecnologias } from "../../assets/Tecnologias"


function Habilidades() {

  const [borderBottom, setBorderBottom] = useState<null | string>(null)

  return (
    <section className="area flex flex-col justify-start items-center min-h-xl bg-limee-500">
        
       <article className="w-almostFull relative flex justify-start items-end mb-28 bg-re-500">
        <h2 className="text-8xl text-start bg-greenn-500 text-[#adadad8c] select-none">HABILIDADES</h2>
          <h2 className="absolute text-5xl text-neutral-800 font-bold tracking-widest drop-shadow-[10px_5px_5px_#262626]">HABILIDADES</h2>
       </article>

       <section className="w-almostFull h-auto relative flex justify-between items-end bg-graye-500">

        <article className="bg-blu-500 w-1/2 h-[313px] flex flex-col justify-between items-center space-y-5">
          <h2 className="text-lg font-semibold tracking-spacing ">TECNICAS</h2>
          <article className="w-[450px] flex flex-wrap justify-center items-center bg-greend-500 ">
            {tecnologias.map((tec) => (
                <picture key={tec.nombre} className="h-[35px] relative flex flex-col justify-center items-center mx-3 my-5 bg-blu-500 drop-shadow-[3px_5px_3px_grey] hover:drop-shadow-[3px_15px_8px_grey] hover:-translate-y-3 transition-[transform_drop-shadow] duration-500" onMouseEnter={() => setBorderBottom(tec.nombre)} onMouseLeave={() => setBorderBottom(null)}>
                  {tec.img}
                  <small className=" absolute -bottom-[20px] text-[10px] pointer-events-none tracking-wide">
                    {tec.nombre}
                    <div className={`absolute bottom-0 w-0 h-[1px] ${borderBottom === tec.nombre ? "w-full" : null} bg-violet transition-[width] duration-500`}></div>
                  </small>
                </picture>
            ))}
          </article>
        </article>

        <div className=" w-[1px] h-60 bg-violet select-none">ㅤ</div>
        
        <article className="bg-bluee-500 w-1/2 h-[313px] flex flex-col justify-between items-center">
          <h2 className="text-lg font-semibold tracking-spacing">BLANDAS</h2>
          <article className="w-[450px] h-[225px] flex flex-col justify-around items-center bg-lim-500">
              
              <article className="w-full flex justify-evenly text-lg font-light items-center bg-re-500">
                <p className="w-[40%] text-center firstLetter">Autodidacta</p>
                <p className="w-[40%] text-center firstLetter">Curiosidad</p>
              </article>
              <article className="w-full flex justify-evenly text-lg font-light items-center bg-re-500">
                <p className="w-[40%] text-center firstLetter">Adaptabilidad</p>
                <p className="w-[40%] text-center firstLetter">Aprendizaje Agil</p>
              </article>
              <article className="w-full flex justify-evenly text-lg font-light items-center bg-re-500">
                <p className="w-[40%] text-center firstLetter">Trabajo en Equipo</p>
                <p className="w-[40%] text-center firstLetter">Perseverancia</p>
              </article>

          </article>
        </article>

       </section>

    </section>
  )
}

export default Habilidades