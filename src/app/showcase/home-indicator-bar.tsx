import React from "react"
import { View } from "react-native"

import { ShowcasePage } from "@/components/showcase-page"
import { HomeIndicatorBar } from "@/components/ui-kit/HomeIndicatorBar"
import { Typography } from "@/components/ui-kit/Typography"

export default function HomeIndicatorBarShowcase() {
  return (
    <ShowcasePage
      title="Home Indicator Bar"
      description="Bottom bar with iOS home indicator. Supports default, single button, two horizontal buttons, two vertical buttons, three buttons, and action sheet variants."
    >
      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          Default
        </Typography>
        <Typography size="body-small" className="px-1 text-tertiary">
          Just the home indicator pill with no buttons.
        </Typography>
        <View className="overflow-hidden rounded-xl border border-secondary">
          <HomeIndicatorBar type="default" />
        </View>
      </View>

      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          1 Button
        </Typography>
        <Typography size="body-small" className="px-1 text-tertiary">
          Single full-width primary action button above the indicator.
        </Typography>
        <View className="overflow-hidden rounded-xl border border-secondary">
          <HomeIndicatorBar type="1-button" primaryLabel="Continue" />
        </View>
      </View>

      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          2 Buttons Horizontal
        </Typography>
        <Typography size="body-small" className="px-1 text-tertiary">
          Secondary (tertiary style) and primary buttons side by side.
        </Typography>
        <View className="overflow-hidden rounded-xl border border-secondary">
          <HomeIndicatorBar
            type="2-buttons-hor"
            primaryLabel="Continue"
            secondaryLabel="Cancel"
          />
        </View>
      </View>

      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          2 Buttons Vertical
        </Typography>
        <Typography size="body-small" className="px-1 text-tertiary">
          Primary button stacked above a secondary (tertiary style) button.
        </Typography>
        <View className="overflow-hidden rounded-xl border border-secondary">
          <HomeIndicatorBar
            type="2-buttons-ver"
            primaryLabel="Continue"
            secondaryLabel="Cancel"
          />
        </View>
      </View>

      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          3 Buttons
        </Typography>
        <Typography size="body-small" className="px-1 text-tertiary">
          Primary button on top, two equal tertiary buttons below side by side.
        </Typography>
        <View className="overflow-hidden rounded-xl border border-secondary">
          <HomeIndicatorBar
            type="3-buttons"
            primaryLabel="Continue"
            secondaryLabel="Cancel"
            tertiaryLabel="Cancel"
          />
        </View>
      </View>

      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          Action Sheet
        </Typography>
        <Typography size="body-small" className="px-1 text-tertiary">
          Rounded top corners, action items in a grouped card, and a link-style cancel button.
        </Typography>
        <View className="overflow-hidden rounded-xl border border-secondary">
          <HomeIndicatorBar
            type="action-sheet"
            editLabel="Chỉnh sửa"
            deleteLabel="Xóa bữa ăn"
            cancelLabel="Thoát"
          />
        </View>
      </View>
    </ShowcasePage>
  )
}
