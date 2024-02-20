import { tecnologias } from "../../assets/Tecnologias"
import ButtonLink from "../ButtonLink/ButtonLink"
import { Proyects, arrayTecnologias } from "../../interfaces/interfaces"
import { useEffect, useState } from "react"

interface CardsProyectsProp {
    proyect:Proyects
    firstProyect?:boolean
}

function CardsProyects({proyect, firstProyect}:CardsProyectsProp) {
    const [tecnologiasProyecto, setTecnologiasProyecto] = useState<arrayTecnologias[]>([])

      useEffect(() => {
    const tec = tecnologias.filter(infoTec => proyect.tecnologias.some(nameTec => nameTec === infoTec.nombre));
    setTecnologiasProyecto(tec);
  }, []);

    
  return (
    <article className={`${firstProyect ? "basis-auto" : "basis-[600px]"} h-[350px] bg-[#fcfcfc] flex justify-between items-center flex-row flex-1 rounded-lg overflow-hidden shadow-[5px_5px_25px_0_#3B3A3A]`}>    

        <picture className="w-[350px] h-full relative flex justify-center items-start bg-redd-500 overflow-hidden" >
            <img src={proyect.image} alt="" className="object-cover w-full h-full bg-top hover:scale-110 transition-transform duration-500"/>
        </picture>  
        
        <article className="w-full h-full py-8 px-6 bg-bluee-500 flex justify-between items-start flex-col overflow-x-hidden scroolStyle">
            <article className="w-full">
                <article className="w-full flex justify-between items-center bg-greend-500">
                    <h2 className="text-3xl font-bold tracking-widest text-grey-title">{proyect.titulo}</h2>
                    <p className={`text-white text-xs flex justify-center items-center rounded-full ${proyect.status === "Activo" ? "bg-green-700" : (proyect.status === "Desactivo" ? "bg-red-700" : "bg-yellow-500")}`}>
                        <i className={`bg-blued-500 text-sm px-2 py-1 ${proyect.status === "Activo" ? "bx bx-signal-5": (proyect.status === "Desactivo" ? "bx bx-error" : "bx bx-info-circle")} `}></i>
                    </p>
                </article>
                <p className="text-xs font-light text-grey-title">{proyect.fecha}</p>
            </article>
            <ul className="flex space-x-2">
                
                {tecnologiasProyecto.map((tecno) => (
                        <div key={tecno.nombre} className="w-[20px] hover:-translate-y-2 my-1 bg-bluee-500 drop-shadow-[0px_0px_15px_white] transition-transform duration-300 flex justify-center items-center bg-bluee-500 ">{tecno.img}</div>
                ))}
            
            </ul>
            <p className="text-xs text-grey-title " dangerouslySetInnerHTML={{ __html: proyect.descripcion }}></p>
            <ul className="flex justify-center items-center space-x-5 mt-5 bg-redd-500">
                    {proyect.web && 
                    <ButtonLink text={"Sitio Web"} icon="bx bx-world" link={proyect.web}/>} 
                    
                    {proyect.github && 
                    <ButtonLink text={"Ver Codigo"} icon="bx bxl-github" link={proyect.github}/>}


                    </ul>
            <ul></ul>
        </article>  
        
    </article>
  )
}

export default CardsProyects