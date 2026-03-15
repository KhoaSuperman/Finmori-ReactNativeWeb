import type { Meta, StoryObj } from "storybook"
import { View } from "react-native"

import {
  IllustrativeGroceryIcon,
  IllustrativeMealIcon,
  IllustrativeEntertainmentIcon,
  IllustrativeTransportIcon,
  IllustrativeRentIcon,
  IllustrativeShoppingIcon,
  IllustrativeHealthIcon,
  IllustrativeMoreIcon,
} from "@/components/icons"

import { CardMenuItem } from "./CardMenuItem"

const meta: Meta<typeof CardMenuItem> = {
  title: "UI Kit/CardMenuItem",
  component: CardMenuItem,
  decorators: [
    (Story) => (
      <View className="bg-primary flex-1 items-center justify-center p-4">
        <Story />
      </View>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof CardMenuItem>

export const Default: Story = {
  args: {
    label: "Groceries",
    icon: <IllustrativeGroceryIcon size={56} />,
    selected: false,
  },
}

export const Selected: Story = {
  args: {
    label: "Groceries",
    icon: <IllustrativeGroceryIcon size={56} />,
    selected: true,
  },
}

export const Meal: Story = {
  args: {
    label: "Meal",
    icon: <IllustrativeMealIcon size={40} />,
    selected: false,
  },
}

export const Entertainment: Story = {
  args: {
    label: "Entertainment",
    icon: <IllustrativeEntertainmentIcon size={40} />,
    selected: false,
  },
}

export const Transport: Story = {
  args: {
    label: "Transport",
    icon: <IllustrativeTransportIcon size={40} />,
    selected: false,
  },
}

export const Rent: Story = {
  args: {
    label: "Rent",
    icon: <IllustrativeRentIcon size={56} />,
    selected: false,
  },
}

export const Shopping: Story = {
  args: {
    label: "Shopping",
    icon: <IllustrativeShoppingIcon size={56} />,
    selected: false,
  },
}

export const Health: Story = {
  args: {
    label: "Health",
    icon: <IllustrativeHealthIcon size={56} />,
    selected: false,
  },
}

export const More: Story = {
  args: {
    label: "More",
    icon: <IllustrativeMoreIcon size={40} />,
    selected: false,
  },
}
