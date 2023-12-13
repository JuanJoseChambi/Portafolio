import { useEffect, useRef } from "react";
import Nav from "./components/Nav/Nav"
import Footer from "./view/Footer/Footer"
import Header from "./view/Header/Header"
import Main from "./view/Main/Main"

function App() {

  const refHeader = useRef<HTMLDivElement>(null);
  const refSobreMi = useRef<HTMLDivElement>(null);
  const refProyectos = useRef<HTMLDivElement>(null)
  const refHabilidades = useRef<HTMLDivElement>(null)
  const refServicios = useRef<HTMLDivElement>(null)
  const refFooter = useRef<HTMLDivElement>(null);

  function scroll () {
    let pantalla = window.scrollY;
    console.log(pantalla);
  }

  useEffect(() => {
    // Hacer algo con las referencias
    refHeader.current && console.log('Referencia A:', refHeader.current.getBoundingClientRect()) 
    refSobreMi.current&& console.log('Referencia B:', refSobreMi.current.getBoundingClientRect()) 
    refFooter.current && console.log('Referencia C:', refFooter.current.getBoundingClientRect()) 
   
    // window.addEventListener('scroll', scroll);
    
  }, [refHeader, refSobreMi, refFooter]);
  
  

  return (
    <>
      <Nav/>
      <Header refHeader={refHeader}/>
      <Main refSobreMi={refSobreMi} refProyectos={refProyectos} refHabilidades={refHabilidades} refServicios={refServicios}/>
      <Footer refFooter={refFooter}/>
    </>
  )
}

export default App
