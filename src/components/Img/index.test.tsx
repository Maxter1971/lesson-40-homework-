import React from "react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import Img from ".";

test("should render HR", async () => {
  const state: any = {
    width: "100px",
    height: "100px",
    src: "#",
  };

  render(<Img src="№" width={state.width} height={state.height} />);
  screen.debug();

  expect(document.body.innerHTML.match('height="100px"')).not.toEqual(null);
});
