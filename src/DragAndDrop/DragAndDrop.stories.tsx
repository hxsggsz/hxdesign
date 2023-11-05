import type { Meta, StoryObj } from "@storybook/react";
import { DragAndDrop } from ".";

const meta = {
  title: "Design System/components/DragAndDrop",
  component: DragAndDrop,
} satisfies Meta<typeof DragAndDrop>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    SupportedMedia: ["jpg", "jpeg", "webp", "gif"],
    maxSize: 2,
    onChange: (files) => alert(`first file: ${files[0].name}`),
  },
};
export const Video: Story = {
  args: {
    SupportedMedia: ["mp4"],
    maxSize: 2,
    onChange: (files) => alert(`first file: ${files[0].name}`),
  },
};

export const Pdf: Story = {
  args: {
    SupportedMedia: ["pdf"],
    maxSize: 2,
    onChange: (files) => alert(`first file: ${files[0].name}`),
  },
};
