import type { Meta, StoryObj } from '@storybook/react';
import { AutoComplete } from './AutoComplete';

const meta = {
  title: 'AutoComplete',
  component: AutoComplete,
} satisfies Meta<typeof AutoComplete>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
   
  },
}