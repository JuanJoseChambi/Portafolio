import MMarket from "../../assets/main/Proeyctos/MMarket.png"
import RecipeFood from "../../assets/main/Proeyctos/RecipeFood.png"
import JCDV from "../../assets/main/Proeyctos/JCDV.svg"
import Tn from "../../assets/main/Proeyctos/Tn.png"


function Proyectos() {
  return (
    <section className='bg-[#d2d2d2]'>
      <section className='area min-h-xl flex flex-col justify-center items-center py-16 space-y-24'>

        <article className="relative flex justify-center items-end">
          <h2 className="text-8xl text-start bg-greenn-500 text-[#adadad] select-none">PROYECTOS</h2>
          <h2 className="absolute text-5xl text-neutral-800 font-bold tracking-widest drop-shadow-[10px_5px_5px_#262626]">PROYECTOS</h2>
        </article>

        <section className="w-almostFull lg:w-[900px] lg:h-[500px] grid proyectos lg:grid-cols-3 lg:grid-rows-3 gap-3 lg:proyectos-medium bg-redd-500">

          <picture className="max-lg:max-h-96 relative grayscale flex justify-center items-start hover:grayscale-0 transition-[filter] duration-500 rounded-xl overflow-hidden shadow-[0px_0px_35px_2px_black] border [grid-area:bigTopLeft]">
            <img src={JCDV} alt="" className=" w-full"/>
          </picture>

          <picture className="max-lg:max-h-96 relative grayscale flex justify-center items-start hover:grayscale-0 transition-[filter] duration-500 rounded-xl overflow-hidden shadow-[0px_0px_35px_2px_black] border [grid-area:minTopCenter]">
            <img src={RecipeFood} alt="" className="lg:h-full w-full"/>
          </picture>

          <picture className="max-lg:max-h-96 relative grayscale  hover:grayscale-0 transition-[filter] duration-500 flex justify-center items-end rounded-xl overflow-hidden shadow-[0px_0px_35px_2px_black] border [grid-area:bigTopRight]">
            <img src={JCDV} alt="" className="w-full"/>
          </picture>

          <picture className="max-lg:max-h-96 relative grayscale flex justify-center items-start hover:grayscale-0 transition-[filter] duration-500 rounded-xl overflow-hidden shadow-[0px_0px_35px_2px_black] border [grid-area:bigBotCenter]">
            <img src={Tn} alt="" className="lg:h-full w-full"/>
          </picture>

          <picture className="max-lg:max-h-96 relative grayscale flex justify-center items-start hover:grayscale-0 transition-[filter] duration-500 rounded-xl overflow-hidden shadow-[0px_0px_35px_2px_black] border [grid-area:minBotRight]">
            <img src={MMarket} alt="" className="lg:h-full w-full" />
          </picture>

        </section>
      </section>
    </section>
  )
}

export default Proyectos