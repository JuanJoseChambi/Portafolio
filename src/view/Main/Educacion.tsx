import TimeLine from "../../components/TimeLine/TimeLine"

interface RefSobreMi {
  refEducacion:React.RefObject<HTMLDivElement>
}

function Educacion({refEducacion}:RefSobreMi) {
  return (
    <section className="min-h-80 bg-redd-500  pb-16" ref={refEducacion}>
        <section className="area h-auto bg-bluee-500 flex flex-col justify-center items-center "> 
            <h2 className="text-lg font-semibold tracking-spacing mb-10">EDUCACION</h2>
            <TimeLine/>
        </section>
    </section>
  )
}

export default Educacion

// py-10 medium:pb-10 medium:py-0