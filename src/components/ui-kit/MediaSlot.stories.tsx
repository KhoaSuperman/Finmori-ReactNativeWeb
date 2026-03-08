import type { Meta, StoryObj } from "storybook"
import { View } from "react-native"

import { SearchIcon } from "@/components/icons"

import { MediaSlot } from "./MediaSlot"

const meta: Meta<typeof MediaSlot> = {
  title: "UI Kit/MediaSlot",
  component: MediaSlot,
  decorators: [
    (Story) => (
      <View className="flex-1 bg-primary p-4">
        <Story />
      </View>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof MediaSlot>

export const ImageVariant: Story = {
  args: {
    variant: "image",
    source: { uri: "https://i.pravatar.cc/150?img=12" },
    size: 74,
  },
}

export const LetterVariant: Story = {
  args: {
    variant: "letter",
    text: "JD",
    size: 74,
  },
}

export const IconVariant: Story = {
  args: {
    variant: "icon",
    icon: (props: { size: number; color: string }) => <SearchIcon {...props} />,
    size: 74,
  },
}

export const SmallSize: Story = {
  args: {
    variant: "letter",
    text: "AB",
    size: 40,
  },
}

export const LargeSize: Story = {
  args: {
    variant: "letter",
    text: "XY",
    size: 120,
  },
}
