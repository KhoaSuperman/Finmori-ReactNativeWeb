import React from "react"
import { View } from "react-native"

import {
  IllustrativeEntertainmentIcon,
  IllustrativeGroceryIcon,
  IllustrativeMealIcon,
  IllustrativeRentIcon,
  IllustrativeShoppingIcon,
} from "@/components/icons"
import { ShowcasePage } from "@/components/showcase-page"
import { DEFAULT_CATEGORIES, ExpenseChart, type ExpenseCategory } from "@/components/ui-kit/ExpenseChart"
import { Typography } from "@/components/ui-kit/Typography"

const FEWER_CATEGORIES: ExpenseCategory[] = [
  {
    id: "meals",
    label: "Meals",
    value: 30,
    gradient: ["#ff7a00", "#ffd439"],
    icon: <IllustrativeMealIcon />,
  },
  {
    id: "groceries",
    label: "Groceries",
    value: 25,
    gradient: ["#f49062", "#fd371f"],
    icon: <IllustrativeGroceryIcon />,
  },
  {
    id: "rent",
    label: "Rent",
    value: 20,
    gradient: ["#ffd3a5", "#fd6585"],
    icon: <IllustrativeRentIcon />,
  },
  {
    id: "shopping",
    label: "Shopping",
    value: 15,
    gradient: ["#ffd1ff", "#fad0c4"],
    icon: <IllustrativeShoppingIcon />,
  },
  {
    id: "fun",
    label: "Fun",
    value: 10,
    gradient: ["#ce9ffc", "#7367f0"],
    icon: <IllustrativeEntertainmentIcon />,
  },
]

export default function ExpenseChartShowcase() {
  return (
    <ShowcasePage
      title="Expense Chart"
      description="Donut chart showing expense breakdown by category with gradient arcs, indicator lines, and illustrative category icons."
    >
      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          Default (7 Categories)
        </Typography>
        <Typography size="body-small" className="px-1 text-tertiary">
          Full expense breakdown with all default categories: Meals, Groceries, Rent, Shopping, Fun, Transport, and
          Health.
        </Typography>
        <View className="items-center rounded-2xl border border-secondary bg-primary py-6">
          <ExpenseChart categories={DEFAULT_CATEGORIES} />
        </View>
      </View>

      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          Large Size
        </Typography>
        <Typography size="body-small" className="px-1 text-tertiary">
          Scaled up to 320px for larger displays.
        </Typography>
        <View className="items-center rounded-2xl border border-secondary bg-primary py-6">
          <ExpenseChart categories={DEFAULT_CATEGORIES} size={320} />
        </View>
      </View>

      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          Fewer Categories
        </Typography>
        <Typography size="body-small" className="px-1 text-tertiary">
          Custom data with 5 categories.
        </Typography>
        <View className="items-center rounded-2xl border border-secondary bg-primary py-6">
          <ExpenseChart categories={FEWER_CATEGORIES} />
        </View>
      </View>

      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          Small Size
        </Typography>
        <Typography size="body-small" className="px-1 text-tertiary">
          Compact 180px version for tight layouts.
        </Typography>
        <View className="items-center rounded-2xl border border-secondary bg-primary py-6">
          <ExpenseChart categories={DEFAULT_CATEGORIES} size={180} />
        </View>
      </View>
    </ShowcasePage>
  )
}
