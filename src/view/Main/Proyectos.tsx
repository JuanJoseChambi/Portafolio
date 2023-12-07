import MMarket from "../../assets/main/Proeyctos/MMarket.png"
import RecipeFood from "../../assets/main/Proeyctos/RecipeFood.png"
import JCDV from "../../assets/main/Proeyctos/JCDV.svg"
import Tn from "../../assets/main/Proeyctos/Tn.png"


function Proyectos() {
  return (
    <section className='bg-[#dcd9d9]'>
      <section className='area min-h-xl flex justify-center items-center'>
        <section className="w-[900px] h-[500px] my-20 grid grid-cols-3 grid-rows-3 gap-1 proyectos bg-redd-500">

          <picture className="border-solid overflow-hidden border-black border  bg-blue-500 [grid-area:bigTopLeft]">
            <img src={JCDV} alt="" />
          </picture>
          <article className="border-solid overflow-hidden border-black border  bg-blue-500 [grid-area:minTopCenter]">
            <img src={RecipeFood} alt="" />
          </article>
          <article className="border-solid overflow-hidden border-black border  bg-blue-500 [grid-area:bigTopRight]">
            <img src={MMarket} alt="" />
          </article>
          {/* <article className="border-solid border-black border  bg-blue-500 [grid-area:minBotLeft]">
            Holaf
          </article> */}
          <article className="border-solid overflow-hidden border-black border  bg-blue-500 [grid-area:bigBotCenter]">
            <img src={Tn} alt="" />
          </article>
          <article className="border-solid overflow-hidden border-black border  bg-blue-500 [grid-area:minBotRight]">
            <img src={MMarket} alt="" />
          </article>

        </section>
      </section>
    </section>
  )
}

export default Proyectos