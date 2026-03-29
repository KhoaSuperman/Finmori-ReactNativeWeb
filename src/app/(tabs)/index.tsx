import { useRouter } from "expo-router"
import { useRef, useState } from "react"
import { Modal, Platform, ScrollView, useWindowDimensions, View } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"

import {
  FooterSection,
  HeroSection,
  ScreensGallery,
  UIKitsGallery,
} from "@/components/landing"
import { Image, PREVIEW_IMAGES } from "@/lib/preview-images"
import { ShowcaseItem } from "@/lib/showcase-items"

import { Typography } from "@/components/ui-kit/Typography"

/**
 * Modal for displaying UI Kit previews on desktop
 * Only used for non-screen items
 */
function PreviewModal({
  item,
  onClose,
}: {
  item: ShowcaseItem | null
  onClose: () => void
}) {
  const { width } = useWindowDimensions()
  const isDesktop = Platform.OS === "web" && width > 768

  if (!item || !isDesktop) return null

  const previewSource: Image | undefined = item.previewImage ? PREVIEW_IMAGES[item.previewImage] : undefined

  return (
    <Modal transparent animationType="fade" visible={!!item} onRequestClose={onClose}>
      <View
        className="flex-1 items-center justify-center"
        style={{ backgroundColor: "rgba(0,0,0,0.7)" }}
      >
        {/* Preview container */}
        <View
          style={{
            width: Math.min(width * 0.8, 600),
            maxHeight: 800,
            borderRadius: 20,
            overflow: "hidden",
            backgroundColor: "#1a1a1a",
          }}
        >
          {previewSource ? (
            <Image
              source={previewSource}
              style={[
                { width: "100%", height: "100%" },
                Platform.OS === "web" && ({ objectFit: "contain" } as object),
              ]}
              resizeMode="contain"
            />
          ) : (
            <View className="flex-1 items-center justify-center gap-3 p-8">
              <Typography size="h3" weight="semibold" className="text-primary">
                {item.title}
              </Typography>
              <Typography size="body" className="text-center text-secondary">
                {item.description}
              </Typography>
            </View>
          )}
        </View>

        {/* Close button */}
        <View style={{ marginTop: 24 }}>
          <Typography
            size="body"
            weight="medium"
            className="text-base-white"
            style={{ cursor: "pointer" }}
            onPress={onClose}
          >
            Close
          </Typography>
        </View>
      </View>
    </Modal>
  )
}

export default function LandingPage() {
  const insets = useSafeAreaInsets()
  const router = useRouter()
  const { width } = useWindowDimensions()
  const isDesktop = Platform.OS === "web" && width > 768
  const scrollRef = useRef<ScrollView>(null)

  const [previewItem, setPreviewItem] = useState<ShowcaseItem | null>(null)

  const platformPadding = {
    paddingTop: Math.max(insets.top, 20),
    paddingBottom: Math.max(insets.bottom, 40),
  }

  const handleItemPress = (item: ShowcaseItem) => {
    if (isDesktop && item.category !== "screen") {
      // For UI Kits on desktop, show preview modal
      setPreviewItem(item)
    } else {
      // For screens on mobile, or always on mobile
      router.push(item.route as any)
    }
  }

  const handleExplorePress = () => {
    scrollRef.current?.scrollTo({ y: 600, animated: true })
  }

  return (
    <>
      <ScrollView
        ref={scrollRef}
        className="flex-1 bg-primary"
        contentContainerStyle={[{ alignItems: "center" }, platformPadding]}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ maxWidth: 1200, width: "100%" }}>
          <HeroSection onExplorePress={handleExplorePress} />

          <View className="mx-4 border-t border-tertiary" />

          <ScreensGallery onItemPress={handleItemPress} />

          <View className="mx-4 border-t border-tertiary" />

          <UIKitsGallery onItemPress={handleItemPress} />

          <FooterSection />
        </View>
      </ScrollView>

      {/* Preview modal for UI Kits on desktop */}
      <PreviewModal item={previewItem} onClose={() => setPreviewItem(null)} />
    </>
  )
}
