import type { Meta, StoryObj } from "@storybook/react";
import { AutoComplete } from ".";

const meta = {
  title: "Design System/components/AutoComplete",
  component: AutoComplete,
} satisfies Meta<typeof AutoComplete>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    placeholder: "Awesome placeholder",
    list: [
      {
        id: 1,
        item: "item 1",
        onSelect: (item: string) => alert(`selected: ${item}`),
      },
      {
        id: 1,
        item: "item 10",
        onSelect: (item: string) => alert(`selected: ${item}`),
      },
      {
        id: 1,
        item: "item 20",
        onSelect: (item: string) => alert(`selected: ${item}`),
      },
      {
        id: 1,
        item: "item 30",
        onSelect: (item: string) => alert(`selected: ${item}`),
      },
      {
        id: "dwadwadwa",
        item: "item 40",
        onSelect: (item: string) => alert(`selected: ${item}`),
      },
      {
        id: 2,
        item: "item 3",
        onSelect: (item: string) => alert(`selected: ${item}`),
      },
      {
        id: 3,
        item: "item 4",
        onSelect: (item: string) => alert(`selected: ${item}`),
      },
      {
        id: 5,
        item: "item 5",
        onSelect: (item: string) => alert(`selected: ${item}`),
      },
    ],
  },
};

export const CustomEmptyMessage: Story = {
  args: {
    placeholder: "Minecraft streamers",
    emptyMessage: "there is nothing here for you",
    list: [
      {
        id: 1,
        item: "Quackity, the creator of QSMP",
        onSelect: (item: string) => alert(`selected: ${item}`),
      },
      {
        id: "dwadwadwa",
        item: "FoolishG",
        onSelect: (item: string) => alert(`selected: ${item}`),
      },
      {
        id: 2,
        item: "BadBoyHalo",
        onSelect: (item: string) => alert(`selected: ${item}`),
      },
      {
        id: 3,
        item: "JaidenAnimations",
        onSelect: (item: string) => alert(`selected: ${item}`),
      },
      {
        id: 5,
        item: "Cellbit",
        onSelect: (item: string) => alert(`selected: ${item}`),
      },
    ],
  },
};
