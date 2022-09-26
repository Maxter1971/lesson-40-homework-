import React from "react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";

import { stat } from "fs";
import Header from ".";

test("should render Header", async () => {
  const state: any = {
    level: "h2",
    text: "ddd",
    color: "blue",
  };
  render(<Header level={state.level} text={state.text} color={state.color} />);
  screen.debug();

  // userEvent.click(button);

  expect(document.body.innerHTML.match('id="h1"')).not.toEqual(null);
});
