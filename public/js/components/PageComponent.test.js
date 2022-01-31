/* eslint-disable no-new */
import PageComponent from "./PageComponent.js";

describe("Given a PageComponent class", () => {
  describe("When it's initialized ", () => {
    test("Then it should render a header", () => {
      const parentElement = document.createElement("div");
      new PageComponent(parentElement);

      expect(parentElement.querySelector("header")).not.toBeNull();
    });
  });
  describe("When it's instantiated", () => {
    test("Then it should render main section", () => {
      const parentElement = document.createElement("div");
      new PageComponent(parentElement);

      expect(parentElement.querySelector("main").textContent).not.toBeNull();
    });
  });
});
