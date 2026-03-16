import type { Meta, StoryObj } from "storybook"
import { View } from "react-native"

import { SearchField } from "./SearchField"

const meta: Meta<typeof SearchField> = {
  title: "UI Kit/SearchField",
  component: SearchField,
  decorators: [
    (Story) => (
      <View className="flex-1 bg-primary p-6">
        <Story />
      </View>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof SearchField>

export const Default: Story = {
  args: {
    value: "",
    placeholder: "Search",
    showCancel: false,
  },
}

export const FocussedNoCancel: Story = {
  args: {
    value: "",
    placeholder: "Search",
    showCancel: false,
    autoFocus: true,
  },
}

export const FocussedWithCancel: Story = {
  args: {
    value: "",
    placeholder: "Search",
    showCancel: true,
    autoFocus: true,
  },
}

export const TypingWithCancel: Story = {
  args: {
    value: "Type something",
    placeholder: "Search",
    showCancel: true,
    autoFocus: true,
  },
}

export const TypingNoCancel: Story = {
  args: {
    value: "Type something",
    placeholder: "Search",
    showCancel: false,
    autoFocus: true,
  },
}

export const ActiveWithCancel: Story = {
  args: {
    value: "Type something",
    placeholder: "Search",
    showCancel: true,
  },
}

export const ActiveNoCancel: Story = {
  args: {
    value: "Type something",
    placeholder: "Search",
    showCancel: false,
  },
}
