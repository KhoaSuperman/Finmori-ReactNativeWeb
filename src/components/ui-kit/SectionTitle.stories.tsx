import type { Meta, StoryObj } from "storybook"
import { View } from "react-native"

import { SectionTitle } from "./SectionTitle"

const meta: Meta<typeof SectionTitle> = {
  title: "UI Kit/SectionTitle",
  component: SectionTitle,
  decorators: [
    (Story) => (
      <View className="bg-primary flex-1 p-4">
        <Story />
      </View>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof SectionTitle>

export const Standard: Story = {
  args: {
    type: "standard",
    title: "Category",
  },
}

export const StandardWithAction: Story = {
  args: {
    type: "standard",
    title: "Category",
    actionLabel: "See all",
  },
}

export const Caplock: Story = {
  args: {
    type: "caplock",
    title: "Category",
  },
}

export const CaplockWithAction: Story = {
  args: {
    type: "caplock",
    title: "Category",
    actionLabel: "See all",
  },
}
