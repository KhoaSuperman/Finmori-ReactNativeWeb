import type { Meta, StoryObj } from "storybook"
import { View } from "react-native"

import { RecapCard } from "./RecapCard"

const meta: Meta<typeof RecapCard> = {
  title: "UI Kit/RecapCard",
  component: RecapCard,
  decorators: [
    (Story) => (
      <View className="bg-primary flex-1 p-4">
        <Story />
      </View>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof RecapCard>

export const Default: Story = {
  args: {
    title: "Target Achieved",
    value: "$35K",
    status: "default",
  },
}

export const Success: Story = {
  args: {
    title: "Target Achieved",
    value: "$35K",
    status: "success",
  },
}

export const Critical: Story = {
  args: {
    title: "Target Achieved",
    value: "$35K",
    status: "critical",
  },
}

export const AllVariants: Story = {
  render: () => (
    <View className="gap-3">
      <RecapCard title="Target Achieved" value="$35K" status="default" />
      <RecapCard title="Target Achieved" value="$35K" status="success" />
      <RecapCard title="Target Achieved" value="$35K" status="critical" />
    </View>
  ),
}
