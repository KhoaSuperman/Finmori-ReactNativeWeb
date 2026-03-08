import type { Meta, StoryObj } from "storybook"
import { View } from "react-native"

import { BottomNavBar } from "./BottomNavBar"

const meta: Meta<typeof BottomNavBar> = {
  title: "UI Kit/BottomNavBar",
  component: BottomNavBar,
  decorators: [
    (Story) => (
      <View className="flex-1 justify-end bg-primary p-4">
        <Story />
      </View>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof BottomNavBar>

export const Home: Story = {
  args: {
    activeTab: "home",
  },
}

export const History: Story = {
  args: {
    activeTab: "history",
  },
}

export const Analytic: Story = {
  args: {
    activeTab: "analytic",
  },
}

export const Profile: Story = {
  args: {
    activeTab: "profile",
  },
}
