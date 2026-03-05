import type { Meta, StoryObj } from "storybook";
import { View } from "react-native";

import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "UI Kit/Button",
  component: Button,
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
      options: ["primary", "secondary", "outline", "ghost", "danger"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    title: "Primary Button",
    variant: "primary",
    size: "md",
  },
};

export const Secondary: Story = {
  args: {
    title: "Secondary Button",
    variant: "secondary",
  },
};

export const Outline: Story = {
  args: {
    title: "Outline Button",
    variant: "outline",
  },
};

export const Ghost: Story = {
  args: {
    title: "Ghost Button",
    variant: "ghost",
  },
};

export const Danger: Story = {
  args: {
    title: "Delete Account",
    variant: "danger",
  },
};

export const Small: Story = {
  args: {
    title: "Small",
    size: "sm",
  },
};

export const Large: Story = {
  args: {
    title: "Large Button",
    size: "lg",
  },
};

export const FullWidth: Story = {
  args: {
    title: "Full Width",
    fullWidth: true,
  },
};

export const Disabled: Story = {
  args: {
    title: "Disabled",
    disabled: true,
  },
};

export const AllVariants: Story = {
  render: () => (
    <View className="w-full gap-3">
      <Button title="Primary" variant="primary" />
      <Button title="Secondary" variant="secondary" />
      <Button title="Outline" variant="outline" />
      <Button title="Ghost" variant="ghost" />
      <Button title="Danger" variant="danger" />
    </View>
  ),
};
