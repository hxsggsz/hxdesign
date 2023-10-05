import type { Meta, StoryObj } from "@storybook/react";
import { AutoComplete } from "./AutoComplete";

const meta = {
  title: "Design System/components/AutoComplete",
  component: AutoComplete,
} satisfies Meta<typeof AutoComplete>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    placeholder: "Minecraft streamers",
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
