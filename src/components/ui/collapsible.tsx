import { SymbolView } from "expo-symbols"
import { PropsWithChildren, useState } from "react"
import { Pressable } from "react-native"
import Animated, { FadeIn } from "react-native-reanimated"

import { ThemedView } from "@/components/themed-view"
import { Typography } from "@/components/ui-kit/Typography"
import { useTheme } from "@/hooks/use-theme"

export function Collapsible({ children, title }: PropsWithChildren & { title: string }) {
  const [isOpen, setIsOpen] = useState(false)
  const theme = useTheme()

  return (
    <ThemedView type="background">
      <Pressable className="flex-row items-center gap-2 active:opacity-70" onPress={() => setIsOpen((value) => !value)}>
        <ThemedView type="backgroundElement" className="h-6 w-6 items-center justify-center rounded-xl">
          <SymbolView
            name={{ ios: "chevron.right", android: "chevron_right", web: "chevron_right" }}
            size={14}
            weight="bold"
            tintColor={theme.text}
            style={{ transform: [{ rotate: isOpen ? "-90deg" : "90deg" }] }}
          />
        </ThemedView>

        <Typography size="body-small" weight="medium">{title}</Typography>
      </Pressable>
      {isOpen && (
        <Animated.View entering={FadeIn.duration(200)}>
          <ThemedView type="backgroundElement" className="ml-6 mt-4 rounded-2xl p-6">
            {children}
          </ThemedView>
        </Animated.View>
      )}
    </ThemedView>
  )
}
