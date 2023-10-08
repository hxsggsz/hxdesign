import type { Meta, StoryObj } from "@storybook/react";
import { Microphone } from "./Microphone";

const meta = {
  title: "Project Icons/icons/Microphone",
  component: Microphone,
} satisfies Meta<typeof Microphone>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};

export const Active: Story = {
  args: {
    isActive: true,
  },
};

export const Variant: Story = {
  args: {
    variant: true,
  },
};

export const VariantActive: Story = {
  args: {
    variant: true,
    isActive: true,
  },
};

export const CustomSize: Story = {
  args: {
    size: 50,
  },
};
