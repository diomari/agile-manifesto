import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Button from "./../index";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders button with children as label", () => {
  act(() => {
    render((<Button>Sample</Button>), container);
  });
  expect(container.textContent).toBe("Sample");

});

it("renders correct className from type", () => {
    act(() => {
      render((<Button type="small"/>), container);
    });
    const button = container.querySelector('button');
    expect(button.className).toContain("btn-small");
});