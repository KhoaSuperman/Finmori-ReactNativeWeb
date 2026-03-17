import type { Meta, StoryObj } from "storybook"
import { View } from "react-native"

import { IndicatorDots } from "./IndicatorDots"

const meta: Meta<typeof IndicatorDots> = {
  title: "UI Kit/IndicatorDots",
  component: IndicatorDots,
  decorators: [
    (Story) => (
      <View className="bg-primary flex-1 items-center justify-center p-4">
        <Story />
      </View>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof IndicatorDots>

export const ThreeDots: Story = {
  args: {
    count: 3,
    activeIndex: 0,
  },
}

export const FiveDots: Story = {
  args: {
    count: 5,
    activeIndex: 2,
  },
}

export const LastActive: Story = {
  args: {
    count: 4,
    activeIndex: 3,
  },
}

export const SingleDot: Story = {
  args: {
    count: 1,
    activeIndex: 0,
  },
}
