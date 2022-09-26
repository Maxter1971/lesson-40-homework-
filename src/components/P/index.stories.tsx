import React from "react";
import { ComponentMeta } from "@storybook/react";
import P from ".";

export default {
  title: "Example/MyParagraph",
  component: P,
  parameters: {
    actions: {
      handles: ["click"],
    },
  },
} as ComponentMeta<typeof P>;

export const Primary = () => <p style={{ color: "red" }}>{"MyParagraph"}</p>;
