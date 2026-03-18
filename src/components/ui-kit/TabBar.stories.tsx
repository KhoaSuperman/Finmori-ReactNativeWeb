import type { Meta, StoryObj } from "storybook"
import { View } from "react-native"

import { ChartPieSliceOutlineIcon } from "@/components/icons"

import { TabBar } from "./TabBar"

const tabIcon = (color: string) => <ChartPieSliceOutlineIcon size={20} color={color} />

const TABS_2 = [{ label: "Tab 1", icon: tabIcon }, { label: "Tab 2", icon: tabIcon }]
const TABS_3 = [{ label: "Tab 1", icon: tabIcon }, { label: "Tab 2", icon: tabIcon }, { label: "Tab 3", icon: tabIcon }]
const TABS_4 = [
  { label: "Tab 1", icon: tabIcon },
  { label: "Tab 2", icon: tabIcon },
  { label: "Tab 3", icon: tabIcon },
  { label: "Tab 4", icon: tabIcon },
]

const meta: Meta<typeof TabBar> = {
  title: "UI Kit/TabBar",
  component: TabBar,
  decorators: [
    (Story) => (
      <View className="flex-1 bg-primary p-4">
        <Story />
      </View>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof TabBar>

export const Box2Tabs: Story = {
  args: {
    type: "box",
    tabs: TABS_2,
    activeIndex: 0,
  },
}

export const Box3Tabs: Story = {
  args: {
    type: "box",
    tabs: TABS_3,
    activeIndex: 0,
  },
}

export const Box4Tabs: Story = {
  args: {
    type: "box",
    tabs: TABS_4,
    activeIndex: 0,
  },
}

export const Line2Tabs: Story = {
  args: {
    type: "line",
    tabs: TABS_2,
    activeIndex: 0,
  },
}

export const Line3Tabs: Story = {
  args: {
    type: "line",
    tabs: TABS_3,
    activeIndex: 0,
  },
}

export const Line4Tabs: Story = {
  args: {
    type: "line",
    tabs: TABS_4,
    activeIndex: 0,
  },
}
