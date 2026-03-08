import { View } from "react-native"

import { ShowcasePage } from "@/components/showcase-page"
import { Typography } from "@/components/ui-kit/Typography"

const RADIUS_TOKENS = [
    { name: "none", value: "0px", className: "rounded-none" },
    { name: "xxs", value: "2px", className: "rounded-xxs" },
    { name: "xs", value: "4px", className: "rounded-xs" },
    { name: "sm", value: "6px", className: "rounded-sm" },
    { name: "md", value: "8px", className: "rounded-md" },
    { name: "lg", value: "10px", className: "rounded-lg" },
    { name: "xl", value: "12px", className: "rounded-xl" },
    { name: "2xl", value: "16px", className: "rounded-2xl" },
    { name: "3xl", value: "20px", className: "rounded-3xl" },
    { name: "4xl", value: "24px", className: "rounded-4xl" },
    { name: "full", value: "9999px", className: "rounded-full" },
] as const

function RadiusSwatch({ token }: { token: (typeof RADIUS_TOKENS)[number] }) {
    const isFullRadius = token.name === "full"

    return (
        <View className="flex-row items-center gap-4 border-b border-tertiary px-1 py-4">
            <View
                className={`h-16 w-16 shrink-0 border-2 border-brand bg-brand-primary ${token.className}`}
                style={isFullRadius ? { width: 64, height: 64 } : undefined}
            />
            <View className="flex-1 gap-0.5">
                <Typography weight="semibold" size="body-small">
                    {token.name}
                </Typography>
                <Typography size="caption" className="text-tertiary">
                    {token.value}
                </Typography>
                <View className="mt-1 self-start rounded-xs bg-secondary px-2 py-0.5">
                    <Typography size="tiny" className="text-tertiary font-mono">
                        {token.className}
                    </Typography>
                </View>
            </View>
        </View>
    )
}

function RadiusComparisonRow() {
    return (
        <View className="gap-3">
            <Typography size="h3" weight="bold" className="px-1">
                Visual comparison
            </Typography>
            <View className="flex-row flex-wrap gap-3 items-end">
                {RADIUS_TOKENS.filter((t) => t.name !== "full").map((token) => (
                    <View key={token.name} className="items-center gap-2">
                        <View
                            className={`h-12 w-12 bg-brand-solid ${token.className}`}
                        />
                        <Typography size="tiny" className="text-tertiary">
                            {token.name}
                        </Typography>
                    </View>
                ))}
                <View className="items-center gap-2">
                    <View className="h-12 w-12 bg-brand-solid rounded-full" />
                    <Typography size="tiny" className="text-tertiary">
                        full
                    </Typography>
                </View>
            </View>
        </View>
    )
}

function RadiusAppliedExample() {
    return (
        <View className="gap-3">
            <Typography size="h3" weight="bold" className="px-1">
                Applied examples
            </Typography>
            <View className="gap-4">
                <View className="flex-row items-center gap-3 rounded-xl border border-secondary bg-primary p-4">
                    <View className="h-10 w-10 rounded-full bg-brand-solid items-center justify-center">
                        <Typography size="body-small" weight="bold" className="text-white">
                            A
                        </Typography>
                    </View>
                    <View className="flex-1">
                        <Typography weight="semibold" size="body-small">Card with rounded-xl</Typography>
                        <Typography size="caption" className="text-tertiary">12px border radius</Typography>
                    </View>
                </View>

                <View className="flex-row flex-wrap gap-2">
                    <View className="rounded-full bg-brand-primary px-3 py-1.5">
                        <Typography size="caption" weight="semibold" className="text-brand-primary">
                            Pill badge (full)
                        </Typography>
                    </View>
                    <View className="rounded-md bg-secondary px-3 py-1.5">
                        <Typography size="caption" weight="semibold" className="text-secondary">
                            Tag (md)
                        </Typography>
                    </View>
                    <View className="rounded-sm bg-tertiary px-3 py-1.5">
                        <Typography size="caption" weight="semibold" className="text-secondary">
                            Chip (sm)
                        </Typography>
                    </View>
                </View>

                <View className="rounded-2xl bg-secondary p-4 gap-3">
                    <Typography weight="semibold" size="body-small">Container with rounded-2xl</Typography>
                    <View className="rounded-lg bg-primary p-3 border border-tertiary">
                        <Typography size="caption" className="text-tertiary">
                            Nested element with rounded-lg (10px)
                        </Typography>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default function RadiusShowcase() {
    return (
        <ShowcasePage
            title="Radius"
            description="Border radius tokens from the design system for consistent corner rounding across all components."
        >
            <RadiusComparisonRow />

            <View className="gap-3">
                <Typography size="h3" weight="bold" className="px-1">
                    Token reference
                </Typography>
                <View className="overflow-hidden rounded-xl border border-tertiary bg-primary px-3">
                    {RADIUS_TOKENS.map((token) => (
                        <RadiusSwatch key={token.name} token={token} />
                    ))}
                </View>
            </View>

            <RadiusAppliedExample />
        </ShowcasePage>
    )
}
