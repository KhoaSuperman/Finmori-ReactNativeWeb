import { useState } from "react"
import { View } from "react-native"

import { ShowcasePage } from "@/components/showcase-page"
import { BalanceCard } from "@/components/ui-kit/BalanceCard"
import { Typography } from "@/components/ui-kit/Typography"

export default function BalanceCardShowcase() {
  const [controlledHidden, setControlledHidden] = useState(false)

  return (
    <ShowcasePage
      title="Balance Card"
      description="Displays a monetary balance with a label, gradient amount text, and a toggle to show/hide the value."
    >
      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          Default
        </Typography>
        <View className="rounded-2xl border border-tertiary bg-primary p-xl">
          <BalanceCard amount="$12,458.50" />
        </View>
      </View>

      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          Hidden State
        </Typography>
        <View className="rounded-2xl border border-tertiary bg-primary p-xl">
          <BalanceCard amount="$12,458.50" hidden />
        </View>
      </View>

      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          Controlled Toggle
        </Typography>
        <Typography size="body-small" className="px-1 text-tertiary">
          Tap the eye icon to toggle visibility. State is managed externally.
        </Typography>
        <View className="rounded-2xl border border-tertiary bg-primary p-xl">
          <BalanceCard
            amount="$89,234.12"
            label="Total Assets"
            hidden={controlledHidden}
            onToggleVisibility={setControlledHidden}
          />
        </View>
      </View>

      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          Large Amount
        </Typography>
        <View className="rounded-2xl border border-tertiary bg-primary p-xl">
          <BalanceCard amount="$1,234,567.89" />
        </View>
      </View>

      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          Zero Balance
        </Typography>
        <View className="rounded-2xl border border-tertiary bg-primary p-xl">
          <BalanceCard amount="$0.00" />
        </View>
      </View>
    </ShowcasePage>
  )
}
