import { useRouter } from "expo-router"
import { useRef, useState } from "react"
import { ScrollView, View } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"

import {
  FooterSection,
  HeroSection,
  ScreensGallery,
  UIKitsGallery,
} from "@/components/landing"
import { ShowcaseDrawer } from "@/components/showcase-drawer"
import { SHOWCASE_REGISTRY } from "@/lib/showcase-registry"
import { ShowcaseItem } from "@/lib/showcase-items"

export default function LandingPage() {
  const insets = useSafeAreaInsets()
  const router = useRouter()
  const scrollRef = useRef<ScrollView>(null)

  const [drawerItem, setDrawerItem] = useState<ShowcaseItem | null>(null)
  const [mountedItem, setMountedItem] = useState<ShowcaseItem | null>(null)

  const platformPadding = {
    paddingTop: Math.max(insets.top, 20),
    paddingBottom: Math.max(insets.bottom, 40),
  }

  const handleItemPress = (item: ShowcaseItem) => {
    if (item.category === "screen") {
      router.push(item.route as any)
      return
    }
    const hasComponent = !!SHOWCASE_REGISTRY[item.route]
    if (hasComponent) {
      setMountedItem(item)
      setDrawerItem(item)
    } else {
      router.push(item.route as any)
    }
  }

  const handleDrawerClose = () => {
    setDrawerItem(null)
  }

  const handleExplorePress = () => {
    scrollRef.current?.scrollTo({ y: 600, animated: true })
  }

  const DrawerContent = mountedItem ? SHOWCASE_REGISTRY[mountedItem.route] : null

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

      <ShowcaseDrawer visible={!!drawerItem} onClose={handleDrawerClose}>
        {DrawerContent && <DrawerContent />}
      </ShowcaseDrawer>
    </>
  )
}
