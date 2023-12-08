import MMarket from "../../assets/main/Proeyctos/MMarket.svg"
import LogoMMarket from "../../assets/main/Proeyctos/LogoMMarket.jpeg"
import RecipeFood from "../../assets/main/Proeyctos/RecipeFood.png"
import JCDV from "../../assets/main/Proeyctos/JCDV.svg"
import IJCDV from "../../assets/main/Proeyctos/IJCDV.svg"
import Tn from "../../assets/main/Proeyctos/Tn.png"
import { useState } from "react"


function Proyectos() {

  // const [proyect, setProyect] = useState()

  return (
    <section className='bg-[#d2d2d2]'>
      <section className='area min-h-xl flex flex-col justify-center items-center pb-28 pt-20 space-y-24'>

        <article className="relative flex justify-center items-end">
          <h2 className="text-8xl text-start bg-greenn-500 text-[#adadad] select-none">PROYECTOS</h2>
          <h2 className="absolute text-5xl text-neutral-800 font-bold tracking-widest drop-shadow-[10px_5px_5px_#262626]">PROYECTOS</h2>
        </article>

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

        <section className="w-[95%] h-[500px] flex justify-between items-center bg-rede-500">

          <article className="w-[55%] h-[70%] space-y-5 bg-limee-500">
            <article>
              <h2 className="text-2xl font-semibold tracking-widest">MMarket</h2>
              <p className="text-xs">20 Jul - 30 Ago - 2023</p>
            </article>
            <p className="font-light text-sm">MMarket simplifica compras en tiendas locales a través de su plataforma en línea, beneficiando a tiendas y usuarios con opciones de compra en persona y entregas a domicilio. Su objetivo es ampliar su alcance.</p>
            
            

            <button>GitHub</button>
            <button>Web</button>
          </article>

          <section className="w-[40%] h-full bg-blued-500 grid grid-cols-3 grid-rows-3">
            
            <section className="w-[80%] h-[80%] rounded-sm grid place-self-end place-content-center col-start-2 col-end-4 row-start-2 row-end-4 shadow-[-15px_15px_35px_0_black] bg-neutral-700">
              <h2 className="text-xl tracking-spacing text-white"><b className="text-violet text-3xl">M</b>MARKET</h2>
            </section>

            <picture className="grid place-content-start max-w-[450px] rounded-xl overflow-hidden col-start-1 col-end-3 row-start-1 row-end-3 shadow-[-15px_15px_35px_0_black] bg-purplee-500">
              <div className="absolute w-full h-full"></div>
                {/* <img src={IJCDV} alt="" className="h-full w-full object-cover"/> */}
                <img src={MMarket} alt="" className="w-full"/>
            </picture>

          </section>

        </section>

      </section>
    </section>
  )
}

export default Proyectos