import axios from 'axios';

// const root = "https://pokeapi.co/api/v2/pokemon/"

// export const bringPokemon = async () => {

//     return await axios.get(`https://pokeapi.co/api/v2/pokemon/`);
// };

export const searchCharacter = async (criteria) => {

    return await axios.get(`https://pokeapi.co/api/v2/pokemon/${criteria}`);
}