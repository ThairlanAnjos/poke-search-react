import React from 'react';
import Search from '../componets/Search';
import { fetchPokemon } from '../services/getPokemon';

export default function HomePage(){

    const [pokemon, setPokemon] = React.useState();

    const getPokemon = async (query) => {
        const response = await fetchPokemon(query);       
        const results = await response.json();
        setPokemon(results);

    }
    return (
        <div>
           <Search getPokemon={getPokemon}/> 
           {pokemon.name}
        </div>
    )
}