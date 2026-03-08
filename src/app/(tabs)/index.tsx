import { useRouter } from "expo-router"
import { Pressable, ScrollView, View } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"

import { Typography } from "@/components/ui-kit/Typography"
import { SHOWCASE_ITEMS } from "@/lib/showcase-items"

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
      <View style={{ maxWidth: 800, width: "100%" }} className="gap-8 px-4">
        <View className="gap-2 pt-10">
          <Typography size="display" weight="bold" className="text-primary">
            Design System
          </Typography>
          <Typography size="body" className="text-secondary">
            Browse tokens, components, and patterns that make up the Finmori design system.
          </Typography>
        </View>

        <View className="gap-3 pb-10">
          {SHOWCASE_ITEMS.map((item) => (
            <Pressable
              key={item.route}
              onPress={() => router.push(item.route as any)}
              className="flex-row items-center gap-4 rounded-2xl border border-tertiary bg-primary px-5 py-4 active:opacity-70"
            >
              <View className="flex-1 gap-1">
                <Typography size="body" weight="semibold" className="text-primary">
                  {item.title}
                </Typography>
                <Typography size="caption" className="text-tertiary">
                  {item.description}
                </Typography>
              </View>
              <Typography size="body" className="text-quaternary">
                →
              </Typography>
            </Pressable>
          ))}
        </View>
      </View>
    </ScrollView>
  )
}
