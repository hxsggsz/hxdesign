import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";

const meta = {
  title: "button",
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "minecraft",
    variant: false,
  },
};

export const Secondary: Story = {
  args: {
    children: "minecraft",
    variant: true,
  },
  parameters: {
    a11y: {
      element: "#storybook-root",
      config: {
        rules: [
          {
            id: "color-contrast",
            enabled: false,
          },
        ],
      },
      options: {},
      manual: true,
    },
  },
};
