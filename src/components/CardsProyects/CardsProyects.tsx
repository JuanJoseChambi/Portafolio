import { tecnologias } from "../../assets/Tecnologias"
import ButtonLink from "../ButtonLink/ButtonLink"
import { Proyects, arrayTecnologias } from "../../interfaces/interfaces"
import { useEffect, useState } from "react"

interface CardsProyectsProp {
    proyect:Proyects
}

function CardsProyects({proyect}:CardsProyectsProp) {
    const [tecnologiasProyecto, setTecnologiasProyecto] = useState<arrayTecnologias[]>([])

      useEffect(() => {
    const tec = tecnologias.filter(infoTec => proyect.tecnologias.some(nameTec => nameTec === infoTec.nombre));
    setTecnologiasProyecto(tec);
  }, []);

    
  return (
    <article className="basis-[600px] h-[350px] bg-[#fcfcfc] flex justify-between items-center flex-row flex-1 rounded-lg overflow-hidden shadow-[5px_5px_25px_0_#3B3A3A]">    

        <picture className="w-[350px] h-full flex bg-red-500 overflow-hidden " >
            <img src={proyect.image} alt="" className="min-w-[300px] max-w-[300px] h-auto bg-left"/>
        </picture>  
        
        <article className="w-full h-full py-8 px-6 bg-bluee-500 flex justify-between items-start flex-col overflow-x-hidden scroolStyle">
            <article className="w-full">
                <article className="w-full flex justify-between items-center bg-greend-500">
                    <h2 className="text-3xl font-bold tracking-widest text-grey-title">{proyect.titulo}</h2>
                    <p className={`text-white text-xs ${proyect.status === "Alive" ? "bg-green-700" : "bg-red-700"} py-1 px-2 rounded-full`}>{proyect.status}</p>
                </article>
                <p className="text-xs font-light text-grey-title">{proyect.fecha}</p>
            </article>
            <ul className="flex space-x-1">
                
                {tecnologiasProyecto.map((tecno) => (
                        <div key={tecno.nombre} className="w-[20px] hover:-translate-y-2 my-1 bg-bluee-500 drop-shadow-[0px_0px_15px_white] transition-transform duration-300 flex justify-center items-center bg-bluee-500 ">{tecno.img}</div>
                ))}
            
            </ul>
            <p className="text-xs text-grey-title ">{proyect.descripcion}</p>
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