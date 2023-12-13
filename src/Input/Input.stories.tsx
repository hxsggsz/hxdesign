import type { Meta, StoryObj } from "@storybook/react";
import { Input } from ".";
import { Button } from "../Button";
import { Lock } from "@phosphor-icons/react";

const meta = {
  title: "Design System/components/Input",
  component: Input.Root,
} satisfies Meta<typeof Input.Root>;

export default meta;

type Story = StoryObj<typeof Input.Root>;

export const Primary: Story = {
  args: {
    children: <Input.Input placeholder="placeholder" />,
  },
};

export const Actions: Story = {
  args: {
    children: [
      <>
        <Input.Actions>
          <Lock size={32} />
        </Input.Actions>
        <Input.Input placeholder="placeholder" />
        <Input.Actions>
          <Button size="small" variant="none">
            click 1
          </Button>
          <Button size="small" variant="none">
            click 2
          </Button>
        </Input.Actions>
      </>,
    ],
  },
};

export const Disabled: Story = {
  args: {
    children: <Input.Input placeholder="placeholder" disabled />,
  },
};

export const Error: Story = {
  args: {
    children: [
      <Input.Root errorMessage="error!!!">
        <Input.Input placeholder="placeholder" />
      </Input.Root>,
    ],
  },
};
