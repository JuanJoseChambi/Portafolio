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

  const [navMd, setNavMd] = useState(false)
  const [styleNav, setStyleNav] = useState< boolean| string | null>(null)
  

  useEffect(() => {

    function handleScroll() {
      const sections = [
        { id: "home", ref: refHeader },
        { id: "sobremi", ref: refSobreMi },
        { id: "sobremi", ref: refEducacion },
        { id: "proyectos", ref: refProyectos },
        { id: "habilidades", ref: refHabilidades },
        { id: "servicios", ref: refServicios },
        { id: "contacto", ref: refFooter },
      ];

      const scrollY = window.scrollY;
      if (sections[1].ref.current && scrollY >= sections[1].ref.current?.offsetTop) {
        setStyleNav(true)
      }else {
        setStyleNav(false)
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

    const navSections = [
      {text:"HOME",section:"home", scroll:home},
      {text:"SOBRE MI",section:"sobremi", scroll:sobremi},
      {text:"PROYECTOS",section:"proyectos", scroll:proyectos},
      {text:"HABILIDADES",section:"habilidades", scroll:habilidades},
      {text:"SERVICIOS",section:"servicios", scroll:servicios},
      {text:"CONTACTO",section:"contacto", scroll:contacto}
    ]

    return (
      <nav className="fixed md:absolute top-0 left-0 right-0 z-[500]">
        <nav className="relative w-[95%] mx-auto flex justify-between items-center  ">
          <a href="./" className="relative w-[60px]">
              <img src={Logo} alt="Juan Jose Ch" className="w-full"/>
          </a>

          <button onClick={() => setNavMd(!navMd)} className={`block md:hidden text-3xl z-[500] ${navMd ? "text-white" : (styleNav ? "text-black" : "text-white")}`}>{navMd ?<i className='bx bx-x'></i> :<i className='bx bx-menu'></i>}</button>
          
          <ul className={`${navMd 
            ? "w-full h-screen flex flex-col space-y-5 justify-center items-center fixed top-0 left-0 text-xl opacity-100 bg-[#1a1a1aaa]" 
            : "hidden"} transition-colors md:w-[490px] bg-redd-500 duration-500 md:px-3 md:relative md:flex md:justify-between md:items-center md:space-x-5 md:font-light md:text-xs`}>
            
            {navSections.map((sections) => (
             <li key={sections.text} className={`cursor-pointer relative text-neutral-400 hover:text-white  transition-[color] duration-500 `}
            onClick={navMd ? () => {sections.scroll(); setTimeout(() => setNavMd(!navMd), 500)} : sections.scroll} onMouseEnter={() => setStyleNav(sections.text)} onMouseLeave={() => setStyleNav(null)}>
              <p className="">{sections.text}</p>
              <div className={`absolute left-0 bottom-0 w-0 h-[1px] ${styleNav === sections.text ? "w-full" : null} transition-[width] ease-in-out duration-500 bg-white `}></div>
              </li>
            ))}
            
          </ul>
        </nav>
      </nav>
    )
  }

  export default Nav
