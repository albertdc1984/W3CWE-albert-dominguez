import Component from "./Component.js";

class PokeCard extends Component {
  constructor(parentElement, className, pokemon) {
    super(parentElement, className);
    this.pokemon = pokemon;
    this.generateHtml();
  }

  generateHtml() {
    this.element.innerHTML = `<img src="img/pokeball.png"><p class="name-status"></p>`;
  }
}

export default PokeCard;
