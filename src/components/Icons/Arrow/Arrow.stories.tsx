import type { Meta, StoryObj } from "@storybook/react";
import { Arrow } from "../Arrow/Arrow";

const meta = {
  title: "Project Icons/icons/Arrow",
  component: Arrow,
} satisfies Meta<typeof Arrow>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Variant: Story = {
  args: {
    variant: true,
    size: 32,
  },
};

export const VariantOutline: Story = {
  args: {
    variant: true,
    outline: true,
    size: 32,
  },
};

export const Outline: Story = {
  args: {
    outline: true,
    size: 32,
  },
};

export const Top: Story = {
  args: {
    size: 32,
    orientation: "top",
  },
};

export const Bottom: Story = {
  args: {
    orientation: "down",
    size: 32,
  },
};

export const Right: Story = {
  args: {
    size: 32,
  },
};

export const Left: Story = {
  args: {
    orientation: "left",
    size: 32,
  },
};
