import { useRef } from "react"
import logoJC from "../../assets/LogoJC.png"
import { useFadeScrollY } from "../../hooks/useFadeScrollY"

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
          <section className="w-full md:w-[600px] min-h-[200px] flex flex-col justify-center items-center md:items-start space-y-6 order-2 md:order-1 xl:ml-10 bg-grayd-500 scrollFadeLeft" ref={refTextContact}>
            <h2 className="text-3xl font-regular">Contactame</h2>
            <p className="text-sm font-light text-center md:text-start  bg-purplde-500">Si estás buscando un colaborador apasionado y comprometido para futuros proyectos, ¡estaré encantado de ser parte de tu equipo! Contáctame y exploremos juntos las oportunidades. ¡Hasta pronto!
            </p>

            <ul className="text-[30px] flex justify-center items-center space-x-10 bg-redd-500">
              <li className=""><a target="_blank" className="w-12 h-12 cursor-pointer text-center flex justify-center items-center rounded-full hover:text-violet transition-colors duration-500 bg-red-" href="https://github.com/JuanJoseChambi"><i className='bx bxl-linkedin' ></i></a></li>
              <li className=""><a target="_blank" className="w-12 h-12 cursor-pointer text-center flex justify-center items-center rounded-full hover:text-violet transition-colors duration-500 bg-red-" href="https://www.linkedin.com/in/juanjosechambi/"><i className='bx bxl-github' ></i></a></li>
              <li></li>
            </ul>

          </section>

          <picture className="w-[200px] flex justify-center items-center order-1 md:order-2 xl:mr-36 -z-10 bg-purpled-500 scrollFadeRight" ref={refImageLogo}>
            <img src={logoJC} alt="" className="w-full" />
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