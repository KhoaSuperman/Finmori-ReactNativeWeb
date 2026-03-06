import { Tabs, TabList, TabTrigger, TabSlot, TabTriggerSlotProps, TabListProps } from "expo-router/ui"
import { SymbolView } from "expo-symbols"
import React from "react"
import { Pressable, View } from "react-native"

import { ExternalLink } from "./external-link"
import { ThemedText } from "./themed-text"
import { ThemedView } from "./themed-view"

import { useTheme } from "@/hooks/use-theme"

export default function AppTabs() {
  return (
    <Tabs>
      <TabSlot style={{ height: "100%" }} />
      <TabList asChild>
        <CustomTabList>
          <TabTrigger name="index" href="/" asChild>
            <TabButton>Home</TabButton>
          </TabTrigger>
          <TabTrigger name="explore" href="/explore" asChild>
            <TabButton>Explore</TabButton>
          </TabTrigger>
          <TabTrigger name="colors" href="/colors" asChild>
            <TabButton>Colors</TabButton>
          </TabTrigger>
          <TabTrigger name="typography" href="/typography" asChild>
            <TabButton>Typography</TabButton>
          </TabTrigger>
        </CustomTabList>
      </TabList>
    </Tabs>
  )
}

export function TabButton({ children, isFocused, ...props }: TabTriggerSlotProps) {
  return (
    <Pressable {...props} className="active:opacity-70">
      <ThemedView type={isFocused ? "backgroundSelected" : "backgroundElement"} className="rounded-2xl px-4 py-1">
        <ThemedText type="small" variant={isFocused ? "primary" : "secondary"}>
          {children}
        </ThemedText>
      </ThemedView>
    </Pressable>
  )
}

export function CustomTabList(props: TabListProps) {
  const theme = useTheme()

  return (
    <View {...props} className="absolute w-full flex-row items-center justify-center px-2 py-3">
      <ThemedView
        type="backgroundElement"
        className="max-w-[800px] grow flex-row flex-wrap items-center gap-1.5 rounded-3xl px-3 py-2"
      >
        <ThemedText type="smallBold" className="mr-auto">
          Expo Starter
        </ThemedText>

        {props.children}

        <ExternalLink href="https://docs.expo.dev" asChild>
          <Pressable className="ml-auto flex-row items-center justify-center gap-1">
            <ThemedText type="link">Docs</ThemedText>
            <SymbolView tintColor={theme.text} name={{ ios: "arrow.up.right.square", web: "link" }} size={12} />
          </Pressable>
        </ExternalLink>
      </ThemedView>
    </View>
  )
}
