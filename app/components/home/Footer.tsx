import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faFacebook, 
    faXTwitter, 
    faInstagram, 
    faLinkedin, 
    faYoutube 
} from "@fortawesome/free-brands-svg-icons";
import { 
    faEnvelope, 
    faPhone, 
    faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-gray-300">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    
                    {/* Company Info Section */}
                    <div className="space-y-4">
                        <h3 className="text-white text-xl font-bold mb-4">Sobre Nosotros</h3>
                        <p className="text-sm leading-relaxed">
                            Somos una empresa comprometida con la excelencia, ofreciendo productos y servicios de calidad para satisfacer las necesidades de nuestros clientes.
                        </p>
                        <div className="flex space-x-4 pt-4">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                               aria-label="Visita nuestra página de Facebook"
                               className="text-gray-400 hover:text-blue-600 transition-colors duration-300">
                                <FontAwesomeIcon icon={faFacebook} size="lg" />
                            </a>
                            <a href="https://x.com" target="_blank" rel="noopener noreferrer"
                               aria-label="Visita nuestra página de Twitter"
                               className="text-gray-400 hover:text-white transition-colors duration-300">
                                <FontAwesomeIcon icon={faXTwitter} size="lg" />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                               aria-label="Visita nuestra página de Instagram"
                               className="text-gray-400 hover:text-pink-500 transition-colors duration-300">
                                <FontAwesomeIcon icon={faInstagram} size="lg" />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                               aria-label="Visita nuestra página de LinkedIn"
                               className="text-gray-400 hover:text-blue-600 transition-colors duration-300">
                                <FontAwesomeIcon icon={faLinkedin} size="lg" />
                            </a>
                            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"
                               aria-label="Visita nuestro canal de YouTube"
                               className="text-gray-400 hover:text-red-500 transition-colors duration-300">
                                <FontAwesomeIcon icon={faYoutube} size="lg" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links Section */}
                    <div className="space-y-4">
                        <h3 className="text-white text-xl font-bold mb-4">Enlaces Rápidos</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/" className="text-sm hover:text-blue-400 transition-colors duration-300 hover:translate-x-1 inline-block">
                                    → Inicio
                                </Link>
                            </li>
                            <li>
                                <Link to="/services" className="text-sm hover:text-blue-400 transition-colors duration-300 hover:translate-x-1 inline-block">
                                    → Servicios
                                </Link>
                            </li>
                            <li>
                                <Link to="/catalogo" className="text-sm hover:text-blue-400 transition-colors duration-300 hover:translate-x-1 inline-block">
                                    → Catálogo
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services Section */}
                    <div className="space-y-4">
                        <h3 className="text-white text-xl font-bold mb-4">Nuestros Servicios</h3>
                        <ul className="space-y-2">
                            <li className="text-sm hover:text-blue-400 transition-colors duration-300 cursor-pointer">
                                → Distribución
                            </li>
                            <li className="text-sm hover:text-blue-400 transition-colors duration-300 cursor-pointer">
                                → Consultoría
                            </li>
                            <li className="text-sm hover:text-blue-400 transition-colors duration-300 cursor-pointer">
                                → Marketing
                            </li>
                            <li className="text-sm hover:text-blue-400 transition-colors duration-300 cursor-pointer">
                                → Desarrollo de Software
                            </li>
                            <li className="text-sm hover:text-blue-400 transition-colors duration-300 cursor-pointer">
                                → Seguridad
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info Section */}
                    <div className="space-y-4">
                        <h3 className="text-white text-xl font-bold mb-4">Contacto</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start space-x-3">
                                <FontAwesomeIcon icon={faLocationDot} className="text-blue-400 mt-1" />
                                <span className="text-sm">
                                    San Salvador, El Salvador
                                </span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <FontAwesomeIcon icon={faPhone} className="text-blue-400" />
                                <a href="tel:+50312345678" className="text-sm hover:text-blue-400 transition-colors duration-300">
                                    +503 1234-5678
                                </a>
                            </li>
                            <li className="flex items-center space-x-3">
                                <FontAwesomeIcon icon={faEnvelope} className="text-blue-400" />
                                <a href="mailto:info@empresa.com" className="text-sm hover:text-blue-400 transition-colors duration-300">
                                    info@empresa.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-4 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-sm text-gray-400">
                            © {currentYear} Tu Empresa. Todos los derechos reservados.
                        </p>
                        <div className="flex space-x-6">
                            <Link to="/privacidad" className="text-sm text-gray-400 hover:text-blue-400 transition-colors duration-300">
                                Política de Privacidad
                            </Link>
                            <Link to="/terminos" className="text-sm text-gray-400 hover:text-blue-400 transition-colors duration-300">
                                Términos y Condiciones
                            </Link>
                            <Link to="/cookies" className="text-sm text-gray-400 hover:text-blue-400 transition-colors duration-300">
                                Cookies
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;