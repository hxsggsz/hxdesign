import type { Meta, StoryObj } from "@storybook/react";
import { Slider } from "./Slider";

const meta = {
  title: "Slider",
  component: Slider,
} satisfies Meta<typeof Slider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    min: 0,
    max: 100,
    setSliderValue: undefined,
  },
};

export const DefautValue: Story = {
  args: {
    min: 0,
    max: 100,
    defaultValue: 30,
    setSliderValue: undefined,
  },
};
