import { useRef } from "react";
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
  const refEducacion = useRef<HTMLDivElement>(null);


  return (
    <>
      <Nav refHeader={refHeader} refSobreMi={refSobreMi} refProyectos={refProyectos} refHabilidades={refHabilidades} refServicios={refServicios} refFooter={refFooter} refEducacion={refEducacion}/>
      <Header refHeader={refHeader}/>
      <Main refSobreMi={refSobreMi} refProyectos={refProyectos} refHabilidades={refHabilidades} refServicios={refServicios} refEducacion={refEducacion}/>
      <Footer refFooter={refFooter}/>
    </>
  )
}

export default App
