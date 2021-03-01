const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';
const query = {pokemon: 'pokemon'}

export async function fetchPokemon (pokemon) {
    console.log(`${baseUrl}/${query.pokemon}/${pokemon}`);
    return fetch(`${baseUrl}/${query.pokemon}/${pokemon}`);
}