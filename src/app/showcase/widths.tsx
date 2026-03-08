import { View } from "react-native"

import { ShowcasePage } from "@/components/showcase-page"
import { Typography } from "@/components/ui-kit/Typography"

const WIDTH_TOKENS = [
    { name: "xxs", value: 320 },
    { name: "xs", value: 384 },
    { name: "sm", value: 480 },
    { name: "md", value: 560 },
    { name: "lg", value: 640 },
    { name: "xl", value: 768 },
    { name: "2xl", value: 1024 },
    { name: "3xl", value: 1280 },
    { name: "4xl", value: 1440 },
    { name: "5xl", value: 1600 },
    { name: "6xl", value: 1920 },
    { name: "paragraph-max", value: 720 },
] as const

const SCALE_TOKENS = WIDTH_TOKENS.filter((t) => t.name !== "paragraph-max")
const MAX_BAR_VALUE = 1920

function WidthBar({ token }: { token: (typeof WIDTH_TOKENS)[number] }) {
    const percentage = (token.value / MAX_BAR_VALUE) * 100

    return (
        <View className="gap-1.5 border-b border-tertiary py-3 px-1">
            <View className="flex-row items-center justify-between">
                <Typography weight="semibold" size="body-small">
                    {token.name}
                </Typography>
                <Typography size="caption" className="text-tertiary font-mono">
                    {token.value}px
                </Typography>
            </View>
            <View className="h-2.5 w-full rounded-full bg-secondary overflow-hidden">
                <View
                    className="h-full rounded-full bg-brand-solid"
                    style={{ width: `${percentage}%` }}
                />
            </View>
        </View>
    )
}

function WidthScaleChart() {
    return (
        <View className="gap-3">
            <Typography size="h3" weight="bold" className="px-1">
                Scale
            </Typography>
            <View className="overflow-hidden rounded-xl border border-tertiary bg-primary px-3">
                {SCALE_TOKENS.map((token) => (
                    <WidthBar key={token.name} token={token} />
                ))}
            </View>
        </View>
    )
}

function WidthTokenReference() {
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
                    <View className="w-[100px] items-end">
                        <Typography size="caption" weight="bold" className="text-tertiary uppercase tracking-wider">
                            Class
                        </Typography>
                    </View>
                </View>
                {WIDTH_TOKENS.map((token) => (
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
                        <View className="w-[100px] items-end">
                            <View className="rounded-xs bg-secondary px-2 py-0.5">
                                <Typography size="tiny" className="text-tertiary font-mono">
                                    w-{token.name}
                                </Typography>
                            </View>
                        </View>
                    </View>
                ))}
            </View>
            <Typography size="caption" className="text-tertiary px-1">
                Use with width (w-sm, w-xl) and max-width (max-w-md, max-w-paragraph-max) utilities.
                Tailwind numeric classes (w-64, w-96) also remain available.
            </Typography>
        </View>
    )
}

function BreakpointComparison() {
    const highlights = [
        { name: "xxs", value: 320, label: "Small phone" },
        { name: "xs", value: 384, label: "Standard phone" },
        { name: "sm", value: 480, label: "Large phone" },
        { name: "md", value: 560, label: "Small tablet" },
        { name: "lg", value: 640, label: "Tablet portrait" },
        { name: "xl", value: 768, label: "Tablet landscape" },
    ] as const

    return (
        <View className="gap-3">
            <Typography size="h3" weight="bold" className="px-1">
                Common breakpoints
            </Typography>
            <View className="gap-3">
                {highlights.map((bp) => {
                    const percentage = (bp.value / MAX_BAR_VALUE) * 100
                    return (
                        <View key={bp.name} className="rounded-lg border border-tertiary bg-primary overflow-hidden">
                            <View className="flex-row items-center justify-between px-4 py-3">
                                <View className="gap-0.5">
                                    <Typography weight="semibold" size="body-small">
                                        {bp.label}
                                    </Typography>
                                    <Typography size="caption" className="text-tertiary">
                                        w-{bp.name}
                                    </Typography>
                                </View>
                                <View className="rounded-xs bg-secondary px-2 py-0.5">
                                    <Typography size="caption" weight="semibold" className="text-secondary font-mono">
                                        {bp.value}px
                                    </Typography>
                                </View>
                            </View>
                            <View className="px-4 pb-3">
                                <View className="h-2 w-full rounded-full bg-secondary overflow-hidden">
                                    <View
                                        className="h-full rounded-full bg-brand-primary"
                                        style={{ width: `${percentage}%` }}
                                    />
                                </View>
                            </View>
                        </View>
                    )
                })}
            </View>
        </View>
    )
}

function ContainerDemo() {
    const containers = [
        { name: "paragraph-max", value: 720, desc: "Optimal reading width for body text" },
        { name: "sm", value: 480, desc: "Narrow content column" },
        { name: "md", value: 560, desc: "Medium content area" },
    ] as const

    return (
        <View className="gap-3">
            <Typography size="h3" weight="bold" className="px-1">
                Applied examples
            </Typography>
            <View className="gap-5">
                {containers.map((c) => (
                    <View key={c.name} className="gap-2">
                        <Typography size="caption" weight="semibold" className="text-secondary px-1">
                            max-w-{c.name} ({c.value}px)
                        </Typography>
                        <View className="rounded-lg border border-tertiary bg-secondary p-4" style={{ maxWidth: c.value }}>
                            <View className="gap-2">
                                <View className="h-3 w-3/4 rounded-xxs bg-brand-solid/30" />
                                <View className="h-3 w-full rounded-xxs bg-brand-solid/20" />
                                <View className="h-3 w-5/6 rounded-xxs bg-brand-solid/20" />
                                <View className="h-3 w-2/3 rounded-xxs bg-brand-solid/15" />
                            </View>
                            <Typography size="tiny" className="text-tertiary mt-3">
                                {c.desc}
                            </Typography>
                        </View>
                    </View>
                ))}
            </View>
        </View>
    )
}

export default function WidthsShowcase() {
    return (
        <ShowcasePage
            title="Widths"
            description="Width tokens define consistent container and layout sizes from mobile to desktop viewports."
        >
            <WidthScaleChart />
            <WidthTokenReference />
            <BreakpointComparison />
            <ContainerDemo />
        </ShowcasePage>
    )
}
