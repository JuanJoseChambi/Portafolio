import Logo from "../../assets/LogoJC.png"

function Nav() {

  return (
    <nav className="area fixed top-0 left-0 right-0 flex justify-between items-center ">
        <a href="./" className="w-[60px]">
            <img src={Logo} alt="Juan Jose Ch" className="w-full"/>
        </a>

        <ul className="flex justify-between items-center space-x-5 font-light text-xs">
            <li>SOBRE MI</li>
            <li>PROYECTOS</li>
            <li>HABILIDADES</li>
            <li>SERVICIOS</li>
            <li>CONTACTO</li>
        </ul>

    </nav>
  )
}

export default Nav