const pokedex = require('./pokedex');

//DOM elements
const listPokemon = document.querySelector('#list-pokemon');
const errorPokemon = document.querySelector('#error-msg');

const renderPokemon = async() => {
    try {
        var htmlList = "";
        var allPokemon = await pokedex.getAllPokemon();
        for (let i = 0; i < allPokemon.count; i++) {
            htmlList += `<li><a href="pokemon.html">${allPokemon.results[i].name}</a></li>`;
            //htmlList += `<li><a href="${allPokemon.results[i].url}">${allPokemon.results[i].name}</a></li>`;
        }
        listPokemon.innerHTML = htmlList;
    } catch (e) {
        errorPokemon = "<h2>ERROR</h2>";
    }
}

renderPokemon();