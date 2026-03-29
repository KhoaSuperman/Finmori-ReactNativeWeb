import { useEffect, useState } from "react"
import { ActivityIndicator, Image, Platform, Pressable, ScrollView, useWindowDimensions, View } from "react-native"

import { Typography } from "@/components/ui-kit/Typography"
import { PREVIEW_IMAGES } from "@/lib/preview-images"
import { SCREEN_COMPONENTS } from "@/lib/showcase-screen-components"
import { SHOWCASE_ITEMS, ShowcaseItem } from "@/lib/showcase-items"
import { PhoneDeviceFrame } from "./PhoneDeviceFrame"

const SCREEN_ITEMS = SHOWCASE_ITEMS.filter((item) => item.category === "screen")

interface ScreensGalleryProps {
  onItemPress: (item: ShowcaseItem) => void
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
 * Phone frame card for mobile gallery
 */
interface PhoneCardProps {
  item: ShowcaseItem
  width: number
  height: number
  onPress: () => void
}

function PhoneCard({ item, width, height, onPress }: PhoneCardProps) {
  const previewSource = item.previewImage ? PREVIEW_IMAGES[item.previewImage] : undefined

  return (
    <Pressable onPress={onPress} className="active:opacity-80">
      <View
        style={{
          width,
          height,
          borderRadius: 24,
          backgroundColor: "#1f2937",
          padding: 8,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.15,
          shadowRadius: 12,
          elevation: 8,
        }}
      >
        {/* Phone notch */}
        <View className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-1.5 bg-gray-700 rounded-full z-10" />

        {/* Screen content */}
        <View
          style={{
            flex: 1,
            borderRadius: 16,
            overflow: "hidden",
            backgroundColor: "#111827",
          }}
        >
          {previewSource ? (
            <Image
              source={previewSource}
              style={{ width: "100%", height: "100%" }}
              resizeMode="cover"
            />
          ) : (
            <View className="flex-1 items-center justify-center">
              <Typography size="caption" className="text-tertiary">
                Preview
              </Typography>
            </View>
          )}
        </View>
      </View>

      {/* Label below phone */}
      <View style={{ width, marginTop: 12 }}>
        <Typography size="body" weight="semibold" className="text-primary text-center" numberOfLines={1}>
          {item.title}
        </Typography>
        <Typography size="caption" className="text-secondary text-center mt-0.5" numberOfLines={1}>
          {item.description}
        </Typography>
      </View>
    </Pressable>
  )
}

/**
 * Mobile horizontal scrolling phone gallery
 */
function MobileScreensGallery({ onItemPress }: ScreensGalleryProps) {
  const { width } = useWindowDimensions()

  // Phone aspect ratio (~19.5:9 for modern phones)
  const PHONE_ASPECT = 2.16
  const cardWidth = width * 0.55 // Each card takes 55% of screen width
  const cardHeight = cardWidth * PHONE_ASPECT
  const horizontalPadding = 20

  return (
    <View className="py-8">
      {/* Header with padding */}
      <View className="px-5 mb-5">
        <Typography size="h3" weight="bold" className="text-primary">
          Screens
        </Typography>
        <Typography size="body" className="text-secondary mt-1">
          {SCREEN_ITEMS.length} full-screen app views ready to use
        </Typography>
      </View>

      {/* Horizontal scrolling phone cards */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: horizontalPadding, gap: 16 }}
        snapToInterval={cardWidth + 16}
        decelerationRate="fast"
      >
        {SCREEN_ITEMS.map((item) => (
          <PhoneCard
            key={item.route}
            item={item}
            width={cardWidth}
            height={cardHeight}
            onPress={() => onItemPress(item)}
          />
        ))}
      </ScrollView>

      {/* Screen indicator dots */}
      <View className="flex-row justify-center mt-4 gap-1.5">
        {SCREEN_ITEMS.map((_, i) => (
          <View
            key={i}
            className="w-1.5 h-1.5 rounded-full bg-border"
          />
        ))}
      </View>
    </View>
  )
}

// Phone frame natural dimensions
const PHONE_WIDTH = 393
const PHONE_HEIGHT = 852
// Scale down to fit comfortably inside the panel with padding
const PHONE_SCALE = 0.78
const SCALED_PHONE_HEIGHT = PHONE_HEIGHT * PHONE_SCALE
const PANEL_HEIGHT = SCALED_PHONE_HEIGHT + 80 // 80px vertical padding

/**
 * Desktop split-view layout with screen list and device frame
 */
function DesktopScreensGallery() {
  const [selectedScreen, setSelectedScreen] = useState<ShowcaseItem>(SCREEN_ITEMS[0])

  return (
    <View style={{ height: PANEL_HEIGHT, flexDirection: "row" }}>
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
          overflow: "hidden",
        }}
      >
        <View
          style={{
            transform: [{ scale: PHONE_SCALE }],
            width: PHONE_WIDTH,
            height: PHONE_HEIGHT,
          }}
        >
          <PhoneDeviceFrame>
            <ScreenRenderer route={selectedScreen.route} />
          </PhoneDeviceFrame>
        </View>
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
