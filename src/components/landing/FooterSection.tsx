import { Linking, Pressable, View } from "react-native"

import { Typography } from "@/components/ui-kit/Typography"

const TECH_BADGES = [
  { label: "React Native", url: "https://reactnative.dev" },
  { label: "Expo SDK 55", url: "https://expo.dev" },
  { label: "NativeWind v4", url: "https://www.nativewind.dev" },
  { label: "TailwindCSS", url: "https://tailwindcss.com" },
  { label: "TypeScript", url: "https://www.typescriptlang.org" },
]

export function FooterSection() {
  const handleGitHub = () => {
    Linking.openURL("https://github.com/KhoaSuperman/Finmori-ReactNativeWeb")
  }

  return (
    <View className="mt-4 border-t border-tertiary bg-secondary px-4 py-12">
      <View className="items-center gap-6">
        {/* Description */}
        <View className="items-center gap-2">
          <Typography size="body" weight="semibold" className="text-primary">
            Finmori ReactNative
          </Typography>
          <Typography size="caption" className="max-w-xs text-center text-secondary">
            An open source design system built with React Native Web, Expo, and NativeWind. Free to use and extend.
          </Typography>
        </View>

        {/* Tech stack badges */}
        <View className="flex-row flex-wrap items-center justify-center gap-2">
          {TECH_BADGES.map((badge) => (
            <Pressable
              key={badge.label}
              onPress={() => Linking.openURL(badge.url)}
              className="rounded-full border border-tertiary bg-primary px-3 py-1 active:opacity-70"
            >
              <Typography size="caption" weight="medium" className="text-secondary">
                {badge.label}
              </Typography>
            </Pressable>
          ))}
        </View>

        {/* GitHub link */}
        <Pressable
          onPress={handleGitHub}
          className="flex-row items-center gap-2 rounded-full border border-tertiary px-5 py-2 active:opacity-70"
        >
          <Typography size="caption" weight="medium" className="text-secondary">
            ★ Star on GitHub
          </Typography>
        </Pressable>

        {/* License */}
        <Typography size="caption" className="text-quaternary">
          MIT License · Open Source
        </Typography>
      </View>
    </View>
  )
}
