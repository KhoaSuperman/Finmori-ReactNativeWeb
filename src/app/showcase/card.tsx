import { View } from "react-native"

import { ShowcasePage } from "@/components/showcase-page"
import { Card } from "@/components/ui-kit/Card"
import { Typography } from "@/components/ui-kit/Typography"

export default function CardShowcase() {
    return (
        <ShowcasePage
            title="Cards"
            description="Versatile containers for grouping related content."
        >

            <View className="gap-4">
                <Typography size="h3" weight="bold" className="px-1">Variants</Typography>

                <Card title="Elevated Card" variant="elevated" subtitle="Default Prominence">
                    <Typography size="body-small" className="text-text-secondary">
                        Uses a subtle shadow to lift content off the background. Best for primary content blocks.
                    </Typography>
                </Card>

                <Card title="Outlined Card" variant="outlined" subtitle="Clean Hierarchy">
                    <Typography size="body-small" className="text-text-secondary">
                        Uses a fine border instead of a shadow. Ideal for secondary information or lists.
                    </Typography>
                </Card>

                <Card title="Filled Card" variant="filled" subtitle="Subtle Grouping">
                    <Typography size="body-small" className="text-text-secondary">
                        Uses a solid background color. Great for muted sections or background elements.
                    </Typography>
                </Card>
            </View>

            <Card title="With Content" variant="elevated">
                <View className="gap-4">
                    <View className="flex-row items-center gap-3">
                        <View className="w-10 h-10 rounded-full bg-bg-brand-secondary items-center justify-center">
                            <Typography size="h3" className="text-text-brand-primary">F</Typography>
                        </View>
                        <View>
                            <Typography weight="semibold">Finmori App</Typography>
                            <Typography size="caption" className="text-text-tertiary">Design System</Typography>
                        </View>
                    </View>
                    <Typography size="body">
                        This is an example of how a card can be used to display a user profile or a specific dashboard item.
                    </Typography>
                    <View className="flex-row gap-2 mt-2">
                        <View className="px-3 py-1 bg-bg-secondary rounded-full">
                            <Typography size="tiny" weight="semibold">React Native</Typography>
                        </View>
                        <View className="px-3 py-1 bg-bg-secondary rounded-full">
                            <Typography size="tiny" weight="semibold">Tailwind</Typography>
                        </View>
                    </View>
                </View>
            </Card>
        </ShowcasePage>
    )
}
