import logo from "../../assets/LogoJC.png"


function Header() {
  return (
    <header className="bg-blue-5 h-xl flex justify-center items-center">
        <section className="area flex flex-col md:flex-row justify-between items-center space-y-10 relative bg-redd-500">

          <article className="bg-limee-500">
            <p className="font-semibold tracking-widest mx-16 text-neutral-700">SOY</p>
            <article className="relative bg-limee-500 grid place-items-center">
              <h2 className="text-7xl text-center md:text-8xl text-[#adadad8c] ">JUAN JOSE CHAMBI</h2>
              <h2 className="absolute text-4xl text-center md:text-5xl font-bold tracking-widest drop-shadow-[10px_5px_5px_#262626]">JUAN JOSE CHAMBI</h2>
            </article>
            <h1 className="font-semibold tracking-widest w-full text-end text-neutral-700">DESARROLLADOR FRONTEND / FULLSTACK</h1>

            {/* <p>Soy Juan Jose Chambi, desarrollador Fullstack</p> */}
          </article>


          <figure className="hidden  md:relative md:w-[100px] md:h-[500px] md:flex md:justify-center md:items-center ">
            <img src={logo} alt="" className="absolute -right-72 min-w-[600px] opacity-20 rounded-full bg-[#0D0D0D]" />
            <img src={logo} alt="" className="absolute -left-44 min-w-[200px]" />
          </figure>

        </section>


    </header>
  )
}

export default Header