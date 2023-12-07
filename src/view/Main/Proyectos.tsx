import MMarket from "../../assets/main/Proeyctos/MMarket.png"
import RecipeFood from "../../assets/main/Proeyctos/RecipeFood.png"
import JCDV from "../../assets/main/Proeyctos/JCDV.svg"
import Tn from "../../assets/main/Proeyctos/Tn.png"


function Proyectos() {
  return (
    <section className='bg-[#dcd9d9]'>
      <section className='area min-h-xl flex justify-center items-center'>
        <section className="w-[900px] h-[500px] my-20 grid grid-cols-3 grid-rows-3 gap-3 proyectos bg-redd-500">

          <picture className="rounded-xl overflow-hidden shadow-[0px_0px_35px_2px_black] border [grid-area:bigTopLeft]">
            <img src={JCDV} alt="" />
          </picture>
          <picture className="rounded-xl overflow-hidden shadow-[0px_0px_35px_2px_black] border [grid-area:minTopCenter]">
            <img src={RecipeFood} alt="" className="h-full"/>
          </picture>
          <picture className="flex justify-end items-end rounded-xl overflow-hidden shadow-[0px_0px_35px_2px_black] border [grid-area:bigTopRight]">
            <img src={JCDV} alt="" className=""/>
          </picture>
          {/* <article className="border-solid border-black border  bg-blue-500 [grid-area:minBotLeft]">
            Holaf
          </article> */}
          <picture className="rounded-xl overflow-hidden shadow-[0px_0px_35px_2px_black] border [grid-area:bigBotCenter]">
            <img src={Tn} alt="" />
          </picture>
          <picture className="rounded-xl overflow-hidden shadow-[0px_0px_35px_2px_black] border [grid-area:minBotRight]">
            <img src={MMarket} alt="" className="h-full" />
          </picture>

        </section>
      </section>
    </section>
  )
}

export default Proyectos