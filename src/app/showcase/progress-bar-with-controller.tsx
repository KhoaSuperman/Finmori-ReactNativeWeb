import { useState } from "react"
import { View } from "react-native"

import { ShowcasePage } from "@/components/showcase-page"
import { ProgressBarWithController } from "@/components/ui-kit/ProgressBarWithController"
import { Typography } from "@/components/ui-kit/Typography"

const PROGRESS_VALUES = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

export default function ProgressBarWithControllerShowcase() {
  const [interactiveValue, setInteractiveValue] = useState(40)

  return (
    <ShowcasePage
      title="Progress Bar with Controller"
      description="A progress bar with a draggable controller dot, showing fill progress and a green indicator dot at the current position."
    >
      {/* All progress variants */}
      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          Progress Variants
        </Typography>
        <Typography size="body-small" className="px-1 text-tertiary">
          All progress states from 0% to 100%.
        </Typography>
        <View className="gap-6 rounded-2xl border border-tertiary bg-secondary px-xl py-6">
          {PROGRESS_VALUES.map((value) => (
            <View key={value} className="gap-3">
              <Typography size="caption" className="text-tertiary">
                {value}%
              </Typography>
              <ProgressBarWithController value={value} />
            </View>
          ))}
        </View>

        <View className="gap-6 rounded-2xl border border-tertiary bg-secondary px-xl py-6">
          {PROGRESS_VALUES.map((value) => (
            <View key={value} className="gap-3">
              <Typography size="caption" className="text-tertiary">
                {value}%
              </Typography>
              <ProgressBarWithController value={value} withController={false} />
            </View>
          ))}
        </View>
      </View>

      {/* Interactive demo */}
      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          Interactive Demo
        </Typography>
        <Typography size="body-small" className="px-1 text-tertiary">
          Tap a value to update the progress bar.
        </Typography>
        <View className="gap-6 rounded-2xl border border-tertiary bg-secondary px-xl py-6">
          <ProgressBarWithController value={interactiveValue} />
          <View className="flex-row flex-wrap gap-xs">
            {PROGRESS_VALUES.map((value) => (
              <View
                key={value}
                className={`rounded-full px-md py-xs ${interactiveValue === value ? "bg-green-light-500" : "bg-utility-gray-100"}`}
                // @ts-ignore - onPress works on web via View
                onStartShouldSetResponder={() => true}
                onResponderRelease={() => setInteractiveValue(value)}
              >
                <Typography
                  size="caption"
                  weight="medium"
                  className={interactiveValue === value ? "text-base-white" : "text-secondary"}
                >
                  {value}%
                </Typography>
              </View>
            ))}
          </View>
        </View>
      </View>

      {/* Edge cases */}
      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          Edge Cases
        </Typography>
        <View className="gap-6 rounded-2xl border border-tertiary bg-secondary px-xl py-6">
          <View className="gap-3">
            <Typography size="caption" className="text-tertiary">
              0% — Empty track, dot at start
            </Typography>
            <ProgressBarWithController value={0} />
          </View>
          <View className="gap-3">
            <Typography size="caption" className="text-tertiary">
              100% — Full track, dot at end
            </Typography>
            <ProgressBarWithController value={100} />
          </View>
          <View className="gap-3">
            <Typography size="caption" className="text-tertiary">
              Over 100 — Clamped to 100%
            </Typography>
            <ProgressBarWithController value={150} />
          </View>
          <View className="gap-3">
            <Typography size="caption" className="text-tertiary">
              Negative — Clamped to 0%
            </Typography>
            <ProgressBarWithController value={-10} />
          </View>
        </View>
      </View>
    </ShowcasePage>
  )
}
