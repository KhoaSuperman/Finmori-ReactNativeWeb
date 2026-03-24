import type { Meta, StoryObj } from "storybook"
import { View } from "react-native"

import { GoalsCardDetails } from "./GoalsCardDetails"

const meta: Meta<typeof GoalsCardDetails> = {
  title: "UI Kit/GoalsCardDetails",
  component: GoalsCardDetails,
  decorators: [
    (Story) => (
      <View className="flex-1 items-center justify-center bg-secondary p-8">
        <View style={{ width: 361 }}>
          <Story />
        </View>
      </View>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof GoalsCardDetails>

export const Default: Story = {
  args: {
    savedLabel: "You've already saved",
    currentAmount: "$175,000",
    remainingAmount: "$175,000 left",
    progress: 50,
    actualSaving: "$175,000",
    targetAmount: "$250k",
    timeRemaining: "3 days 04:15:20",
    endDate: "Jul 3rd, 2026",
  },
}

export const LowProgress: Story = {
  args: {
    savedLabel: "You've already saved",
    currentAmount: "$5,000",
    remainingAmount: "$45,000 left",
    progress: 10,
    actualSaving: "$5,000",
    targetAmount: "$50k",
    timeRemaining: "120 days left",
    endDate: "Dec 1st, 2026",
  },
}

export const AlmostComplete: Story = {
  args: {
    savedLabel: "You've already saved",
    currentAmount: "$90,000",
    remainingAmount: "$10,000 left",
    progress: 90,
    actualSaving: "$90,000",
    targetAmount: "$100k",
    timeRemaining: "5 days 08:30:00",
    endDate: "Mar 29th, 2026",
  },
}

export const WithProgressUpdate: Story = {
  args: {
    savedLabel: "You've already saved",
    currentAmount: "$175,000",
    remainingAmount: "$175,000 left",
    progress: 50,
    actualSaving: "$175,000",
    targetAmount: "$250k",
    timeRemaining: "3 days 04:15:20",
    endDate: "Jul 3rd, 2026",
    showProgressUpdate: true,
    progressUpdate:
      "🚀 You're ahead of pace and should reach your goal 30% ahead of goal management.",
  },
}
