import React, { useEffect, useState } from "react";
import Logo from "../../assets/LogoJC.png"
import { useScrollSection } from "../../hooks/useScrollSections";


interface RefPortafolio {
  refHeader:React.RefObject<HTMLDivElement>;
  refSobreMi:React.RefObject<HTMLDivElement>;
  refEducacion:React.RefObject<HTMLDivElement>;
  refProyectos:React.RefObject<HTMLDivElement>;
  refHabilidades:React.RefObject<HTMLDivElement>;
  refServicios:React.RefObject<HTMLDivElement>;
  refFooter:React.RefObject<HTMLDivElement>
}

function Nav({refHeader, refSobreMi, refProyectos, refHabilidades, refServicios, refFooter, refEducacion}:RefPortafolio ) {

  const [sectionActive, setSectionActive] = useState("home")

  useEffect(() => {
    function handleScroll() {
      const sections = [
        { id: "home", ref: refHeader },
        { id: "sobremi", ref: refSobreMi },
        { id: "sobremi", ref: refEducacion},
        { id: "proyectos", ref: refProyectos },
        { id: "habilidades", ref: refHabilidades },
        { id: "servicios", ref: refServicios },
        { id: "contacto", ref: refFooter },
      ];

      const scrollY = window.scrollY;
      // console.log(scrollY);

      for (const section of sections) {
        const { id, ref } = section;
        if (ref.current) {
          const sectionTop = ref.current.offsetTop;
          const sectionBottom = sectionTop + ref.current.clientHeight;

          if (scrollY >= sectionTop && scrollY < sectionBottom) {
            setSectionActive(id);
            break;
          }
        }
      }

    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [refHeader, refSobreMi, refProyectos, refHabilidades, refServicios, refFooter]);


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
          
          <ul className="hidden  md:flex md:justify-between md:items-center md:space-x-5 md:font-light md:text-xs ">
              <li className={`cursor-pointer transition-[color] duration-500 ${sectionActive == "home" ? "text-white ": "text-neutral-400"}`} onClick={home}>HOME</li>
              <li className={`cursor-pointer transition-[color] duration-500 ${sectionActive == "sobremi"  ? "text-white ": "text-neutral-400"}`} onClick={sobremi}>SOBRE MI</li>
              <li className={`cursor-pointer transition-[color] duration-500 ${sectionActive == "proyectos"  ? "text-white ": "text-neutral-400"}`} onClick={proyectos}>PROYECTOS</li>
              <li className={`cursor-pointer transition-[color] duration-500 ${sectionActive == "habilidades"  ? "text-white ": "text-neutral-400"}`} onClick={habilidades}>HABILIDADES</li>
              <li className={`cursor-pointer transition-[color] duration-500 ${sectionActive == "servicios"  ? "text-white ": "text-neutral-400"}`} onClick={servicios}>SERVICIOS</li>
              <li className={`cursor-pointer transition-[color] duration-500 ${sectionActive == "contacto" ? "text-white ": "text-neutral-400"}`} onClick={contacto}>CONTACTO</li>
          </ul>

      </nav>
    )
  }

  export default Nav