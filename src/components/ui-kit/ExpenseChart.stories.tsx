import type { Meta, StoryObj } from "storybook"
import React from "react"
import { View } from "react-native"

import {
  IllustrativeEntertainmentIcon,
  IllustrativeGroceryIcon,
  IllustrativeMealIcon,
  IllustrativeRentIcon,
  IllustrativeShoppingIcon,
} from "@/components/icons"

import { ExpenseChart, DEFAULT_CATEGORIES, type ExpenseCategory } from "./ExpenseChart"

const meta: Meta<typeof ExpenseChart> = {
  title: "UI Kit/ExpenseChart",
  component: ExpenseChart,
  decorators: [
    (Story) => (
      <View className="flex-1 items-center justify-center bg-primary p-8">
        <Story />
      </View>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof ExpenseChart>

export const Default: Story = {
  args: {
    categories: DEFAULT_CATEGORIES,
    size: 240,
  },
}

export const Large: Story = {
  args: {
    categories: DEFAULT_CATEGORIES,
    size: 320,
  },
}

export const Small: Story = {
  args: {
    categories: DEFAULT_CATEGORIES,
    size: 180,
  },
}

const FEWER_CATEGORIES: ExpenseCategory[] = [
  {
    id: "meals",
    label: "Meals",
    value: 30,
    gradient: ["#ff7a00", "#ffd439"],
    icon: (props) => <IllustrativeMealIcon {...props} />,
  },
  {
    id: "groceries",
    label: "Groceries",
    value: 25,
    gradient: ["#f49062", "#fd371f"],
    icon: (props) => <IllustrativeGroceryIcon {...props} />,
  },
  {
    id: "rent",
    label: "Rent",
    value: 20,
    gradient: ["#ffd3a5", "#fd6585"],
    icon: (props) => <IllustrativeRentIcon {...props} />,
  },
  {
    id: "shopping",
    label: "Shopping",
    value: 15,
    gradient: ["#ffd1ff", "#fad0c4"],
    icon: (props) => <IllustrativeShoppingIcon {...props} />,
  },
  {
    id: "fun",
    label: "Fun",
    value: 10,
    gradient: ["#ce9ffc", "#7367f0"],
    icon: (props) => <IllustrativeEntertainmentIcon {...props} />,
  },
]

export const FewerCategories: Story = {
  args: {
    categories: FEWER_CATEGORIES,
    size: 240,
  },
}
