import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";
import { faInfo } from "@fortawesome/free-solid-svg-icons";

const CardServices = ({Title, Description, Icon, link}: any) => {
    const handleClick = () => {
        let message = `Serás redirigido a ${Title}`;
        alert(message);  
    };

return (
    <div className="p-8 border border-gray-100 shadow-md rounded-xl hover:shadow-lg transition flex-1 text-center bg-gray-50">
        <div className="text-4xl mb-4">
            <FontAwesomeIcon icon={Icon !== null ? Icon : faInfo} />
        </div>
        <h3 className="text-xl font-bold mb-2">{Title}</h3>
        <p className="text-gray-600">{Description}</p>
        <Link to={link} onClick={handleClick} className="mt-4 inline-block px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">Ver más</Link>
    </div>
    );
};

export default CardServices; //Exportar el componente CardServices que genera la tarjeta de servicios
