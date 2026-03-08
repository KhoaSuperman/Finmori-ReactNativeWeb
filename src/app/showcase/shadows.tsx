import { ScrollView, View } from "react-native";

import { ShowcasePage } from "@/components/showcase-page";
import { Typography } from "@/components/ui-kit/Typography";

const SHADOW_TOKENS = [
    { name: "shadow-xs", className: "shadow-xs", layers: 1 },
    { name: "shadow-sm", className: "shadow-sm", layers: 2 },
    { name: "shadow-md", className: "shadow-md", layers: 2 },
    { name: "shadow-lg", className: "shadow-lg", layers: 3 },
    { name: "shadow-xl", className: "shadow-xl", layers: 3 },
    { name: "shadow-2xl", className: "shadow-2xl", layers: 2 },
    { name: "shadow-3xl", className: "shadow-3xl", layers: 2 },
] as const

function ShadowCard({ token, size = "large" }: { token: (typeof SHADOW_TOKENS)[number]; size?: "large" | "small" }) {
    const isLarge = size === "large"

    return (
        <View
            className={`
                rounded-xl border border-black/[0.05] bg-primary
                ${isLarge ? "h-64 w-64 p-6" : "h-40 w-40 p-4"}
                ${token.className}
            `}
        >
            <View className="flex-1">
                <Typography weight="medium" size="body-small" className="text-primary opacity-60">
                    {token.name}
                </Typography>
            </View>
            <View className="flex-row items-center gap-2">
                <View className="rounded-full bg-brand-primary/10 px-2 py-0.5">
                    <Typography size="tiny" weight="bold" className="text-brand-primary">
                        {token.layers} {token.layers === 1 ? 'Layer' : 'Layers'}
                    </Typography>
                </View>
            </View>
        </View>
    )
}

function ShadowSwatch({ token }: { token: (typeof SHADOW_TOKENS)[number] }) {
    return (
        <View className="flex-row items-center gap-4 border-b border-tertiary px-1 py-6">
            <View className={`h-24 w-24 shrink-0 rounded-xl bg-primary ${token.className} border border-black/[0.05]`} />
            <View className="flex-1 gap-1">
                <Typography weight="semibold" size="body-small">
                    {token.name}
                </Typography>
                <Typography size="caption" className="text-tertiary">
                    Verification: {token.layers} shadow layers
                </Typography>
                <View className="mt-1 self-start rounded-xs bg-secondary px-2 py-0.5">
                    <Typography size="tiny" className="font-mono text-tertiary">
                        {token.className}
                    </Typography>
                </View>
            </View>
        </View>
    )
}

function ShadowGrid() {
    return (
        <View className="gap-6">
            <Typography size="h3" weight="bold" className="px-1">
                Visual Comparison (Figma Style)
            </Typography>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 32, paddingVertical: 32, gap: 32, marginBottom: 32 }}
            >
                {SHADOW_TOKENS.map((token) => (
                    <ShadowCard key={token.name} token={token} />
                ))}
            </ScrollView>
        </View>
    )
}

function ShadowAppliedExample() {
    return (
        <View className="mt-4 gap-6">
            <Typography size="h3" weight="bold" className="px-1">
                Applied Examples
            </Typography>
            <View className="gap-6 px-1">
                {/* Simple Card */}
                <View className="rounded-xl border border-black/[0.05] bg-primary p-6 shadow-md">
                    <Typography weight="bold" size="h3" className="mb-2">
                        Product Card
                    </Typography>
                    <Typography size="body-small" className="text-secondary">
                        This card uses shadow-md for a subtle lift from the background.
                    </Typography>
                </View>

                {/* Elevated Element */}
                <View className="items-center rounded-2xl border border-black/[0.05] bg-primary p-8 shadow-xl">
                    <Typography weight="bold" size="h3" className="mb-2 text-brand-primary">
                        Featured Promotion
                    </Typography>
                    <Typography size="body-small" className="mb-6 text-center text-secondary">
                        Using shadow-xl to emphasize hierarchy and draw user attention.
                    </Typography>
                    <View className="rounded-lg bg-brand-solid px-6 py-3 shadow-sm">
                        <Typography weight="bold" className="text-white">
                            Get Started
                        </Typography>
                    </View>
                </View>

                {/* Floating Action Button Style */}
                <View className="flex-row justify-end">
                    <View className="h-14 w-14 items-center justify-center rounded-full bg-brand-solid shadow-lg">
                        <Typography weight="bold" size="h3" className="text-white">
                            +
                        </Typography>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default function ShadowsShowcase() {
    return (
        <ShowcasePage
            title="Shadows"
            description="Elevation and depth tokens for consistent visual hierarchy across the application."
        >
            <ShadowGrid />

            <View className="mt-4 gap-3">
                <Typography size="h3" weight="bold" className="px-1">
                    Token Reference
                </Typography>
                <View className="overflow-hidden rounded-xl border border-tertiary bg-primary px-3">
                    {SHADOW_TOKENS.map((token) => (
                        <ShadowSwatch key={token.name} token={token} />
                    ))}
                </View>
            </View>

            <ShadowAppliedExample />
        </ShowcasePage>
    )
}
