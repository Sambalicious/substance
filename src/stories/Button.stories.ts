import { Button } from "@/components/ui/button";
import type { Meta, StoryObj } from "@storybook/react";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Button> = {
  title: "Example/Button",
  component: Button,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Button>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    variant: "default",
    children: "Button",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Button",
  },
};
export const Destructive: Story = {
  args: {
    variant: "destructive",
    children: "Button",
  },
};
export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Button",
  },
};
export const ClassName: Story = {
  args: {
    className: "rounded-full text-white  bg-blue-700 hover:text-black",
    children: "Button",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    children: "Button",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    children: "Button",
  },
};
export const Icon: Story = {
  args: {
    size: "icon",
    children: "Button",
  },
};
