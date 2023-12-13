import logo from "../../assets/LogoJC.png"

interface RefHeader {
  refHeader:React.RefObject<HTMLDivElement>
}

function Header({refHeader}:RefHeader) {

  return (
    <header className="bg-neutral-900 h-xl flex justify-center items-center " ref={refHeader}>
        <section className="area flex flex-col md:flex-row justify-between items-center space-y-10 relative bg-redd-500">

          <article className="bg-limee-500">
            
            <p className="font-semibold tracking-widest mx-16 text-neutral-700">SOY</p>
            <article className="relative bg-limee-500 grid place-items-center">
              <h2 className="text-8xl text-center text-[#adadad8c] select-none">JUAN JOSE CHAMBI</h2>
              <h2 className="absolute text-5xl text-center text-white font-bold tracking-widest drop-shadow-[10px_5px_5px_#262626]">JUAN JOSE CHAMBI</h2>
            </article>
            <h1 className="font-semibold tracking-widest w-full text-end text-neutral-700">DESARROLLADOR FRONTEND<br></br>FULLSTACK</h1>

          </article>


          <figure className="hidden  md:relative md:w-[100px] md:h-[500px] md:flex md:justify-center md:items-center pointer-events-none">
            <img src={logo} alt="" className="absolute -right-72 min-w-[600px] opacity-20 rounded-full bg-[#0D0D0D] select-none" />
            <img src={logo} alt="" className="absolute -left-44 min-w-[200px] select-none" />
          </figure>

        </section>


    </header>
  )
}

export default Header