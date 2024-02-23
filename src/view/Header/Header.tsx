import { useRef } from "react"
import logo from "../../assets/LogoJC.png"
import { useFadeScrollY } from "../../hooks/useFadeScrollY"
import IconLinkHDR from "../../components/IconLinkHDR/IconLinkHDR"

interface RefHeader {
  refHeader:React.RefObject<HTMLDivElement>
}

function Header({refHeader}:RefHeader) {


  const refTitleXl = useRef(null)
  const refTitleXS = useRef(null)

  useFadeScrollY(refTitleXl, "opacity-100 translate-x-0")
  useFadeScrollY(refTitleXS, "opacity-100 translate-x-0")


  return (
    <header className="bg-neutral-900 relative max-md:relative h-xl  overflow-hidden flex justify-center items-center " ref={refHeader}>
      <ul className="w-[95%] h-[160px] z-10 absolute bottom-0 mx-auto space-y-4 text-white bg-redd-500 max-medium:hidden">
        <IconLinkHDR text="Gmail" icon="bx bxl-gmail" link="https://mail.google.com/mail/u/0/?fs=1&to=chambijuanjose05@gmail.com&tf=cm"/>
        <IconLinkHDR text="Linkedin" icon="bx bxl-linkedin" link="https://www.linkedin.com/in/juanjosechambi/"/>
        <IconLinkHDR text="Github" icon="bx bxl-github" link="https://github.com/JuanJoseChambi"/>
        <div className="w-[1px] h-[25px] ml-[18px] absolute bottom-0 bg-white hover:bg-violet"></div>

      </ul>
        <section className="area flex flex-col md:flex-row justify-between items-center space-y-10 md:relative bg-redd-500">

          <article className="bg-limee-500 z-10">
            
            <p className="font-semibold tracking-widest mx-16 text-neutral-700">SOY</p>
            <article className="relative bg-limee-500 grid place-items-center">
              <h2 className="text-8xl text-center text-[#adadad8c] select-none scrollFadeLeft" ref={refTitleXl}>JUAN JOSE CHAMBI</h2>
              <h2 className="absolute text-5xl text-center text-white font-bold tracking-widest drop-shadow-[10px_5px_5px_#262626] scrollFadeRight" ref={refTitleXS}>JUAN JOSE CHAMBI</h2>
            </article>
            <h1 className="max-md:mb-10 font-semibold tracking-widest w-full text-end text-neutral-700">DESARROLLADOR FRONTEND<br></br>FULLSTACK</h1>

          </article>


          <figure className="w-[90%] h-[200px] md:w-[100px] md:h-[500px] absolute bottom-0  bg-redd-500 md:relative flex justify-center items-center pointer-events-none">
            <img src={logo} alt="" className="w-full md:min-w-[600px] absolute max-md:-bottom-72 md:-right-72  opacity-20 rounded-full bg-[#0D0D0D] select-none" />
            <img src={logo} alt="" className="md:absolute md:-left-44 min-w-[200px] select-none z-10" />
          </figure>

        </section>


    </header>
  )
}
export default Header