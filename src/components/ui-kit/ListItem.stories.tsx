import type { Meta, StoryObj } from "storybook"
import { View } from "react-native"

import { CalendarDotsIcon } from "@/components/icons"

import { ListItem } from "./ListItem"

const meta: Meta<typeof ListItem> = {
  title: "UI Kit/ListItem",
  component: ListItem,
  decorators: [
    (Story) => (
      <View className="flex-1 bg-primary p-4">
        <Story />
      </View>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof ListItem>

export const Default: Story = {
  args: {
    label: "Action",
    value: "String",
    showChevron: true,
  },
}

export const WithIcon: Story = {
  args: {
    label: "Action",
    value: "String",
    icon: <CalendarDotsIcon size={24} color="#363F72" />,
    showChevron: true,
  },
}

export const WithHelpText: Story = {
  args: {
    label: "Action",
    helpText: "Help text",
    value: "String",
    icon: <CalendarDotsIcon size={24} color="#363F72" />,
    showChevron: true,
  },
}

export const NoChevron: Story = {
  args: {
    label: "Action",
    value: "String",
    showChevron: false,
  },
}

export const LabelOnly: Story = {
  args: {
    label: "Action",
    showChevron: true,
  },
}
