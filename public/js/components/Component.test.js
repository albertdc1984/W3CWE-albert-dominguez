/* eslint-disable no-new */
import Component from "./Component.js";

describe("Given a Component class", () => {
  describe("When it's initialized without html tag", () => {
    test("Then it should render a div", () => {
      const parentElement = document.createElement("div");
      new Component(parentElement);

      expect(parentElement.querySelector("div")).not.toBeNull();
    });
  });
  describe("When it recieves the tag 'button'", () => {
    test("Then it should render a button ", () => {
      const parentElement = document.createElement("div");
      new Component(parentElement, "", "button");

      expect(parentElement.querySelector("button").textContent).not.toBeNull();
    });
  });
});
