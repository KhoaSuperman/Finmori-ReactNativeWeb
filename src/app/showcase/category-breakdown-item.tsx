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
import { ShowcasePage } from "@/components/showcase-page"
import { CategoryBreakdownItem } from "@/components/ui-kit/CategoryBreakdownItem"
import { Typography } from "@/components/ui-kit/Typography"

const SAMPLE_CATEGORIES = [
  {
    id: "essentials",
    icon: <IllustrativeBusinessIcon size={24} />,
    percentage: "46%",
    categoryName: "Essentials",
    amount: "$650,000",
  },
  {
    id: "groceries",
    icon: <IllustrativeGroceryIcon size={24} />,
    percentage: "22%",
    categoryName: "Groceries",
    amount: "$310,000",
  },
  {
    id: "meals",
    icon: <IllustrativeMealIcon size={24} />,
    percentage: "12%",
    categoryName: "Meals",
    amount: "$170,000",
  },
  {
    id: "entertainment",
    icon: <IllustrativeEntertainmentIcon size={24} />,
    percentage: "8%",
    categoryName: "Entertainment",
    amount: "$113,000",
  },
  {
    id: "transport",
    icon: <IllustrativeTransportIcon size={24} />,
    percentage: "5%",
    categoryName: "Transport",
    amount: "$70,500",
  },
  {
    id: "shopping",
    icon: <IllustrativeShoppingIcon size={24} />,
    percentage: "4%",
    categoryName: "Shopping",
    amount: "$56,400",
  },
  {
    id: "health",
    icon: <IllustrativeHealthIcon size={24} />,
    percentage: "2%",
    categoryName: "Health",
    amount: "$28,200",
  },
  {
    id: "rent",
    icon: <IllustrativeRentIcon size={24} />,
    percentage: "1%",
    categoryName: "Rent",
    amount: "$14,100",
  },
]

export default function CategoryBreakdownItemShowcase() {
  return (
    <ShowcasePage
      title="Category Breakdown Item"
      description="A list row showing a category icon, percentage share, category name, and amount — used in expense breakdown views."
    >
      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          Single Item
        </Typography>
        <Typography size="body-small" className="px-1 text-tertiary">
          Default item with icon, percentage, category name, amount, and divider.
        </Typography>
        <View>
          <CategoryBreakdownItem
            icon={<IllustrativeBusinessIcon size={24} />}
            percentage="46%"
            categoryName="Essentials"
            amount="$650,000"
          />
        </View>
      </View>

      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          Full Breakdown List
        </Typography>
        <Typography size="body-small" className="px-1 text-tertiary">
          All categories stacked with dividers; the last item omits the divider.
        </Typography>
        <View>
          {SAMPLE_CATEGORIES.map((cat, index) => (
            <CategoryBreakdownItem
              key={cat.id}
              icon={cat.icon}
              percentage={cat.percentage}
              categoryName={cat.categoryName}
              amount={cat.amount}
              showDivider={index < SAMPLE_CATEGORIES.length - 1}
            />
          ))}
        </View>
      </View>

      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          "Others" Category
        </Typography>
        <Typography size="body-small" className="px-1 text-tertiary">
          Uses the illustrative "more" icon for catch-all categories.
        </Typography>
        <View>
          <CategoryBreakdownItem
            icon={<IllustrativeMoreIcon size={24} />}
            percentage="3%"
            categoryName="Others"
            amount="$42,300"
            showDivider={false}
          />
        </View>
      </View>
    </ShowcasePage>
  )
}
