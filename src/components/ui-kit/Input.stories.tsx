import type { Meta, StoryObj } from "storybook";
import { View } from "react-native";

import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  title: "UI Kit/Input",
  component: Input,
  decorators: [
    (Story) => (
      <View className="flex-1 justify-center bg-white p-4 dark:bg-neutral-900">
        <Story />
      </View>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    label: "Email",
    placeholder: "you@example.com",
  },
};

export const WithHint: Story = {
  args: {
    label: "Username",
    placeholder: "Enter username",
    hint: "Must be at least 3 characters",
  },
};

export const WithError: Story = {
  args: {
    label: "Password",
    placeholder: "Enter password",
    error: "Password must be at least 8 characters",
    secureTextEntry: true,
  },
};

export const NoLabel: Story = {
  args: {
    placeholder: "Search...",
  },
};

export const FormExample: Story = {
  render: () => (
    <View className="gap-4">
      <Input label="Full Name" placeholder="John Doe" />
      <Input label="Email" placeholder="john@example.com" hint="We'll never share your email" />
      <Input
        label="Password"
        placeholder="Enter password"
        secureTextEntry
        error="Too short"
      />
    </View>
  ),
};
