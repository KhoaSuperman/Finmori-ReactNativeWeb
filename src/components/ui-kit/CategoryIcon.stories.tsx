import type { Meta, StoryObj } from "storybook"
import { View } from "react-native"

import {
  IllustrativeBusinessIcon,
  IllustrativeGroceryIcon,
  IllustrativeMealIcon,
  IllustrativeEntertainmentIcon,
  IllustrativeTransportIcon,
  IllustrativeRentIcon,
  IllustrativeShoppingIcon,
  IllustrativeHealthIcon,
  IllustrativeMoreIcon,
} from "@/components/icons"

import { CategoryIcon } from "./CategoryIcon"

const meta: Meta<typeof CategoryIcon> = {
  title: "UI Kit/CategoryIcon",
  component: CategoryIcon,
  decorators: [
    (Story) => (
      <View className="bg-surface flex-1 items-center justify-center p-4">
        <Story />
      </View>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof CategoryIcon>

export const Business: Story = {
  args: {
    icon: <IllustrativeBusinessIcon size={24} />,
  },
}

export const Grocery: Story = {
  args: {
    icon: <IllustrativeGroceryIcon size={24} />,
  },
}

export const AllCategories: Story = {
  render: () => (
    <View className="flex-row flex-wrap gap-3">
      <CategoryIcon icon={<IllustrativeBusinessIcon size={24} />} />
      <CategoryIcon icon={<IllustrativeGroceryIcon size={24} />} />
      <CategoryIcon icon={<IllustrativeMealIcon size={24} />} />
      <CategoryIcon icon={<IllustrativeEntertainmentIcon size={24} />} />
      <CategoryIcon icon={<IllustrativeTransportIcon size={24} />} />
      <CategoryIcon icon={<IllustrativeRentIcon size={24} />} />
      <CategoryIcon icon={<IllustrativeShoppingIcon size={24} />} />
      <CategoryIcon icon={<IllustrativeHealthIcon size={24} />} />
      <CategoryIcon icon={<IllustrativeMoreIcon size={24} />} />
    </View>
  ),
}
