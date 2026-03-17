import React from "react"
import { View } from "react-native"

import { ShowcasePage } from "@/components/showcase-page"
import { SpendingChart, type SpendingDataPoint } from "@/components/ui-kit/SpendingChart"
import { Typography } from "@/components/ui-kit/Typography"

const SAMPLE_DATA: SpendingDataPoint[] = [
  { label: "1 Aug", value: 30 },
  { label: "3 Aug", value: 50 },
  { label: "5 Aug", value: 1950 },
  { label: "7 Aug", value: 50 },
  { label: "9 Aug", value: 200 },
  { label: "11 Aug", value: 30 },
  { label: "13 Aug", value: 80 },
  { label: "15 Aug", value: 10 },
  { label: "17 Aug", value: 10 },
  { label: "19 Aug", value: 100 },
  { label: "21 Aug", value: 700 },
  { label: "23 Aug", value: 300 },
  { label: "25 Aug", value: 200 },
  { label: "27 Aug", value: 50 },
  { label: "29 Aug", value: 120 },
  { label: "31 Aug", value: 30 },
]

const SPARSE_DATA: SpendingDataPoint[] = [
  { label: "Jan", value: 450 },
  { label: "Feb", value: 1200 },
  { label: "Mar", value: 800 },
  { label: "Apr", value: 350 },
  { label: "May", value: 920 },
]

const MINIMAL_DATA: SpendingDataPoint[] = [
  { label: "Week 1", value: 200 },
  { label: "Week 2", value: 500 },
  { label: "Week 3", value: 150 },
]

export default function SpendingChartShowcase() {
  return (
    <ShowcasePage
      title="Spending Chart"
      description="Line chart showing spending over time with horizontal grid lines, value labels, interactive data points with tooltip, and indicator dot."
    >
      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          Default
        </Typography>
        <Typography size="body-small" className="px-1 text-tertiary">
          Daily spending data with default Y-axis ticks (2000, 1000, 500, 100, 0).
        </Typography>
        <View className="rounded-2xl border border-secondary bg-primary">
          <SpendingChart
            data={SAMPLE_DATA}
            activeIndex={10}
            formatTooltipDate={(item) => `${item.label}, 2026`}
          />
        </View>
      </View>

      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          Custom Y-axis Ticks
        </Typography>
        <Typography size="body-small" className="px-1 text-tertiary">
          Monthly data with custom Y-axis scale.
        </Typography>
        <View className="rounded-2xl border border-secondary bg-primary">
          <SpendingChart
            data={SPARSE_DATA}
            yTicks={[1500, 1000, 500, 250, 0]}
            activeIndex={1}
          />
        </View>
      </View>

      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          Minimal Data
        </Typography>
        <Typography size="body-small" className="px-1 text-tertiary">
          Works well with only a few data points.
        </Typography>
        <View className="rounded-2xl border border-secondary bg-primary">
          <SpendingChart data={MINIMAL_DATA} activeIndex={1} />
        </View>
      </View>

      <View className="gap-6">
        <Typography size="h3" weight="bold" className="px-1">
          Custom Value Format
        </Typography>
        <Typography size="body-small" className="px-1 text-tertiary">
          Override Y-axis and tooltip value formatting with a custom function.
        </Typography>
        <View className="rounded-2xl border border-secondary bg-primary">
          <SpendingChart
            data={SPARSE_DATA}
            yTicks={[1500, 1000, 500, 250, 0]}
            formatValue={(v) => `$${v.toLocaleString()}`}
            activeIndex={2}
          />
        </View>
      </View>
    </ShowcasePage>
  )
}
