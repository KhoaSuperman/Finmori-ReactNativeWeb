import { Image, Linking, Pressable, View } from "react-native"

import { Typography } from "@/components/ui-kit/Typography"

interface HeroSectionProps {
  onExplorePress: () => void
}

export function HeroSection({ onExplorePress }: HeroSectionProps) {
  const handleGitHub = () => {
    Linking.openURL("https://github.com/KhoaSuperman/Finmori-ReactNativeWeb")
  }

  return (
    <View className="items-center gap-8 px-4 py-16">
      {/* Logo */}
      <View className="items-center gap-4">
        <Image
          source={require("@/assets/images/logo-glow.png")}
          style={{ width: 80, height: 80 }}
          resizeMode="contain"
        />
        <View className="items-center gap-2">
          <Typography size="display" weight="bold" className="text-center text-primary">
            Finmori ReactNative
          </Typography>
          <Typography size="body" className="max-w-sm text-center text-secondary">
            A complete design system for React Native Web. Open source, production-ready components.
          </Typography>
        </View>
      </View>

      {/* Tech badges */}
      <View className="flex-row flex-wrap items-center justify-center gap-2">
        {["React Native", "Expo SDK 55", "NativeWind v4", "TypeScript"].map((badge) => (
          <View
            key={badge}
            className="rounded-full border border-tertiary bg-secondary px-3 py-1"
          >
            <Typography size="caption" weight="medium" className="text-secondary">
              {badge}
            </Typography>
          </View>
        ))}
      </View>

      {/* CTAs */}
      <View className="flex-row flex-wrap items-center justify-center gap-3">
        <Pressable
          onPress={handleGitHub}
          className="flex-row items-center gap-2 rounded-2xl bg-brand-500 px-6 py-3 active:opacity-80"
        >
          <Typography size="body" weight="semibold" className="text-base-white">
            View on GitHub
          </Typography>
        </Pressable>
        <Pressable
          onPress={onExplorePress}
          className="flex-row items-center gap-2 rounded-2xl border border-tertiary bg-secondary px-6 py-3 active:opacity-70"
        >
          <Typography size="body" weight="semibold" className="text-primary">
            Explore Components
          </Typography>
        </Pressable>
      </View>
    </View>
  )
}
