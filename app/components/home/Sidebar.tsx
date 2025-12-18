import { useState } from "react";
import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faHome, faBriefcase, faBox, faEnvelope, faBlog } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        closeSidebar();
    };

    return (
        <>
            {/* Fixed Toggle Button */}
            <button
                onClick={toggleSidebar}
                className="fixed top-6 left-6 z-50 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                aria-label="Toggle menu"
            >
                <FontAwesomeIcon 
                    icon={isSidebarOpen ? faTimes : faBars} 
                    className="text-xl"
                />
            </button>

            {/* Sidebar Backdrop */}
            {isSidebarOpen && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
                    onClick={closeSidebar}
                ></div>
            )}

            {/* Sidebar */}
            <div className={`fixed top-0 left-0 h-full w-80 bg-gradient-to-b from-gray-900 to-gray-800 shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
                isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
            }`}>
                <div className="flex flex-col h-full">
                    {/* Sidebar Header */}
                    <div className="p-8 border-b border-gray-700">
                        <div className="flex items-center justify-between mb-2">
                            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                                Products
                            </h2>
                            <button
                                onClick={closeSidebar}
                                className="text-gray-400 hover:text-white transition-colors duration-300"
                                aria-label="Close menu"
                            >
                                <FontAwesomeIcon icon={faTimes} className="text-2xl" />
                            </button>
                        </div>
                        <p className="text-gray-400 text-sm">Navegación Principal</p>
                    </div>

                    {/* Sidebar Navigation */}
                    <nav className="flex-1 p-6 space-y-2 overflow-y-auto">
                        <button
                            onClick={() => scrollToSection('hero')}
                            className="w-full flex items-center space-x-4 px-6 py-4 text-gray-300 hover:bg-blue-600 hover:text-white rounded-lg transition-all duration-300 group"
                        >
                            <FontAwesomeIcon icon={faHome} className="text-xl group-hover:scale-110 transition-transform duration-300" />
                            <span className="font-medium text-lg">Inicio</span>
                        </button>

                        <Link
                            to="/services"
                            onClick={closeSidebar}
                            className="w-full flex items-center space-x-4 px-6 py-4 text-gray-300 hover:bg-blue-600 hover:text-white rounded-lg transition-all duration-300 group"
                        >
                            <FontAwesomeIcon icon={faBriefcase} className="text-xl group-hover:scale-110 transition-transform duration-300" />
                            <span className="font-medium text-lg">Servicios</span>
                        </Link>

                        <Link
                            to="/catalogo"
                            onClick={closeSidebar}
                            className="w-full flex items-center space-x-4 px-6 py-4 text-gray-300 hover:bg-blue-600 hover:text-white rounded-lg transition-all duration-300 group"
                        >
                            <FontAwesomeIcon icon={faBox} className="text-xl group-hover:scale-110 transition-transform duration-300" />
                            <span className="font-medium text-lg">Catálogo</span>
                        </Link>

                        <Link
                            to="/blog"
                            onClick={closeSidebar}
                            className="w-full flex items-center space-x-4 px-6 py-4 text-gray-300 hover:bg-blue-600 hover:text-white rounded-lg transition-all duration-300 group"
                        >
                            <FontAwesomeIcon icon={faBlog} className="text-xl group-hover:scale-110 transition-transform duration-300" />
                            <span className="font-medium text-lg">Blog</span>
                        </Link>

                        <button
                            onClick={() => scrollToSection('contacto')}
                            className="w-full flex items-center space-x-4 px-6 py-4 text-gray-300 hover:bg-blue-600 hover:text-white rounded-lg transition-all duration-300 group"
                        >
                            <FontAwesomeIcon icon={faEnvelope} className="text-xl group-hover:scale-110 transition-transform duration-300" />
                            <span className="font-medium text-lg">Contacto</span>
                        </button>
                    </nav>

                    {/* Sidebar Footer */}
                    <div className="p-6 border-t border-gray-700">
                        <p className="text-gray-500 text-sm text-center">
                            © 2025 Products
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sidebar;