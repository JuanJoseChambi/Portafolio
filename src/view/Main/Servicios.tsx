import CardServices from "../../components/CardServices/CardServices"
import TitleSections from "../../components/TitleSections/TitleSections"
import { servicesData } from "../../utilities/servicesData/servicesData"

function Servicios() {  

  return (
    <section className="area flex flex-col justify-start items-center min-h-xl max-lg:mb-8 bg-redd-500">

      <TitleSections title="SERVICIOS" position="center" margin="bottom"/>
      
      <section className="w-almostFull h-1/2 bg-limed-500 flex max-md:space-y-14 flex-wrap gap-10 justify-center items-center">

      {servicesData?.map((service) => (
        <CardServices key={service.title} title={service.title} icon={service.icon} info={service.info}/>
      ))}

      </section>

    </section>
  )
}

export default Servicios