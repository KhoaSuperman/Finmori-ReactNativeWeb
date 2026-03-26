import { View } from "react-native"

import { ShowcasePage } from "@/components/showcase-page"
import { RecapCard } from "@/components/ui-kit/RecapCard"
import { Typography } from "@/components/ui-kit/Typography"

export default function RecapCardShowcase() {
  return (
    <ShowcasePage
      title="Recap Card"
      description="Compact stat card showing a label and a value, with status variants for default, success, and critical states."
    >
      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          Status Variants
        </Typography>
        <View className="flex-row flex-wrap gap-3">
          <RecapCard
            title="Target Achieved"
            value="$35K"
            status="default"
            style={{ flex: 1, minWidth: 140 }}
          />
          <RecapCard
            title="Target Achieved"
            value="$35K"
            status="success"
            style={{ flex: 1, minWidth: 140 }}
          />
          <RecapCard
            title="Target Achieved"
            value="$35K"
            status="critical"
            style={{ flex: 1, minWidth: 140 }}
          />
        </View>
      </View>

      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          Default
        </Typography>
        <Typography size="body-small" className="px-1 text-tertiary">
          Used for neutral metrics with no directional sentiment.
        </Typography>
        <RecapCard title="Monthly Budget" value="$4,200" status="default" />
      </View>

      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          Success
        </Typography>
        <Typography size="body-small" className="px-1 text-tertiary">
          Used when the metric is on track or exceeds the target.
        </Typography>
        <RecapCard title="Savings Goal" value="$12.5K" status="success" />
      </View>

      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          Critical
        </Typography>
        <Typography size="body-small" className="px-1 text-tertiary">
          Used when the metric is below target or requires attention.
        </Typography>
        <RecapCard title="Overspent" value="-$890" status="critical" />
      </View>

      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          Pressable
        </Typography>
        <Typography size="body-small" className="px-1 text-tertiary">
          Cards can be tappable — the chevron icon signals navigation.
        </Typography>
        <View className="flex-row flex-wrap gap-3">
          <RecapCard
            title="View Details"
            value="$35K"
            status="success"
            onPress={() => {}}
            style={{ flex: 1, minWidth: 140 }}
          />
          <RecapCard
            title="View Details"
            value="-$890"
            status="critical"
            onPress={() => {}}
            style={{ flex: 1, minWidth: 140 }}
          />
        </View>
      </View>
    </ShowcasePage>
  )
}
