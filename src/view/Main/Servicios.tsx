import CardServices from "../../components/CardServices/CardServices"
import TitleSections from "../../components/TitleSections/TitleSections"
import { servicesData } from "../../utilities/servicesData/servicesData"

interface RefServicios {
  refServicios:React.RefObject<HTMLDivElement>;
}

function Servicios({refServicios}:RefServicios) {  

  return (
    <section className="area flex flex-col justify-start items-center min-h-[600px] max-xl:mb-10 bg-redd-500" ref={refServicios}>

      <TitleSections title="SERVICIOS" position="center" margin="bottom"/>
      
      <section className="w-almostFull h-1/2 bg-limed-500 flex max-md:space-y-14 flex-wrap gap-10 justify-center items-center">

      {servicesData?.map((service) => (
        <CardServices key={service.title} title={service.title} icon={service.icon} info={service.info} />
      ))}

      </section>

    </section>
  )
}

export default Servicios