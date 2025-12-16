import { Link } from "react-router";
const HeroServices = () => {
    return (
        <>
        <section id="hero" className="bg-gray-50 py-20 px-4 text-center">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-5xl font-bold text-gray-900 mb-6">
                    Soluciones Comerciales de <span className="text-blue-600">Alto Nivel</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                    Conectamos tus necesidades con los mejores productos del mercado. 
                    Calidad, rapidez y confianza en cada entrega.
                </p>
                <button 
                    type="button" 
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 shadow-lg hover:shadow-xl">
                    <Link to="/services">Ver Servicios</Link>
                </button>
            </div>
        </section>
        </>
    );
};

export default HeroServices;