import MMarket from "../../assets/main/Proeyctos/MMarket.svg"
import RecipeFood from "../../assets/main/Proeyctos/RecipeFood.png"
import JCDV from "../../assets/main/Proeyctos/JCDV.svg"
import Tn from "../../assets/main/Proeyctos/Tn.png"
import { useState } from "react"

interface proyects {
  titulo: string;
  fecha: string;
  github: string;
  web: string;
  image: string;
  gridArea: string;
  descripcion: string;
  short?: boolean;
}

function Proyectos() {  

  const [proyects, setProyects] = useState <proyects[]>([
    {titulo:"Jesus Camino de Vida", fecha:"20 - jul - 20 Dic - 2023", github:"github.com/JuanJose", web:"github.com/JuanJose", image:JCDV, gridArea:"bigTopLeft", descripcion:"sssss"},
    {titulo:"Recipe Food", fecha:"20 Jul - 30 Ago - 2023", github:"github.com/JuanJose", web:"github.com/JuanJose", image:RecipeFood, gridArea:"minTopCenter", short:true, descripcion:"sss"},
    {titulo:"IJCDV", fecha:"20 Jul - 30 Ago - 2023", github:"github.com/JuanJose", web:"github.com/JuanJose", image:JCDV, gridArea:"bigTopRight", descripcion:"sss"},
    {titulo:"TN", fecha:"20 Jul - 30 Ago - 2023", github:"github.com/JuanJose", web:"github.com/JuanJose", image:Tn, gridArea:"bigBotCenter", short:true, descripcion:"uhihiu"},
    {titulo:"MMarket", fecha:"20 Jul - 30 Ago - 2023", github:"github.com/JuanJose", web:"github.com/JuanJose", image:MMarket, gridArea:"minBotRight", descripcion:"MMarket simplifica compras en tiendas locales a través de su plataforma en línea, beneficiando a tiendas y usuarios con opciones de compra en persona y entregas a domicilio. Su objetivo es ampliar su alcance."}
  ])

  const [infoProyect, setInfoProyect] = useState<proyects | null>(null);
  console.log(infoProyect);
  

  // const [proyect, setProyect] = useState()

  return (
    <section className='bg-[#d2d2d2]'>
      <section className='area min-h-xl flex flex-col justify-center items-center pb-28 pt-20 space-y-24'>

        <article className="relative flex justify-center items-end">
          <h2 className="text-7xl sm:text-8xl text-start bg-greenn-500 text-[#adadad] select-none">PROYECTOS</h2>
          <h2 className="absolute text-5xl text-neutral-800 font-bold tracking-widest drop-shadow-[10px_5px_5px_#262626]">PROYECTOS</h2>
        </article>

        {infoProyect 
        ? <section className="w-[95%] min-h-[500px] relative flex flex-col lg:flex-row justify-between items-center space-y-10 lg:space-y-0 bg-redd-500">

            <i onClick={() => setInfoProyect(null)} className='absolute top-0 right-0 lg:top-28 lg:left-0 text-3xl cursor-pointer text-violet  bx bx-x-circle'></i>
            <section className="w-almostFull lg:w-[55%] h-[200px] order-2 lg:order-1 flex flex-col  justify-start items-start space-y-5 bg-limed-500">

                <article className="w-full bg-liem-500">
                  <article className="relative flex justify-between items-center ">
                    <h2 className="text-2xl font-semibold tracking-widest">{infoProyect.titulo}</h2>
                    <ul className="flex justify-center items-center space-x-5">
                      <li>
                        <a href={infoProyect.github}>
                          <i className='cursor-pointer text-lg hover:text-violet bx bxl-github' ></i>
                        </a>
                      </li>
                      <li>
                        <a href={infoProyect.web}>
                          <i className='cursor-pointer text-lg hover:text-violet bx bx-world' ></i>
                        </a>
                      </li>
                    </ul>
                  </article>
                  <p className="text-xs">{infoProyect.fecha}</p>
                </article>
                <p className="font-light text-sm">{infoProyect.descripcion}</p>

            </section>

            <section className="max-sm:min-w-[70%] max-sm:max-w-[90%] sm:w-[450px] max-h-[550px] sm:h-full order-1 lg:order-2 bg-blued-500 grid grid-cols-3 grid-rows-3 bg-redd-500">

              <section className="hidden sm:grid w-[80%] h-[80%] rounded-sm place-self-end sm:place-content-center col-start-2 col-end-4 row-start-2 row-end-4 shadow-[-15px_15px_35px_0_black] bg-neutral-700">
                <h2 className="text-xl text-center tracking-spacing text-white"> 
                {
                  (() => {
                    const nombre = infoProyect.titulo.toUpperCase().split("");
                    const primeraLetra = nombre[0].toString()
                    const demasLetras = nombre.filter(i => i !== nombre[0]).join("")
                    return (
                      <>
                        <b className="text-violet text-3xl">{primeraLetra}</b>{demasLetras}
                      </>
                    );
                  })() // Llamamos a la función aquí para obtener su resultado

                }
                </h2>
              </section>

              <picture className="grid place-content-start min-h-[100px] rounded-xl overflow-hidden col-start-1 col-end-4 sm:col-end-3 row-start-1 row-end-4 sm:row-end-3 shadow-[-15px_15px_35px_0_black] bg-purple-500">
                  <img src={infoProyect.image} alt="" className="object-cover"/>
              </picture>

            </section>
            
            

          </section> 
        : <section className="w-almostFull lg:w-[850px] lg:h-[500px] grid proyectos lg:grid-cols-3 lg:grid-rows-3 gap-7 lg:gap-4 lg:proyectos-medium bg-redd-500">

            {proyects?.map((proyect, i) => (
              <picture key={i} onClick={() => setInfoProyect(proyect)} className={`max-lg:max-h-80 relative grayscale flex justify-center items-start border-none hover:grayscale-0 transition-[filter] duration-500 rounded-xl overflow-hidden shadow-[15px_15px_15px_0px_#696969] border [grid-area:${proyect.gridArea}]`}>
              <img src={proyect.image} alt="" className={`${proyect.short? "lg:h-full": null} w-full`}/>
            </picture>
            ))}

          </section> }

      </section>
    </section>
  )
}

export default Proyectos