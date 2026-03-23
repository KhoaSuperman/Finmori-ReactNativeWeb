import type { Meta, StoryObj } from "storybook"
import { View } from "react-native"

import { Tag } from "./Tag"

const meta: Meta<typeof Tag> = {
  title: "UI Kit/Tag",
  component: Tag,
  decorators: [
    (Story) => (
      <View className="bg-primary flex-1 p-4">
        <Story />
      </View>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof Tag>

export const Black: Story = {
  args: { color: "black", label: "Sample" },
}

export const Red: Story = {
  args: { color: "red", label: "Sample" },
}

export const Yellow: Story = {
  args: { color: "yellow", label: "Sample" },
}

export const Green: Story = {
  args: { color: "green", label: "Sample" },
}

export const Blue: Story = {
  args: { color: "blue", label: "Sample" },
}

export const Purple: Story = {
  args: { color: "purple", label: "Sample" },
}

export const Cyan: Story = {
  args: { color: "cyan", label: "Sample" },
}

export const Pink: Story = {
  args: { color: "pink", label: "Sample" },
}

export const WithDismiss: Story = {
  args: { color: "blue", label: "Sample", onDismiss: () => {} },
}

export const AllColors: Story = {
  render: () => (
    <View className="flex-row flex-wrap gap-md">
      <Tag color="black" label="Black" />
      <Tag color="red" label="Red" />
      <Tag color="yellow" label="Yellow" />
      <Tag color="green" label="Green" />
      <Tag color="blue" label="Blue" />
      <Tag color="purple" label="Purple" />
      <Tag color="cyan" label="Cyan" />
      <Tag color="pink" label="Pink" />
    </View>
  ),
}

export const AllColorsWithDismiss: Story = {
  render: () => (
    <View className="flex-row flex-wrap gap-md">
      <Tag color="black" label="Black" onDismiss={() => {}} />
      <Tag color="red" label="Red" onDismiss={() => {}} />
      <Tag color="yellow" label="Yellow" onDismiss={() => {}} />
      <Tag color="green" label="Green" onDismiss={() => {}} />
      <Tag color="blue" label="Blue" onDismiss={() => {}} />
      <Tag color="purple" label="Purple" onDismiss={() => {}} />
      <Tag color="cyan" label="Cyan" onDismiss={() => {}} />
      <Tag color="pink" label="Pink" onDismiss={() => {}} />
    </View>
  ),
}
