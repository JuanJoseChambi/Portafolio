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
  const [styleNav, setStyleNav] = useState(false)

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

      
      for (const section of sections) {
        const { id, ref } = section;
        if (ref.current) {
          const sectionTop = ref.current.offsetTop;
          const sectionBottom = sectionTop + ref.current.clientHeight;
          if (scrollY >= 3400) {
            setSectionActive("contacto");
            break;
          }
          if (id !== "home" && scrollY >= sectionTop) {
            setStyleNav(true);
          } else {
            setStyleNav(false);
          }

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

    const navSections = [
      {text:"HOME",section:"home", scroll:home},
      {text:"SOBRE MI",section:"sobremi", scroll:sobremi},
      {text:"PROYECTOS",section:"proyectos", scroll:proyectos},
      {text:"HABILIDADES",section:"habilidades", scroll:habilidades},
      {text:"SERVICIOS",section:"servicios", scroll:servicios},
      {text:"CONTACTO",section:"contacto", scroll:contacto}
    ]

    return (
      <nav className="bg-gradient-to-b from-[#0f0f0fb1] via-transparent to-transparent fixed top-0 left-0 right-0 filter backdrop-blur-sm z-[500]">
        <nav className="area  flex justify-between items-center  ">
          <a href="./" className="relative w-[60px]">
              <img src={Logo} alt="Juan Jose Ch" className="w-full"/>
          </a>

          <button className="block md:hidden text-2xl"><i className='bx bx-menu'></i></button>
          
          <ul className="h-[40px] px-3 hidden relative md:flex md:justify-between md:items-center md:space-x-5 md:font-light md:text-xs">
            {navSections.map((sections) => (
             <li className={`cursor-pointer   transition-[color_font-size_font-height] duration-500 
             ${sectionActive == sections.section  ? (sections.section === "home"? "text-white text-base font-medium" : (styleNav && "text-violet text-base font-medium")): (styleNav? "text-black": "text-neutral-400")}`} 
            onClick={sections.scroll}>{sections.text}</li>
            ))}
          </ul>
        </nav>

      </nav>
    )
  }

  export default Nav
