/* eslint-disable no-new */
import PokeCard from "./PokeCard.js";

export async function getPokemons(apiUrl) {
  const pokeApi = await fetch(apiUrl);
  const results = await pokeApi.json();
  const resultsNext = results.next;
  const resultsPrev = results.previous;

  const pokePromises = results.results.map(async ({ url }) => {
    const pokemonData = await fetch(url);
    const pokemon = await pokemonData.json();
    return pokemon;
  });

  const pokeArrays = await Promise.all(pokePromises);
  const pokeArray = [pokeArrays, resultsNext, resultsPrev];

  return pokeArray;
}

export async function getNextPokemons(nextUrl) {
  const pokeApi = await fetch(nextUrl);
  const results = await pokeApi.json();

  const pokePromises = results.results.map(async ({ url }) => {
    const pokemonData = await fetch(url);

    const pokemon = await pokemonData.json();

    return pokemon;
  });

  const pokeArray = await Promise.all(pokePromises);

  return pokeArray;
}

export async function createCards(pokemonArray) {
  const pokeArray = await pokemonArray;
  const containerCards = document.querySelector(".poke-cards-container");
  pokeArray.forEach(async (pokemon) => {
    new PokeCard(containerCards, "poke-card", await pokemon);
  });
}
