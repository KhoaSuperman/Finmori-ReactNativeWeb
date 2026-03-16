import { useState } from "react"
import { View } from "react-native"

import { ShowcasePage } from "@/components/showcase-page"
import { FilterChip } from "@/components/ui-kit/FilterChip"
import { Typography } from "@/components/ui-kit/Typography"

export default function FilterChipShowcase() {
  const [selectedLabel, setSelectedLabel] = useState<string | null>(null)
  const [iconSelected, setIconSelected] = useState(false)

  const labelOptions = ["All", "Income", "Expense", "Transfer"]

  return (
    <ShowcasePage
      title="Filter Chip"
      description="Compact interactive chip for filtering content, available in label and icon variants with selected/unselected states."
    >
      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          Label — Unselected
        </Typography>
        <View className="flex-row flex-wrap gap-3 rounded-2xl border border-tertiary bg-primary p-xl">
          <FilterChip type="label" selected={false} label="Label" />
          <FilterChip type="label" selected={false} label="Income" />
          <FilterChip type="label" selected={false} label="Expense" />
        </View>
      </View>

      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          Label — Selected
        </Typography>
        <View className="flex-row flex-wrap gap-3 rounded-2xl border border-tertiary bg-primary p-xl">
          <FilterChip type="label" selected={true} label="Label" />
          <FilterChip type="label" selected={true} label="Income" />
          <FilterChip type="label" selected={true} label="Expense" />
        </View>
      </View>

      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          Icon — Unselected & Selected
        </Typography>
        <View className="flex-row flex-wrap gap-3 rounded-2xl border border-tertiary bg-primary p-xl">
          <FilterChip type="icon" selected={false} />
          <FilterChip type="icon" selected={true} />
        </View>
      </View>

      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          Interactive — Label Filter
        </Typography>
        <Typography size="body-small" className="px-1 text-tertiary">
          Tap to toggle selection.
        </Typography>
        <View className="flex-row flex-wrap gap-3 rounded-2xl border border-tertiary bg-primary p-xl">
          {labelOptions.map((option) => (
            <FilterChip
              key={option}
              type="label"
              selected={selectedLabel === option}
              label={option}
              onPress={() => setSelectedLabel(selectedLabel === option ? null : option)}
            />
          ))}
        </View>
      </View>

      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          Interactive — Icon Filter
        </Typography>
        <Typography size="body-small" className="px-1 text-tertiary">
          Tap the sort icon to toggle selection.
        </Typography>
        <View className="flex-row flex-wrap gap-3 rounded-2xl border border-tertiary bg-primary p-xl">
          <FilterChip
            type="icon"
            selected={iconSelected}
            onPress={() => setIconSelected(!iconSelected)}
          />
        </View>
      </View>

      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          Mixed — Icon + Labels
        </Typography>
        <Typography size="body-small" className="px-1 text-tertiary">
          Typical filter bar combining icon and label chips.
        </Typography>
        <View className="flex-row flex-wrap gap-3 rounded-2xl border border-tertiary bg-primary p-xl">
          <FilterChip type="icon" selected={false} />
          <FilterChip type="label" selected={true} label="All" />
          <FilterChip type="label" selected={false} label="Income" />
          <FilterChip type="label" selected={false} label="Expense" />
        </View>
      </View>
    </ShowcasePage>
  )
}
