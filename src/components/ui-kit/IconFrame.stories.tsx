import type { Meta, StoryObj } from "storybook"
import { View } from "react-native"

import { SearchIcon } from "@/components/icons"

import { IconFrame } from "./IconFrame"

const meta: Meta<typeof IconFrame> = {
  title: "UI Kit/IconFrame",
  component: IconFrame,
  decorators: [
    (Story) => (
      <View className="bg-surface flex-1 items-center justify-center p-4">
        <Story />
      </View>
    ),
  ],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
}

export default meta

type Story = StoryObj<typeof IconFrame>

export const Default: Story = {
  args: {
    icon: (props) => <SearchIcon {...props} />,
    size: "md",
  },
}

export const Small: Story = {
  args: {
    icon: (props) => <SearchIcon {...props} />,
    size: "sm",
  },
}

export const Large: Story = {
  args: {
    icon: (props) => <SearchIcon {...props} />,
    size: "lg",
  },
}

export const AllSizes: Story = {
  render: () => (
    <View className="flex-row items-center gap-4">
      <IconFrame icon={(props) => <SearchIcon {...props} />} size="sm" />
      <IconFrame icon={(props) => <SearchIcon {...props} />} size="md" />
      <IconFrame icon={(props) => <SearchIcon {...props} />} size="lg" />
    </View>
  ),
}
