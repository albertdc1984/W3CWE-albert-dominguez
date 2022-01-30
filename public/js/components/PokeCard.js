/* eslint-disable no-new */
import ButtonComponent from "./ButtonComponent.js";
import Component from "./Component.js";

class PokeCard extends Component {
  constructor(parentElement, className, pokemon, actionOnClick) {
    super(parentElement, className);
    this.pokemon = pokemon;
    this.generateHtml();
    this.addListeners(actionOnClick);
  }

  generateHtml() {
    this.element.innerHTML = `<img src=${this.pokemon.sprites.front_default}>
    <p class="name-status">${this.pokemon.name}</p>
    `;
    new ButtonComponent(this.element, "add-button", "Add");
  }
}

export default PokeCard;
