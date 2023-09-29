import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta = {
  title: 'Input',
  component: Input,
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
  },
}

export const Disabled: Story = {
  args: {
    disabled: true
  },
}

export const CustomFont: Story = {
  args: {
    fontSize: 1.8
  },
}