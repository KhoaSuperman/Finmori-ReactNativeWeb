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

function FoundationTypographyIcon({ color }: { color: string }) {
  return (
    <View style={{ width: "100%", height: "100%", alignItems: "center", justifyContent: "center", gap: 3 }}>
      <Typography size="body" weight="bold" style={{ color, fontSize: 18, lineHeight: 20 }}>
        Aa
      </Typography>
      <View style={{ flexDirection: "row", gap: 2 }}>
        {[10, 14, 8].map((w, i) => (
          <View key={i} style={{ width: w, height: 2, borderRadius: 1, backgroundColor: `${color}40` }} />
        ))}
      </View>
    </View>
  )
}

function FoundationColorsIcon({ color }: { color: string }) {
  const dots = ["#2F61F3", "#10B981", "#F59E0B", "#EC4899"]
  return (
    <View style={{ width: "100%", height: "100%", alignItems: "center", justifyContent: "center" }}>
      <View style={{ flexDirection: "row", flexWrap: "wrap", width: 28, gap: 3, justifyContent: "center" }}>
        {dots.map((c, i) => (
          <View key={i} style={{ width: 11, height: 11, borderRadius: 3, backgroundColor: c }} />
        ))}
      </View>
    </View>
  )
}

function FoundationPrimitiveColorsIcon({ color }: { color: string }) {
  return (
    <View style={{ width: "100%", height: "100%", alignItems: "center", justifyContent: "center" }}>
      <View style={{ width: 28, height: 20, borderRadius: 4, overflow: "hidden", flexDirection: "row" }}>
        {["#6366F1", "#8B5CF6", "#A78BFA", "#C4B5FD", "#DDD6FE"].map((c, i) => (
          <View key={i} style={{ flex: 1, backgroundColor: c }} />
        ))}
      </View>
    </View>
  )
}

function FoundationSpacingIcon({ color }: { color: string }) {
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        alignItems: "flex-start",
        justifyContent: "center",
        paddingLeft: 10,
        gap: 3,
      }}
    >
      {[20, 14, 24, 10].map((w, i) => (
        <View
          key={i}
          style={{
            width: w,
            height: 3,
            borderRadius: 1.5,
            backgroundColor: i === 2 ? color : `${color}50`,
          }}
        />
      ))}
    </View>
  )
}

function FoundationShadowsIcon({ color }: { color: string }) {
  return (
    <View style={{ width: "100%", height: "100%", alignItems: "center", justifyContent: "center" }}>
      <View
        style={{
          width: 22,
          height: 16,
          borderRadius: 4,
          backgroundColor: `${color}25`,
          ...(Platform.OS === "web" && {
            boxShadow: `3px 3px 8px ${color}30, 0 0 0 1px ${color}15`,
          }),
        }}
      />
    </View>
  )
}

function FoundationRadiusIcon({ color }: { color: string }) {
  return (
    <View style={{ width: "100%", height: "100%", alignItems: "center", justifyContent: "center" }}>
      <View
        style={{
          width: 24,
          height: 24,
          borderWidth: 2,
          borderColor: color,
          borderTopLeftRadius: 2,
          borderTopRightRadius: 6,
          borderBottomRightRadius: 12,
          borderBottomLeftRadius: 0,
          backgroundColor: `${color}10`,
        }}
      />
    </View>
  )
}

function FoundationGradientsIcon({ color }: { color: string }) {
  return (
    <View style={{ width: "100%", height: "100%", alignItems: "center", justifyContent: "center" }}>
      <View
        style={{
          width: 26,
          height: 18,
          borderRadius: 5,
          overflow: "hidden",
          ...(Platform.OS === "web"
            ? { background: `linear-gradient(135deg, #2F61F3, #8B5CF6, #EC4899)` }
            : { backgroundColor: color }),
        }}
      />
    </View>
  )
}

function FoundationContainersIcon({ color }: { color: string }) {
  return (
    <View style={{ width: "100%", height: "100%", alignItems: "center", justifyContent: "center" }}>
      <View
        style={{
          width: 26,
          height: 20,
          borderRadius: 4,
          borderWidth: 1.5,
          borderColor: `${color}60`,
          borderStyle: "dashed",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View style={{ width: 14, height: 10, borderRadius: 2, backgroundColor: `${color}30` }} />
      </View>
    </View>
  )
}

function FoundationWidthsIcon({ color }: { color: string }) {
  return (
    <View style={{ width: "100%", height: "100%", alignItems: "center", justifyContent: "center", gap: 4 }}>
      <View style={{ width: 26, height: 2.5, borderRadius: 1, backgroundColor: color }} />
      <View style={{ width: 18, height: 2.5, borderRadius: 1, backgroundColor: `${color}60` }} />
      <View style={{ width: 12, height: 2.5, borderRadius: 1, backgroundColor: `${color}35` }} />
    </View>
  )
}

const FOUNDATION_ICON_MAP: Record<string, (props: { color: string }) => React.JSX.Element> = {
  "/showcase/typography": FoundationTypographyIcon,
  "/showcase/colors": FoundationColorsIcon,
  "/showcase/primitive-colors": FoundationPrimitiveColorsIcon,
  "/showcase/spacing": FoundationSpacingIcon,
  "/showcase/shadows": FoundationShadowsIcon,
  "/showcase/radius": FoundationRadiusIcon,
  "/showcase/gradients": FoundationGradientsIcon,
  "/showcase/containers": FoundationContainersIcon,
  "/showcase/widths": FoundationWidthsIcon,
}

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
        <Typography size="body" weight="bold" style={{ color: config.accentColor, fontSize: 14, lineHeight: 18 }}>
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
            <Typography size="caption" weight="semibold" style={{ color: config.accentColor, fontSize: 11 }}>
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

function FoundationCard({
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
  const IconComponent = FOUNDATION_ICON_MAP[item.route]

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
            borderColor: hovered ? `${accentColor}50` : "rgba(64, 73, 104, 0.25)",
            ...(Platform.OS === "web"
              ? {
                  transition: "all 0.2s ease",
                  transform: pressed ? "scale(0.97)" : hovered ? "translateY(-3px)" : "translateY(0)",
                  boxShadow: hovered
                    ? `0 12px 32px ${accentColor}20, 0 0 0 1px ${accentColor}15`
                    : "0 2px 8px rgba(0,0,0,0.15)",
                }
              : { opacity: pressed ? 0.85 : 1 }),
          }}
        >
          <View
            style={{
              height: cardWidth * 0.7,
              alignItems: "center",
              justifyContent: "center",
              ...(Platform.OS === "web" && {
                background: `radial-gradient(ellipse at 50% 60%, ${accentColor}12 0%, transparent 70%)`,
              }),
            }}
          >
            <View
              style={{
                width: 48,
                height: 48,
                borderRadius: 14,
                backgroundColor: `${accentColor}12`,
                borderWidth: 1,
                borderColor: `${accentColor}25`,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {IconComponent ? (
                <IconComponent color={accentColor} />
              ) : (
                <View style={{ width: 16, height: 16, borderRadius: 4, backgroundColor: `${accentColor}30` }} />
              )}
            </View>
          </View>

          <View
            style={{
              paddingHorizontal: 10,
              paddingVertical: 10,
              borderTopWidth: 1,
              borderTopColor: "rgba(64, 73, 104, 0.15)",
            }}
          >
            <Typography size="caption" weight="semibold" numberOfLines={1} style={{ fontSize: 12, color: "#f9f9fb" }}>
              {item.title}
            </Typography>
          </View>
        </View>
      )}
    </Pressable>
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
  const thumbHeight = previewSource ? cardWidth * 0.55 : cardWidth * 0.5

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
            borderColor: hovered ? `${accentColor}50` : "rgba(64, 73, 104, 0.25)",
            ...(Platform.OS === "web"
              ? {
                  transition: "all 0.2s ease",
                  transform: pressed ? "scale(0.97)" : hovered ? "translateY(-2px)" : "translateY(0)",
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
              aspectRatio: 4 / 3,
              backgroundColor: "#0e101b",
              overflow: "hidden",
              paddingVertical: 8,
              paddingHorizontal: 16,
            }}
          >
            {previewSource ? (
              <Image source={previewSource} style={{ width: "100%", height: "100%" }} resizeMode="contain" />
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
            <Typography size="caption" weight="semibold" numberOfLines={1} style={{ fontSize: 12, color: "#f9f9fb" }}>
              {item.title}
            </Typography>
          </View>
        </View>
      )}
    </Pressable>
  )
}

export function UIKitsGallery({ onItemPress }: UIKitsGalleryProps) {
  const { width: windowWidth } = useWindowDimensions()
  // useWindowDimensions returns 0 during SSR static export; fall back to a
  // sensible mobile default (390px) so cards render at the correct size.
  const width = windowWidth > 0 ? windowWidth : 390
  const isDesktop = Platform.OS === "web" && width > 1024
  const isTablet = width >= 640

  const columns = isDesktop ? 5 : isTablet ? 3 : 2
  const gap = 16
  const containerPadding = 24
  const availableWidth = Math.min(width, 1200) - containerPadding * 2
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
          <Typography size="caption" weight="semibold" style={{ color: "#8b5cf6", fontSize: 12, letterSpacing: 0.5 }}>
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
        const isFoundation = config.category === "foundation"

        return (
          <View key={config.category} style={{ gap: 16 }}>
            <CategoryHeader config={config} itemCount={items.length} />

            <View style={{ flexDirection: "row", flexWrap: "wrap", gap }}>
              {items.map((item) =>
                isFoundation ? (
                  <FoundationCard
                    key={item.route}
                    item={item}
                    cardWidth={cardWidth}
                    accentColor={config.accentColor}
                    onPress={() => onItemPress(item)}
                  />
                ) : (
                  <ComponentCard
                    key={item.route}
                    item={item}
                    cardWidth={cardWidth}
                    accentColor={config.accentColor}
                    onPress={() => onItemPress(item)}
                  />
                ),
              )}
            </View>
          </View>
        )
      })}
    </View>
  )
}
