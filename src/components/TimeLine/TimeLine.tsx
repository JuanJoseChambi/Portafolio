import React from 'react'

function TimeLine() {
  return (
    <ul className="bg-greenn-500 min-w-[60%] h-60 mx-auto flex justify-center items-center">
        <li className='bg-bluee-500 max-w-[450px] h-full flex flex-1 flex-col justify-start items-start space-y-1'>
            <div className='w-full h-5 flex justify-center items-center bg-greenn-500'>
                <i className='bx bxs-calendar  bg-[#6845c7] rounded-full p-2 text-white flex justify-center items-center'></i>
                <div className='w-full h-0.5 bg-black'></div>
            </div>
           <article className='w-full'>
                <h1 className='font-semibold text-lg tracking-wider'>Autodidacta</h1>
                 <p className='text-xs'>20 Jun - 25 Dic - 2023</p>
           </article>   
            <p className='text-sm font-light pr-8'>Me formé de manera autodidacta a través de cursos en YouTube, documentaciones y otras plataformas, explorando tecnologías como Tailwind, Sass, MongoDB y TypeScript. Ahora, persigo un conocimiento Full-stack y planeo aprender Angular pronto. Mi enfoque sigue centrado en el crecimiento constante en el desarrollo web</p>
        </li>
        <li className='bg-bluee-500 max-w-[450px] h-full flex flex-1 flex-col justify-start items-start space-y-1'>
            <div className='w-full h-5 flex justify-center items-center bg-greenn-500'>
                <i className='bx bxs-calendar bg-[#6845c7] rounded-full p-2 text-white flex justify-center items-center'></i>
                <div className='w-full h-0.5 bg-black'></div>
            </div>
           <article className='w-full'>
                <h1 className='font-semibold text-lg tracking-wider'>SoyHenry</h1>
                 <p className='text-xs'>20 Jun - 25 Dic - 2023</p>
           </article>   
            <p className='text-sm font-light pr-10'>SoyHenry conto con 800+ horas de formación en tecnologías como React, Redux, JavaScript, Node, Express y PostgreSQL, así como habilidades blandas como trabajo en equipo y aprendizaje ágil. Reforcé mis conocimientos, adquirí una visión clara del desarrollo y ahora, entusiasta, continúo mi aprendizaje de manera autodidacta</p>
        </li>
        {/* <li className='bg-bluee-500 h-full flex flex-1 flex-col justify-start items-start space-y-1'>
            <div className='w-full h-5 flex justify-center items-center bg-greenn-500'>
                <i className='bx bxs-calendar bg-[#6845c7] rounded-full p-2 text-white flex justify-center items-center'></i>
                <div className='w-full h-0.5 bg-black'></div>
            </div>
           <article className='w-full'>
                <h1 className='font-semibold text-lg tracking-wider'>API E-Commerce</h1>
                 <p className='text-xs'>20 Jun - 25 Dic - 2023</p>
           </article>   
            <p className='text-sm font-light pr-10'>Proyectos enfocado al desarrollo de apis dinamicas en cuanto a todo lo relacionado con los e-commerce, donde se creao la siguiente api para fines de practica y desarrollo de estudiantes de programacion, el cual cuenta con solicitudes REST, los cuales cuenta con imagenes y nombres de productos estilo tiendas locales de barrio</p>
        </li> */}
        
    </ul>
    
  )
}

export default TimeLine