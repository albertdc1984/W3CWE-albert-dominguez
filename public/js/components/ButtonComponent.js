import Component from "./Component.js";

class ButtonComponent extends Component {
  constructor(parentElement, className, nextOrPrevText, actionOnClick) {
    super(parentElement, className, "button");

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
