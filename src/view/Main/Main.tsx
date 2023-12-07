import Educacion from "./Educacion"
import Proyectos from "./Proyectos"
import SobreMi from "./SobreMi"

function Main() {


  return (
    <main className="">
        <SobreMi/>
        <Educacion/>
        <Proyectos/>
    </main>
  )
}

export default Main






// <section className="area grid grid-cols-[repeat(5,100px)] grid-rows-[repeat(8,50px)] place-content-center bg-redd-500">
//             <article className="border-solid border-black border col-start-1 col-end-4 row-start-1 row-end-5  bg-blue-500">
//               Hola
//             </article>
//            
//             <article className="border-solid border-black border col-start-2 col-end-5 row-start-3 row-end-7 bg-green-500">
//               que tal todo bien
//             </article>
//
//             <article className="border-solid border-black border col-start-3 col-end-6 row-start-5 row-end-[9] bg-purple-500">
//               si claro todo bien
//             </article>
//         </section>