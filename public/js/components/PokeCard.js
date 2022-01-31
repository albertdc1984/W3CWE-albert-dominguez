/* eslint-disable no-new */
import ButtonComponent from "./ButtonComponent.js";
import Component from "./Component.js";

class PokeCard extends Component {
  constructor(parentElement, className, pokemon) {
    super(parentElement, className);
    this.pokemon = pokemon;
    this.generateHtml();
    this.addListeners();
  }

  generateHtml() {
    this.element.innerHTML = `<img src=${this.pokemon.sprites.front_default}>
    <p class="name-status">${this.pokemon.name}</p>
    `;
    new ButtonComponent(this.element, "add-button", "Add", async () => {
      const data = await JSON.stringify(this.pokemon);
      const myPokeApi = "https://git.heroku.com/dry-caverns-39810.git/pokemon";
      fetch(myPokeApi, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: data,
      });
    });
  }

  addListeners() {
    this.element.addEventListener("click", () => {
      document.querySelector("main").innerHTML = `
  
      <div class="card-extended">
      <p class="name-status">${this.pokemon.name.toUpperCase()}</p>
      <img src=${this.pokemon.sprites.front_default}>    
      <p>Order:${this.pokemon.order}</p>
      <p>Weight:${this.pokemon.weight}</p>
      <p>Height:${this.pokemon.height}</p>
      <p>Base Experience:${this.pokemon.base_experience}</p>
      </div>
   `;
    });
  }
}

export default PokeCard;
