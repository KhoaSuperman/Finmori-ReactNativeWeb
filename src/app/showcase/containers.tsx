import { ShowcasePage } from "@/components/showcase-page"
import { Card } from "@/components/ui-kit/Card"
import { Typography } from "@/components/ui-kit/Typography"
import { View } from "react-native"

const CONTAINER_TOKENS = [
    {
        name: "container-padding-mobile",
        value: "16px",
        description: "Standard padding inset for mobile viewports.",
        className: "px-container-padding-mobile",
    },
    {
        name: "container-padding-desktop",
        value: "32px",
        description: "Enhanced padding inset for desktop viewports.",
        className: "px-container-padding-desktop",
    },
    {
        name: "container-max-width-desktop",
        value: "1280px",
        description: "Maximum width limit for page content on large displays.",
        className: "max-w-container-max-width-desktop",
    },
] as const

export default function ContainersShowcase() {
    return (
        <ShowcasePage
            title="Containers"
            description="Control how content is bounded and padded across different viewport sizes."
        >
            {/* Visual Comparison */}
            <View className="gap-6">
                <Typography size="h3" weight="bold">
                    Visual Comparison
                </Typography>

                <View className="gap-4">
                    <View className="gap-2">
                        <Typography size="caption" weight="semibold" className="text-secondary">
                            Mobile Padding (16px)
                        </Typography>
                        <View className="bg-secondary rounded-lg overflow-hidden">
                            <View className="bg-brand-primary h-8 px-container-padding-mobile">
                                <View className="bg-brand-primary/20 h-full border-x border-brand-primary/40 flex-row items-center justify-center">
                                    <View className="absolute left-0 w-[16px] h-full bg-brand-primary/30" />
                                    <View className="absolute right-0 w-[16px] h-full bg-brand-primary/30" />
                                    <Typography size="tiny" weight="bold" className="text-white">Content Area</Typography>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View className="gap-2">
                        <Typography size="caption" weight="semibold" className="text-secondary">
                            Desktop Padding (32px)
                        </Typography>
                        <View className="bg-secondary rounded-lg overflow-hidden">
                            <View className="bg-brand-primary h-8 px-container-padding-desktop">
                                <View className="bg-brand-primary/20 h-full border-x border-brand-primary/40 flex-row items-center justify-center">
                                    <View className="absolute left-0 w-[32px] h-full bg-brand-primary/30" />
                                    <View className="absolute right-0 w-[32px] h-full bg-brand-primary/30" />
                                    <Typography size="tiny" weight="bold" className="text-white">Content Area</Typography>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>

                {/* Max Width Illustration */}
                <View className="gap-2 mt-4">
                    <Typography size="caption" weight="semibold" className="text-secondary">
                        Max Width (1280px)
                    </Typography>
                    <View className="items-center bg-secondary p-8 rounded-xl border border-primary/10">
                        <View className="w-full max-w-[400px] h-1 bg-border-primary rounded-full relative">
                            <View className="absolute left-0 right-0 h-1 bg-brand-primary rounded-full" />
                            <View className="absolute -top-1.5 left-0 w-4 h-4 rounded-full border-2 border-brand-primary bg-primary" />
                            <View className="absolute -top-1.5 right-0 w-4 h-4 rounded-full border-2 border-brand-primary bg-primary" />
                        </View>
                        <Typography size="caption" className="mt-4 text-tertiary text-center">
                            Content will never expand beyond 1280px, remaining centered on ultra-wide screens.
                        </Typography>
                    </View>
                </View>
            </View>

            {/* Token Reference */}
            <View className="gap-4">
                <Typography size="h3" weight="bold">
                    Token Reference
                </Typography>
                <View className="gap-3">
                    {CONTAINER_TOKENS.map((token) => (
                        <Card key={token.name} variant="outlined" className="p-4">
                            <View className="flex-row justify-between items-start">
                                <View className="gap-1">
                                    <Typography weight="bold">{token.name}</Typography>
                                    <Typography size="body-small" className="text-secondary">
                                        {token.description}
                                    </Typography>
                                </View>
                                <Typography size="caption" weight="bold" className="text-brand-primary font-mono">
                                    {token.value}
                                </Typography>
                            </View>
                            <View className="mt-4 pt-4 border-t border-primary/10">
                                <Typography size="tiny" weight="bold" className="text-tertiary uppercase tracking-wider">
                                    Tailwind Class
                                </Typography>
                                <Typography size="body-small" className="font-mono text-primary mt-1">
                                    {token.className}
                                </Typography>
                            </View>
                        </Card>
                    ))}
                </View>
            </View>

            {/* Applied Example */}
            <View className="gap-6">
                <Typography size="h3" weight="bold">
                    Applied Example
                </Typography>
                <Card variant="filled" className="bg-brand-primary/5 border-dashed border-2 border-brand-primary/20">
                    <View className="items-center">
                        <View className="w-full max-w-container-max-width-desktop px-container-padding-mobile web:px-container-padding-desktop">
                            <View className="bg-primary p-6 rounded-2xl shadow-xl shadow-brand-primary/10 gap-4">
                                <Typography size="h2" weight="bold">
                                    Bounded Layout
                                </Typography>
                                <Typography size="body" className="text-secondary">
                                    This element uses `max-w-container-max-width-desktop` and responsive padding to ensure content is always perfectly positioned.
                                </Typography>
                                <View className="h-20 bg-secondary rounded-xl items-center justify-center">
                                    <Typography weight="medium" className="text-tertiary">Content Hero Area</Typography>
                                </View>
                            </View>
                        </View>
                    </View>
                </Card>
            </View>
        </ShowcasePage>
    )
}
