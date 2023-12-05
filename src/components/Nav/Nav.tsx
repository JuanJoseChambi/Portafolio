import Logo from "../../assets/LogoJC.png"

function Nav() {

  return (
    <nav className="area fixed top-0 left-0 right-0 flex justify-between items-center z-10 ">
        <a href="./" className="w-[60px]">
            <img src={Logo} alt="Juan Jose Ch" className="w-full"/>
        </a>

        <button className="block md:hidden text-2xl"><i className='bx bx-menu'></i></button>
        
        <ul className="hidden text-white md:flex md:justify-between md:items-center md:space-x-5 md:font-light md:text-xs">
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