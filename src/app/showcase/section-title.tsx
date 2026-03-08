import { View } from "react-native"

import { ShowcasePage } from "@/components/showcase-page"
import { SectionTitle } from "@/components/ui-kit/SectionTitle"
import { Typography } from "@/components/ui-kit/Typography"

export default function SectionTitleShowcase() {
  return (
    <ShowcasePage
      title="Section Title"
      description="Compact section header with title text and optional trailing action link."
    >
      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          Standard
        </Typography>
        <Typography size="body-small" className="px-1 text-tertiary">
          Default mixed-case title used for general section headers.
        </Typography>
        <View className="gap-3 rounded-2xl border border-tertiary bg-primary p-xl">
          <SectionTitle type="standard" title="Category" />
          <SectionTitle type="standard" title="Recent Transactions" />
          <SectionTitle type="standard" title="My Cards" />
        </View>
      </View>

      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          Caplock
        </Typography>
        <Typography size="body-small" className="px-1 text-tertiary">
          Uppercase title for prominent category labels.
        </Typography>
        <View className="gap-3 rounded-2xl border border-tertiary bg-primary p-xl">
          <SectionTitle type="caplock" title="Category" />
          <SectionTitle type="caplock" title="Recent Transactions" />
          <SectionTitle type="caplock" title="My Cards" />
        </View>
      </View>

      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          With Action
        </Typography>
        <Typography size="body-small" className="px-1 text-tertiary">
          Section header with a trailing link button for navigation.
        </Typography>
        <View className="gap-3 rounded-2xl border border-tertiary bg-primary p-xl">
          <SectionTitle
            type="standard"
            title="Category"
            actionLabel="See all"
          />
          <SectionTitle
            type="caplock"
            title="Category"
            actionLabel="See all"
          />
        </View>
      </View>
    </ShowcasePage>
  )
}
