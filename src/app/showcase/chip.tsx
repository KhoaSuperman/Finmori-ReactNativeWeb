import { View } from "react-native"

import { ShowcasePage } from "@/components/showcase-page"
import { Chip } from "@/components/ui-kit/Chip"
import { Typography } from "@/components/ui-kit/Typography"

export default function ChipShowcase() {
  return (
    <ShowcasePage
      title="Chip"
      description="Compact indicator showing a percentage value with a tendancy direction (positive or negative)."
    >
      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          Positive
        </Typography>
        <View className="flex-row flex-wrap gap-3 rounded-2xl border border-tertiary bg-primary p-xl">
          <Chip tendancy="positive" label="8%" />
          <Chip tendancy="positive" label="24.5%" />
          <Chip tendancy="positive" label="1.2%" />
        </View>
      </View>

      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          Negative
        </Typography>
        <View className="flex-row flex-wrap gap-3 rounded-2xl border border-tertiary bg-primary p-xl">
          <Chip tendancy="negative" label="8%" />
          <Chip tendancy="negative" label="12.3%" />
          <Chip tendancy="negative" label="0.5%" />
        </View>
      </View>

      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          Side by Side
        </Typography>
        <Typography size="body-small" className="px-1 text-tertiary">
          Comparing positive and negative tendancy chips together.
        </Typography>
        <View className="flex-row flex-wrap gap-3 rounded-2xl border border-tertiary bg-primary p-xl">
          <Chip tendancy="positive" label="8%" />
          <Chip tendancy="negative" label="8%" />
        </View>
      </View>
    </ShowcasePage>
  )
}
