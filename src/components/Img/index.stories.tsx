import React from "react";
import { ComponentMeta } from "@storybook/react";
import img1 from "./1.png";

import Img from ".";

export default {
  title: "Example/MyImg",
  component: Img,
  parameters: {
    actions: {
      handles: ["click"],
    },
  },
} as ComponentMeta<typeof Img>;

export const Primary = () => (
  <Img src={img1} width={"100px"} height={"100px"} />
);
