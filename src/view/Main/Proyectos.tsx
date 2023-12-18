import { proyectsData } from "../../utilities/proyectsData/proyectsData";

import { useRef, useState } from "react";
import { tecnologias } from "../../assets/Tecnologias";
import { useFadeScrollY } from "../../hooks/useFadeScrollY";
import { Proyects } from "../../interfaces/interfaces";



interface RefProyectos {
  refProyectos:React.RefObject<HTMLDivElement>;
}

function Proyectos({refProyectos}: RefProyectos) {

  const refScrollTitle = useRef(null)

  const [infoProyect, setInfoProyect] = useState<Proyects | null>(null);

  useFadeScrollY(refScrollTitle, "opacity-100 translate-y-0")

  return (
    <section className="bg-[#d2d2d2]" ref={refProyectos}>
      <section className="area min-h-xl flex flex-col justify-center items-center py-16 space-y-20 bg-redd-500">
        <article className="relative flex justify-center items-end scrollFadeTop " ref={refScrollTitle}>
          <h2 className="text-[65px] sm:text-8xl text-start bg-greenn-500 text-[#adadad] select-none">
            PROYECTOS
          </h2>
          <h2 className="absolute text-5xl text-neutral-800 font-bold tracking-widest drop-shadow-[10px_5px_5px_#262626]">
            PROYECTOS
          </h2>
        </article>

        {infoProyect ? (
          <section className={`w-[95%] min-h-[400px] relative flex flex-col lg:flex-row justify-between items-center space-y-10 lg:space-y-0 opacity-0 transition-opacity duration-1000
          ${infoProyect.titulo ? "opacity-100 " : null }`} >
            
            <section className="w-almostFull lg:w-[55%] min-h-[300px] order-2 lg:order-1 flex flex-col justify-between items-center mt-10 lg:mt-0 space-y-5 bg-lim-500" >
              <article className="w-full  bg-limee-500">
                <article className="relative flex justify-between items-center bg-limee-500">
                  <h2 className="text-2xl font-semibold tracking-widest ">{infoProyect.titulo}</h2>
                  <ul className="flex justify-center items-center space-x-5 bg-redd-500">
                    {infoProyect.github && <li>
                      <a href={infoProyect.github} target="_blank">
                        <i className="cursor-pointer text-xl hover:text-violet bx bxl-github"></i>
                      </a>
                    </li>}
                   {infoProyect.web && <li>
                      <a href={infoProyect.web} target="_blank">
                        <i className="cursor-pointer text-xl hover:text-violet bx bx-world"></i>
                      </a>
                    </li>} 
                    <i onClick={() => setInfoProyect(null)} className="cursor-pointer text-[40px] textDegrade  bx bx-x"></i>
                  </ul>
                </article>
                <p className="text-xs ">{infoProyect.fecha}</p>
              </article>
              <p className="font-light text-sm" dangerouslySetInnerHTML={{ __html: infoProyect.descripcion }}></p>

              <section className="w-full h-1/6 bg-limee-500 flex flex-wrap justify-around lg:justify-start items-center sm:space-y-0 lg:space-x-3">
              {infoProyect.infoTec?.map((tec) => (
                  
                    <picture key={tec.nombre} className="bg-redd-500 h-[25px] hover:-translate-y-2 my-3 hover:scale-110 transition-[transform_drop-shadow] duration-500  flex flex-col justify-center items-center drop-shadow-[0px_10px_5px_black] hover:drop-shadow-[0px_15px_10px_black]">
                      {tec.img}
                    </picture>

              ))}
              </section>
              
            </section>

            <section className="max-sm:min-w-[70%] max-sm:max-w-[90%] sm:w-[450px] max-h-[550px] sm:h-full order-1 lg:order-2 bg-blued-500 grid grid-cols-3 grid-rows-3 bg-redd-500" >
              <section className="hidden  sm:grid w-[80%] h-[80%] rounded-sm place-self-end sm:place-content-center col-start-2 col-end-4 row-start-2 row-end-4 shadow-[-15px_15px_35px_0_black] bg-neutral-700">
                <h2 className="text-xl text-center tracking-spacing  text-white">
                  {
                    (() => {
                      const nombre = infoProyect.titulo.toUpperCase();
                      const primeraLetra = nombre[0];
                      const demasLetras = nombre.slice(1);
                      return (
                        <>
                          <b className=" text-violet text-3xl">{primeraLetra}</b>
                          {demasLetras}
                        </>
                      );
                    })() // Llamamos a la función aquí para obtener su resultado
                  }
                </h2>
              </section>

              <picture className="grid place-content-start min-h-[100px] rounded-xl overflow-hidden col-start-1 col-end-4 sm:col-end-3 row-start-1 row-end-4 sm:row-end-3 shadow-[-15px_15px_35px_0_black] bg-purplee-500 pointer-events-none">
                <img src={infoProyect.image} alt="Proyectos JC" className="object-cover select-none" />
              </picture>
            </section>
          </section>
        ) : (
          <section className="w-almostFull lg:w-[1100px] lg:h-[600px] grid proyectos lg:grid-cols-3 lg:grid-rows-3 gap-7 lg:gap-4 lg:proyectos-medium bg-redd-500">

            {proyectsData?.map((proyect, i) => {

                const tecnologiasProyecto = tecnologias.filter(tecno => proyect.tecnologias.some(tecnoProyect => tecno.nombre === tecnoProyect  ))
                const infoTec = "infoTec"

                proyect[infoTec] = tecnologiasProyecto;

                return (
                (
                  <picture key={i} onClick={() => setInfoProyect(proyect)} className={`max-lg:max-h-80 relative flex justify-center items-start border-none rounded-xl overflow-hidden shadow-[15px_15px_15px_0px_#696969] border cursor-pointer [grid-area:${proyect.gridArea}] `}>
                    <div className="absolute top-0 w-full h-full opacity-0 hover:opacity-100 hover:bg-[#000000c4] flex justify-center items-center z-10 transition-[background,opacity] duration-500">
                      
                      <section className=" w-[80%] min-h-[20%] flex flex-col flex-wrap justify-center items-center bg-limee-500 space-y-3">
                       <section className="flex justify-center items-center space-x-3 flex-wrap">
                        {tecnologiasProyecto.map((tecno) => (
                          <div key={tecno.nombre} className="w-[30px] h-[30px] hover:-translate-y-2 my-1 bg-bluee-500 drop-shadow-[0px_0px_15px_white] transition-transform duration-300 flex justify-center items-center bg-bluee-500 ">{tecno.img}</div>
                        ))}
                       </section>
                        <button className="flex justify-center border-b border-violet items-center space-x-2 py-0.5 ">
                          <i className='text-white text-[10px] bx bx-fullscreen'></i>
                          <p className="text-white text-[10px] font-extralight">MOSTRAR MAS</p>
                        </button>
                      </section>
                    
                    </div>
                    <img src={proyect.image} alt="" className={`${proyect.short ? "lg:h-full" : null} hover:blur-sm w-full select-none`}/>
                  </picture>
                )
              )
            })}
          </section>
        )}
      </section>
    </section>
  );
}

export default Proyectos;


