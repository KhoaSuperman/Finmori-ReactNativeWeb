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
import { CategoryIcon } from "@/components/ui-kit/CategoryIcon"
import { Typography } from "@/components/ui-kit/Typography"

const CATEGORIES = [
  { id: "business", label: "Business", icon: <IllustrativeBusinessIcon size={24} /> },
  { id: "groceries", label: "Groceries", icon: <IllustrativeGroceryIcon size={24} /> },
  { id: "meal", label: "Meal", icon: <IllustrativeMealIcon size={24} /> },
  { id: "entertainment", label: "Entertainment", icon: <IllustrativeEntertainmentIcon size={24} /> },
  { id: "transport", label: "Transport", icon: <IllustrativeTransportIcon size={24} /> },
  { id: "rent", label: "Rent", icon: <IllustrativeRentIcon size={24} /> },
  { id: "shopping", label: "Shopping", icon: <IllustrativeShoppingIcon size={24} /> },
  { id: "health", label: "Health", icon: <IllustrativeHealthIcon size={24} /> },
  { id: "more", label: "More", icon: <IllustrativeMoreIcon size={24} /> },
]

export default function CategoryIconShowcase() {
  return (
    <ShowcasePage
      title="Category Icon"
      description="A 32×32 circular container with a white background and subtle border, used to display illustrative category icons in transaction lists and category pickers."
    >
      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          Default
        </Typography>
        <Typography size="body-small" className="px-1 text-tertiary">
          32px circular frame with bg-primary fill and border-secondary stroke.
        </Typography>
        <View className="flex-row items-center gap-4">
          <CategoryIcon icon={<IllustrativeBusinessIcon size={24} />} />
          <View className="gap-0.5">
            <Typography size="body-small" weight="semibold">Category Icon (32px)</Typography>
            <Typography size="caption" className="text-tertiary">24px illustrative icon</Typography>
          </View>
        </View>
      </View>

      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          All Category Icons
        </Typography>
        <Typography size="body-small" className="px-1 text-tertiary">
          Every illustrative icon rendered at 24px inside the category frame.
        </Typography>
        <View className="flex-row flex-wrap gap-3">
          {CATEGORIES.map((cat) => (
            <View key={cat.id} className="items-center gap-xs">
              <CategoryIcon icon={cat.icon} />
              <Typography size="tiny" className="text-tertiary">
                {cat.label}
              </Typography>
            </View>
          ))}
        </View>
      </View>

      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          In Context
        </Typography>
        <Typography size="body-small" className="px-1 text-tertiary">
          Category icon paired with a label, as seen in transaction list rows.
        </Typography>
        <View className="gap-3">
          {CATEGORIES.slice(0, 4).map((cat) => (
            <View key={cat.id} className="flex-row items-center gap-3">
              <CategoryIcon icon={cat.icon} />
              <Typography size="body-small" weight="medium">
                {cat.label}
              </Typography>
            </View>
          ))}
        </View>
      </View>
    </ShowcasePage>
  )
}
