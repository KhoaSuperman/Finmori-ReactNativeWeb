import { useRouter } from "expo-router"
import Head from "expo-router/head"
import { useRef, useState } from "react"
import { ScrollView, View } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"

import {
  CTASection,
  DesignCreditSection,
  FeaturesSection,
  FooterSection,
  Header,
  HeroSection,
  ScreensGallery,
  UIKitsGallery,
} from "@/components/landing"
import { ShowcaseDrawer } from "@/components/showcase-drawer"
import { trackDrawerClose, trackDrawerOpen } from "@/lib/analytics"
import { ShowcaseItem } from "@/lib/showcase-items"
import { SHOWCASE_REGISTRY } from "@/lib/showcase-registry"

const DARK_BG = "#0e101b"

export default function LandingPage() {
  const insets = useSafeAreaInsets()
  const router = useRouter()
  const scrollRef = useRef<ScrollView>(null)
  const [drawerItem, setDrawerItem] = useState<ShowcaseItem | null>(null)
  const [mountedItem, setMountedItem] = useState<ShowcaseItem | null>(null)

  const [sectionPositions, setSectionPositions] = useState({
    screens: 0,
    features: 0,
    uikits: 0,
    designCredit: 0,
  })

  const handleItemPress = (item: ShowcaseItem) => {
    if (item.category === "screen") {
      router.push(item.route as any)
      return
    }
    const hasComponent = !!SHOWCASE_REGISTRY[item.route]
    if (hasComponent) {
      trackDrawerOpen({ title: item.title, category: item.category, route: item.route })
      setMountedItem(item)
      setDrawerItem(item)
    } else {
      router.push(item.route as any)
    }
  }

  const handleDrawerClose = () => {
    trackDrawerClose()
    setDrawerItem(null)
  }

  const handleExplorePress = () => {
    scrollRef.current?.scrollTo({ y: sectionPositions.screens || 500, animated: true })
  }

  const navigateToScreens = () => {
    scrollRef.current?.scrollTo({ y: sectionPositions.screens || 500, animated: true })
  }

  const navigateToFeatures = () => {
    scrollRef.current?.scrollTo({ y: sectionPositions.features || 800, animated: true })
  }

  const navigateToUIKits = () => {
    scrollRef.current?.scrollTo({ y: sectionPositions.uikits || 1200, animated: true })
  }

  const navigateToDesignCredit = () => {
    scrollRef.current?.scrollTo({ y: sectionPositions.designCredit || 2000, animated: true })
  }

  const handleScroll = (event: { nativeEvent: { contentOffset: { y: number } } }) => {
    // Optional: Could use this to highlight current section in nav
  }

  const updateSectionPosition = (section: keyof typeof sectionPositions, y: number) => {
    setSectionPositions((prev) => ({ ...prev, [section]: y }))
  }

  const DrawerContent = mountedItem ? SHOWCASE_REGISTRY[mountedItem.route] : null

  return (
    <>
      <Head>
        <title>Finmori — Smart Budget & Expense Tracker UI Kit</title>
        <meta
          name="description"
          content="A premium mobile-first fintech design system built with React Native Web, NativeWind, and Expo. 10+ screens, 50+ icons, 50+ UI components. MIT Licensed."
        />
      </Head>

      <Header
        onNavigateToScreens={navigateToScreens}
        onNavigateToFeatures={navigateToFeatures}
        onNavigateToUIKits={navigateToUIKits}
        onNavigateToDesignCredit={navigateToDesignCredit}
      />

      <ScrollView
        ref={scrollRef}
        style={{ flex: 1, backgroundColor: DARK_BG }}
        contentContainerStyle={{ alignItems: "center" }}
        showsVerticalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        <View style={{ maxWidth: 1200, width: "100%" }}>
          <HeroSection onExplorePress={handleExplorePress} />

          <View onLayout={(e) => updateSectionPosition("features", e.nativeEvent.layout.y - 64)}>
            <FeaturesSection />
          </View>

          <View onLayout={(e) => updateSectionPosition("screens", e.nativeEvent.layout.y - 64)}>
            <ScreensGallery onItemPress={handleItemPress} />
          </View>

          <View onLayout={(e) => updateSectionPosition("uikits", e.nativeEvent.layout.y - 64)}>
            <UIKitsGallery onItemPress={handleItemPress} />
          </View>

          <CTASection />

          <View onLayout={(e) => updateSectionPosition("designCredit", e.nativeEvent.layout.y - 64)}>
            <DesignCreditSection />
          </View>

          <FooterSection />
        </View>

        {/* Bottom padding for safe area */}
        <View style={{ height: Math.max(insets.bottom, 20) }} />
      </ScrollView>

      <ShowcaseDrawer visible={!!drawerItem} onClose={handleDrawerClose}>
        {DrawerContent && <DrawerContent />}
      </ShowcaseDrawer>
    </>
  )
}
