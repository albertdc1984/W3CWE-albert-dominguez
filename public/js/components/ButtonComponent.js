import Component from "./Component.js";

class ButtonComponent extends Component {
  constructor(nextOrPrevText, actionOnClick) {
    super(document.querySelector("footer"), "footer-button", "button");

    this.generateHTML(nextOrPrevText);

    this.addListeners(actionOnClick);
  }

  generateHTML(text) {
    this.element.textContent = text;
  }

  addListeners(actionOnClick) {
    this.element.addEventListener("click", actionOnClick);
  }
}

export default ButtonComponent;
