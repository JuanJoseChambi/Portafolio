import { useRef } from "react"
import logoJC from "../../assets/LogoJC.png"
import { useFadeScrollY } from "../../hooks/useFadeScrollY"
import ButtonLink from "../../components/ButtonLink/ButtonLink"

interface refFooter {
  refFooter:React.RefObject<HTMLDivElement>
}

function Footer({refFooter}:refFooter) {

  const refTextContact = useRef(null)
  const refImageLogo = useRef(null)
  const refLinks = useRef(null)

  useFadeScrollY(refTextContact, "opacity-100 translate-x-0")
  useFadeScrollY(refImageLogo, "opacity-100 translate-x-0")
  useFadeScrollY(refLinks, "opacity-100 translate-y-0")


  return (
    <footer className="bg-redd-500 " ref={refFooter}>

        <nav className="area flex flex-col md:flex-row justify-between items-center min-h-[200px] w-almostFull  bg-lim-500">
          <section className="w-full md:w-[600px] min-h-[200px] flex flex-col justify-center items-center md:items-start space-y-6 my-3 order-2 md:order-1 xl:ml-10 bg-grayd-500 scrollFadeLeft" ref={refTextContact}>
            <h2 className="text-3xl font-regular bg-redd-500">Contactame</h2>
            <p className="text-sm font-light text-center md:text-start  bg-purpled-500">Si estás en la búsqueda de un colaborador motivado y comprometido para futuros proyectos, estoy disponible para ser parte de tu equipo. Estoy abierto a explorar oportunidades de colaboración. Si consideras que puedo aportar valor a tu equipo, no dudes en ponerte en contacto. Hasta pronto.
            </p>

            <ul className="text-[30px] flex justify-center items-center space-x-10 bg-redd-500">
              <ButtonLink icon="bx bxl-github" link="https://github.com/JuanJoseChambi" sizeIcon="text-3xl" duration="500"/>
              <ButtonLink icon="bx bxl-linkedin" link="https://www.linkedin.com/in/juanjosechambi/" sizeIcon="text-3xl" duration="500"/>
            </ul>

          </section>

          <picture className="w-[200px] flex justify-center items-center order-1 md:order-2 xl:mr-36 -z-10 bg-purpled-500 scrollFadeRight pointer-events-none" ref={refImageLogo}>
            <img src={logoJC} alt="Logo JC" className="w-full select-none" />
          </picture>
        </nav>
        
        <section className="bg-neutral-800 max-md:py-8">
          <article className="area flex flex-col justify-evenly items-center min-h-[200px] w-almostFull bg-re-500">
            <ul className="w-almostFull flex flex-wrap justify-center items-center gap-5 bg-violete scrollFadeTop" ref={refLinks}>
              <li className="flex flex-grow basis-[200px] flex-col justify-center items-center space-y-2 h-[100px] bg-bluee-500">
                <i className='text-white text-[23px] bx bx-envelope' ></i>
                <p className="font-semibold text-white text-sm tracking-widest">MAIL</p>
                <p className="text-xs text-neutral-400">chambijuanjose05@gmail.com</p>
              </li>
              <li className="flex flex-grow basis-[200px] flex-col justify-center items-center space-y-2 h-[100px] bg-bluee-500">
                <i className='text-white text-[23px] bx bx-phone'></i>
                <p className="font-semibold text-white text-sm tracking-widest">TELEFONO</p>
                <p className="text-xs tracking-widest text-neutral-400">(+54) 1161000622</p>
              </li>
              <li className="flex flex-grow basis-[200px] flex-col justify-center items-center space-y-2 h-[100px] bg-bluee-500">
                <i className='text-white text-[23px] bx bx-map' ></i>
                <p className="font-semibold text-white text-sm tracking-widest">UBICACION</p>
                <p className="text-xs text-neutral-400">Buenos Aires, Argentina</p>
              </li>
            </ul>
            <p className="font-light text-[9px] my-5 sm:my-0 text-neutral-400">© 2023 JC ㅤ•ㅤPowered by Juan Jose</p>
          </article>
        </section>
        
    </footer>
  )
}

export default Footer