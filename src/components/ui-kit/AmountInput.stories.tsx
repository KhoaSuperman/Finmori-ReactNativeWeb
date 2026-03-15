import type { Meta, StoryObj } from "storybook"
import { View } from "react-native"

import { AmountInput } from "./AmountInput"

const meta: Meta<typeof AmountInput> = {
  title: "UI Kit/AmountInput",
  component: AmountInput,
  decorators: [
    (Story) => (
      <View className="flex-1 bg-primary p-4">
        <Story />
      </View>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof AmountInput>

export const Focussed: Story = {
  args: {
    value: "0",
    autoFocus: true,
  },
}

export const Active: Story = {
  args: {
    value: "1200",
  },
}

export const ReachMaximumCharacter: Story = {
  args: {
    value: "1200465",
    maxLength: 7,
  },
}
