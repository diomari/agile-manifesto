// ListItem displays actions on hover
// ListItem renders data

import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import ListItem from "../index";

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

it("Displays item data", () => {
  act(() => {
    render(
      <ListItem id="1" index="1">
        Hover Test
      </ListItem>,
      container
    );
  });
  expect(container.textContent).toContain("Hover Test");
});

it("Displays edit and delete buttons on hover", () => {
  act(() => {
    render(
      <ListItem id="1" index="1">
        Hover Test
      </ListItem>,
      container
    );
  });
  const listItem = container.querySelector(".list-item");
  act(() => {
    listItem.dispatchEvent(new MouseEvent("mouseover", { bubbles: true }));
  });
  expect(listItem.textContent).toContain("edit");
  expect(listItem.textContent).toContain("delete");
});

it("Hides edit and delete buttons when not on hover", () => {
  act(() => {
    render(
      <ListItem id="1" index="1">
        Hover Test
      </ListItem>,
      container
    );
  });
  const listItem = container.querySelector(".list-item");
  expect(listItem.textContent).not.toContain("edit");
  expect(listItem.textContent).not.toContain("delete");
});

it("Display editable textarea when edit button is clicked", () => {
  act(() => {
    render(
      <ListItem id="1" index="1">
        Hover Test
      </ListItem>,
      container
    );
  });
  const listItem = container.querySelector(".list-item");
  act(() => {
    listItem.dispatchEvent(new MouseEvent("mouseover", { bubbles: true }));
  });

  const editButton = listItem.querySelector("[data-testid=edit]");
  act(() => {
    editButton.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });
  expect(listItem.innerHTML).toContain("textarea");
  expect(listItem.innerHTML).toContain("save");
  expect(listItem.innerHTML).toContain("cancel");
});

it("Do not display editable textarea when edit button is not clicked", () => {
  act(() => {
    render(
      <ListItem id="1" index="1">
        Hover Test
      </ListItem>,
      container
    );
  });
  const listItem = container.querySelector(".list-item");
  act(() => {
    listItem.dispatchEvent(new MouseEvent("mouseover", { bubbles: true }));
  });
  expect(listItem.innerHTML).not.toContain("textarea");
  expect(listItem.innerHTML).not.toContain("save");
  expect(listItem.innerHTML).not.toContain("cancel");
});
