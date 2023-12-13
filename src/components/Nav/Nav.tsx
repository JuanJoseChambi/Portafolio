import React, { useEffect, useState } from "react";
import Logo from "../../assets/LogoJC.png"
import { useScrollSection } from "../../hooks/useScrollSections";


interface RefPortafolio {
  refHeader:React.RefObject<HTMLDivElement>;
  refSobreMi:React.RefObject<HTMLDivElement>;
  refProyectos:React.RefObject<HTMLDivElement>;
  refHabilidades:React.RefObject<HTMLDivElement>;
  refServicios:React.RefObject<HTMLDivElement>;
  refFooter:React.RefObject<HTMLDivElement>
}

function Nav({refHeader, refSobreMi, refProyectos, refHabilidades, refServicios, refFooter}:RefPortafolio ) {

  const [sectionActive, setSectionActive] = useState("home")

  useEffect(() => {

    function hanlderScroll () {

      if (refHeader.current && refSobreMi.current && refProyectos.current && refHabilidades.current && refServicios.current && refFooter.current) {
        const home = refHeader.current.getBoundingClientRect().top;
        const sobremi = refSobreMi.current.getBoundingClientRect().top;
        const proyectos = refProyectos.current.getBoundingClientRect().top;
        const habilidades = refHabilidades.current.getBoundingClientRect().top;
        const servicios = refServicios.current.getBoundingClientRect().top;
        const footer = refFooter.current.getBoundingClientRect().top;
    
        const pantalla:number = window.scrollY;
        // console.log("pantalla :" + pantalla);
        // console.log(home);
        console.log(home);
        // console.log(proyectos);
        // console.log(habilidades);
        // console.log(servicios);
        
        if (pantalla >= home) {
          setSectionActive("home")
        }else if(pantalla >= sobremi) {
          setSectionActive("sobremi")
        }else if(pantalla >= proyectos) {
          setSectionActive("proyectos")
        }else if(pantalla >= habilidades) {
          setSectionActive("habilidades")
        }else if(pantalla >= servicios) {
          setSectionActive("servicios")
        }else if(pantalla >= footer) {
          setSectionActive("contacto")
        }

      }  


        

    }

    window.addEventListener('scroll', hanlderScroll);
    
    // return () => {
      // window.removeEventListener("scroll", hanlderScroll);
    // };

  }, []);


  // function ScrollHome() {
  //   if (refHeader.current) {
  //     refHeader.current.scrollIntoView({
  //       behavior: 'smooth',
  //       block: 'center',
  //     });
  //   }
  // }
  // function ScrollSobreMi() {
  //   if (refSobreMi.current) {
  //     refSobreMi.current.scrollIntoView({
  //       behavior: 'smooth',
  //       block: 'center',
  //     });
  //   }
  // }
  // function ScrollProyectos() {
  //   if (refProyectos.current) {
  //     refProyectos.current.scrollIntoView({
  //       behavior: 'smooth',
  //       block: 'center',
  //     });
  //   }
  // }
  // function ScrollHabilidades() {
  //   if (refHabilidades.current) {
  //     refHabilidades.current.scrollIntoView({
  //       behavior: 'smooth',
  //       block: 'center',
  //     });
  //   }
  // }
  // function ScrollServicios() {
  //   if (refServicios.current) {
  //     refServicios.current.scrollIntoView({
  //       behavior: 'smooth',
  //       block: 'center',
  //     });
  //   }
  // }
  // function ScrollContacto() {
  //   if (refServicios.current) {
  //     refServicios.current.scrollIntoView({
  //       behavior: 'smooth',
  //       block: 'center',
  //     });
  //   }
  // }

    const home =  useScrollSection(refHeader)
    const sobremi =  useScrollSection(refSobreMi)
    const proyectos =  useScrollSection(refProyectos)
    const habilidades =  useScrollSection(refHabilidades)
    const servicios =  useScrollSection(refServicios)
    const contacto =  useScrollSection(refFooter)

    return (
      <nav className="area fixed top-0 left-0 right-0 flex justify-between items-center z-[500]">
          <a href="./" className="w-[60px]">
              <img src={Logo} alt="Juan Jose Ch" className="w-full"/>
          </a>

          <button className="block md:hidden text-2xl"><i className='bx bx-menu'></i></button>
          
          <ul className="hidden text-neutral-400 md:flex md:justify-between md:items-center md:space-x-5 md:font-light md:text-xs ">
              <li className={`cursor-pointer transition-[font-height_color] duration-500 ${sectionActive === "home" && "text-white "}`} onClick={home}>HOME</li>
              <li className={`cursor-pointer transition-[font-height_color] duration-500 ${sectionActive === "sobremi" && "text-white "}`} onClick={sobremi}>SOBRE MI</li>
              <li className={`cursor-pointer transition-[font-height_color] duration-500 ${sectionActive === "proyectos" && "text-white "}`} onClick={proyectos}>PROYECTOS</li>
              <li className={`cursor-pointer transition-[font-height_color] duration-500 ${sectionActive === "habilidades" && "text-white "}`} onClick={habilidades}>HABILIDADES</li>
              <li className={`cursor-pointer transition-[font-height_color] duration-500 ${sectionActive === "servicios" && "text-white "}`} onClick={servicios}>SERVICIOS</li>
              <li className={`cursor-pointer transition-[font-height_color] duration-500 ${sectionActive === "contacto" && "text-white "}`} onClick={contacto}>CONTACTO</li>
          </ul>

      </nav>
    )
  }

  export default Nav