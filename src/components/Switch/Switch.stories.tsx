import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from "./Switch";

const meta = {
  title: "Design System/components/Switch",
  component: Switch,
} satisfies Meta<typeof Switch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SwitchComponent: Story = {
  args: {
    checked: true,
    checkbox: false,
    setChecked: () => alert("click on switch!"),
  },
};

export const CheckboxComponent: Story = {
  args: {
    checked: true,
    checkbox: true,
    setChecked: () => {},
  },
};
