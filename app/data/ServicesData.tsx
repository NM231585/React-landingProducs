import { faBell, faCode, faShieldHalved, faTruckFast, faWandMagicSparkles, faGears } from "@fortawesome/free-solid-svg-icons";

const ServicesData = [
    {
        Title: "Distribución",
        Description: "Logística eficiente punto a punto.",
        Icon: faTruckFast,
        link: "../pages/Servicios"
    },
    {
        Title: "Consultoría",
        Description: "Asesoramiento experto para ventas.",
        Icon: faBell,
        link: "../pages/Servicios"
    },
    {
        Title: "Marketing",
        Description: "Estrategias visuales impactantes.",
        Icon: faWandMagicSparkles,
        link: "../pages/Servicios"
    },
    {
        Title: "Código",
        Description: "Desarrollo de software personalizado.",
        Icon: faCode,
        link: "../pages/Servicios"
    },
    {
        Title: "Seguridad",
        Description: "Protección de datos y información.",
        Icon: faShieldHalved,
        link: "../pages/Servicios"
    },
    {
        Title: "Configuración",
        Description: "Configuración de la empresa.",
        Icon: faGears,
        link: "../pages/Servicios"
    }
]

export default ServicesData; //Exportar el array de los servicios 
