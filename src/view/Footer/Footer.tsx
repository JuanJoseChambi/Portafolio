
function Footer() {
  return (
    <footer className="bg-red-500 ">

      <section className="area h-96 flex flex-col justify-center items-center bg-purple-500">

        <nav className="flex justify-center items-center h-[25%] w-almostFull bg-lime-500">
          <ul>
            <li><i className='bx bxl-linkedin' ></i></li>
            <li><i className='bx bxl-github' ></i></li>
            <li></li>
          </ul>
          <picture>

          </picture>
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </nav>
        
        <article className="flex justify-center items-center h-[50%] w-almostFull bg-blue-500">
          <ul>
            <li>MAIL</li>
            <li>TELEFONO</li>
            <li>UBICACION</li>
          </ul>
        </article>
        
        <article className="flex justify-center items-center h-[25%] w-almostFull bg-gray-500">
          <p>©Copiright </p>
        </article>
        
      </section>

    </footer>
  )
}

export default Footer