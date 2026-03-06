import { View } from "react-native"

import { ShowcasePage } from "@/components/showcase-page"
import { Card } from "@/components/ui-kit/Card"
import { Typography } from "@/components/ui-kit/Typography"

export default function TypographyShowcase() {
    return (
        <ShowcasePage
            title="Typography"
            description="A comprehensive scale for headings, body text, and UI elements."
        >

            <Card title="Display & Headings" variant="outlined">
                <View className="gap-6">
                    <View>
                        <Typography size="tiny" className="text-tertiary mb-2 uppercase tracking-widest font-semibold">Display XL</Typography>
                        <Typography size="display-xl">Hello</Typography>
                    </View>
                    <View>
                        <Typography size="tiny" className="text-tertiary mb-2 uppercase tracking-widest font-semibold">Display</Typography>
                        <Typography size="display">Modern Design</Typography>
                    </View>
                    <View className="h-[1px] bg-border-primary my-2" />
                    <View>
                        <Typography size="tiny" className="text-tertiary mb-2 uppercase tracking-widest font-semibold">Heading 1</Typography>
                        <Typography size="h1">The quick brown fox</Typography>
                    </View>
                    <View>
                        <Typography size="tiny" className="text-tertiary mb-2 uppercase tracking-widest font-semibold">Heading 2</Typography>
                        <Typography size="h2">The quick brown fox</Typography>
                    </View>
                    <View>
                        <Typography size="tiny" className="text-tertiary mb-2 uppercase tracking-widest font-semibold">Heading 3</Typography>
                        <Typography size="h3">The quick brown fox</Typography>
                    </View>
                </View>
            </Card>

            <Card title="Body & Small Text" variant="outlined">
                <View className="gap-6">
                    <View>
                        <Typography size="tiny" className="text-tertiary mb-2 uppercase tracking-widest font-semibold">Body (Default)</Typography>
                        <Typography size="body">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </Typography>
                    </View>
                    <View>
                        <Typography size="tiny" className="text-tertiary mb-2 uppercase tracking-widest font-semibold">Body Small</Typography>
                        <Typography size="body-small">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </Typography>
                    </View>
                    <View>
                        <Typography size="tiny" className="text-tertiary mb-2 uppercase tracking-widest font-semibold">Caption</Typography>
                        <Typography size="caption">
                            Used for metadata, photo captions, and small labels.
                        </Typography>
                    </View>
                    <View>
                        <Typography size="tiny" className="text-tertiary mb-2 uppercase tracking-widest font-semibold">Tiny</Typography>
                        <Typography size="tiny">
                            Used for the smallest UI elements and secondary info.
                        </Typography>
                    </View>
                </View>
            </Card>

            <Card title="Special Styles" variant="outlined">
                <View className="gap-6">
                    <View>
                        <Typography size="tiny" className="text-tertiary mb-2 uppercase tracking-widest font-semibold">Number LG (Iceland)</Typography>
                        <Typography size="number-lg">1,234.56</Typography>
                    </View>
                    <View>
                        <Typography size="tiny" className="text-tertiary mb-2 uppercase tracking-widest font-semibold">Number SM (Iceland)</Typography>
                        <Typography size="number-sm">789.00</Typography>
                    </View>
                    <View className="h-[1px] bg-border-primary my-2" />
                    <View className="gap-2">
                        <Typography weight="bold">Bold Weight</Typography>
                        <Typography weight="semibold">Semibold Weight</Typography>
                        <Typography weight="medium">Medium Weight</Typography>
                        <Typography weight="regular">Regular Weight</Typography>
                    </View>
                </View>
            </Card>
        </ShowcasePage>
    )
}
