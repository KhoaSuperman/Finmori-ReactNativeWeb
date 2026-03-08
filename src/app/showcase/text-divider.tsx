import { View } from "react-native"

import { ShowcasePage } from "@/components/showcase-page"
import { TextDivider } from "@/components/ui-kit/TextDivider"
import { Typography } from "@/components/ui-kit/Typography"

export default function TextDividerShowcase() {
  return (
    <ShowcasePage
      title="Text Divider"
      description="Section header with a text label, available as a line divider or colored background variant."
    >
      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          Text &amp; Line
        </Typography>
        <Typography size="body-small" className="px-1 text-tertiary">
          Label with a horizontal rule that fills the remaining space.
        </Typography>
        <View className="gap-3 rounded-2xl border border-tertiary bg-primary p-xl">
          <TextDivider type="text-line" label="Category" />
          <TextDivider type="text-line" label="Recent Transactions" />
          <TextDivider type="text-line" label="Settings" />
        </View>
      </View>

      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          Text Colored
        </Typography>
        <Typography size="body-small" className="px-1 text-tertiary">
          Label on a subtle colored background strip.
        </Typography>
        <View className="gap-3 rounded-2xl border border-tertiary bg-primary p-xl">
          <TextDivider type="text-colored" label="Category" />
          <TextDivider type="text-colored" label="Recent Transactions" />
          <TextDivider type="text-colored" label="Settings" />
        </View>
      </View>

      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          Side by Side
        </Typography>
        <Typography size="body-small" className="px-1 text-tertiary">
          Comparing both variants together in context.
        </Typography>
        <View className="gap-3 rounded-2xl border border-tertiary bg-primary p-xl">
          <TextDivider type="text-line" label="Accounts" />
          <TextDivider type="text-colored" label="Accounts" />
        </View>
      </View>
    </ShowcasePage>
  )
}
