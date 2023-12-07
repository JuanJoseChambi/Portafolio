import Logo from "../../assets/LogoJC.png"

function Nav() {

  return (
    <nav className="area fixed top-0 left-0 right-0 flex justify-between items-center z-10">
        <a href="./" className="w-[60px]">
            <img src={Logo} alt="Juan Jose Ch" className="w-full"/>
        </a>

        <button className="block md:hidden text-2xl"><i className='bx bx-menu'></i></button>
        
        <ul className="hidden text-white md:flex md:justify-between md:items-center md:space-x-5 md:font-light md:text-xs">
            <li className="cursor-pointer">SOBRE MI</li>
            <li className="cursor-pointer">PROYECTOS</li>
            <li className="cursor-pointer">HABILIDADES</li>
            <li className="cursor-pointer">SERVICIOS</li>
            <li className="cursor-pointer">CONTACTO</li>
        </ul>

    </nav>
  )
}

export default Nav