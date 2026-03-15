import type { Meta, StoryObj } from "storybook"
import { View } from "react-native"

import { TabBar } from "./TabBar"

const TABS_2 = [{ label: "Tab 1" }, { label: "Tab 2" }]
const TABS_3 = [{ label: "Tab 1" }, { label: "Tab 2" }, { label: "Tab 3" }]
const TABS_4 = [{ label: "Tab 1" }, { label: "Tab 2" }, { label: "Tab 3" }, { label: "Tab 4" }]

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
