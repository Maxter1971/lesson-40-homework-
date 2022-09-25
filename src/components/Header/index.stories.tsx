import React from "react";
import { ComponentMeta } from "@storybook/react";

import Header from ".";

export default {
  title: "Example/MyHeader",
  component: Header,
  parameters: {
    actions: {
      handles: ["click"],
    },
  },
} as ComponentMeta<typeof Header>;

export const Primary = () => (
  <Header level={"h1"} color={"green"} text={"text"} key={1} />
);
