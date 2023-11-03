import type { Meta, StoryObj } from "@storybook/react";
import { Input } from ".";
import { Button } from "../Button";
import { Arrow } from "../Icons/Arrow/Arrow";

const meta = {
  title: "Design System/components/Input",
  component: Input.Root,
} satisfies Meta<typeof Input.Root>;

export default meta;

type Story = StoryObj<typeof Input.Root>;

export const Primary: Story = {
  args: {
    children: <Input.Input />,
  },
};

export const Actions: Story = {
  args: {
    children: [
      <>
        <Input.Actions>
          <Arrow size={32} outline />
        </Input.Actions>
        <Input.Input />
        <Input.Actions>
          <Button>click 1</Button>
          <Button>click 2</Button>
        </Input.Actions>
      </>,
    ],
  },
};

export const Disabled: Story = {
  args: {
    children: <Input.Input disabled />,
  },
};

export const CustomFontSize: Story = {
  args: {
    children: <Input.Input fontSize={1.8} />,
  },
};
