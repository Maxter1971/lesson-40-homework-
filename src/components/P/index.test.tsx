import React from "react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";

import P from ".";

test("should render HR", async () => {
  const state: any = {
    text: "Абзац про то, как я делаю первый проект на React",
    color: "red",
  };
  render(<P color={state.color} text={state.text} />);
  screen.debug();

  expect(
    document.body.innerHTML.match(
      "Абзац про то, как я делаю первый проект на React"
    )
  ).not.toEqual(null);
});
