import type { Meta, StoryObj } from "@storybook/react";
import { Slider } from ".";
import { useState } from "react";
import { SliderProps } from "./Slider.types";

const meta = {
  title: "Design System/components/Slider",
  component: Slider,
} satisfies Meta<typeof Slider>;

export default meta;

type Story = StoryObj<typeof meta>;

const PrimaryComponent = (props: Omit<SliderProps, "setSliderValue">) => {
  const [value, setValue] = useState(0);
  return (
    <>
      <h1>{value}</h1>
      <Slider setSliderValue={setValue} {...props} />;
    </>
  );
};

export const Primary: Story = {
  args: {
    orientation: "horizontal",
  },
  render: (args) => {
    return <PrimaryComponent {...args} />;
  },
};

export const DefaultValue: Story = {
  args: {
    orientation: "horizontal",
    defaultValue: 40,
  },
  render: (args) => {
    return <PrimaryComponent {...args} />;
  },
};
