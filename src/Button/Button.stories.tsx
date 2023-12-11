import type { Meta, StoryObj } from "@storybook/react";
import { Button } from ".";
import scss from "./Button.module.scss";

const meta = {
  title: "Design System/components/Button",
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "minecraft",
  },
};

export const Grass: Story = {
  args: {
    children: "minecraft",
    variant: "grass",
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

export const Outline: Story = {
  args: {
    children: "minecraft",
    variant: "outline",
  },
};

export const CustomCss: Story = {
  args: {
    children: "minecraft",
    className: scss.teste,
  },
};

export const None: Story = {
  args: {
    children: "minecraft",
    variant: "none",
  },
};
