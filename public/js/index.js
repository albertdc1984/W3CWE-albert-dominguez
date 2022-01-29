/* eslint-disable no-new */
import PageComponent from "./components/PageComponent.js";

const container = document.querySelector("body");

new PageComponent(container, "div");

async function getPokemons() {
  const pokeApi = await fetch("https://pokeapi.co/api/v2/pokemon");
  const results = await pokeApi.json();

  const pokeArray = results.results;

  return pokeArray;
}

getPokemons();
