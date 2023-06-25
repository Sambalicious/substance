import { Calendar } from "@/components/ui/calendar";
import type { Meta, StoryObj } from "@storybook/react";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Calendar> = {
  title: "Example/Calendar",
  component: Calendar,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Calendar>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const ShowOutsideDays: Story = {
  args: {
    showOutsideDays: true,
  },
};
export const NoShowOutsideDays: Story = {
  args: {
    showOutsideDays: false,
  },
};

export const ClassName: Story = {
  args: {
    className: "text-black-100",
  },
};
