const pokedex = require('./pokedex');

//DOM elements
const namePokemon = document.querySelector('#name-Pokemon');
const photoPokemon = document.querySelector('#img-Pokemon');
const typesPokemon = document.querySelector('#types-Pokemon');

const statHpPokemon = document.querySelector('#stat-hp-Pokemon');
const statAttackPokemon = document.querySelector('#stat-attack-Pokemon');
const statDefensePokemon = document.querySelector('#stat-defense-Pokemon');
const statSpecialAttackPokemon = document.querySelector('#stat-special-attack-Pokemon');
const statSpecialDefensePokemon = document.querySelector('#stat-special-defense-Pokemon');
const statSpeedPokemon = document.querySelector('#stat-speed-Pokemon');

const renderPokemon = async() => {
    try {
        var currentPokemon = await pokedex.getPokemonName("empoleon");
        console.log(currentPokemon);
        // NAME
        namePokemon.innerHTML = currentPokemon.name.toUpperCase();
        // IMG
        photoPokemon.setAttribute("src", currentPokemon.sprites.front_default);
        // STATS
        statHpPokemon.innerHTML = (currentPokemon.stats[0].effort == 0) ? currentPokemon.stats[0].base_stat : (currentPokemon.stats[0].base_stat + ` <span>(${currentPokemon.stats[0].effort})</span>`);
        statAttackPokemon.innerHTML = (currentPokemon.stats[1].effort == 0) ? currentPokemon.stats[1].base_stat : (currentPokemon.stats[1].base_stat + ` <span>(${currentPokemon.stats[1].effort})</span>`);
        statDefensePokemon.innerHTML = (currentPokemon.stats[2].effort == 0) ? currentPokemon.stats[2].base_stat : (currentPokemon.stats[2].base_stat + ` <span>(${currentPokemon.stats[2].effort})</span>`);
        statSpecialAttackPokemon.innerHTML = (currentPokemon.stats[3].effort == 0) ? currentPokemon.stats[3].base_stat : (currentPokemon.stats[3].base_stat + ` <span>(${currentPokemon.stats[3].effort})</span>`);
        statSpecialDefensePokemon.innerHTML = (currentPokemon.stats[4].effort == 0) ? currentPokemon.stats[4].base_stat : (currentPokemon.stats[4].base_stat + ` <span>(${currentPokemon.stats[4].effort})</span>`);
        statSpeedPokemon.innerHTML = (currentPokemon.stats[5].effort == 0) ? currentPokemon.stats[5].base_stat : (currentPokemon.stats[5].base_stat + ` <span>(${currentPokemon.stats[5].effort})</span>`);
        // TYPES
        let listTypesHTML = "";
        for (let i = 0; i < currentPokemon.types.length; i++) {
            listTypesHTML += `<li>${currentPokemon.types[i].type.name.toUpperCase()}</li>`;
        }
        typesPokemon.innerHTML = listTypesHTML;
    } catch (e) {
        namePokemon.innerHTML = "ERROR";
    }
}

renderPokemon();