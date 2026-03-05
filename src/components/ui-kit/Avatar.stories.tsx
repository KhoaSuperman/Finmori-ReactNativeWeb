import type { Meta, StoryObj } from "storybook";
import { View } from "react-native";

import { Avatar } from "./Avatar";

const meta: Meta<typeof Avatar> = {
  title: "UI Kit/Avatar",
  component: Avatar,
  decorators: [
    (Story) => (
      <View className="flex-1 items-center justify-center bg-white p-4 dark:bg-neutral-900">
        <Story />
      </View>
    ),
  ],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg", "xl"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const WithInitials: Story = {
  args: {
    initials: "JD",
    size: "md",
  },
};

export const WithImage: Story = {
  args: {
    src: "https://i.pravatar.cc/150?img=3",
    size: "md",
  },
};

export const Small: Story = {
  args: {
    initials: "S",
    size: "sm",
  },
};

export const Large: Story = {
  args: {
    initials: "LG",
    size: "lg",
  },
};

export const ExtraLarge: Story = {
  args: {
    initials: "XL",
    size: "xl",
  },
};

export const AllSizes: Story = {
  render: () => (
    <View className="flex-row items-center gap-3">
      <Avatar initials="SM" size="sm" />
      <Avatar initials="MD" size="md" />
      <Avatar initials="LG" size="lg" />
      <Avatar initials="XL" size="xl" />
    </View>
  ),
};
