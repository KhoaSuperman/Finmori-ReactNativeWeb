import type { Meta, StoryObj } from "storybook";
import { Text, View } from "react-native";

import { Divider } from "./Divider";

const meta: Meta<typeof Divider> = {
  title: "UI Kit/Divider",
  component: Divider,
  decorators: [
    (Story) => (
      <View className="flex-1 justify-center bg-white p-4 dark:bg-neutral-900">
        <Story />
      </View>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Divider>;

export const Default: Story = {
  render: () => (
    <View>
      <Text className="text-neutral-900 dark:text-neutral-100">Content above</Text>
      <Divider />
      <Text className="text-neutral-900 dark:text-neutral-100">Content below</Text>
    </View>
  ),
};

export const SmallSpacing: Story = {
  render: () => (
    <View>
      <Text className="text-neutral-900 dark:text-neutral-100">Tight spacing</Text>
      <Divider spacing="sm" />
      <Text className="text-neutral-900 dark:text-neutral-100">Below</Text>
    </View>
  ),
};

export const LargeSpacing: Story = {
  render: () => (
    <View>
      <Text className="text-neutral-900 dark:text-neutral-100">Large spacing</Text>
      <Divider spacing="lg" />
      <Text className="text-neutral-900 dark:text-neutral-100">Below</Text>
    </View>
  ),
};
