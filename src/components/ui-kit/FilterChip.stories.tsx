import type { Meta, StoryObj } from "storybook"
import { View } from "react-native"

import { FilterChip } from "./FilterChip"

const meta: Meta<typeof FilterChip> = {
  title: "UI Kit/FilterChip",
  component: FilterChip,
  decorators: [
    (Story) => (
      <View className="bg-primary flex-1 p-4">
        <Story />
      </View>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof FilterChip>

export const LabelUnselected: Story = {
  args: {
    type: "label",
    selected: false,
    label: "Label",
  },
}

export const LabelSelected: Story = {
  args: {
    type: "label",
    selected: true,
    label: "Label",
  },
}

export const IconUnselected: Story = {
  args: {
    type: "icon",
    selected: false,
  },
}

export const IconSelected: Story = {
  args: {
    type: "icon",
    selected: true,
  },
}
