import CardCatalogo from "../catalogo/CardCatalogo";
import CatalogoData from "../../data/CatalogoData";

const Catalogo = () => {
    return (
        <>
        <section id="catalogo" className="py-16 px-4 bg-white">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Nuestro Catálogo</h2>
      
            {/* Contenedor Flex responsivo: columna en móvil, fila en pantallas medianas */}
            <div className="flex flex-col md:flex-row justify-center gap-8 max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> 
                    {CatalogoData.map((producto, index) => (
                        <CardCatalogo 
                        key={index} 
                        Title={producto.Title} 
                        Description={producto.Description} 
                        Icon={producto.Icon}
                        Price={producto.Price}
                        link={producto.link}
                        />
                    ))}
                </div>
            </div>
    </section>
        </>
    );
};

export default Catalogo; //Exportar el componente Catalogo que genera la sección de catálogo
