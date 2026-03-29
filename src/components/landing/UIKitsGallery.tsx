import { Image, Platform, Pressable, useWindowDimensions, View } from "react-native"

import { Typography } from "@/components/ui-kit/Typography"
import { PREVIEW_IMAGES } from "@/lib/preview-images"
import { ShowcaseCategory, ShowcaseItem, SHOWCASE_ITEMS } from "@/lib/showcase-items"

const CATEGORY_CONFIG: { category: ShowcaseCategory; label: string; description: string }[] = [
  { category: "foundation", label: "Foundation", description: "Colors, typography, spacing, and design tokens" },
  { category: "basic", label: "Basic Components", description: "Buttons, cards, avatars, and core UI elements" },
  { category: "form", label: "Forms & Inputs", description: "Input fields, tabs, filters, and interactive controls" },
  { category: "navigation", label: "Navigation", description: "Nav bars, bottom tabs, and indicators" },
  { category: "data", label: "Data Display", description: "Cards, charts, and data visualization components" },
  { category: "finance", label: "Finance Specific", description: "Payment cards, goals, charts, and finance UI" },
]

const COMPONENT_ITEMS = SHOWCASE_ITEMS.filter((item) => item.category !== "screen")

interface UIKitsGalleryProps {
  onItemPress: (item: ShowcaseItem) => void
}

function ComponentCard({
  item,
  cardWidth,
  onPress,
}: {
  item: ShowcaseItem
  cardWidth: number
  onPress: () => void
}) {
  const previewSource = item.previewImage ? PREVIEW_IMAGES[item.previewImage] : null
  const thumbHeight = cardWidth * 0.75

  return (
    <Pressable
      onPress={onPress}
      style={{ width: cardWidth }}
      className="overflow-hidden rounded-xl border border-tertiary bg-secondary active:opacity-70"
    >
      <View style={{ height: thumbHeight, backgroundColor: "#1e293b" }} className="overflow-hidden">
        {previewSource ? (
          <Image
            source={previewSource}
            style={{ width: "100%", height: "100%" }}
            resizeMode="cover"
          />
        ) : (
          <View className="flex-1 items-center justify-center px-2">
            <Typography size="caption" className="text-center text-tertiary" numberOfLines={2}>
              {item.title}
            </Typography>
          </View>
        )}
      </View>
      <View className="px-2 py-2">
        <Typography size="caption" weight="medium" className="text-primary" numberOfLines={1}>
          {item.title}
        </Typography>
      </View>
    </Pressable>
  )
}

export function UIKitsGallery({ onItemPress }: UIKitsGalleryProps) {
  const { width } = useWindowDimensions()
  const isDesktop = Platform.OS === "web" && width > 1024
  const isTablet = width >= 640

  const columns = isDesktop ? 6 : isTablet ? 5 : 4
  const gap = 8
  const containerPadding = 16
  const availableWidth = Math.min(width, 800) - containerPadding * 2
  const cardWidth = (availableWidth - gap * (columns - 1)) / columns

  return (
    <View className="gap-10 px-4 py-8">
      <View className="gap-1">
        <Typography size="h3" weight="bold" className="text-primary">
          UI Kit
        </Typography>
        <Typography size="caption" className="text-secondary">
          Components, tokens, and patterns
        </Typography>
      </View>

      {CATEGORY_CONFIG.map(({ category, label, description }) => {
        const items = COMPONENT_ITEMS.filter((item) => item.category === category)
        if (items.length === 0) return null

        return (
          <View key={category} className="gap-4">
            <View className="gap-0.5">
              <Typography size="body" weight="semibold" className="text-primary">
                {label}
              </Typography>
              <Typography size="caption" className="text-tertiary">
                {description}
              </Typography>
            </View>

            <View style={{ flexDirection: "row", flexWrap: "wrap", gap }}>
              {items.map((item) => (
                <ComponentCard
                  key={item.route}
                  item={item}
                  cardWidth={cardWidth}
                  onPress={() => onItemPress(item)}
                />
              ))}
            </View>
          </View>
        )
      })}
    </View>
  )
}
