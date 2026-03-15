import type { Meta, StoryObj } from "storybook"
import { View } from "react-native"

import { TransactionTextInput } from "./TransactionTextInput"

const meta: Meta<typeof TransactionTextInput> = {
  title: "UI Kit/TransactionTextInput",
  component: TransactionTextInput,
  decorators: [
    (Story) => (
      <View className="flex-1 bg-primary p-6">
        <Story />
      </View>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof TransactionTextInput>

export const Default: Story = {
  args: {
    value: "",
  },
}

export const Focussed: Story = {
  args: {
    value: "",
    autoFocus: true,
  },
}

export const Typing: Story = {
  args: {
    value: "Lunch",
    autoFocus: true,
  },
}

export const Active: Story = {
  args: {
    value: "Lunch with colleagues",
  },
}
