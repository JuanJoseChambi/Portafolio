import { useEffect, useState } from "react"
import TitleSections from "../../components/TitleSections/TitleSections"

function Servicios() {

  const [cardInfo, setCardInfo] = useState(false)
  const [overFlow, setOverFlow] = useState(false)


  useEffect(() => {
    if (cardInfo) {
      setTimeout(() => setOverFlow(true),500)
    }


    return () => {
      setTimeout(() => setOverFlow(false), 500)
    }
  }, [cardInfo])
  

  return (
    <section className="area flex flex-col justify-start items-center min-h-xl bg-redd-500">

      <TitleSections title="SERVICIOS" position="center" margin="bottom"/>
      
      <section className="w-almostFull h-1/2 bg-limed-500 flex flex-wrap gap-10 justify-center items-center">

        <article className={`cardServices relative ${overFlow ? "" : "overflow-hidden"} ${cardInfo? "blur-sm" : null}`} onMouseEnter={() => setCardInfo(true)} onMouseLeave={() => setCardInfo(false)}>
          <i className='text-8xl bx bx-credit-card-front'></i>
          <p className="text-lg font-semibold tracking-spacing mb-10 firstLetter">FRONTEND </p>
          <section className={`absolute flex justify-center items-center  ${cardInfo ?"cardInfoOpen" : "cardInfoClose"} w-almostFull h-1/2 transition-transform duration-500 bg-red-500`}>
            <p className="text-sm font-light text-center px-2">Como Desarrollador Frontend cada dia trato de mejorar las interfaces con las cuales trajo y tratao de hacer estas cuenten con resndimiento y buenas practicas de SEO</p>
          </section>
        </article>

        <article className="cardServices b-purple-500">
          <i className='text-8xl bx bx-server' ></i>
          <p className="text-lg font-semibold tracking-spacing mb-10 firstLetter">BACKEND</p>
        </article>

        <article className="cardServices b-gray-500">
          <i className='text-8xl bx bx-check-double'></i>
          <p className="text-lg font-semibold tracking-spacing mb-10 firstLetter">FULLSTACK</p>
        </article>

      </section>

    </section>
  )
}

export default Servicios