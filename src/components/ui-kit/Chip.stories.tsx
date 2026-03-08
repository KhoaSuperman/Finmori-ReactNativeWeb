import type { Meta, StoryObj } from "storybook"
import { View } from "react-native"

import { Chip } from "./Chip"

const meta: Meta<typeof Chip> = {
  title: "UI Kit/Chip",
  component: Chip,
  decorators: [
    (Story) => (
      <View className="bg-primary flex-1 p-4">
        <Story />
      </View>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof Chip>

export const Positive: Story = {
  args: {
    tendancy: "positive",
    label: "8%",
  },
}

export const Negative: Story = {
  args: {
    tendancy: "negative",
    label: "8%",
  },
}

export const PositiveLargeValue: Story = {
  args: {
    tendancy: "positive",
    label: "24.5%",
  },
}

export const NegativeLargeValue: Story = {
  args: {
    tendancy: "negative",
    label: "12.3%",
  },
}
