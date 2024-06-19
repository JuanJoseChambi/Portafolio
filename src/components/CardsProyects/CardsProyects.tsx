import { tecnologias } from "../../assets/Tecnologias"
import ButtonLink from "../ButtonLink/ButtonLink"
import { Proyects, arrayTecnologias } from "../../interfaces/interfaces"
import { useEffect, useState } from "react"
import OptionsAcordeon from "../OptionsAcordeon/OptionsAcordeon"
// import Tooltip from "../Tooltip/Tooltip"

interface CardsProyectsProp {
    proyect:Proyects
}

function CardsProyects({proyect, }:CardsProyectsProp) {
    const [tecnologiasProyecto, setTecnologiasProyecto] = useState<arrayTecnologias[]>([])
    const [openGithub, setOpenGithub] = useState<string | null>(null)

    useEffect(() => {
    const tec = tecnologias.filter(infoTec => proyect.tecnologias.some(nameTec => nameTec === infoTec.nombre));
    setTecnologiasProyecto(tec);
    }, []);

    // text-[#b1b1b1]    
  return (
    <section className="w-full min-h-60 flex justify-center items-center sm:justify-start sm:items-start flex-col sm:flex-row gap-y-1 bg-greend-200">
        <picture className="area h-[240px] sm:w-[240px] sm:h-[240px] shadow-lg shadow-neutral-500 flex justify-center overflow-hidden rounded-xl bg-redd-500">
            <img src={proyect.image} alt="" className="w-full h-full object-cover object-top"/>
        </picture>
        <section className="area sm:w-[70%] h-full flex justify-between items-start flex-col gap-y-1 bg-redd-500">
            <div className="w-full relative py-2 flex justify-start items-center">
                <h3 style={{fontSize:"clamp(50px, 8vw, 80px)"}} className="select-none pointer-events-none text-clipping font-bold text-7xl tracking-widest text-[#d9d9d9]">{proyect.titulo.toUpperCase()}</h3>
                <h3 style={{fontSize:"clamp(25px, 8vw, 40px)"}} className="font-bold text-5xl tracking-widest absolute text-neutral-800">{proyect.titulo.toUpperCase()}</h3>
            </div>
            <p className="text-xs font-semibold text-neutral-400 bg-redd-500">{proyect.fecha}</p>
            <p className="text-clipping-2 font-light">{proyect.descripcion}</p>
            <div className="w-full flex justify-between items-center flex-col md:flex-row gap-y-2 bg-blued-500">
                <div className="min-w-[200px] flex justify-center sm:justify-start items-center flex-wrap gap-x-4 bg-greend-500">
                    {tecnologiasProyecto.map((tecno) => (
                        <div key={tecno.nombre} className="w-[25px] max-h-[25px] hover:-translate-y-2 my-1 medium:my-4 bg-bluee-500 drop-shadow-[0px_0px_15px_white] transition-[transform_filter] duration-300 flex justify-center items-center bg-bluee-500 ">{tecno.img}</div>
                    ))}
                </div>
                <ul className="min-w-[50px] relative flex justify-center sm:justify-end items-center space-x-5 bg-redd-500">
                    {proyect.web && 
                    <ButtonLink text={"Sitio Web"} icon="bx bx-world" link={proyect.web}/>} 
            
                    {proyect.githubFront && 
                    <ButtonLink text={proyect.githubFront && proyect.githubBack ? "Ver Front" : "Ver Codigo"} icon="bx bxl-github" link={proyect.githubFront}/>}

                    {proyect.githubBack && 
                    <ButtonLink text={proyect.githubFront && proyect.githubBack ? "Ver Back" : "Ver Codigo"} icon="bx bxl-github" link={proyect.githubBack}/>}

                    {/* {proyect.githubFront && proyect.githubBack && 
                        (<>
                            <ButtonLink onClick={() => setOpenGithub("1")} text={"Github"}/>
                            <OptionsAcordeon visible={openGithub === "1"} 
                            options={[
                                {text:"Panel Admin", iconLeft:"bx bx-user"},
                                {text:"Cerrar sesion", iconLeft:"bx bx-log-out"},
                            ]}/>
                        </>)
                    } */}
                
                </ul>
            </div>
        </section>
    </section>
  )
}

export default CardsProyects







// <article className={`w-full medium:basis-[600px] h-[350px] bg-[#fcfcfc] flex justify-between items-center flex-row flex-1 rounded-lg shadow-[5px_5px_25px_0_#3B3A3A]`}>    

// <picture className="w-[350px] h-full relative flex justify-center items-start bg-redd-500 overflow-hidden rounded-[8px_0px_0px_8px]" >
//     <img src={proyect.image} alt="" className="object-cover w-full h-full bg-top hover:scale-110 transition-transform duration-500"/>
// </picture>  

// <article className="w-full h-full py-8 px-6 bg-bluee-500 flex justify-between items-start flex-col overflow-x-hidden scroolStyle">
//     <article className="w-full">
//         <article className="w-full flex justify-between items-center bg-greend-500">
//             <h2 className="text-3xl font-bold tracking-widest text-grey-title">{proyect.titulo}</h2>
//             <Tooltip text={proyect.status} positionY="left">
//                 <p className={`text-white text-xs flex justify-center items-center rounded-full ${proyect.status === "Activo" ? "bg-green-700" : (proyect.status === "Desactivo" ? "bg-red-700" : "bg-yellow-500")}`}>
//                     <i className={`bg-blued-500 text-sm px-2 py-1 ${proyect.status === "Activo" ? "bx bx-signal-5": (proyect.status === "Desactivo" ? "bx bx-error" : "bx bx-info-circle")} `}></i>
//                 </p>
//             </Tooltip>
//         </article>
//         <p className="text-xs font-light text-grey-title">{proyect.fecha}</p>
//     </article>
//     <ul className="flex space-x-2 bg-redd-500 flex-wrap medium:space-x-3 max-medium:my-4">
        
//         {tecnologiasProyecto.map((tecno) => (
//                 <div key={tecno.nombre} className="w-[20px] h-[20px] hover:-translate-y-2 my-1 medium:my-4 bg-bluee-500 drop-shadow-[0px_0px_15px_white] transition-transform duration-300 flex justify-center items-center bg-bluee-500 ">{tecno.img}</div>
//         ))}
    
//     </ul>
//     <p className="text-xs text-grey-title " dangerouslySetInnerHTML={{ __html: proyect.descripcion }}></p>
//     <ul className="flex justify-center items-center space-x-5 mt-5 bg-redd-500">
//             {proyect.web && 
//             <ButtonLink text={"Sitio Web"} icon="bx bx-world" link={proyect.web}/>} 
            
//             {proyect.github && 
//             <ButtonLink text={"Ver Codigo"} icon="bx bxl-github" link={proyect.github}/>}


//             </ul>
//     <ul></ul>
// </article>  

// </article>