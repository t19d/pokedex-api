const pokedex = require('./pokedex')
console.log('hello');

//DOM elements
const listPokemon = document.querySelector('#list-pokemon');

const renderPokemon = async() => {
    var htmlList = "";
    try {
        var allPokemon = await pokedex.getAllPokemon();
        for (let i = 0; i < allPokemon.count; i++) {
            htmlList += `<li><a href="pokemon.html">${allPokemon.results[i].name}</a></li>`;
            //htmlList += `<li><a href="${allPokemon.results[i].url}">${allPokemon.results[i].name}</a></li>`;
        }
    } catch (e) {
        htmlList = "<li>ERROR</li>";
    }
    listPokemon.innerHTML = htmlList;
}

renderPokemon();