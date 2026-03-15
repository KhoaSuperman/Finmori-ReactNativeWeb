import type { Meta, StoryObj } from "storybook"
import { View } from "react-native"

import { HomeIndicatorBar } from "./HomeIndicatorBar"

const meta: Meta<typeof HomeIndicatorBar> = {
  title: "UI Kit/HomeIndicatorBar",
  component: HomeIndicatorBar,
  decorators: [
    (Story) => (
      <View className="flex-1 justify-end bg-primary">
        <Story />
      </View>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof HomeIndicatorBar>

export const Default: Story = {
  args: {
    type: "default",
  },
}

export const OneButton: Story = {
  args: {
    type: "1-button",
    primaryLabel: "Continue",
  },
}

export const TwoButtonsHorizontal: Story = {
  args: {
    type: "2-buttons-hor",
    primaryLabel: "Continue",
    secondaryLabel: "Cancel",
  },
}

export const TwoButtonsVertical: Story = {
  args: {
    type: "2-buttons-ver",
    primaryLabel: "Continue",
    secondaryLabel: "Cancel",
  },
}

export const ThreeButtons: Story = {
  args: {
    type: "3-buttons",
    primaryLabel: "Continue",
    secondaryLabel: "Cancel",
    tertiaryLabel: "Cancel",
  },
}

export const ActionSheet: Story = {
  args: {
    type: "action-sheet",
    editLabel: "Chỉnh sửa",
    deleteLabel: "Xóa bữa ăn",
    cancelLabel: "Thoát",
  },
}
