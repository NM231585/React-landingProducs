import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";
import { faInfo } from "@fortawesome/free-solid-svg-icons";

const CardCatalogo = ({Title, Description, Icon, Price, link}: any) => {
    const handleClick = () => {
        let message = `Serás redirigido a ${Title}`;
        alert(message);  
    };

return (
    <div className="p-8 border border-gray-100 shadow-md rounded-xl hover:shadow-lg transition flex-1 text-center bg-gray-50 hover:bg-white">
        <div className="text-4xl mb-4 text-blue-500">
            <FontAwesomeIcon icon={Icon !== null ? Icon : faInfo} />
        </div>
        <h3 className="text-xl font-bold mb-2 text-gray-800">{Title}</h3>
        <p className="text-gray-600 mb-3">{Description}</p>
        <p className="text-lg font-semibold text-blue-600 mb-4">{Price}</p>
        <Link to={link} onClick={handleClick} className="mt-4 inline-block px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">Ver más</Link>
    </div>
    );
};

export default CardCatalogo; //Exportar el componente CardCatalogo que genera la tarjeta de catálogo
