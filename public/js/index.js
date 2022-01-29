/* eslint-disable no-new */
import PageComponent from "./components/PageComponent.js";
import PokeCard from "./components/PokeCard.js";

const container = document.querySelector("body");

new PageComponent(container, "div");

async function getPokemons() {
  const pokeApi = await fetch("https://pokeapi.co/api/v2/pokemon");
  const results = await pokeApi.json();

  const pokePromises = results.results.map(async ({ url }) => {
    const pokemonData = await fetch(url);
    const pokemon = await pokemonData.json();
    return pokemon;
  });

  const pokeArray = await Promise.all(pokePromises);

  return pokeArray;
}

async function createCards(pokemonArray) {
  const pokeArray = await pokemonArray;
  const containerCards = document.querySelector(".poke-cards-container");
  pokeArray.forEach(async (pokemon) => {
    new PokeCard(containerCards, "poke-card", await pokemon);
  });
}

createCards(getPokemons());
