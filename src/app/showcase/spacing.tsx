import { View } from "react-native"

import { ShowcasePage } from "@/components/showcase-page"
import { Typography } from "@/components/ui-kit/Typography"

const SPACING_TOKENS = [
    { name: "none", value: 0, twNumeric: "0" },
    { name: "xxs", value: 2, twNumeric: "0.5" },
    { name: "xs", value: 4, twNumeric: "1" },
    { name: "sm", value: 6, twNumeric: "1.5" },
    { name: "md", value: 8, twNumeric: "2" },
    { name: "lg", value: 12, twNumeric: "3" },
    { name: "xl", value: 16, twNumeric: "4" },
    { name: "2xl", value: 20, twNumeric: "5" },
    { name: "3xl", value: 24, twNumeric: "6" },
    { name: "4xl", value: 32, twNumeric: "8" },
    { name: "5xl", value: 40, twNumeric: "10" },
    { name: "6xl", value: 48, twNumeric: "12" },
    { name: "7xl", value: 64, twNumeric: "16" },
    { name: "8xl", value: 80, twNumeric: "20" },
    { name: "9xl", value: 96, twNumeric: "24" },
    { name: "10xl", value: 128, twNumeric: "32" },
    { name: "11xl", value: 160, twNumeric: "40" },
] as const

const BAR_MAX_WIDTH = 260

function SpacingBar({ token }: { token: (typeof SPACING_TOKENS)[number] }) {
    const barWidth = token.value === 0 ? 1 : Math.min(token.value, BAR_MAX_WIDTH)

    return (
        <View className="flex-row items-center gap-3 border-b border-tertiary py-3 px-1">
            <View className="w-[52px] shrink-0">
                <Typography weight="semibold" size="body-small">
                    {token.name}
                </Typography>
            </View>
            <View className="flex-1 justify-center">
                <View
                    className="h-3 rounded-xxs bg-brand-solid"
                    style={{ width: barWidth }}
                />
            </View>
            <View className="w-[44px] shrink-0 items-end">
                <Typography size="caption" className="text-tertiary font-mono">
                    {token.value}px
                </Typography>
            </View>
        </View>
    )
}

function SpacingScaleChart() {
    return (
        <View className="gap-3">
            <Typography size="h3" weight="bold" className="px-1">
                Scale
            </Typography>
            <View className="overflow-hidden rounded-xl border border-tertiary bg-primary px-3">
                {SPACING_TOKENS.map((token) => (
                    <SpacingBar key={token.name} token={token} />
                ))}
            </View>
        </View>
    )
}

function SpacingTokenReference() {
    return (
        <View className="gap-3">
            <Typography size="h3" weight="bold" className="px-1">
                Token reference
            </Typography>
            <View className="overflow-hidden rounded-xl border border-tertiary bg-primary">
                <View className="flex-row border-b border-tertiary bg-secondary px-4 py-2.5">
                    <View className="flex-1">
                        <Typography size="caption" weight="bold" className="text-tertiary uppercase tracking-wider">
                            Token
                        </Typography>
                    </View>
                    <View className="w-[60px] items-end">
                        <Typography size="caption" weight="bold" className="text-tertiary uppercase tracking-wider">
                            Value
                        </Typography>
                    </View>
                    <View className="w-[80px] items-end">
                        <Typography size="caption" weight="bold" className="text-tertiary uppercase tracking-wider">
                            Class
                        </Typography>
                    </View>
                </View>
                {SPACING_TOKENS.map((token) => (
                    <View key={token.name} className="flex-row items-center border-b border-tertiary px-4 py-3">
                        <View className="flex-1">
                            <Typography weight="semibold" size="body-small">
                                {token.name}
                            </Typography>
                        </View>
                        <View className="w-[60px] items-end">
                            <Typography size="caption" className="text-tertiary font-mono">
                                {token.value}px
                            </Typography>
                        </View>
                        <View className="w-[80px] items-end">
                            <View className="rounded-xs bg-secondary px-2 py-0.5">
                                <Typography size="tiny" className="text-tertiary font-mono">
                                    {token.name}
                                </Typography>
                            </View>
                        </View>
                    </View>
                ))}
            </View>
            <Typography size="caption" className="text-tertiary px-1">
                Use with any spacing utility: p-lg, m-xl, gap-3xl, space-x-md, etc.
                Tailwind numeric classes (p-4, gap-6) also remain available.
            </Typography>
        </View>
    )
}

function GapDemo() {
    return (
        <View className="gap-3">
            <Typography size="h3" weight="bold" className="px-1">
                Gap examples
            </Typography>
            <View className="gap-5">
                {(["xs", "md", "xl", "3xl"] as const).map((size) => {
                    const token = SPACING_TOKENS.find((t) => t.name === size)!
                    return (
                        <View key={size} className="gap-2">
                            <Typography size="caption" weight="semibold" className="text-secondary px-1">
                                gap-{size} ({token.value}px)
                            </Typography>
                            <View
                                className="flex-row flex-wrap rounded-lg border border-tertiary bg-primary p-3"
                                style={{ gap: token.value }}
                            >
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <View
                                        key={i}
                                        className="h-9 w-9 rounded-sm bg-brand-solid items-center justify-center"
                                    >
                                        <Typography size="tiny" weight="bold" className="text-white">
                                            {i + 1}
                                        </Typography>
                                    </View>
                                ))}
                            </View>
                        </View>
                    )
                })}
            </View>
        </View>
    )
}

function PaddingDemo() {
    return (
        <View className="gap-3">
            <Typography size="h3" weight="bold" className="px-1">
                Padding examples
            </Typography>
            <View className="gap-4">
                {(["xs", "md", "xl", "3xl", "5xl"] as const).map((size) => {
                    const token = SPACING_TOKENS.find((t) => t.name === size)!
                    return (
                        <View key={size} className="rounded-lg border border-tertiary bg-secondary" style={{ padding: token.value }}>
                            <View className="rounded-sm bg-brand-primary items-center py-2">
                                <Typography size="caption" weight="semibold" className="text-brand-primary">
                                    p-{size} ({token.value}px)
                                </Typography>
                            </View>
                        </View>
                    )
                })}
            </View>
        </View>
    )
}

export default function SpacingShowcase() {
    return (
        <ShowcasePage
            title="Spacing"
            description="Spacing tokens define consistent distances for padding, margin, and gap across all components."
        >
            <SpacingScaleChart />
            <SpacingTokenReference />
            <GapDemo />
            <PaddingDemo />
        </ShowcasePage>
    )
}
