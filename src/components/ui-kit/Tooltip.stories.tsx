import type { Meta, StoryObj } from "storybook"
import { View } from "react-native"

import { Tooltip } from "./Tooltip"

const meta: Meta<typeof Tooltip> = {
  title: "UI Kit/Tooltip",
  component: Tooltip,
  decorators: [
    (Story) => (
      <View className="flex-1 items-center justify-center bg-secondary p-10">
        <Story />
      </View>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof Tooltip>

export const TopCenter: Story = {
  args: {
    title: "11 Aug, 2026",
    description: "This is a tooltip description",
    placement: "top-center",
  },
}

export const BottomCenter: Story = {
  args: {
    title: "11 Aug, 2026",
    description: "This is a tooltip description",
    placement: "bottom-center",
  },
}

export const Left: Story = {
  args: {
    title: "11 Aug, 2026",
    description: "This is a tooltip description",
    placement: "left",
  },
}

export const Right: Story = {
  args: {
    title: "11 Aug, 2026",
    description: "This is a tooltip description",
    placement: "right",
  },
}

export const DescriptionOnly: Story = {
  args: {
    description: "This is a tooltip description",
    placement: "top-center",
  },
}

export const LongDescription: Story = {
  args: {
    title: "11 Aug, 2026",
    description: "A longer tooltip description that wraps across multiple lines when needed",
    placement: "top-center",
  },
}
