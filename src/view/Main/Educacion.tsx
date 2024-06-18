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
    <section className="min-h-80 bg-redd-500 pb-16  max-md:py-16" ref={refEducacion}>
        <section className="area h-auto bg-bluee-500 flex flex-col justify-center items-center scrollFadeBottom" ref={refScrollEducacion}> 
            <h2 className="text-lg font-semibold tracking-spacing mb-10">EDUCACION</h2>
            <ul className="bg-gren-500 min-w-[60%] min-h-60 mx-auto flex flex-col medium:flex-row justify-center items-start space-y-5 medium:space-y-0 bg-redd-500">
              <TimeLine title="Secundaria" date="01 Mar / 2018 - 15 Dic / 2022" description="
                Titulado secundario con Bachiller orientado en Ciencias Sociales y Humanidades por el colegio EEM N°4 DE 19 Homero Manzi, formación centrada en el análisis de la sociedad, la cultura y el comportamiento humano."/>
              
              <TimeLine title="SoyHenry" date="08 May - 25 Ago - 2023" description="SoyHenry conto con 800+ horas de formación en tecnologías como React, Redux, JavaScript, Node, Express y PostgreSQL, así como habilidades blandas como trabajo en equipo y aprendizaje ágil. Reforcé mis conocimientos, adquirí una visión clara del desarrollo y ahora, entusiasta, continúo mi aprendizaje de manera autodidacta"/>
              
              <TimeLine title="Autodidacta" date="24 Sep / 2022 - Actualidad" description="Me formé de manera autodidacta a través de cursos en YouTube, documentaciones y otras plataformas, explorando tecnologías como Tailwind, Sass, MongoDB y TypeScript. Ahora, persigo un conocimiento Full-stack y planeo aprender Angular pronto. Mi enfoque sigue centrado en el crecimiento constante en el desarrollo web"/>
            </ul>
        </section>
    </section>
  )
}

export default Educacion
