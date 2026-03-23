import type { Meta, StoryObj } from "storybook"
import { View } from "react-native"

import { GoalsCardMinimize } from "./GoalsCardMinimize"

const meta: Meta<typeof GoalsCardMinimize> = {
  title: "UI Kit/GoalsCardMinimize",
  component: GoalsCardMinimize,
  decorators: [
    (Story) => (
      <View className="flex-1 items-center justify-center bg-secondary p-8">
        <View style={{ width: 175 }}>
          <Story />
        </View>
      </View>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof GoalsCardMinimize>

export const Default: Story = {
  args: {
    title: "New Iphone 17 Pro Max",
    currentAmount: "$175,000",
    targetAmount: "$250k",
    progress: 30,
    timeRemaining: "3 days 04:15:20",
  },
}

export const LowProgress: Story = {
  args: {
    title: "Emergency Fund",
    currentAmount: "$5,000",
    targetAmount: "$50k",
    progress: 10,
    timeRemaining: "120 days left",
  },
}

export const HalfProgress: Story = {
  args: {
    title: "Vacation to Japan",
    currentAmount: "$3,500",
    targetAmount: "$7k",
    progress: 50,
    timeRemaining: "45 days 12:00:00",
  },
}

export const AlmostComplete: Story = {
  args: {
    title: "MacBook Pro M4",
    currentAmount: "$2,800",
    targetAmount: "$3k",
    progress: 90,
    timeRemaining: "5 days 08:30:00",
  },
}

export const Complete: Story = {
  args: {
    title: "Car Down Payment",
    currentAmount: "$20,000",
    targetAmount: "$20k",
    progress: 100,
    timeRemaining: "Goal reached!",
  },
}
