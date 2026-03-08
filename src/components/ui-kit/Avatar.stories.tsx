import type { Meta, StoryObj } from "storybook"
import { View } from "react-native"

import { SearchIcon } from "@/components/icons"

import { Avatar } from "./Avatar"

const meta: Meta<typeof Avatar> = {
  title: "UI Kit/Avatar",
  component: Avatar,
  decorators: [
    (Story) => (
      <View className="flex-1 bg-primary p-4">
        <Story />
      </View>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof Avatar>

export const CircleImage: Story = {
  args: {
    form: "circle",
    variant: "image",
    source: { uri: "https://i.pravatar.cc/300?img=12" },
  },
}

export const SquareImage: Story = {
  args: {
    form: "square",
    variant: "image",
    source: { uri: "https://i.pravatar.cc/300?img=12" },
  },
}

export const CircleLetter: Story = {
  args: {
    form: "circle",
    variant: "letter",
    text: "JD",
  },
}

export const SquareLetter: Story = {
  args: {
    form: "square",
    variant: "letter",
    text: "JD",
  },
}

export const CircleIcon: Story = {
  args: {
    form: "circle",
    variant: "icon",
    icon: (props: { size: number; color: string }) => <SearchIcon {...props} />,
  },
}

export const SquareIcon: Story = {
  args: {
    form: "square",
    variant: "icon",
    icon: (props: { size: number; color: string }) => <SearchIcon {...props} />,
  },
}

export const LargeCircle: Story = {
  args: {
    form: "circle",
    variant: "image",
    source: { uri: "https://i.pravatar.cc/300?img=5" },
    size: 120,
  },
}

export const SmallSquare: Story = {
  args: {
    form: "square",
    variant: "letter",
    text: "AB",
    size: 48,
  },
}
