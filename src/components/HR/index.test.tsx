import React from "react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";

import HR from ".";

test("should render HR", async () => {
  const state: any = {
    border: "none",
    background_color: "blue",
    color: "red",
    height: "2px",
  };
  render(
    <HR
      border={state.border}
      color={state.color}
      height={state.height}
      background_color={state.background_color}
    />
  );
  screen.debug();

  expect(
    document.body.innerHTML.match(
      'color: red; height: 2px; background-color: blue;"'
    )
  ).not.toEqual(null);
});
