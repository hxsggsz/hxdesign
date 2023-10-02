import type { Meta, StoryObj } from "@storybook/react";
import { Close } from "./Close";

const meta = {
  title: "Project Icons/icons/Close",
  component: Close,
} satisfies Meta<typeof Close>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: false,
  },
};

export const Variant: Story = {
  args: {
    variant: true,
  },
};

export const CustomSize: Story = {
  args: {
    variant: false,
    size: 50,
  },
};
