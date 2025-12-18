import { useCountries } from "../../data/CountryList";

interface CountrySelectProps {
    label: string;
    id: string;
    name: string;
    errors?: any[];
    required?: boolean;
}

const CountrySelect = ({ label, id, name, errors = [], required = false }: CountrySelectProps) => {
    const { countries, loading, error } = useCountries();
    
    // Buscar si hay error para este campo
    const fieldError = errors.find((err: any) => err.field === name);

    return (
        <div className="w-full">
            <label 
                htmlFor={id} 
                className="block text-sm font-semibold text-gray-700 mb-2"
            >
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            
            <div className="relative">
                <select
                    id={id}
                    name={name}
                    disabled={loading}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-300 bg-white ${
                        fieldError
                            ? 'border-red-500 focus:ring-red-300'
                            : 'border-gray-300 focus:ring-blue-300 focus:border-blue-500'
                    } ${loading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                >
                    <option value="">
                        {loading ? 'Cargando países...' : 'Selecciona tu país'}
                    </option>
                    {!loading && !error && countries.map((country) => (
                        <option key={country.id} value={country.id}>
                            {country.name}
                        </option>
                    ))}
                </select>
                
                {/* Icono de flecha personalizado */}
                <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                    <svg 
                        className="w-5 h-5 text-gray-400" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                    >
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M19 9l-7 7-7-7" 
                        />
                    </svg>
                </div>
            </div>

            {/* Mensaje de error */}
            {fieldError && (
                <p className="mt-2 text-sm text-red-600 animate-pulse">
                    {fieldError.message}
                </p>
            )}
            
            {/* Mensaje de error de carga */}
            {error && (
                <p className="mt-2 text-sm text-yellow-600">
                    {error}. Intenta recargar la página.
                </p>
            )}
        </div>
    );
};

export default CountrySelect;
