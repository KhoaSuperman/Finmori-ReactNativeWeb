import React, { useState } from "react"
import { View } from "react-native"

import {
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
import { CardMenuItem } from "@/components/ui-kit/CardMenuItem"
import { Typography } from "@/components/ui-kit/Typography"

const CATEGORIES = [
  { id: "groceries", label: "Groceries", icon: <IllustrativeGroceryIcon size={56} /> },
  { id: "meal", label: "Meal", icon: <IllustrativeMealIcon size={56} /> },
  { id: "entertainment", label: "Entertainment", icon: <IllustrativeEntertainmentIcon size={56} /> },
  { id: "transport", label: "Transport", icon: <IllustrativeTransportIcon size={56} /> },
  { id: "rent", label: "Rent", icon: <IllustrativeRentIcon size={56} /> },
  { id: "shopping", label: "Shopping", icon: <IllustrativeShoppingIcon size={56} /> },
  { id: "health", label: "Health", icon: <IllustrativeHealthIcon size={56} /> },
  { id: "more", label: "More", icon: <IllustrativeMoreIcon size={56} /> },
]

export default function CardMenuItemShowcase() {
  const [selectedId, setSelectedId] = useState<string>("groceries")

  return (
    <ShowcasePage
      title="Card Menu Item"
      description="Category menu item with illustrative icon, label, default and selected states."
    >
      {/* States */}
      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          States
        </Typography>
        <Typography size="body-small" className="px-1 text-tertiary">
          Default and selected variants.
        </Typography>
        <View className="flex-row gap-4">
          <CardMenuItem label="Groceries" icon={<IllustrativeGroceryIcon size={56} />} selected={false} />
          <CardMenuItem label="Groceries" icon={<IllustrativeGroceryIcon size={56} />} selected={true} />
        </View>
      </View>

      {/* All Icons */}
      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          All Category Icons
        </Typography>
        <Typography size="body-small" className="px-1 text-tertiary">
          Full set of illustrative category icons.
        </Typography>
        <View className="flex-row flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <CardMenuItem key={cat.id} label={cat.label} icon={cat.icon} selected={false} />
          ))}
        </View>
      </View>

      {/* Interactive */}
      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          Interactive
        </Typography>
        <Typography size="body-small" className="px-1 text-tertiary">
          Tap a category to select it. Only one item is active at a time.
        </Typography>
        <View className="flex-row flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <CardMenuItem
              key={cat.id}
              label={cat.label}
              icon={cat.icon}
              selected={selectedId === cat.id}
              onPress={() => setSelectedId(cat.id)}
            />
          ))}
        </View>
      </View>
    </ShowcasePage>
  )
}
