import type { Meta, StoryObj } from "storybook"
import { View } from "react-native"

import { NavigationBar } from "./NavigationBar"

const meta: Meta<typeof NavigationBar> = {
  title: "UI Kit/NavigationBar",
  component: NavigationBar,
  decorators: [
    (Story) => (
      <View className="bg-primary flex-1 p-4">
        <Story />
      </View>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof NavigationBar>

export const Blank: Story = {
  args: {
    variant: "blank",
  },
}

export const WithTitle: Story = {
  args: {
    variant: "with-title",
    title: "Settings",
    subtitle: "Manage your account",
  },
}

export const WithTitleOnly: Story = {
  args: {
    variant: "with-title",
    title: "Profile",
  },
}

export const ProgressBar: Story = {
  args: {
    variant: "progress-bar",
    progress: 35,
  },
}

export const Dropdown: Story = {
  args: {
    variant: "dropdown",
    title: "All Accounts",
  },
}

export const WithSelector: Story = {
  args: {
    variant: "with-selector",
    title: "Transactions",
    selectorLabel: "March 2026",
  },
}
