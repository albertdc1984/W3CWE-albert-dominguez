import PokeCard from "./PokeCard.js";

class MainPokeCard extends PokeCard {
  constructor(pokemon) {
    super("card-extended", "card-info", pokemon);
    this.pokemon = pokemon;
    this.generateHtml(pokemon);
  }

  generateHtml() {
    this.element.innerHTML = `<img src=${this.pokemon.sprites.front_default}>
    <p class="name-status">${this.pokemon.name}</p>
    <p>Order:${this.pokemon.order}</p>
    <p>Weight:${this.pokemon.weight}</p>
    <p>Height:${this.pokemon.height}</p>
    <p>Base Experience:${this.pokemon.base_experience}</p>
    `;
  }
}
new MainPokeCard();
