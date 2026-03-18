import type { Meta, StoryObj } from "storybook"
import { View } from "react-native"

import { ChartPieSliceOutlineIcon } from "@/components/icons"

import { TabItem } from "./TabItem"

const tabIcon = (color: string) => <ChartPieSliceOutlineIcon size={20} color={color} />

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
    icon: tabIcon,
  },
}

export const BoxSelected: Story = {
  args: {
    type: "box",
    state: "selected",
    label: "Tab 1",
    icon: tabIcon,
  },
}

export const BoxDisabled: Story = {
  args: {
    type: "box",
    state: "disabled",
    label: "Tab 1",
    icon: tabIcon,
  },
}

export const LineDefault: Story = {
  args: {
    type: "line",
    state: "default",
    label: "Tab 1",
    icon: tabIcon,
  },
}

export const LineSelected: Story = {
  args: {
    type: "line",
    state: "selected",
    label: "Tab 1",
    icon: tabIcon,
  },
}

export const LineDisabled: Story = {
  args: {
    type: "line",
    state: "disabled",
    label: "Tab 1",
    icon: tabIcon,
  },
}
