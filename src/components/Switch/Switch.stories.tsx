import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from "./Switch";

const meta = {
  title: "Switch",
  component: Switch,
} satisfies Meta<typeof Switch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    check: true,
  },
};
