import Component from "./Component.js";

class PokeCard extends Component {
  constructor(parentElement, className) {
    super(parentElement, className);

    this.generateHtml();
  }

  generateHtml() {
    this.element.innerHTML = `<img src="img/pokeball.png"><p class="name-status">Name & Status</p>`;
  }
}

export default PokeCard;
