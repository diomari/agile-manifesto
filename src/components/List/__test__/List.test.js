import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import List from "../index";

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

it("List renders with title", () => {
  act(() => {
    render(<List title="Test" />, container);
  });
  const titleElement = container.querySelector(".list-title");
  expect(titleElement.textContent).toBe("Test");
});

it("Displays loading if list is empty", () => {
  act(() => {
    render(<List title="Test" />, container);
  });
  expect(container.textContent).toContain("Loading");
});

it("Hides loading if list is not empty", () => {
  const values = [
    {
      id: 1,
      text: "Test 1",
    },
  ];
  act(() => {
    render(<List title="Test" list={values} />, container);
  });
  expect(container.textContent).not.toContain("Loading");
});

it("Renders list data", () => {
  const values = [
    {
      id: 1,
      text: "Test 1",
    },
    {
      id: 2,
      text: "Test 2",
    },
  ];
  act(() => {
    render(<List title="Test List" list={values} />, container);
  });
  const list = container.querySelector(".list");
  expect(list.childNodes.length).toBe(2);
});
