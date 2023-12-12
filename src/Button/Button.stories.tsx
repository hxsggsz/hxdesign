import type { Meta, StoryObj } from "@storybook/react";
import { Button } from ".";
import scss from "./Button.module.scss";
import { Atom } from "@phosphor-icons/react";

const meta = {
  title: "Design System/components/Button",
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "button",
    size: "large",
  },
};

export const PrimaryIcon: Story = {
  args: {
    children: "button",
    size: "large",
    icon: <Atom size={24} weight="fill" />,
  },
};

export const PrimaryDisabled: Story = {
  args: {
    children: "button",
    size: "large",
    disabled: true,
  },
};

export const PrimaryLoading: Story = {
  args: {
    isLoading: true,
    size: "large",
  },
};

export const CustomLoading: Story = {
  args: {
    isLoading: true,
    size: "large",
    loadingIcon: "loading...",
  },
};

export const Rounded: Story = {
  args: {
    rounded: true,
    size: "large",
    icon: <Atom size={24} weight="fill" />,
  },
};

export const Outline: Story = {
  args: {
    children: "button",
    variant: "outline",
    size: "large",
  },
};

export const OutlineLoading: Story = {
  args: {
    children: "button",
    variant: "outline",
    isLoading: true,
    size: "large",
  },
};

export const OutlineDisabled: Story = {
  args: {
    children: "button",
    variant: "outline",
    disabled: true,
    size: "large",
  },
};

export const CustomCss: Story = {
  args: {
    children: "button",
    className: scss.teste,
  },
};

export const None: Story = {
  args: {
    children: "button",
    variant: "none",
  },
};
