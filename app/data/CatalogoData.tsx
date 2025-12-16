import { faLaptop, faMobileAlt, faHeadphones, faCamera, faGamepad, faClock } from "@fortawesome/free-solid-svg-icons";

const CatalogoData = [
    {
        Title: "Laptops",
        Description: "Equipos de alto rendimiento para trabajo y entretenimiento.",
        Icon: faLaptop,
        Price: "Desde $599",
        link: "../pages/Catalogo"
    },
    {
        Title: "Smartphones",
        Description: "Última tecnología en telefonía móvil.",
        Icon: faMobileAlt,
        Price: "Desde $299",
        link: "../pages/Catalogo"
    },
    {
        Title: "Audífonos",
        Description: "Sonido premium con cancelación de ruido.",
        Icon: faHeadphones,
        Price: "Desde $79",
        link: "../pages/Catalogo"
    },
    {
        Title: "Cámaras",
        Description: "Captura momentos con calidad profesional.",
        Icon: faCamera,
        Price: "Desde $449",
        link: "../pages/Catalogo"
    },
    {
        Title: "Consolas",
        Description: "Gaming de última generación.",
        Icon: faGamepad,
        Price: "Desde $399",
        link: "../pages/Catalogo"
    },
    {
        Title: "Smartwatches",
        Description: "Tecnología inteligente en tu muñeca.",
        Icon: faClock,
        Price: "Desde $199",
        link: "../pages/Catalogo"
    }
]

export default CatalogoData; //Exportar el array de productos del catálogo
