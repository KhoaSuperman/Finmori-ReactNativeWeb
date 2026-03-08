import React from "react"
import { View } from "react-native"

import { ShowcasePage } from "@/components/showcase-page"
import { IconCardType, type CardType } from "@/components/ui-kit/IconCardType"
import { Typography } from "@/components/ui-kit/Typography"

const ALL_TYPES: { key: CardType; label: string }[] = [
  { key: "visa", label: "Visa" },
  { key: "mastercard", label: "Mastercard" },
  { key: "amex", label: "AMEX" },
]

export default function IconCardTypeShowcase() {
  return (
    <ShowcasePage
      title="Card Type Icon"
      description="Card network brand icons with sm, md, and lg size variants. Each icon renders on its brand background color."
    >
      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          Size Variants
        </Typography>
        <Typography size="body-small" className="px-1 text-tertiary">
          Three sizes: sm (36x24), md (54x36), lg (72x48).
        </Typography>
        <View className="flex-row items-end gap-4 bg-gray-light-400">
          <View className="items-center gap-2">
            <IconCardType type="visa" size="sm" />
            <Typography size="caption" className="text-tertiary">
              sm
            </Typography>
          </View>
          <View className="items-center gap-2">
            <IconCardType type="visa" size="md" />
            <Typography size="caption" className="text-tertiary">
              md
            </Typography>
          </View>
          <View className="items-center gap-2">
            <IconCardType type="visa" size="lg" />
            <Typography size="caption" className="text-tertiary">
              lg
            </Typography>
          </View>
        </View>
      </View>

      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          All Card Types — Large
        </Typography>
        <View className="flex-row flex-wrap gap-4 bg-gray-light-400">
          {ALL_TYPES.map(({ key, label }) => (
            <View key={key} className="items-center gap-2">
              <IconCardType type={key} size="lg" />
              <Typography size="tiny" className="text-tertiary">
                {label}
              </Typography>
            </View>
          ))}
        </View>
      </View>

      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          All Card Types — Medium
        </Typography>
        <View className="flex-row flex-wrap gap-4 bg-gray-light-400">
          {ALL_TYPES.map(({ key, label }) => (
            <View key={key} className="items-center gap-2">
              <IconCardType type={key} size="md" />
              <Typography size="tiny" className="text-tertiary">
                {label}
              </Typography>
            </View>
          ))}
        </View>
      </View>

      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          All Card Types — Small
        </Typography>
        <View className="flex-row flex-wrap gap-3 bg-gray-light-400">
          {ALL_TYPES.map(({ key, label }) => (
            <View key={key} className="items-center gap-1.5">
              <IconCardType type={key} size="sm" />
              <Typography size="tiny" className="text-tertiary">
                {label}
              </Typography>
            </View>
          ))}
        </View>
      </View>
    </ShowcasePage>
  )
}
