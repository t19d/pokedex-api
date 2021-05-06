// npm packages
const axios = require('axios');

// URL base
const baseURL = 'https://pokeapi.co/api/v2/';
// URL all Pokémon
const allPkmurl = 'pokemon?limit=2000';

// main Module
const Pokedex = {
    async getAllPokemon() {
        const { data } = await axios.get(baseURL + allPkmurl);
        //console.log(data.results);
        return data;
    },
    async getPokemon(num_pokemon) {
        const { data } = await axios.get(baseURL + '/pokemon/' + num_pokemon + '/');
        //console.log(data);
    }
};

module.exports = Pokedex;