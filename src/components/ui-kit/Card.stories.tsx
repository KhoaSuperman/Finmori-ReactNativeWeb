import type { Meta, StoryObj } from "storybook";
import { Text, View } from "react-native";

import { Badge } from "./Badge";
import { Button } from "./Button";
import { Card } from "./Card";

const meta: Meta<typeof Card> = {
  title: "UI Kit/Card",
  component: Card,
  decorators: [
    (Story) => (
      <View className="flex-1 justify-center bg-neutral-100 p-4 dark:bg-neutral-950">
        <Story />
      </View>
    ),
  ],
  argTypes: {
    variant: {
      control: "select",
      options: ["elevated", "outlined", "filled"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Elevated: Story = {
  args: {
    title: "Elevated Card",
    subtitle: "This card has a shadow elevation effect",
    variant: "elevated",
  },
};

export const Outlined: Story = {
  args: {
    title: "Outlined Card",
    subtitle: "This card has a border outline",
    variant: "outlined",
  },
};

export const Filled: Story = {
  args: {
    title: "Filled Card",
    subtitle: "This card has a filled background",
    variant: "filled",
  },
};

export const WithContent: Story = {
  render: () => (
    <Card title="Transaction" subtitle="Today at 2:30 PM" variant="elevated">
      <View className="flex-row items-center justify-between">
        <Badge label="Completed" variant="success" />
        <Text className="text-lg font-bold text-neutral-900 dark:text-neutral-100">-$42.50</Text>
      </View>
      <View className="mt-3">
        <Button title="View Details" variant="outline" size="sm" />
      </View>
    </Card>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <View className="gap-4">
      <Card
        title="Elevated"
        subtitle="Shadow effect"
        variant="elevated"
      />
      <Card
        title="Outlined"
        subtitle="Border style"
        variant="outlined"
      />
      <Card
        title="Filled"
        subtitle="Background fill"
        variant="filled"
      />
    </View>
  ),
};
