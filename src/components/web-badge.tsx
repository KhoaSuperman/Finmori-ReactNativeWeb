import { Image } from "expo-image"
import { version } from "expo/package.json"
import React from "react"
import { useColorScheme } from "react-native"

import { Typography } from "@/components/ui-kit/Typography"
import { ThemedView } from "./themed-view"

export function WebBadge() {
  const scheme = useColorScheme()

  return (
    <ThemedView className="items-center gap-2 p-8">
      <Typography size="caption" className="font-mono text-center text-secondary">
        v{version}
      </Typography>
      <Image
        source={
          scheme === "dark"
            ? require("@/assets/images/expo-badge-white.png")
            : require("@/assets/images/expo-badge.png")
        }
        style={{ width: 123, aspectRatio: 123 / 24 }}
      />
    </ThemedView>
  )
}
