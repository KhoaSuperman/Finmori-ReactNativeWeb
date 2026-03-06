import { Link } from "expo-router"
import { TabList, Tabs, TabSlot, TabTrigger } from "expo-router/ui"
import React from "react"
import { Pressable, View } from "react-native"

import { AnimatedIcon } from "./animated-icon"
import { Typography } from "./ui-kit/Typography"

export default function AppTabs() {
  return (
    <Tabs className="flex-1">
      <TabList asChild>
        <Header>
          <TabTrigger name="index" href="/" asChild>
            <HeaderLink>Home</HeaderLink>
          </TabTrigger>
          <Link href="/#core-components" asChild>
            <HeaderLink>Showcase</HeaderLink>
          </Link>
        </Header>
      </TabList>
      <TabSlot className="flex-1" />
    </Tabs>
  )
}

function Header({ children, ...props }: { children: React.ReactNode }) {
  return (
    <View
      {...props}
      className="fixed top-0 left-0 right-0 z-50 flex-row items-center justify-center border-b border-primary/50 bg-primary/80 backdrop-blur-xl"
    >
      <View style={{ maxWidth: 1200, width: "100%" }} className="flex-row items-center h-14 px-4">
        {/* Logo Section */}
        <View className="flex-row items-center gap-2 mr-6 h-full">
          <View className="w-8 h-8 items-center justify-center overflow-hidden rounded-lg">
            <View className="scale-[0.25]">
              <AnimatedIcon />
            </View>
          </View>
          <Typography size="h3" weight="bold" className="tracking-tight text-lg">Finmori</Typography>
        </View>

        {/* Navigation Items */}
        <View className="flex-row items-center gap-1 h-full">
          {children}
        </View>

        <View className="flex-1" />

        {/* Action Section */}
        <Pressable className="px-4 py-1.5 bg-brand-solid rounded-full active:opacity-90">
          <Typography size="caption" weight="bold" className="text-white text-[11px]">Get Started</Typography>
        </Pressable>
      </View>
    </View>
  )
}

type HeaderLinkProps = React.ComponentProps<typeof Pressable> & {
  children: React.ReactNode;
  isFocused?: boolean;
}

const HeaderLink = React.forwardRef<View, HeaderLinkProps>(
  ({ children, isFocused, ...props }, ref) => {
    return (
      <Pressable
        ref={ref}
        {...props}
        className="h-full items-center justify-center px-3 relative"
      >
        <Typography
          size="body-small"
          weight={isFocused ? "bold" : "medium"}
          className={isFocused ? "text-primary" : "text-secondary"}
          style={{ fontSize: 13 }}
        >
          {children}
        </Typography>
        {isFocused && (
          <View className="absolute bottom-0 left-3 right-3 h-0.5 bg-brand-solid rounded-full" />
        )}
      </Pressable>
    )
  }
)

HeaderLink.displayName = "HeaderLink"
