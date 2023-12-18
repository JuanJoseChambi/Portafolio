import { useRef } from "react"
import TimeLine from "../../components/TimeLine/TimeLine"
import { useFadeScrollY } from "../../hooks/useFadeScrollY"

interface RefSobreMi {
  refEducacion:React.RefObject<HTMLDivElement>
}

function Educacion({refEducacion}:RefSobreMi) {
    const refScrollEducacion = useRef(null)
  useFadeScrollY(refScrollEducacion, "opacity-100 translate-y-0")

  return (
    <section className="min-h-80 bg-redd-500  max-md:py-16" ref={refEducacion}>
        <section className="area h-auto bg-bluee-500 flex flex-col justify-center items-center scrollFadeBottom" ref={refScrollEducacion}> 
            <h2 className="text-lg font-semibold tracking-spacing mb-10">EDUCACION</h2>
            <TimeLine/>
        </section>
    </section>
  )
}

export default Educacion

// py-10 medium:pb-10 medium:py-0