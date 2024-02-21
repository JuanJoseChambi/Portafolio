// import React from 'react'

interface TimeLineProp {
  title: string;
  description: string;
  date:string;
}

function TimeLine({title, description, date}:TimeLineProp) {
  return (

        <li className='bg-bluee-500 w-almostFull medium:max-w-[450px] h-full flex flex-1 flex-row medium:flex-col justify-start items-start space-y-1 pl-5 medium:pl-0'>
            <div className='w-0.5 medium:w-full medium:h-5 flex flex-col medium:flex-row justify-center items-center bg-redd-500'>
                <i className='bx bxs-calendar  bg-violet rounded-full p-2 text-white flex justify-center items-center'></i>
                <div className='medium:w-full medium:h-0.5 bg-black'></div>
            </div>
           <section className='space-y-3'>
                <article className='pl-5 medium:pl-0 w-full'>
                     <h2 className='font-semibold text-lg tracking-wider'>{title}</h2>
                      <p className='text-xs'>{date}</p>
                </article>   
                <p className='text-sm font-light pr-8'>{description}</p>
           </section>
        </li>
  )
}

export default TimeLine
