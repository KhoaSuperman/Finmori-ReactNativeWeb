import type { Meta, StoryObj } from "storybook"
import { View } from "react-native"

import {
  IllustrativeBusinessIcon,
  IllustrativeEntertainmentIcon,
  IllustrativeGroceryIcon,
  IllustrativeHealthIcon,
  IllustrativeMealIcon,
  IllustrativeMoreIcon,
  IllustrativeRentIcon,
  IllustrativeShoppingIcon,
  IllustrativeTransportIcon,
} from "@/components/icons"

import { CategoryBreakdownItem } from "./CategoryBreakdownItem"

const meta: Meta<typeof CategoryBreakdownItem> = {
  title: "UI Kit/CategoryBreakdownItem",
  component: CategoryBreakdownItem,
  decorators: [
    (Story) => (
      <View className="bg-primary flex-1 justify-center p-4">
        <Story />
      </View>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof CategoryBreakdownItem>

export const Default: Story = {
  args: {
    icon: <IllustrativeBusinessIcon size={24} />,
    percentage: "46%",
    categoryName: "Essentials",
    amount: "$650,000",
    showDivider: true,
  },
}

export const NoDivider: Story = {
  args: {
    icon: <IllustrativeGroceryIcon size={24} />,
    percentage: "22%",
    categoryName: "Groceries",
    amount: "$310,000",
    showDivider: false,
  },
}

export const List: Story = {
  render: () => (
    <View className="w-full">
      <CategoryBreakdownItem
        icon={<IllustrativeBusinessIcon size={24} />}
        percentage="46%"
        categoryName="Essentials"
        amount="$650,000"
      />
      <CategoryBreakdownItem
        icon={<IllustrativeGroceryIcon size={24} />}
        percentage="22%"
        categoryName="Groceries"
        amount="$310,000"
      />
      <CategoryBreakdownItem
        icon={<IllustrativeMealIcon size={24} />}
        percentage="12%"
        categoryName="Meals"
        amount="$170,000"
      />
      <CategoryBreakdownItem
        icon={<IllustrativeEntertainmentIcon size={24} />}
        percentage="8%"
        categoryName="Entertainment"
        amount="$113,000"
      />
      <CategoryBreakdownItem
        icon={<IllustrativeTransportIcon size={24} />}
        percentage="5%"
        categoryName="Transport"
        amount="$70,500"
      />
      <CategoryBreakdownItem
        icon={<IllustrativeShoppingIcon size={24} />}
        percentage="4%"
        categoryName="Shopping"
        amount="$56,400"
      />
      <CategoryBreakdownItem
        icon={<IllustrativeHealthIcon size={24} />}
        percentage="2%"
        categoryName="Health"
        amount="$28,200"
      />
      <CategoryBreakdownItem
        icon={<IllustrativeRentIcon size={24} />}
        percentage="1%"
        categoryName="Rent"
        amount="$14,100"
        showDivider={false}
      />
    </View>
  ),
}

export const WithMoreCategory: Story = {
  args: {
    icon: <IllustrativeMoreIcon size={24} />,
    percentage: "3%",
    categoryName: "Others",
    amount: "$42,300",
    showDivider: false,
  },
}
