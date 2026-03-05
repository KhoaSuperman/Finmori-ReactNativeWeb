import type { Meta, StoryObj } from "storybook";
import { View } from "react-native";

import { Chip } from "./Chip";

const meta: Meta<typeof Chip> = {
  title: "UI Kit/Chip",
  component: Chip,
  decorators: [
    (Story) => (
      <View className="flex-1 items-start justify-center bg-white p-4 dark:bg-neutral-900">
        <Story />
      </View>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Chip>;

export const Default: Story = {
  args: {
    label: "Filter",
    selected: false,
  },
};

export const Selected: Story = {
  args: {
    label: "Active",
    selected: true,
  },
};

export const ChipGroup: Story = {
  render: () => (
    <View className="flex-row flex-wrap gap-2">
      <Chip label="All" selected />
      <Chip label="Income" />
      <Chip label="Expense" />
      <Chip label="Transfer" />
      <Chip label="Savings" />
    </View>
  ),
};
