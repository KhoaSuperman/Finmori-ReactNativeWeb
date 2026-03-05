import type { Meta, StoryObj } from "storybook";
import { View } from "react-native";

import { Badge } from "./Badge";

const meta: Meta<typeof Badge> = {
  title: "UI Kit/Badge",
  component: Badge,
  decorators: [
    (Story) => (
      <View className="flex-1 items-center justify-center bg-white p-4 dark:bg-neutral-900">
        <Story />
      </View>
    ),
  ],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "success", "warning", "error", "info"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    label: "Default",
    variant: "default",
  },
};

export const Success: Story = {
  args: {
    label: "Completed",
    variant: "success",
  },
};

export const Warning: Story = {
  args: {
    label: "Pending",
    variant: "warning",
  },
};

export const Error: Story = {
  args: {
    label: "Failed",
    variant: "error",
  },
};

export const Info: Story = {
  args: {
    label: "New",
    variant: "info",
  },
};

export const AllVariants: Story = {
  render: () => (
    <View className="flex-row flex-wrap gap-2">
      <Badge label="Default" variant="default" />
      <Badge label="Success" variant="success" />
      <Badge label="Warning" variant="warning" />
      <Badge label="Error" variant="error" />
      <Badge label="Info" variant="info" />
    </View>
  ),
};
