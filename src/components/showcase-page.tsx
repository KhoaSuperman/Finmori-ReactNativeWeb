import { Stack, useRouter } from "expo-router"
import React, { createContext, useContext } from "react"
import { Pressable, ScrollView, View } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"

import { Typography } from "@/components/ui-kit/Typography"

/**
 * Context used by ShowcaseDrawer to inject onClose into ShowcasePage
 * without requiring each showcase file to be modified.
 */
const ShowcaseDrawerContext = createContext<(() => void) | null>(null)

export function ShowcaseDrawerProvider({
  onClose,
  children,
}: {
  onClose: () => void
  children: React.ReactNode
}) {
  return <ShowcaseDrawerContext.Provider value={onClose}>{children}</ShowcaseDrawerContext.Provider>
}

interface ShowcasePageProps {
  title: string
  description?: string
  children: React.ReactNode
  /** When provided directly, renders in drawer mode: no Stack.Screen, back button calls onClose */
  onClose?: () => void
}

export function ShowcasePage({ title, description, children, onClose: onCloseProp }: ShowcasePageProps) {
  const router = useRouter()
  const insets = useSafeAreaInsets()
  const drawerClose = useContext(ShowcaseDrawerContext)

  const onClose = onCloseProp ?? drawerClose
  const handleBack = onClose ?? (() => router.back())
  const isDrawerMode = !!onClose

  const platformPadding = {
    paddingTop: 20,
    paddingBottom: Math.max(insets.bottom, 40),
  }

  return (
    <>
      {!isDrawerMode && <Stack.Screen options={{ headerShown: false }} />}
      <View className="flex-1 bg-primary">
        {/* Sticky back button — always visible at the top */}
        <View
          className="bg-primary px-4 pt-5 pb-2"
          style={{ borderBottomWidth: 0 }}
        >
          <Pressable
            onPress={handleBack}
            className="flex-row items-center self-start rounded-full bg-secondary px-3 py-1.5 active:opacity-70"
          >
            <Typography size="body-small" weight="semibold" className="text-secondary">
              ← Back
            </Typography>
          </Pressable>
        </View>

        <ScrollView
          className="flex-1"
          contentContainerStyle={[{ alignItems: "center" }, platformPadding]}
          showsVerticalScrollIndicator={false}
        >
          <View style={{ maxWidth: 800, width: "100%" }} className="gap-8 px-4">
            <View className="gap-2">
              <Typography size="display" weight="bold" className="text-primary">
                {title}
              </Typography>
              <Typography size="body" className="text-secondary">
                {description}
              </Typography>
            </View>

            <View className="gap-8 pb-10">{children}</View>
          </View>
        </ScrollView>
      </View>
    </>
  )
}
