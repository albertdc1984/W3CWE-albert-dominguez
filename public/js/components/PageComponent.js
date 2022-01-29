import Component from "./Component.js";
import PokeCard from "./PokeCard.js";

class PageComponent extends Component {
  constructor(parentElement) {
    super(parentElement);

    this.generateHtml();
  }

  generateHtml() {
    this.element.innerHTML = `<header>
      <nav class="nav-header">
        <a href="">My Pokemons</a><img src="img/pokemon.png" /><a href=""
          >All Pokemons</a
        >
      </nav>
    </header>
    <main>
      <section class="poke-cards-container"></section>
    </main>
    <footer></footer>`;

    this.renderPokeCards();
  }

  renderPokeCards() {
    const container = document.querySelector(".poke-cards-container");
    new PokeCard(container, "poke-card");
  }
}

export default PageComponent;
