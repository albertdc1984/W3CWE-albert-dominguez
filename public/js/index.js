/* eslint-disable no-new */
import PageComponent from "./components/PageComponent.js";
import { getPokemons, createCards } from "./components/pokeApiTemp.js";
import ButtonComponent from "./components/ButtonComponent.js";

const urlPokemonApi = "https://pokeapi.co/api/v2/pokemon";
const container = document.querySelector("body");

async function generatePage(urlApi) {
  document.body.innerHTML = "";
  new PageComponent(container);
  const [pokemons, urlNext, urlPrev] = await getPokemons(urlApi);
  createCards(pokemons);
  if (urlPrev) {
    new ButtonComponent(
      document.querySelector("footer"),
      "footer-button",
      "Previous 20",
      async () => {
        generatePage(urlPrev);
      }
    );
  }
  if (urlNext) {
    new ButtonComponent(
      document.querySelector("footer"),
      "footer-button",
      "Next 20",
      async () => {
        generatePage(urlNext);
      }
    );
  }
}
generatePage(urlPokemonApi);
