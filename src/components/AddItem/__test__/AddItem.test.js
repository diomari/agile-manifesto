import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import AddItem from "../index";

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

it("Displays textarea and button", () => {
  act(() => {
    render(<AddItem />, container);
  });
  expect(container.textContent).toContain("Add");
  expect(container.innerHTML).toContain("textarea");
});

it("Calls onSubmit function after add is clicked", () => {
  const onSubmit = jest.fn();
  act(() => {
    render(<AddItem onSubmit={onSubmit} />, container);
  });

  const button = document.querySelector("[data-testid=add-button]");

  act(() => {
    button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });
  expect(onSubmit).toHaveBeenCalledTimes(1);

  act(() => {
    for (let i = 0; i < 5; i++) {
      button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    }
  });
  expect(onSubmit).toHaveBeenCalledTimes(6);
});
