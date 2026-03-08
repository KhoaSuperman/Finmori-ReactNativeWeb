import { useRouter } from "expo-router"
import { TabList, Tabs, TabSlot, TabTrigger } from "expo-router/ui"
import React, { useCallback, useEffect, useState } from "react"
import { Animated, Pressable, View } from "react-native"

import { SHOWCASE_ITEMS } from "@/lib/showcase-items"

import { AnimatedIcon } from "./animated-icon"
import { Typography } from "./ui-kit/Typography"

export default function AppTabs() {
  const [drawerOpen, setDrawerOpen] = useState(false)

  return (
    <Tabs className="flex-1">
      <TabList asChild>
        <Header onMenuPress={() => setDrawerOpen(true)}>
          <TabTrigger name="index" href="/" asChild>
            <HeaderLink>Home</HeaderLink>
          </TabTrigger>
          <Pressable onPress={() => setDrawerOpen(true)}>
            <HeaderLink>Showcase</HeaderLink>
          </Pressable>
        </Header>
      </TabList>
      <TabSlot className="flex-1" />
      <NavDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </Tabs>
  )
}

function NavDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const router = useRouter()
  const [slideAnim] = useState(() => new Animated.Value(-320))
  const [overlayAnim] = useState(() => new Animated.Value(0))
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (open) {
      setVisible(true)
      Animated.parallel([
        Animated.spring(slideAnim, { toValue: 0, useNativeDriver: true, tension: 65, friction: 11 }),
        Animated.timing(overlayAnim, { toValue: 1, duration: 250, useNativeDriver: true }),
      ]).start()
    } else {
      Animated.parallel([
        Animated.spring(slideAnim, { toValue: -320, useNativeDriver: true, tension: 65, friction: 11 }),
        Animated.timing(overlayAnim, { toValue: 0, duration: 200, useNativeDriver: true }),
      ]).start(() => setVisible(false))
    }
  }, [open, slideAnim, overlayAnim])

  const handleNavigate = useCallback(
    (route: string) => {
      onClose()
      setTimeout(() => router.push(route as any), 150)
    },
    [onClose, router],
  )

  if (!visible) return null

  return (
    <View className="fixed inset-0 z-[100]">
      <Animated.View style={{ opacity: overlayAnim }} className="absolute inset-0">
        <Pressable onPress={onClose} className="flex-1 bg-black/40" />
      </Animated.View>

      <Animated.View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          width: 300,
          transform: [{ translateX: slideAnim }]
        }}
        className="shadow-2xl"
      >
        <View className="flex-1 border-r border-secondary bg-primary">
          <View className="h-[60px] flex-row items-center justify-between border-b border-secondary px-6">
            <Typography size="h3" weight="bold" className="text-primary tracking-tight">
              Showcase
            </Typography>
            <Pressable
              onPress={onClose}
              className="h-9 w-9 items-center justify-center rounded-full hover:bg-secondary active:opacity-70 transition-colors"
            >
              <Typography size="body" className="text-tertiary">
                ✕
              </Typography>
            </Pressable>
          </View>

          <View className="flex-1 px-4 py-4">
            {SHOWCASE_ITEMS.map((item) => (
              <Pressable
                key={item.route}
                onPress={() => handleNavigate(item.route)}
                className="mb-1 flex-row items-center rounded-xl bg-transparent px-4 py-3.5 hover:bg-secondary active:opacity-70 transition-all border border-transparent hover:border-tertiary"
              >
                <Typography size="body-small" weight="semibold" className="text-secondary hover:text-primary">
                  {item.title}
                </Typography>
              </Pressable>
            ))}
          </View>

          <View className="border-t border-secondary px-6 py-5 bg-secondary/30">
            <Typography size="tiny" weight="medium" className="text-quaternary uppercase tracking-wider">
              {SHOWCASE_ITEMS.length} components available
            </Typography>
          </View>
        </View>
      </Animated.View>
    </View>
  )
}

function Header({ children, onMenuPress, ...props }: { children: React.ReactNode; onMenuPress: () => void }) {
  return (
    <View
      {...props}
      className="border-primary/50 bg-primary/80 fixed left-0 right-0 top-0 z-50 flex-row items-center justify-center border-b backdrop-blur-xl"
    >
      <View style={{ maxWidth: 1200, width: "100%" }} className="h-14 flex-row items-center px-4">
        {/* Menu Button */}
        <Pressable
          onPress={onMenuPress}
          className="mr-2 h-8 w-8 items-center justify-center rounded-lg active:bg-secondary"
        >
          <Typography size="body" className="text-secondary">
            ☰
          </Typography>
        </Pressable>

        {/* Logo Section */}
        <View className="mr-6 h-full flex-row items-center gap-2">
          <View className="h-8 w-8 items-center justify-center overflow-hidden rounded-lg">
            <View className="scale-[0.25]">
              <AnimatedIcon />
            </View>
          </View>
          <Typography size="h3" weight="bold" className="text-lg tracking-tight">
            Finmori
          </Typography>
        </View>

        {/* Navigation Items */}
        <View className="h-full flex-row items-center gap-1">{children}</View>
      </View>
    </View>
  )
}

type HeaderLinkProps = React.ComponentProps<typeof Pressable> & {
  children: React.ReactNode
  isFocused?: boolean
}

const HeaderLink = React.forwardRef<View, HeaderLinkProps>(({ children, isFocused, ...props }, ref) => {
  return (
    <Pressable ref={ref} {...props} className="relative h-full items-center justify-center px-3">
      <Typography
        size="body-small"
        weight={isFocused ? "bold" : "medium"}
        className={isFocused ? "text-primary" : "text-secondary"}
        style={{ fontSize: 13 }}
      >
        {children}
      </Typography>
      {isFocused && <View className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-brand-solid" />}
    </Pressable>
  )
})

HeaderLink.displayName = "HeaderLink"
