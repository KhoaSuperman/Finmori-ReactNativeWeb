import type { Meta, StoryObj } from "storybook"
import { View } from "react-native"

import { TabItem } from "./TabItem"

const meta: Meta<typeof TabItem> = {
  title: "UI Kit/TabItem",
  component: TabItem,
  decorators: [
    (Story) => (
      <View className="flex-1 bg-secondary p-4">
        <Story />
      </View>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof TabItem>

export const BoxDefault: Story = {
  args: {
    type: "box",
    state: "default",
    label: "Tab 1",
  },
}

export const BoxSelected: Story = {
  args: {
    type: "box",
    state: "selected",
    label: "Tab 1",
  },
}

export const BoxDisabled: Story = {
  args: {
    type: "box",
    state: "disabled",
    label: "Tab 1",
  },
}

export const LineDefault: Story = {
  args: {
    type: "line",
    state: "default",
    label: "Tab 1",
  },
}

export const LineSelected: Story = {
  args: {
    type: "line",
    state: "selected",
    label: "Tab 1",
  },
}

export const LineDisabled: Story = {
  args: {
    type: "line",
    state: "disabled",
    label: "Tab 1",
  },
}
