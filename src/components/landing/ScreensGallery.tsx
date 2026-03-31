import { useEffect, useState } from "react"
import { ActivityIndicator, Image, Platform, Pressable, ScrollView, useWindowDimensions, View } from "react-native"

import { Typography } from "@/components/ui-kit/Typography"
import { PREVIEW_IMAGES } from "@/lib/preview-images"
import { SHOWCASE_ITEMS, ShowcaseItem } from "@/lib/showcase-items"
import { SCREEN_COMPONENTS } from "@/lib/showcase-screen-components"
import { PhoneDeviceFrame } from "./PhoneDeviceFrame"

const SCREEN_ITEMS = SHOWCASE_ITEMS.filter((item) => item.category === "screen")

interface ScreensGalleryProps {
  onItemPress: (item: ShowcaseItem) => void
}

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
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#0e101b" }}>
        {isLoading ? (
          <ActivityIndicator size="large" color="#2f61f3" />
        ) : (
          <Typography size="body" style={{ color: "#7d89b0" }}>
            Failed to load screen
          </Typography>
        )}
      </View>
    )
  }

  return <ScreenComponent />
}

function SectionHeader() {
  return (
    <View style={{ gap: 12, marginBottom: 24 }}>
      <View
        style={{
          alignSelf: "flex-start",
          paddingHorizontal: 12,
          paddingVertical: 4,
          borderRadius: 20,
          borderWidth: 1,
          borderColor: "rgba(16, 185, 129, 0.3)",
          backgroundColor: "rgba(16, 185, 129, 0.08)",
        }}
      >
        <Typography size="caption" weight="semibold" style={{ color: "#10b981", fontSize: 12, letterSpacing: 0.5 }}>
          VIBE CODED
        </Typography>
      </View>

      <Typography size="h2" weight="bold" style={{ color: "#f9f9fb", fontSize: 28 }}>
        App Screens
      </Typography>
      <Typography size="body" style={{ color: "#7d89b0" }}>
        {SCREEN_ITEMS.length} complete screens — 100% vibe-coded from Figma, 99% design fidelity
      </Typography>
    </View>
  )
}

interface PhoneCardProps {
  item: ShowcaseItem
  width: number
  height: number
  onPress: () => void
}

function PhoneCard({ item, width, height, onPress }: PhoneCardProps) {
  const previewSource = item.previewImage ? PREVIEW_IMAGES[item.previewImage] : undefined

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => ({
        opacity: pressed ? 0.85 : 1,
        ...(Platform.OS === "web" && {
          transition: "all 0.2s ease",
          transform: pressed ? "scale(0.97)" : "scale(1)",
        }),
      })}
    >
      <View
        style={{
          width,
          height,
          borderRadius: 24,
          backgroundColor: "#111322",
          borderWidth: 1,
          borderColor: "rgba(64, 73, 104, 0.4)",
          padding: 8,
          ...(Platform.OS === "web"
            ? {
                boxShadow: "0 8px 40px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255,255,255,0.03)",
              }
            : {
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.3,
                shadowRadius: 12,
                elevation: 8,
              }),
        }}
      >
        {/* Phone notch */}
        <View
          style={{
            position: "absolute",
            top: 12,
            left: "50%",
            marginLeft: -40,
            width: 80,
            height: 6,
            backgroundColor: "rgba(64, 73, 104, 0.6)",
            borderRadius: 3,
            zIndex: 10,
          }}
        />

        {/* Screen content */}
        <View
          style={{
            flex: 1,
            borderRadius: 16,
            overflow: "hidden",
            backgroundColor: "#0e101b",
          }}
        >
          {previewSource ? (
            <Image source={previewSource} style={{ width: "100%", height: "100%" }} resizeMode="cover" />
          ) : (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
              <Typography size="caption" style={{ color: "#5d6b98" }}>
                Preview
              </Typography>
            </View>
          )}

          {/* Bottom gradient overlay for label readability */}
          {Platform.OS === "web" && (
            <View
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: 60,
                ...(Platform.OS === "web" && {
                  background: "linear-gradient(to top, rgba(14,16,27,0.6), transparent)",
                }),
              }}
            />
          )}
        </View>
      </View>

      {/* Label below phone */}
      <View style={{ width, marginTop: 12 }}>
        <Typography
          size="body"
          weight="semibold"
          className="text-center"
          style={{ color: "#f9f9fb" }}
          numberOfLines={1}
        >
          {item.title}
        </Typography>
        <Typography size="caption" className="text-center" style={{ color: "#7d89b0", marginTop: 2 }} numberOfLines={1}>
          {item.description}
        </Typography>
      </View>
    </Pressable>
  )
}

function MobileScreensGallery({ onItemPress }: ScreensGalleryProps) {
  const { width: windowWidth } = useWindowDimensions()
  // useWindowDimensions returns 0 during SSR static export; fall back to a
  // sensible mobile default (390px) so cards render at the correct size.
  const width = windowWidth > 0 ? windowWidth : 390

  const PHONE_ASPECT = 2.16
  const cardWidth = width * 0.55
  const cardHeight = cardWidth * PHONE_ASPECT

  return (
    <View style={{ paddingVertical: 48, paddingHorizontal: 20 }}>
      <SectionHeader />

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingRight: 20, gap: 16 }}
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
    </View>
  )
}

const PHONE_WIDTH = 393
const PHONE_HEIGHT = 852
const PHONE_SCALE = 0.78
const SCALED_PHONE_HEIGHT = PHONE_HEIGHT * PHONE_SCALE
const PANEL_HEIGHT = SCALED_PHONE_HEIGHT + 80

function DesktopScreensGallery() {
  const [selectedScreen, setSelectedScreen] = useState<ShowcaseItem>(SCREEN_ITEMS[0])

  return (
    <View style={{ paddingVertical: 64, paddingHorizontal: 24 }}>
      <SectionHeader />

      <View
        style={{
          height: PANEL_HEIGHT,
          flexDirection: "row",
          borderRadius: 16,
          overflow: "hidden",
          borderWidth: 1,
          borderColor: "rgba(64, 73, 104, 0.3)",
        }}
      >
        {/* Left Panel — Screen List */}
        <View
          style={{
            width: 280,
            borderRightWidth: 1,
            borderColor: "rgba(64, 73, 104, 0.3)",
            backgroundColor: "rgba(17, 19, 34, 0.6)",
          }}
        >
          <View
            style={{
              padding: 16,
              borderBottomWidth: 1,
              borderBottomColor: "rgba(64, 73, 104, 0.3)",
            }}
          >
            <Typography size="body" weight="bold" style={{ color: "#f9f9fb" }}>
              Select a screen
            </Typography>
            <Typography size="caption" style={{ color: "#5d6b98", marginTop: 4 }}>
              {SCREEN_ITEMS.length} screens available
            </Typography>
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            {SCREEN_ITEMS.map((item) => {
              const isSelected = selectedScreen.route === item.route
              return (
                <Pressable
                  key={item.route}
                  onPress={() => setSelectedScreen(item)}
                  style={({ hovered }: any) => ({
                    ...(Platform.OS === "web" && {
                      transition: "all 0.15s ease",
                    }),
                    backgroundColor: isSelected
                      ? "rgba(47, 97, 243, 0.12)"
                      : hovered
                        ? "rgba(64, 73, 104, 0.15)"
                        : "transparent",
                  })}
                >
                  <View
                    style={{
                      padding: 16,
                      borderLeftWidth: isSelected ? 3 : 0,
                      borderLeftColor: "#2f61f3",
                      paddingLeft: isSelected ? 13 : 16,
                    }}
                  >
                    <Typography
                      size="body"
                      weight={isSelected ? "semibold" : "regular"}
                      style={{ color: isSelected ? "#f9f9fb" : "#b9c0d4" }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      size="caption"
                      style={{
                        color: isSelected ? "#7d89b0" : "#5d6b98",
                        marginTop: 2,
                      }}
                      numberOfLines={1}
                    >
                      {item.description}
                    </Typography>
                  </View>
                </Pressable>
              )
            })}
          </ScrollView>
        </View>

        {/* Right Panel — Device Frame */}
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            padding: 24,
            overflow: "hidden",
            backgroundColor: "rgba(14, 16, 27, 0.4)",
            ...(Platform.OS === "web" && {
              background: `
                radial-gradient(ellipse at 50% 50%, rgba(47, 97, 243, 0.1) 0%, transparent 60%),
                rgba(14, 16, 27, 0.6)
              `,
            }),
          }}
        >
          <View
            style={{
              transform: [{ scale: PHONE_SCALE }],
              width: PHONE_WIDTH,
              height: PHONE_HEIGHT,
              ...(Platform.OS === "web" && {
                filter: "drop-shadow(0 0 60px rgba(47, 97, 243, 0.15))",
              }),
            }}
          >
            <PhoneDeviceFrame>
              <ScreenRenderer route={selectedScreen.route} />
            </PhoneDeviceFrame>
          </View>
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
