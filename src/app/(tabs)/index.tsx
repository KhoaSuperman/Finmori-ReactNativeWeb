import { useRouter } from "expo-router"
import { Platform, Pressable, ScrollView, View } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"

import { Card } from "@/components/ui-kit/Card"
import { Typography } from "@/components/ui-kit/Typography"
import { WebBadge } from "@/components/web-badge"

function NavCard({
  title,
  description,
  onPress
}: {
  title: string;
  description: string;
  onPress: () => void
}) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => ({
        opacity: pressed ? 0.8 : 1,
        transform: [{ scale: pressed ? 0.98 : 1 }]
      })}
    >
      <Card variant="elevated" title={title}>
        <Typography size="body-small" className="text-secondary mt-1">
          {description}
        </Typography>
        <View className="mt-4 flex-row items-center">
          <Typography size="caption" className="text-brand-primary font-bold">
            Explore Details →
          </Typography>
        </View>
      </Card>
    </Pressable>
  )
}

const CORE_COMPONENTS = [
  {
    title: "Typography",
    description: "Scale, font weights, and semantic variants for consistent text rendering.",
    route: "/showcase/typography",
  },
  {
    title: "Colors",
    description: "Primitive and semantic color tokens for beautiful interfaces.",
    route: "/showcase/colors",
  },
  {
    title: "Primitive Colors",
    description: "The foundational 375-token color palette across 32 scales that underpins all semantic tokens.",
    route: "/showcase/primitive-colors",
  },
  {
    title: "Cards",
    description: "Elevated, outlined, and filled containers for structured content layouts.",
    route: "/showcase/card",
  },
  {
    title: "Radius",
    description: "Border radius tokens for consistent corner rounding across components.",
    route: "/showcase/radius",
  },
  {
    title: "Shadows",
    description: "Elevation and depth tokens for consistent visual hierarchy across components.",
    route: "/showcase/shadows",
  },
  {
    title: "Spacing",
    description: "Spacing tokens for consistent padding, margin, and gap across layouts.",
    route: "/showcase/spacing",
  },
  {
    title: "Widths",
    description: "Width tokens for consistent container and layout sizes across viewports.",
    route: "/showcase/widths",
  },
  {
    title: "Gradients",
    description: "Linear gradient tokens built from the Gray primitive palette for rich backgrounds and surfaces.",
    route: "/showcase/gradients",
  },
  {
    title: "Containers",
    description: "Control how content is bounded and padded across different viewport sizes.",
    route: "/showcase/containers",
  },
] as const

export default function HomeScreen() {
  const insets = useSafeAreaInsets()
  const router = useRouter()

  const platformPadding = {
    paddingTop: Math.max(insets.top, 20),
    paddingBottom: Math.max(insets.bottom, 40),
  }

  return (
    <ScrollView
      className="flex-1 bg-primary"
      contentContainerStyle={[{ alignItems: "center" }, platformPadding]}
      showsVerticalScrollIndicator={false}
    >
      <View style={{ maxWidth: 800, width: "100%" }} className="gap-10 px-6">

        {/* Premium Hero Header */}
        <View className="items-center py-12 relative">
          {/* Background Ambient Glow */}
          <View className="absolute inset-x-0 top-1/2 -translate-y-1/2 items-center justify-center -z-10">
            <View className="w-[200px] h-[200px] bg-brand-secondary/10 rounded-full blur-[60px]" />
            <View className="absolute w-[100px] h-[100px] bg-brand-primary/5 rounded-full blur-[30px]" />
          </View>

          <View className="items-center gap-3">
            <Typography size="display" weight="bold" className="text-center tracking-tight leading-[1.1]">
              Finmori UI
            </Typography>
            <Typography size="body" weight="medium" className="text-secondary text-center max-w-[400px] leading-relaxed">
              The high-end React Native design system for world-class mobile and web experiences.
            </Typography>
          </View>

          <View className="flex-row gap-3 mt-10">
            <Pressable className="px-6 py-2.5 bg-brand-solid rounded-full shadow-lg shadow-brand-primary/20 active:opacity-90">
              <Typography size="body-small" weight="bold" className="text-white">Get Started</Typography>
            </Pressable>
            <Pressable className="px-6 py-2.5 border border-primary rounded-full active:bg-secondary">
              <Typography size="body-small" weight="semibold">Component Lab</Typography>
            </Pressable>
          </View>
        </View>

        {/* Directory Section */}
        <View nativeID="core-components" className="gap-6">
          <View className="px-1 flex-row items-center justify-between border-b border-primary/50 pb-3">
            <Typography size="h3" weight="bold" className="text-xl">Core Components</Typography>
            <View className="bg-secondary px-2 py-0.5 rounded-full">
              <Typography size="tiny" weight="bold" className="text-tertiary">{CORE_COMPONENTS.length} Total</Typography>
            </View>
          </View>

          <View className="gap-3">
            {CORE_COMPONENTS.map((component) => (
              <NavCard
                key={component.title}
                title={component.title}
                description={component.description}
                onPress={() => router.push(component.route as any)}
              />
            ))}
          </View>
        </View>

        {/* Developer Info Section */}
        <Card variant="filled" className="bg-surface-muted/20 border border-primary/10">
          <Typography size="caption" weight="bold" className="text-tertiary uppercase tracking-[0.2em] mb-5 text-[10px]">
            Project Environment
          </Typography>
          <View className="gap-3">
            <View className="flex-row justify-between items-center">
              <Typography size="body-small" weight="semibold" className="text-secondary text-[12px]">Platform</Typography>
              <Typography size="body-small" className="text-primary font-mono capitalize px-1.5 py-0.5 bg-secondary rounded-md text-[11px]">{Platform.OS}</Typography>
            </View>
            <View className="h-[1px] bg-border-primary/20" />
            <View className="flex-row justify-between items-center">
              <Typography size="body-small" weight="semibold" className="text-secondary text-[12px]">Entry Point</Typography>
              <Typography size="body-small" className="text-primary font-mono text-[11px]">src/app/index.tsx</Typography>
            </View>
          </View>
        </Card>

        {Platform.OS === "web" && (
          <View className="items-center py-8 opacity-40">
            <WebBadge />
          </View>
        )}
      </View>
    </ScrollView>
  )
}
