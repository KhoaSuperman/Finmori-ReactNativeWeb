import { View } from "react-native"

import { ShowcasePage } from "@/components/showcase-page"
import { IndicatorDots } from "@/components/ui-kit/IndicatorDots"
import { Typography } from "@/components/ui-kit/Typography"

export default function IndicatorDotsShowcase() {
  return (
    <ShowcasePage
      title="Indicator Dots"
      description="Dot-based position indicator for carousels and pagers, with an active dot showing a halo ring and inactive dots as smaller dimmed circles."
    >
      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          3 Dots — First Active
        </Typography>
        <Typography size="body-small" className="px-1 text-tertiary">
          Active dot at index 0 with outer halo ring.
        </Typography>
        <View className="items-center rounded-2xl border border-tertiary bg-secondary p-xl py-10">
          <IndicatorDots count={3} activeIndex={0} />
        </View>
      </View>

      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          3 Dots — Middle Active
        </Typography>
        <Typography size="body-small" className="px-1 text-tertiary">
          Active dot at index 1.
        </Typography>
        <View className="items-center rounded-2xl border border-tertiary bg-secondary p-xl py-10">
          <IndicatorDots count={3} activeIndex={1} />
        </View>
      </View>

      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          3 Dots — Last Active
        </Typography>
        <Typography size="body-small" className="px-1 text-tertiary">
          Active dot at index 2.
        </Typography>
        <View className="items-center rounded-2xl border border-tertiary bg-secondary p-xl py-10">
          <IndicatorDots count={3} activeIndex={2} />
        </View>
      </View>

      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          5 Dots — Middle Active
        </Typography>
        <Typography size="body-small" className="px-1 text-tertiary">
          Five-dot pager with active dot at index 2.
        </Typography>
        <View className="items-center rounded-2xl border border-tertiary bg-secondary p-xl py-10">
          <IndicatorDots count={5} activeIndex={2} />
        </View>
      </View>

      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          All Counts
        </Typography>
        <Typography size="body-small" className="px-1 text-tertiary">
          1 through 5 dots with the first dot active.
        </Typography>
        <View className="gap-4 rounded-2xl border border-tertiary bg-secondary p-xl">
          {[1, 2, 3, 4, 5].map((count) => (
            <View key={count} className="flex-row items-center gap-3xl">
              <Typography size="caption" className="text-tertiary w-8">
                {count}
              </Typography>
              <IndicatorDots count={count} activeIndex={0} />
            </View>
          ))}
        </View>
      </View>
    </ShowcasePage>
  )
}
