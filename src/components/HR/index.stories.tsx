import React from "react";
import { ComponentMeta } from "@storybook/react";

import HR from ".";

export default {
  title: "Example/MyHR",
  component: HR,
  parameters: {
    actions: {
      handles: ["click"],
    },
  },
} as ComponentMeta<typeof HR>;

export const Primary = () => (
  <HR border={"none"} color={"blue"} height={"2px"} background_color={"red"} />
);
