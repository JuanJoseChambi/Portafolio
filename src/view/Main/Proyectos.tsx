import { proyectsData } from "../../utilities/proyectsData/proyectsData";

import { useState } from "react";
import { tecnologias } from "../../assets/Tecnologias";

interface proyects {
  tecnologias: (string | arrayTecnologias)[];
  titulo: string;
  fecha: string;
  github: string;
  web: string;
  image: string;
  gridArea: string;
  descripcion: string;
  short?: boolean;
  infoTec?: null | arrayTecnologias[]
}

interface arrayTecnologias {
  nombre:string;
  img:JSX.Element;
}

function Proyectos() {
  // console.log(tecnologias);

  const [proyects, setProyects] = useState<proyects[]>(proyectsData);
  

  const [infoProyect, setInfoProyect] = useState<proyects | null>(null);
  console.log(infoProyect);

  // Imagenes a la informacion de las cards-------------------------------------------------------------------------------------------------------------------------

  return (
    <section className="bg-[#d2d2d2]">
      <section className="area min-h-xl flex flex-col justify-center items-center pb-20 pt-20 space-y-24">
        <article className="relative flex justify-center items-end">
          <h2 className="text-[60px] sm:text-8xl text-start bg-greenn-500 text-[#adadad] select-none">
            PROYECTOS
          </h2>
          <h2 className="absolute text-5xl text-neutral-800 font-bold tracking-widest drop-shadow-[10px_5px_5px_#262626]">
            PROYECTOS
          </h2>
        </article>

        {infoProyect ? (
          <section className="w-[95%] min-h-[500px] relative flex flex-col lg:flex-row justify-between items-center space-y-10 lg:space-y-0 bg-re-500">
            <i
              onClick={() => setInfoProyect(null)}
              className="absolute top-0 right-0 lg:top-28 lg:left-0 text-3xl cursor-pointer text-violet  bx bx-x-circle"
            ></i>
            <section className="w-almostFull lg:w-[55%] h-[200px] order-2 lg:order-1 flex flex-col  justify-start items-start space-y-5 bg-limde-500">
              <article className="w-full bg-liem-500">
                <article className="relative flex justify-between items-center bg-limee-500">
                  <h2 className="text-2xl font-semibold tracking-widest">
                    {infoProyect.titulo}
                  </h2>
                  <ul className="flex justify-center items-center space-x-5 bg-redd-500">
                    <li>
                      <a href={infoProyect.github}>
                        <i className="cursor-pointer text-xl hover:text-violet bx bxl-github"></i>
                      </a>
                    </li>
                    <li>
                      <a href={infoProyect.web}>
                        <i className="cursor-pointer text-xl hover:text-violet bx bx-world"></i>
                      </a>
                    </li>
                  </ul>
                </article>
                <p className="text-xs">{infoProyect.fecha}</p>
              </article>
              <p className="font-light text-sm">{infoProyect.descripcion}</p>

              <section className="w-full h-1/6 bg-limee-500 flex justify-around lg:justify-start items-center lg:space-x-3">
              {infoProyect.infoTec?.map((tec) => (
                  
                    <picture className="bg-redd-500 h-[25px] hover:-translate-y-2 hover:scale-150 transition-[transform_drop-shadow] ease-in-out duration-500  flex flex-col justify-center items-center drop-shadow-[0px_10px_5px_black] hover:drop-shadow-[0px_15px_10px_black]">
                      {tec.img}
                    </picture>

              ))}
              </section>
              
            </section>

            <section className="max-sm:min-w-[70%] max-sm:max-w-[90%] sm:w-[450px] max-h-[550px] sm:h-full order-1 lg:order-2 bg-blued-500 grid grid-cols-3 grid-rows-3 bg-redd-500">
              <section className="hidden sm:grid w-[80%] h-[80%] rounded-sm place-self-end sm:place-content-center col-start-2 col-end-4 row-start-2 row-end-4 shadow-[-15px_15px_35px_0_black] bg-neutral-700">
                <h2 className="text-xl text-center tracking-spacing text-white">
                  {
                    (() => {
                      const nombre = infoProyect.titulo.toUpperCase().split("");
                      const primeraLetra = nombre[0].toString();
                      const demasLetras = nombre.filter((i) => i !== nombre[0]).join("");
                      return (
                        <>
                          <b className="text-violet text-3xl">{primeraLetra}</b>
                          {demasLetras}
                        </>
                      );
                    })() // Llamamos a la función aquí para obtener su resultado
                  }
                </h2>
              </section>

              <picture className="grid place-content-start min-h-[100px] rounded-xl overflow-hidden col-start-1 col-end-4 sm:col-end-3 row-start-1 row-end-4 sm:row-end-3 shadow-[-15px_15px_35px_0_black] bg-purplee-500">
                <img src={infoProyect.image} alt="" className="object-cover" />
              </picture>
            </section>
          </section>
        ) : (
          <section className="w-almostFull lg:w-[850px] lg:h-[500px] grid proyectos lg:grid-cols-3 lg:grid-rows-3 gap-7 lg:gap-4 lg:proyectos-medium bg-redd-500">
            {proyects?.map((proyect, i) => {

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
                          <div key={tecno.nombre} className="hover:-translate-y-2 my-1 bg-bluee-500 drop-shadow-[0px_0px_15px_white] transition-transform duration-300 flex justify-center items-center bg-bluee-500 ">{tecno.img}</div>
                        ))}
                       </section>
                        <button className="flex justify-center border-b border-violet-700 items-center space-x-2 py-0.5 ">
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



















{/* <section className="w-almostFull lg:w-[850px] lg:h-[500px] grid proyectos lg:grid-cols-3 lg:grid-rows-3 gap-7 lg:gap-4 lg:proyectos-medium bg-redd-500">

          <picture className="max-lg:max-h-80 relative grayscale flex justify-center items-start border-none hover:grayscale-0 transition-[filter] duration-500 rounded-xl overflow-hidden shadow-[15px_15px_15px_0px_#696969] border [grid-area:bigTopLeft]">
            <img src={JCDV} alt="" className=" w-full"/>
          </picture>

          <picture className="max-lg:max-h-80 relative grayscale flex justify-center items-start border-none hover:grayscale-0 transition-[filter] duration-500 rounded-xl overflow-hidden shadow-[15px_15px_15px_0px_#696969] border [grid-area:minTopCenter]">
            <img src={RecipeFood} alt="" className="lg:h-full w-full"/>
          </picture>

          <picture className="max-lg:max-h-80 relative grayscale  hover:grayscale-0 transition-[filter] duration-500 border-none flex justify-center items-end rounded-xl overflow-hidden shadow-[15px_15px_15px_0px_#696969] border [grid-area:bigTopRight]">
            <img src={JCDV} alt="" className="w-full"/>
          </picture>

          <picture className="max-lg:max-h-80 relative grayscale flex justify-center items-start border-none hover:grayscale-0 transition-[filter] duration-500 rounded-xl overflow-hidden shadow-[15px_15px_15px_0px_#696969] border [grid-area:bigBotCenter]">
            <img src={Tn} alt="" className="lg:h-full w-full"/>
          </picture>

          <picture className="max-lg:max-h-80 relative grayscale flex justify-center items-start border-none hover:grayscale-0 transition-[filter] duration-500 rounded-xl overflow-hidden shadow-[15px_15px_15px_0px_#696969] border [grid-area:minBotRight]">
            <img src={MMarket} alt="" className="lg:h-full w-full" />
          </picture>

        </section> */}





