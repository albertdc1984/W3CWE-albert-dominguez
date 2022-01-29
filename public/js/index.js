import PokeCard from "./components/PokeCard.js";

const container = document.querySelector(".poke-cards-container");

const card = new PokeCard(container, "poke-card");

const showCard = (cards) => cards;

showCard(card);
