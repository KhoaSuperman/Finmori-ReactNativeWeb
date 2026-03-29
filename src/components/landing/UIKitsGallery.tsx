import { Image, Platform, Pressable, useWindowDimensions, View } from "react-native"

import { Typography } from "@/components/ui-kit/Typography"
import { PREVIEW_IMAGES } from "@/lib/preview-images"
import { ShowcaseCategory, ShowcaseItem, SHOWCASE_ITEMS } from "@/lib/showcase-items"

type CategoryConfig = {
  category: ShowcaseCategory
  label: string
  description: string
  icon: string
  accentColor: string
}

const CATEGORY_CONFIG: CategoryConfig[] = [
  {
    category: "foundation",
    label: "Foundation",
    description: "Colors, typography, spacing, and design tokens",
    icon: "\u25C6",
    accentColor: "#8B5CF6",
  },
  {
    category: "basic",
    label: "Basic Components",
    description: "Buttons, cards, avatars, and core UI elements",
    icon: "\u25A0",
    accentColor: "#2F61F3",
  },
  {
    category: "form",
    label: "Forms & Inputs",
    description: "Input fields, tabs, filters, and interactive controls",
    icon: "\u2630",
    accentColor: "#F59E0B",
  },
  {
    category: "navigation",
    label: "Navigation",
    description: "Nav bars, bottom tabs, and indicators",
    icon: "\u2194",
    accentColor: "#10B981",
  },
  {
    category: "data",
    label: "Data Display",
    description: "Cards, charts, and data visualization components",
    icon: "\u25CF",
    accentColor: "#EC4899",
  },
  {
    category: "finance",
    label: "Finance Specific",
    description: "Payment cards, goals, charts, and finance UI",
    icon: "\u2666",
    accentColor: "#06B6D4",
  },
]

const COMPONENT_ITEMS = SHOWCASE_ITEMS.filter((item) => item.category !== "screen")

interface UIKitsGalleryProps {
  onItemPress: (item: ShowcaseItem) => void
}

function CategoryHeader({ config, itemCount }: { config: CategoryConfig; itemCount: number }) {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
        paddingVertical: 14,
        paddingHorizontal: 16,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "rgba(64, 73, 104, 0.25)",
        borderLeftWidth: 3,
        borderLeftColor: config.accentColor,
        backgroundColor: "rgba(17, 19, 34, 0.6)",
        ...(Platform.OS === "web" && {
          background: `linear-gradient(135deg, ${config.accentColor}08 0%, rgba(17, 19, 34, 0.6) 100%)`,
        }),
      }}
    >
      <View
        style={{
          width: 32,
          height: 32,
          borderRadius: 8,
          backgroundColor: `${config.accentColor}20`,
          borderWidth: 1,
          borderColor: `${config.accentColor}30`,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          size="body"
          weight="bold"
          style={{ color: config.accentColor, fontSize: 14, lineHeight: 18 }}
        >
          {config.icon}
        </Typography>
      </View>

      <View style={{ flex: 1 }}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
          <Typography size="body" weight="bold" style={{ color: "#f9f9fb" }}>
            {config.label}
          </Typography>
          <View
            style={{
              backgroundColor: `${config.accentColor}25`,
              paddingHorizontal: 8,
              paddingVertical: 2,
              borderRadius: 10,
            }}
          >
            <Typography
              size="caption"
              weight="semibold"
              style={{ color: config.accentColor, fontSize: 11 }}
            >
              {itemCount}
            </Typography>
          </View>
        </View>
        <Typography size="caption" style={{ color: "#5d6b98", marginTop: 2 }}>
          {config.description}
        </Typography>
      </View>
    </View>
  )
}

function ComponentCard({
  item,
  cardWidth,
  accentColor,
  onPress,
}: {
  item: ShowcaseItem
  cardWidth: number
  accentColor: string
  onPress: () => void
}) {
  const previewSource = item.previewImage ? PREVIEW_IMAGES[item.previewImage] : null
  const thumbHeight = cardWidth * 0.75

  return (
    <Pressable onPress={onPress}>
      {({ pressed, hovered }: any) => (
        <View
          style={{
            width: cardWidth,
            borderRadius: 14,
            overflow: "hidden",
            backgroundColor: "rgba(17, 19, 34, 0.7)",
            borderWidth: 1,
            borderColor: hovered
              ? `${accentColor}50`
              : "rgba(64, 73, 104, 0.25)",
            ...(Platform.OS === "web"
              ? {
                  transition: "all 0.2s ease",
                  transform: pressed
                    ? "scale(0.97)"
                    : hovered
                      ? "translateY(-2px)"
                      : "translateY(0)",
                  boxShadow: hovered
                    ? `0 8px 32px ${accentColor}15, 0 0 0 1px ${accentColor}10`
                    : "0 2px 8px rgba(0,0,0,0.2)",
                }
              : {
                  opacity: pressed ? 0.85 : 1,
                  shadowColor: accentColor,
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.1,
                  shadowRadius: 8,
                  elevation: 3,
                }),
          }}
        >
          {/* Thumbnail area */}
          <View
            style={{
              height: thumbHeight,
              backgroundColor: "#0e101b",
              overflow: "hidden",
            }}
          >
            {previewSource ? (
              <Image
                source={previewSource}
                style={{ width: "100%", height: "100%" }}
                resizeMode="cover"
              />
            ) : (
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#111322",
                }}
              >
                <View
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 10,
                    backgroundColor: `${accentColor}15`,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <View
                    style={{
                      width: 16,
                      height: 16,
                      borderRadius: 4,
                      backgroundColor: `${accentColor}30`,
                    }}
                  />
                </View>
              </View>
            )}
          </View>

          {/* Label area */}
          <View
            style={{
              paddingHorizontal: 12,
              paddingVertical: 10,
              borderTopWidth: 1,
              borderTopColor: "rgba(64, 73, 104, 0.15)",
            }}
          >
            <Typography
              size="caption"
              weight="semibold"
              numberOfLines={1}
              style={{ fontSize: 12, color: "#f9f9fb" }}
            >
              {item.title}
            </Typography>
          </View>
        </View>
      )}
    </Pressable>
  )
}

export function UIKitsGallery({ onItemPress }: UIKitsGalleryProps) {
  const { width } = useWindowDimensions()
  const isDesktop = Platform.OS === "web" && width > 1024
  const isTablet = width >= 640

  const columns = isDesktop ? 5 : isTablet ? 3 : 2
  const gap = 12
  const containerPadding = 24
  const availableWidth = Math.min(width, 800) - containerPadding * 2
  const cardWidth = (availableWidth - gap * (columns - 1)) / columns

  return (
    <View style={{ paddingHorizontal: containerPadding, paddingVertical: 48, gap: 36 }}>
      {/* Section header */}
      <View style={{ gap: 12 }}>
        <View
          style={{
            alignSelf: "flex-start",
            paddingHorizontal: 12,
            paddingVertical: 4,
            borderRadius: 20,
            borderWidth: 1,
            borderColor: "rgba(139, 92, 246, 0.3)",
            backgroundColor: "rgba(139, 92, 246, 0.08)",
          }}
        >
          <Typography
            size="caption"
            weight="semibold"
            style={{ color: "#8b5cf6", fontSize: 12, letterSpacing: 0.5 }}
          >
            UI KIT
          </Typography>
        </View>

        <Typography size="h2" weight="bold" style={{ color: "#f9f9fb", fontSize: 28 }}>
          Components
        </Typography>
        <Typography size="body" style={{ color: "#7d89b0" }}>
          {COMPONENT_ITEMS.length} components, tokens, and patterns
        </Typography>
      </View>

      {/* Category sections */}
      {CATEGORY_CONFIG.map((config) => {
        const items = COMPONENT_ITEMS.filter((item) => item.category === config.category)
        if (items.length === 0) return null

        return (
          <View key={config.category} style={{ gap: 16 }}>
            <CategoryHeader config={config} itemCount={items.length} />

            <View style={{ flexDirection: "row", flexWrap: "wrap", gap }}>
              {items.map((item) => (
                <ComponentCard
                  key={item.route}
                  item={item}
                  cardWidth={cardWidth}
                  accentColor={config.accentColor}
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
