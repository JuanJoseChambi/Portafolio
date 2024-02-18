// import React from 'react'

function TimeLine() {
  return (
    <ul className="bg-gren-500 min-w-[60%] min-h-60 mx-auto flex flex-col medium:flex-row justify-center items-center space-y-5 medium:space-y-0">

        <li className='bg-bluee-500 w-almostFull medium:max-w-[450px] h-full flex flex-1 flex-row medium:flex-col justify-start items-start space-y-1'>
            <div className='w-0.5 medium:w-full medium:h-5 flex flex-col medium:flex-row justify-center items-center bg-redd-500'>
                <i className='bx bxs-calendar  bg-violet rounded-full p-2 text-white flex justify-center items-center'></i>
                <div className='medium:w-full medium:h-0.5 bg-black'></div>
            </div>
           <section className='space-y-3'>
                <article className='pl-5 medium:pl-0 w-full'>
                     <h2 className='font-semibold text-lg tracking-wider'>Autodidacta</h2>
                      <p className='text-xs'>24 Sep / 2022 - Actualidad</p>
                </article>   
                <p className='text-sm font-light pr-8'>Me formé de manera autodidacta a través de cursos en YouTube, documentaciones y otras plataformas, explorando tecnologías como Tailwind, Sass, MongoDB y TypeScript. Ahora, persigo un conocimiento Full-stack y planeo aprender Angular pronto. Mi enfoque sigue centrado en el crecimiento constante en el desarrollo web</p>
           </section>
        </li>


        <li className='bg-bluee-500 w-almostFull medium:max-w-[450px] h-full flex flex-1 flex-row medium:flex-col justify-start items-start space-y-1'>
            <div className='w-0.5 medium:w-full h-full medium:h-5 flex flex-col medium:flex-row justify-center items-center bg-gree-500'>
                <i className='bx bxs-calendar  bg-violet rounded-full p-2 text-white flex justify-center items-center'></i>
                <div className='medium:w-full medium:h-0.5 bg-black'></div>
            </div>
           <section className='space-y-3'>
                <article className='pl-5 medium:pl-0 w-full'>
                     <h2 className='font-semibold text-lg tracking-wider'>SoyHenry</h2>
                      <p className='text-xs'>08 May - 25 Ago - 2023</p>
                </article>   
                <p className='text-sm font-light pr-8'>SoyHenry conto con 800+ horas de formación en tecnologías como React, Redux, JavaScript, Node, Express y PostgreSQL, así como habilidades blandas como trabajo en equipo y aprendizaje ágil. Reforcé mis conocimientos, adquirí una visión clara del desarrollo y ahora, entusiasta, continúo mi aprendizaje de manera autodidacta</p>
           </section>
        </li>
        
    </ul>
    
  )
}

export default TimeLine
