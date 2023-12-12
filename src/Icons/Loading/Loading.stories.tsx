import type { Meta, StoryObj } from "@storybook/react";
import { Loading } from "./Loading";

const meta = {
  title: "Project Icons/icons/Loading",
  component: Loading,
} satisfies Meta<typeof Loading>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Variant: Story = {
  args: {
    color: "red",
    size: 1,
  },
};

export const CustomSize: Story = {
  args: {
    size: 1,
  },
};
