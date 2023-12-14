import logoJC from "../../assets/LogoJC.png"

interface refFooter {
  refFooter:React.RefObject<HTMLDivElement>
}

function Footer({refFooter}:refFooter) {
  return (
    <footer className="bg-redd-500 " ref={refFooter}>

        <nav className="area flex flex-col md:flex-row justify-between items-center min-h-[200px] w-almostFull bg-lim-500">
          <section className="w-full md:w-[600px] min-h-[200px] flex flex-col justify-center items-center md:items-start space-y-6 order-2 md:order-1 xl:ml-10 bg-grayd-500">
            <h2 className="text-3xl font-regular">Contactame</h2>
            <p className="text-sm font-light text-center md:text-start  bg-purplde-500">Si estás buscando un colaborador apasionado y comprometido para futuros proyectos, ¡estaré encantado de ser parte de tu equipo! Contáctame y exploremos juntos las oportunidades. ¡Hasta pronto!
            </p>

            <ul className="text-[30px] flex justify-center items-center space-x-10 bg-redd-500">
              <li><i className='w-12 h-12 text-center flex justify-center items-center rounded-full bx bxl-linkedin' ></i></li>
              <li><i className='w-12 h-12 text-center flex justify-center items-center rounded-full bx bxl-github' ></i></li>
              <li></li>
            </ul>

          </section>

          <picture className="w-[200px] flex justify-center items-center order-1 md:order-2 xl:mr-36 bg-purpled-500">
            <img src={logoJC} alt="" className="w-full" />
          </picture>
        </nav>
        
        <section className="bg-neutral-800">
          <article className="area flex flex-col justify-evenly items-center min-h-[200px] w-almostFull bg-rede-500">
            <ul className="w-almostFull flex flex-wrap justify-center items-center gap-5 bg-violetd">
              <li className="flex flex-grow basis-[200px] flex-col justify-center items-center space-y-2 h-[100px] bg-bluee-500">
                <i className='text-white text-xl bx bx-envelope' ></i>
                <p className="font-semibold text-white text-sm tracking-widest">MAIL</p>
                <p className="text-xs text-neutral-400">chambijuanjose05@gmail.com</p>
              </li>
              <li className="flex flex-grow basis-[200px] flex-col justify-center items-center space-y-2 h-[100px] bg-bluee-500">
                <i className='text-white text-xl bx bx-phone'></i>
                <p className="font-semibold text-white text-sm tracking-widest">TELEFONO</p>
                <p className="text-xs tracking-widest text-neutral-400">(+54) 1161000622</p>
              </li>
              <li className="flex flex-grow basis-[200px] flex-col justify-center items-center space-y-2 h-[100px] bg-bluee-500">
                <i className='text-white text-xl bx bx-map' ></i>
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