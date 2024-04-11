import React, { useState, useEffect } from "react";

const PokeAPIFetcher = () => {
    const [data, setData] = useState(null);
    const pokeAPI = 'https://pokeapi.co/api/v2/berry/';

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(pokeAPI);

            try {
                if (!response.ok) {
                    throw new Error('Errror to fetch data');
                }
                const data = await response.json();
                setData(data);

            } catch (error) {
                console.log('Error', error);
            }
        }
        fetchData();
    }, []);

    return data ? (
        <div>
            <p>Names:</p>
            <ul>
                {data.results.map((item, index) => (
                    <li key={index}>{item.name} </li>
                ))}
            </ul>
        </div>
    ) : (
        <p>Cargando datos...</p>
    )
}

export default PokeAPIFetcher;
