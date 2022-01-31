/* eslint-disable no-new */
import ButtonComponent from "./ButtonComponent.js";

describe("Given a ButtonComponent class", () => {
  describe("When it's initialized ", () => {
    test("Then it should render a button", () => {
      const parentElement = document.createElement("div");
      new ButtonComponent(parentElement);

      expect(parentElement.querySelector("button")).not.toBeNull();
    });
  });
  describe("When it recieves the string 'Previous'", () => {
    test("Then it should render a button with Previous word inside", () => {
      const parentElement = document.createElement("div");
      new ButtonComponent(parentElement, "", "Previous");

      expect(parentElement.querySelector("button").textContent).toMatch(
        "Previous"
      );
    });
  });
});
