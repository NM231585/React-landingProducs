// Hook para obtener listado de países

import axios from "axios";
import { useEffect, useState } from "react";

// Interfaz para el tipo de país
export interface Country {
    id: number;
    name: string;
    code?: string;
}

// Custom hook para obtener países
export const useCountries = () => {
    const [countries, setCountries] = useState<Country[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const getCountries = async () => {
        try {
            setLoading(true);
            const url = "https://chambaticon.ticongle.com/backend/public/api/country";
            const response = await axios.get(url);
            setCountries(response.data);
            setError(null);
        } catch (err) {
            console.error("Error al cargar países:", err);
            setError("No se pudieron cargar los países");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getCountries();
    }, []);

    return { countries, loading, error };
};