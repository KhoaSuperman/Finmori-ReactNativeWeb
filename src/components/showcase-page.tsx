import { Stack, useRouter } from "expo-router"
import React from "react"
import { Pressable, ScrollView, View } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"

import { Typography } from "@/components/ui-kit/Typography"

interface ShowcasePageProps {
    title: string
    description: string
    children: React.ReactNode
}

export function ShowcasePage({ title, description, children }: ShowcasePageProps) {
    const router = useRouter()
    const insets = useSafeAreaInsets()

    const platformPadding = {
        paddingTop: 20,
        paddingBottom: Math.max(insets.bottom, 40),
    }

    return (
        <>
            <Stack.Screen options={{ headerShown: false }} />
            <ScrollView
                className="flex-1 bg-primary"
                contentContainerStyle={[{ alignItems: "center" }, platformPadding]}
                showsVerticalScrollIndicator={false}
            >
                <View style={{ maxWidth: 800, width: "100%" }} className="gap-8 px-4">
                    <View className="gap-2 pt-6">
                        <Pressable
                            onPress={() => router.back()}
                            className="flex-row items-center self-start mb-4 bg-secondary px-3 py-1.5 rounded-full active:opacity-70"
                        >
                            <Typography size="body-small" weight="semibold" className="text-secondary">
                                ← Back
                            </Typography>
                        </Pressable>

                        <Typography size="display" weight="bold" className="text-primary">
                            {title}
                        </Typography>
                        <Typography size="body" className="text-secondary">
                            {description}
                        </Typography>
                    </View>

                    <View className="gap-8 pb-10">
                        {children}
                    </View>
                </View>
            </ScrollView>
        </>
    )
}
