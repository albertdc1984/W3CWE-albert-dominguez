import Component from "./Component.js";

class PokeCard extends Component {
  constructor(parentElement, className, pokemon) {
    super(parentElement, className);
    this.pokemon = pokemon;
    this.generateHtml();
  }

  generateHtml() {
    this.element.innerHTML = `<img src=${this.pokemon.sprites.front_default}><p class="name-status">${this.pokemon.name}</p>`;
  }
}

export default PokeCard;
