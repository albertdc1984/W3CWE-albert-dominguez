/* eslint-disable class-methods-use-this */
/* eslint-disable no-new */
import Component from "./Component.js";

class PageComponent extends Component {
  constructor(parentElement) {
    super(parentElement, "body-container");

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
    <footer class="footer-buttons-container">            
    </footer>`;
  }
}

export default PageComponent;
