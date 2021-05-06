const pokedex = require('./pokedex')
console.log('hello');

//DOM elements
const listPokemon = document.querySelector('#list-pokemon');

const renderPokemon = async() => {
    var htmlList = "";
    try {
        var pokemons = await pokedex.getAllPokemon();
        for (let i = 0; i < pokemons.count; i++) {
            htmlList += `<li><a href="${pokemons.results[i].url}">${pokemons.results[i].name}</a></li>`;
        }
    } catch (e) {
        htmlList = "<li>ERROR</li>";
    }
    listPokemon.innerHTML = htmlList;
}

renderPokemon();