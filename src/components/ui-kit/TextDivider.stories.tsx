import type { Meta, StoryObj } from "storybook"
import { View } from "react-native"

import { TextDivider } from "./TextDivider"

const meta: Meta<typeof TextDivider> = {
  title: "UI Kit/TextDivider",
  component: TextDivider,
  decorators: [
    (Story) => (
      <View className="bg-primary flex-1 p-4">
        <Story />
      </View>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof TextDivider>

export const TextLine: Story = {
  args: {
    type: "text-line",
    label: "Category",
  },
}

export const TextColored: Story = {
  args: {
    type: "text-colored",
    label: "Category",
  },
}

export const TextLineLong: Story = {
  args: {
    type: "text-line",
    label: "Recent Transactions",
  },
}

export const TextColoredLong: Story = {
  args: {
    type: "text-colored",
    label: "Recent Transactions",
  },
}
