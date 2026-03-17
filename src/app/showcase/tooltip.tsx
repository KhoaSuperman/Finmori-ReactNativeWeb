import { View } from "react-native"

import { ShowcasePage } from "@/components/showcase-page"
import { Tooltip } from "@/components/ui-kit/Tooltip"
import { Typography } from "@/components/ui-kit/Typography"

export default function TooltipShowcase() {
  return (
    <ShowcasePage
      title="Tooltip"
      description="Dark tooltip bubble with directional arrow, supporting top-center, bottom-center, left, and right placements."
    >
      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          Top Center
        </Typography>
        <Typography size="body-small" className="px-1 text-tertiary">
          Arrow points downward — tooltip appears above the target.
        </Typography>
        <View className="items-center rounded-2xl border border-tertiary bg-secondary p-xl py-10">
          <Tooltip
            title="11 Aug, 2026"
            description="This is a tooltip description"
            placement="top-center"
          />
        </View>
      </View>

      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          Bottom Center
        </Typography>
        <Typography size="body-small" className="px-1 text-tertiary">
          Arrow points upward — tooltip appears below the target.
        </Typography>
        <View className="items-center rounded-2xl border border-tertiary bg-secondary p-xl py-10">
          <Tooltip
            title="11 Aug, 2026"
            description="This is a tooltip description"
            placement="bottom-center"
          />
        </View>
      </View>

      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          Left
        </Typography>
        <Typography size="body-small" className="px-1 text-tertiary">
          Arrow points right — tooltip appears to the left of the target.
        </Typography>
        <View className="items-center rounded-2xl border border-tertiary bg-secondary p-xl py-10">
          <Tooltip
            title="11 Aug, 2026"
            description="This is a tooltip description"
            placement="left"
          />
        </View>
      </View>

      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          Right
        </Typography>
        <Typography size="body-small" className="px-1 text-tertiary">
          Arrow points left — tooltip appears to the right of the target.
        </Typography>
        <View className="items-center rounded-2xl border border-tertiary bg-secondary p-xl py-10">
          <Tooltip
            title="11 Aug, 2026"
            description="This is a tooltip description"
            placement="right"
          />
        </View>
      </View>

      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          Description Only
        </Typography>
        <Typography size="body-small" className="px-1 text-tertiary">
          Tooltip with a single line of text, no title.
        </Typography>
        <View className="items-center rounded-2xl border border-tertiary bg-secondary p-xl py-10">
          <Tooltip description="This is a tooltip description" placement="top-center" />
        </View>
      </View>

      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          All Placements
        </Typography>
        <Typography size="body-small" className="px-1 text-tertiary">
          All four placement variants side by side.
        </Typography>
        <View className="gap-6 rounded-2xl border border-tertiary bg-secondary p-xl">
          <View className="flex-row flex-wrap gap-6 items-start justify-center">
            <Tooltip title="Top" description="Top center" placement="top-center" />
            <Tooltip title="Bottom" description="Bottom center" placement="bottom-center" />
          </View>
          <View className="flex-row flex-wrap gap-6 items-start justify-center">
            <Tooltip title="Left" description="Left placement" placement="left" />
            <Tooltip title="Right" description="Right placement" placement="right" />
          </View>
        </View>
      </View>
    </ShowcasePage>
  )
}
