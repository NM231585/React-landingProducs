import CardServices from "../servicios/CardServices";
import ServicesData from "../../data/ServicesData";

const Servicios = () => {
    return (
        <>
        <section id="servicios" className="py-16 px-4 bg-white">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Nuestros Servicios</h2>
      
            {/* Contenedor Flex responsivo: columna en móvil, fila en pantallas medianas */}
            <div className="flex flex-col md:flex-row justify-center gap-8 max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> 
                    {ServicesData.map((service, index) => (
                        <CardServices 
                        key={index} 
                        Title={service.Title} 
                        Description={service.Description} 
                        Icon={service.Icon}
                        button={service.link}
                        />
                    ))}
                </div>
            </div>
    </section>
        </>
    );
};

export default Servicios; //Exportar el componente Servicios que genera la sección de servicios
