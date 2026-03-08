import type { Meta, StoryObj } from "storybook"
import { View } from "react-native"

import { BalanceCard } from "./BalanceCard"

const meta: Meta<typeof BalanceCard> = {
  title: "UI Kit/BalanceCard",
  component: BalanceCard,
  decorators: [
    (Story) => (
      <View className="bg-primary flex-1 p-4">
        <Story />
      </View>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof BalanceCard>

export const Default: Story = {
  args: {
    amount: "$12,458.50",
  },
}

export const Hidden: Story = {
  args: {
    amount: "$12,458.50",
    hidden: true,
  },
}

export const CustomLabel: Story = {
  args: {
    label: "Total Assets",
    amount: "$89,234.12",
  },
}

export const SmallAmount: Story = {
  args: {
    amount: "$0.00",
  },
}

export const LargeAmount: Story = {
  args: {
    amount: "$1,234,567.89",
  },
}
