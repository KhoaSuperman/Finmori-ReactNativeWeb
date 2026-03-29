import { useEffect, useState } from "react"
import { ActivityIndicator, Image, Platform, Pressable, ScrollView, useWindowDimensions, View } from "react-native"

import { Typography } from "@/components/ui-kit/Typography"
import { PREVIEW_IMAGES } from "@/lib/preview-images"
import { SCREEN_COMPONENTS } from "@/lib/showcase-screen-components"
import { SHOWCASE_ITEMS, ShowcaseItem } from "@/lib/showcase-items"
import { PhoneDeviceFrame } from "./PhoneDeviceFrame"

const SCREEN_ITEMS = SHOWCASE_ITEMS.filter((item) => item.category === "screen")

// Alternating tall/short heights per column to create a staggered masonry feel.
// Left col: tall → short → tall …  Right col: short → tall → short …
const LEFT_HEIGHTS = [1.55, 1.2, 1.55, 1.2]
const RIGHT_HEIGHTS = [1.2, 1.55, 1.2, 1.55]

interface ScreensGalleryProps {
  onItemPress: (item: ShowcaseItem) => void
}

interface ScreenCardProps {
  item: ShowcaseItem
  width: number
  heightRatio: number
  onPress: () => void
}

/**
 * Dynamic screen renderer that loads the actual screen component
 */
function ScreenRenderer({ route }: { route: string }) {
  const [ScreenComponent, setScreenComponent] = useState<React.ComponentType | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadComponent = async () => {
      setIsLoading(true)
      const loader = SCREEN_COMPONENTS[route]
      if (loader) {
        try {
          const Component = await loader()
          setScreenComponent(() => Component)
        } catch (error) {
          console.error(`Failed to load screen: ${route}`, error)
        }
      }
      setIsLoading(false)
    }

    loadComponent()
  }, [route])

  if (isLoading || !ScreenComponent) {
    return (
      <View className="flex-1 items-center justify-center bg-primary">
        {isLoading ? (
          <ActivityIndicator size="large" color="#10b981" />
        ) : (
          <Typography size="body" className="text-secondary">
            Failed to load screen
          </Typography>
        )}
      </View>
    )
  }

  return <ScreenComponent />
}

/**
 * Mobile screen card component for masonry grid
 */
function ScreenCard({ item, width: cardWidth, heightRatio, onPress }: ScreenCardProps) {
  const cardHeight = cardWidth * heightRatio
  const previewSource = item.previewImage ? PREVIEW_IMAGES[item.previewImage] : undefined

  return (
    <Pressable onPress={onPress} className="active:opacity-70">
      {/* Image frame */}
      <View
        style={{
          width: cardWidth,
          height: cardHeight,
          borderRadius: 20,
          overflow: "hidden",
          backgroundColor: "#111827",
        }}
      >
        {previewSource ? (
          <Image
            source={previewSource}
            style={[
              { width: "100%", height: "100%" },
              Platform.OS === "web" && ({ objectFit: "cover", objectPosition: "top" } as object),
            ]}
            resizeMode="cover"
          />
        ) : (
          <View className="flex-1 items-center justify-center">
            <Typography size="caption" className="text-tertiary">
              Preview
            </Typography>
          </View>
        )}

        {/* Bottom gradient + label overlay */}
        <View
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            paddingHorizontal: 12,
            paddingTop: 40,
            paddingBottom: 14,
            ...(Platform.OS === "web"
              ? ({ background: "linear-gradient(to bottom, transparent, rgba(0,0,0,0.72))" } as object)
              : {}),
          }}
        >
          <Typography size="caption" weight="semibold" className="text-base-white" numberOfLines={1}>
            {item.title}
          </Typography>
        </View>
      </View>
    </Pressable>
  )
}

/**
 * Mobile masonry grid layout
 */
function MobileScreensGallery({ onItemPress }: ScreensGalleryProps) {
  const { width } = useWindowDimensions()

  const gap = 10
  const containerPadding = 16
  const availableWidth = Math.min(width, 800) - containerPadding * 2
  const colWidth = (availableWidth - gap) / 2

  // Split items into two columns
  const leftItems = SCREEN_ITEMS.filter((_, i) => i % 2 === 0)
  const rightItems = SCREEN_ITEMS.filter((_, i) => i % 2 === 1)

  return (
    <View className="gap-6 px-4 py-8">
      <View className="gap-1">
        <Typography size="h3" weight="bold" className="text-primary">
          Screens
        </Typography>
        <Typography size="caption" className="text-secondary">
          Full-screen app views ready to use
        </Typography>
      </View>

      {/* Two-column masonry */}
      <View style={{ flexDirection: "row", gap }}>
        {/* Left column */}
        <View style={{ flex: 1, gap }}>
          {leftItems.map((item, i) => (
            <ScreenCard
              key={item.route}
              item={item}
              width={colWidth}
              heightRatio={LEFT_HEIGHTS[i % LEFT_HEIGHTS.length]}
              onPress={() => onItemPress(item)}
            />
          ))}
        </View>

        {/* Right column — offset start height to stagger */}
        <View style={{ flex: 1, gap, marginTop: colWidth * 0.35 }}>
          {rightItems.map((item, i) => (
            <ScreenCard
              key={item.route}
              item={item}
              width={colWidth}
              heightRatio={RIGHT_HEIGHTS[i % RIGHT_HEIGHTS.length]}
              onPress={() => onItemPress(item)}
            />
          ))}
        </View>
      </View>
    </View>
  )
}

/**
 * Desktop split-view layout with screen list and device frame
 */
function DesktopScreensGallery() {
  const [selectedScreen, setSelectedScreen] = useState<ShowcaseItem>(SCREEN_ITEMS[0])

  return (
    <View style={{ height: 700, flexDirection: "row" }}>
      {/* Left Panel - Screen List */}
      <View
        style={{
          width: 280,
          borderRightWidth: 1,
          borderColor: "#e5e7eb",
          backgroundColor: "#ffffff",
        }}
      >
        <View style={{ padding: 16, borderBottomWidth: 1, borderColor: "#e5e7eb" }}>
          <Typography size="h3" weight="bold" className="text-primary">
            Screens
          </Typography>
          <Typography size="caption" className="text-secondary" style={{ marginTop: 4 }}>
            Select a screen to preview
          </Typography>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          {SCREEN_ITEMS.map((item) => {
            const isSelected = selectedScreen.route === item.route
            return (
              <Pressable key={item.route} onPress={() => setSelectedScreen(item)}>
                <View
                  style={{
                    padding: 16,
                    backgroundColor: isSelected ? "#f3f4f6" : "transparent",
                    borderLeftWidth: isSelected ? 3 : 0,
                    borderLeftColor: "#10b981",
                  }}
                >
                  <Typography size="body" weight={isSelected ? "semibold" : "regular"} className="text-primary">
                    {item.title}
                  </Typography>
                  <Typography
                    size="caption"
                    className="text-secondary"
                    numberOfLines={1}
                    style={{ marginTop: 2 }}
                  >
                    {item.description}
                  </Typography>
                </View>
              </Pressable>
            )
          })}
        </ScrollView>
      </View>

      {/* Right Panel - Device Frame */}
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#f9fafb",
          padding: 24,
        }}
      >
        <PhoneDeviceFrame>
          <ScreenRenderer route={selectedScreen.route} />
        </PhoneDeviceFrame>
      </View>
    </View>
  )
}

export function ScreensGallery(props: ScreensGalleryProps) {
  const { width } = useWindowDimensions()
  const isDesktop = Platform.OS === "web" && width > 768

  if (isDesktop) {
    return <DesktopScreensGallery />
  }

  return <MobileScreensGallery {...props} />
}
